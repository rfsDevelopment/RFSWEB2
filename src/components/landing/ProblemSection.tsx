import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { useLocale } from "@/contexts/LocaleContext";
import { AlertCircle, FileWarning, TrendingDown, Scale } from "lucide-react";

export const ProblemSection = () => {
  const { locale } = useLocale();
  const isEn = locale === "en";
  const problems = [
    {
      icon: FileWarning,
      title: isEn ? "Hidden cybersecurity liabilities" : "Pasivos ocultos de ciberseguridad",
      description: isEn
        ? "Past breaches, leaked credentials, and undocumented exposures become liabilities after acquisition."
        : "Brechas pasadas, credenciales filtradas y exposiciones no documentadas que se convierten en pasivos tras la adquisición.",
    },
    {
      icon: TrendingDown,
      title: isEn ? "Incorrect risk valuation" : "Valoración incorrecta del riesgo",
      description: isEn
        ? "Without a digital exposure assessment, the deal price fails to reflect the company's true risk profile."
        : "Sin una evaluación de exposición digital, el precio de la operación no refleja el verdadero perfil de riesgo de la empresa.",
    },
    {
      icon: AlertCircle,
      title: isEn ? "Post-close surprises" : "Sorpresas post-cierre",
      description: isEn
        ? "Inherited security incidents emerge after acquisition, affecting integration and investment value."
        : "Incidentes de seguridad heredados que emergen después de la adquisición, afectando la integración y el valor de la inversión.",
    },
    {
      icon: Scale,
      title: isEn ? "Incomplete due diligence" : "Due diligence incompleta",
      description: isEn
        ? "Financial and legal audits are standard, but external cybersecurity assessment is often out of scope."
        : "La auditoría financiera y legal es estándar, pero la evaluación de ciberseguridad externa suele quedar fuera del alcance.",
    },
  ];
  const headingPrefix = isEn ? "The cyber risk you don't see" : "El riesgo cyber que";
  const headingHighlight = isEn ? "in the data room" : "no ves en el data room";
  const intro = isEn
    ? "Traditional due diligence evaluates finance, legal, and operations. But a company's digital exposure (leaked credentials, exposed vulnerabilities, and reputational risks) remains invisible."
    : "La due diligence tradicional evalúa finanzas, legal y operaciones. Pero la exposición digital de una empresa (credenciales filtradas, vulnerabilidades expuestas y riesgos reputacionales) permanece invisible.";
  const caseTitle = isEn ? "Real case: acquisition with a surprise" : "Caso real: adquisición con sorpresa";
  const caseBody = isEn
    ? "An M&A team closes the purchase of a fintech. Three months later, dark web posts reveal leaked credentials from key employees and unreported production access. The incident triggers a crisis plan, delays integration, and opens price renegotiation. A pre-deal assessment would have detected this exposure."
    : "Un equipo de M&A cierra la compra de una fintech. Tres meses después aparecen en la dark web credenciales de empleados clave y accesos a sistemas de producción no reportados. El incidente obliga a activar un plan de crisis, retrasa la integración y abre una renegociación del precio. Una evaluación antes de la operación habría detectado esta exposición.";
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="problem" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />

      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            {isEn ? "The problem" : "El problema"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {headingPrefix} <span className="text-gradient">{headingHighlight}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {intro}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="glass p-8 rounded-2xl h-full border border-transparent hover:border-accent/20 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <problem.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use case callout */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="glass p-8 rounded-2xl border border-transparent hover:border-accent/20 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-accent/10 flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">{caseTitle}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {caseBody}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
