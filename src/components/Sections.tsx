import { motion } from "motion/react";
import { Globe, Search, MessageCircle, LineChart, AlertTriangle, Rocket, MapPin, Phone, ArrowRight } from "lucide-react";
import portfolioAurora from "@/assets/portfolio-aurora.jpg";
import portfolioBistro from "@/assets/portfolio-bistro.jpg";
import portfolioVertice from "@/assets/portfolio-vertice.jpg";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export function Problem() {
  return (
    <section className="relative border-t border-border/50 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div {...fade} className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-start">
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-primary">
            <AlertTriangle className="h-4 w-4" />
            O Problema
          </div>
          <div>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">
              Todo dia, sua empresa <span className="text-gradient-neon">perde clientes</span> que nem sabem que ela existe.
            </h2>
            <p className="mt-6 text-lg text-muted-foreground">
              97% das pessoas pesquisam empresas locais no Google antes de comprar. Se sua empresa não tem site, não aparece nas buscas ou ainda depende só do boca a boca, você está deixando dinheiro na mesa — e entregando seus clientes para o concorrente que já está na frente.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { icon: Globe, title: "Sites profissionais", desc: "Design moderno, rápido e responsivo. Pensado para converter visitantes em clientes." },
  { icon: Search, title: "SEO Local no Google", desc: "Sua empresa aparecendo quando alguém pesquisar pelo seu serviço na sua cidade." },
  { icon: MessageCircle, title: "Integração WhatsApp", desc: "Botões diretos, automação e atendimento que transforma cliques em conversas reais." },
  { icon: LineChart, title: "Acompanhamento mensal", desc: "Relatórios, ajustes e otimizações contínuas para seu site crescer todo mês." },
];

export function Services() {
  return (
    <section className="relative border-t border-border/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fade} className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">O que fazemos</p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            Presença digital completa, do zero ao topo do Google.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-card/70"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-opacity group-hover:bg-primary/20" />
              <div className="relative">
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/30 to-accent/20 ring-1 ring-primary/30">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const portfolio = [
  { name: "Studio Aurora", tag: "Estúdio fotográfico", image: portfolioAurora },
  { name: "Bistro Norte", tag: "Restaurante", image: portfolioBistro },
  { name: "Clínica Vértice", tag: "Saúde & Bem-estar", image: portfolioVertice },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative border-t border-border/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fade} className="mb-14 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Portfólio</p>
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">Projetos que viram receita.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Uma seleção de sites entregues, otimizados e gerando contatos diariamente para clientes reais.</p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm shadow-xl shadow-black/30 transition-all hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.name} — ${p.tag}`}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-xs uppercase tracking-widest text-primary">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-tight">{p.name}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { icon: Rocket, n: "01", title: "Criamos seu site", desc: "Design sob medida, copy persuasiva e estrutura otimizada — pronto em poucos dias." },
  { icon: MapPin, n: "02", title: "Colocamos no Google", desc: "Configuramos Google Meu Negócio, SEO local e indexação para você ser encontrado." },
  { icon: Phone, n: "03", title: "Você recebe contatos", desc: "Leads chegam direto no seu WhatsApp e telefone. Sem complicação, sem espera." },
];

export function HowItWorks() {
  return (
    <section className="relative border-t border-border/50 py-28">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div {...fade} className="mb-16 max-w-2xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">Como funciona</p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">Três passos do briefing ao primeiro cliente.</h2>
        </motion.div>

        <div className="relative grid gap-8 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full border border-primary/40 bg-background text-primary glow-ring">
                <s.icon className="h-6 w-6" />
              </div>
              <p className="mb-2 text-sm font-mono text-primary">{s.n}</p>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CTA() {
  return (
    <section id="contato" className="relative border-t border-border/50 py-28">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          {...fade}
          className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card via-background to-card p-10 text-center md:p-16"
        >
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-[120px]" />
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-[120px]" />
          <div className="absolute inset-0 bg-grid opacity-20" />

          <div className="relative">
            <h2 className="mx-auto max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
              Pronto para ser <span className="text-gradient-neon">encontrado</span> no Google?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Fale agora com a JJ Agency e receba uma proposta personalizada em até 24 horas.
            </p>
            <a
              href="https://w.app/awuq6v"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <button className="cta-button mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-9 py-4 text-base font-semibold text-primary-foreground transition-all hover:bg-[position:100%_0] glow-ring">
                <MessageCircle className="h-5 w-5" />
                Falar no WhatsApp
                <ArrowRight className="h-4 w-4" />
              </button>
            </a>
            <p className="mt-6 text-xs uppercase tracking-widest text-muted-foreground">
              Resposta em poucos minutos · Sem compromisso
            </p>
          </div>
        </motion.div>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-8 text-sm text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} JJ Agency. Todos os direitos reservados.</p>
          <p>Sites · SEO Local · WhatsApp · Acompanhamento</p>
        </footer>
      </div>
    </section>
  );
}
