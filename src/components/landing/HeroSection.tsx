import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, TrendingUp, Search } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern" />

      {/* Geometric Accent - Angular shape like in the PDF */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute top-0 left-0 w-80 h-80 overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-96 h-96 geometric-accent transform rotate-45 opacity-80" />
      </motion.div>

      {/* Floating glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/10 mb-8"
          >
            <TrendingUp className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Cyber Due Diligence para M&A y Business Angels</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6"
          >
            Evalúa el{" "}
            <span className="text-gradient">riesgo cyber</span>
            <br />
            antes de firmar la operación
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Due diligence de ciberseguridad para M&A y business angels. Descubre la exposición digital real del target y
            negocia con datos antes de cerrar.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="#contact">
                Agendar llamada
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:info@redfort.security?subject=Ver%20informe%20de%20ejemplo">Ver informe de ejemplo</a>
            </Button>
          </motion.div>

          {/* Stats/Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            {[
              { icon: Search, value: "OSINT + Dark Web", label: "Análisis exhaustivo" },
              { icon: TrendingUp, value: "Antes del cierre", label: "Decisión informada" },
              { icon: Shield, value: "Evidencia verificable", label: "Reportes auditables" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                className="glass p-6 rounded-xl text-center group hover:border-accent/30 transition-colors"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
