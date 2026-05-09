import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { ShaderBackground } from "./ShaderBackground";
import { SpecialText } from "./SpecialText";

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden bg-background">
      <ShaderBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary backdrop-blur-md"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Agência digital para empresas que querem crescer
        </motion.div>

        <h1 className="max-w-5xl text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
          <span className="block text-gradient-neon">
            <SpecialText text="JJ Agency" />
          </span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-2 block text-foreground"
          >
            Sites que vendem por você 24 horas
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
        >
          Criamos sua presença digital completa para que clientes encontrem sua empresa no Google todos os dias.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[position:100%_0] glow-ring"
          >
            Quero meu site
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/30 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:bg-background/60"
          >
            Ver exemplos
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background" />
    </section>
  );
}
