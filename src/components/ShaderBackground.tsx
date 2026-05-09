import { useEffect, useRef } from "react";

const VERT = `attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}`;

const FRAG = `precision highp float;
uniform vec2 u_res;uniform float u_time;uniform vec2 u_mouse;

// hash / noise
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);
  float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));
  vec2 u=f*f*(3.-2.*f);
  return mix(a,b,u.x)+(c-a)*u.y*(1.-u.x)+(d-b)*u.x*u.y;}
float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p*=2.02;a*=.5;}return v;}

void main(){
  vec2 uv=(gl_FragCoord.xy-.5*u_res)/u_res.y;
  float t=u_time*.08;
  vec2 m=(u_mouse-.5*u_res)/u_res.y;

  vec2 q=uv+vec2(fbm(uv*1.5+t),fbm(uv*1.5-t+3.));
  float n=fbm(q*2.+t*2.);
  float n2=fbm(q*4.-t);

  vec3 deep=vec3(0.02,0.05,0.12);
  vec3 blue=vec3(0.05,0.25,0.55);
  vec3 cyan=vec3(0.25,0.75,1.0);
  vec3 indigo=vec3(0.25,0.2,0.85);

  vec3 col=mix(deep,blue,smoothstep(.2,.9,n));
  col=mix(col,cyan,smoothstep(.55,.95,n2)*.55);
  col=mix(col,indigo,smoothstep(.7,1.1,n2)*.35);

  // glowing orb following mouse
  float d=length(uv-m*.4);
  col+=cyan*.25*exp(-d*3.5);
  col+=indigo*.18*exp(-length(uv+vec2(.4,-.2))*2.5);

  // subtle scanline / grain
  col+=(hash(gl_FragCoord.xy+u_time)-.5)*.025;

  // vignette
  col*=smoothstep(1.4,.2,length(uv));

  gl_FragColor=vec4(col,1.);
}`;

export function ShaderBackground() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
    if (!gl) return;

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };
    const prog = gl.createProgram()!;
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1,1,-1,-1,1,1,1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, "u_res");
    const uTime = gl.getUniformLocation(prog, "u_time");
    const uMouse = gl.getUniformLocation(prog, "u_mouse");

    const mouse = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect();
      mouse.x = (e.clientX - r.left) * devicePixelRatio;
      mouse.y = (r.height - (e.clientY - r.top)) * devicePixelRatio;
    };
    window.addEventListener("mousemove", onMove);

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };
    resize();
    window.addEventListener("resize", resize);

    const start = performance.now();
    let raf = 0;
    const loop = () => {
      resize();
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, (performance.now() - start) / 1000);
      gl.uniform2f(uMouse, mouse.x || canvas.width / 2, mouse.y || canvas.height / 2);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="absolute inset-0 h-full w-full"
      aria-hidden
    />
  );
}
