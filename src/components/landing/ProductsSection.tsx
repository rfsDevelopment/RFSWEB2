import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/contexts/LocaleContext";
import { Users, Building2, ArrowRight, Check } from "lucide-react";

export const ProductsSection = () => {
  const { locale } = useLocale();
  const isEn = locale === "en";
  const products = [
    {
      icon: Building2,
      title: "Cyber Due Diligence",
      subtitle: isEn ? "Pre-investment assessment" : "Evaluación pre-inversión",
      description: isEn
        ? "In-depth analysis of a target's digital exposure before an acquisition or angel investment. Identify hidden risks that affect valuation."
        : "Análisis exhaustivo de la exposición digital de una empresa target antes de una adquisición o inversión ángel. Identifica riesgos ocultos que afectan la valoración.",
      features: isEn
        ? [
            "Leaked employee credentials",
            "Exposure on dark web and forums",
            "Lookalike domains and impersonation",
            "Publicly exposed infrastructure",
            "History of breaches and incidents",
            "Executive report with evidence",
          ]
        : [
            "Credenciales filtradas de empleados",
            "Exposición en dark web y foros",
            "Dominios lookalike y suplantación",
            "Infraestructura expuesta públicamente",
            "Histórico de brechas e incidentes",
            "Informe ejecutivo con evidencia",
          ],
      cta: isEn ? "Ideal for M&A, private equity, and business angels" : "Ideal para M&A, private equity y business angels",
      highlighted: true,
    },
    {
      icon: Users,
      title: "Employee Footprint Monitor",
      subtitle: isEn ? "Continuous monitoring" : "Monitorización continua",
      description: isEn
        ? "Ongoing monitoring of key employees' digital footprint. Detect exposures before they become incidents."
        : "Vigilancia permanente de la huella digital de los empleados clave de una organización. Detecta exposiciones antes de que se conviertan en incidentes.",
      features: isEn
        ? [
            "24/7 credential monitoring",
            "Real-time alerts",
            "Risk scoring dashboard",
            "Dark web and leak coverage",
            "Mitigation recommendations",
            "Automated periodic reporting",
          ]
        : [
            "Monitorización 24/7 de credenciales",
            "Alertas en tiempo real",
            "Dashboard con scoring de riesgo",
            "Cobertura de dark web y leaks",
            "Recomendaciones de mitigación",
            "Reporting periódico automatizado",
          ],
      cta: isEn ? "Ideal for CTOs and CISOs" : "Ideal para CTOs y CISOs",
      highlighted: false,
    },
  ];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="products" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent text-sm font-semibold uppercase tracking-wider">
            {isEn ? "Products" : "Productos"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            {isEn ? "Two solutions, " : "Dos soluciones, "}
            <span className="text-gradient">{isEn ? "one goal" : "un objetivo"}</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            {isEn
              ? "Protection before investing and continuous protection after. Choose the solution that fits your moment."
              : "Protección antes de invertir y protección continua después. Elige la solución que se adapta a tu momento."}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
              className={`relative group ${product.highlighted ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              <div
                className={`h-full p-8 rounded-2xl border transition-all duration-300 ${
                  product.highlighted
                    ? "bg-card/10 border-accent/30 shadow-lg shadow-accent/10"
                    : "bg-card/10 border-border/20 hover:border-accent/20"
                }`}
              >
                {product.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {isEn ? "Most popular" : "Más popular"}
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-accent/20">
                    <product.icon className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{product.title}</h3>
                    <p className="text-sm text-muted-foreground">{product.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{product.description}</p>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check
                        className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          product.highlighted ? "text-accent" : "text-muted-foreground"
                        }`}
                      />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs text-muted-foreground mb-4">{product.cta}</p>
                  <Button variant={product.highlighted ? "hero" : "heroOutline"} className="w-full group/btn" asChild>
                    <a href="#contact">
                      {isEn ? "Request information" : "Solicitar información"}
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
