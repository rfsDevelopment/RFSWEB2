import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";
import { ArrowRight, FileSearch } from "lucide-react";

export const CTASection = () => {
  const { locale } = useLocale();
  const isEn = locale === "en";
  const titlePrefix = isEn ? "Do you have an M&A deal or angel investment" : "¿Tienes una operación de M&A o una inversión ángel";
  const titleHighlight = isEn ? "in progress" : "en marcha";
  const bodyCopy = isEn
    ? "In a 20-minute call we review your deal and define scope. Executive report in 5-10 business days."
    : "En una llamada de 20 minutos revisamos tu operación y definimos el alcance. Informe ejecutivo en 5-10 días hábiles.";
  const ctaPrimary = isEn ? "Schedule a call" : "Agendar llamada";
  const ctaSecondary = isEn ? "Request due diligence" : "Solicitar due diligence";
  const footerNote = isEn ? "Confidential | NDA available | Documented methodology" : "Confidencial | NDA disponible | Metodología documentada";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-background to-background" />

      {/* Geometric accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 overflow-hidden">
        <div className="absolute -bottom-20 -right-20 w-96 h-96 geometric-accent transform -rotate-45 opacity-60" />
      </div>

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-accent/20 flex items-center justify-center animate-glow-pulse"
          >
            <FileSearch className="w-10 h-10 text-accent" />
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {titlePrefix} <span className="text-gradient">{titleHighlight}</span>?
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            {bodyCopy}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl" className="group" asChild>
              <a href="mailto:info@redfort.security?subject=Agendar%20llamada">
                {ctaPrimary}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="mailto:info@redfort.security?subject=Solicitar%20due%20diligence">{ctaSecondary}</a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 text-sm text-muted-foreground"
          >
            {footerNote}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
