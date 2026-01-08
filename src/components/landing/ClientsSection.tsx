import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Building2, Briefcase, Shield } from "lucide-react";

const clientTypes = [
  {
    icon: TrendingUp,
    title: "Venture Capital",
    description: "Evalúa el riesgo cyber de startups antes de invertir en rondas seed, Serie A o posteriores.",
  },
  {
    icon: Building2,
    title: "M&A y Private Equity",
    description: "Due diligence de ciberseguridad como parte del proceso de adquisición de empresas.",
  },
  {
    icon: Briefcase,
    title: "Business Angels",
    description: "Protege tu inversión con visibilidad sobre la exposición digital del equipo fundador y la empresa.",
  },
  {
    icon: Shield,
    title: "CTOs y CISOs",
    description: "Evalúa la postura de seguridad externa de tu propia organización antes de que lo haga un atacante.",
  },
];

export const ClientsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="clients" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">¿Para quién?</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Decisiones de inversión y adquisición <span className="text-gradient">mejor informadas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ayudamos a inversores y equipos de liderazgo técnico a entender el riesgo cyber antes de que se convierta en un problema.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {clientTypes.map((client, index) => (
            <motion.div
              key={client.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 text-center">
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <client.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{client.title}</h3>
                <p className="text-sm text-muted-foreground">{client.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust quote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <blockquote className="glass p-8 rounded-2xl">
            <p className="text-lg text-foreground italic mb-4">
              "La ciberseguridad ya no es solo un tema técnico; es un factor crítico de valoración. No comprometemos capital ni
              firmamos sin entender la exposición digital del target."
            </p>
            <footer className="text-sm text-muted-foreground">- Socio, fondo de venture capital</footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
};
