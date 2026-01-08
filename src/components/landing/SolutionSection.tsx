import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FileSearch, Database, FileText, Shield } from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    step: "01",
    title: "Análisis OSINT profundo",
    description:
      "Recopilamos información de fuentes abiertas, dark web, foros y bases de datos de brechas para mapear la exposición digital completa.",
  },
  {
    icon: Database,
    step: "02",
    title: "Correlación e inteligencia",
    description:
      "Modelos de IA correlacionan hallazgos, validan atribución y evalúan criticidad según contexto y potencial impacto.",
  },
  {
    icon: FileText,
    step: "03",
    title: "Informe ejecutivo",
    description:
      "Entregamos un informe estructurado con hallazgos priorizados, evidencias documentadas y recomendaciones accionables.",
  },
  {
    icon: Shield,
    step: "04",
    title: "Decisión informada",
    description:
      "Con visibilidad completa del riesgo cyber, puedes negociar mejor, ajustar valoración o establecer condiciones de cierre.",
  },
];

export const SolutionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solution" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">Cómo funciona</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            De la oscuridad a la <span className="text-gradient">claridad</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Un proceso estructurado que transforma datos dispersos en inteligencia accionable para tu decisión de inversión o adquisición.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden md:block" />

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                  className="relative flex gap-6 md:gap-8 group"
                >
                  {/* Step indicator */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border group-hover:border-accent/30 flex items-center justify-center transition-colors">
                      <step.icon className="w-7 h-7 text-accent" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-accent text-sm font-bold">{step.step}</span>
                      <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
