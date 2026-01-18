import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Shield, Users, Presentation, ClipboardCheck } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const Formaciones = () => {
  const { locale } = useLocale();
  const isEn = locale === "en";
  const location = useLocation();
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (location.hash === "#faq-para-quien") {
      setOpenItem("faq-para-quien");
    }
  }, [location.hash]);

  const includes = [
    {
      icon: Presentation,
      title: isEn ? "Flexible format" : "Formato flexible",
      description: isEn ? "Online or on-site." : "Online o presencial.",
    },
    {
      icon: ClipboardCheck,
      title: isEn ? "Typical duration" : "Duración típica",
      description: isEn ? "We adapt to your time and format." : "Nos adaptamos a tu tiempo y formato.",
    },
    {
      icon: Shield,
      title: isEn ? "Support material" : "Material de apoyo",
      description: isEn ? "Based on the latest examples." : "Basado en los últimos ejemplos.",
    },
    {
      icon: Users,
      title: isEn ? "Designed for you" : "Nivel pensado para negocio",
      description: isEn ? "Made for your audience." : "Pensado para ti.",
    },
  ];

  const trainings = [
    {
      title: isEn ? "Phishing" : "Phishing",
      objective: isEn ? "Recognize signals and avoid falling for attacks." : "Reconocer señales y evitar caídas.",
      includes: isEn
        ? ["Detection guide", "How to report", "Email best practices", "Quick exercises"]
        : ["Guía de detección", "Cómo reportar", "Buenas prácticas de correo", "Ejercicios rápidos"],
    },
    {
      title: isEn ? "Impersonation and deepfakes" : "Suplantación y deepfakes",
      objective: isEn ? "Detect fraud attempts by voice, video, or identity." : "Detectar intentos de fraude por voz, video o identidad.",
      includes: isEn
        ? ["Detection guide", "Typical cases (CEO fraud)", "Two-channel verification", "Warning signs"]
        : ["Guía de detección", "Casos típicos (CEO fraud)", "Verificación por doble canal", "Señales de alerta"],
    },
    {
      title: isEn ? "Safe use of social media" : "Uso seguro de redes sociales",
      objective: isEn ? "Reduce information leaks and reputational risk." : "Reducir fuga de info y riesgo reputacional.",
      includes: isEn
        ? ["Privacy settings", "Social engineering", "What not to post", "Team guidelines"]
        : ["Configuración de privacidad", "Ingeniería social", "Qué no publicar", "Pautas para equipos"],
    },
    {
      title: isEn ? "Custom training" : "Formaciones a medida",
      objective: isEn
        ? "Adapt content to roles (sales, finance, IT, leadership)."
        : "Adaptar contenido a roles (ventas, finanzas, IT, dirección).",
      includes: isEn
        ? ["Initial interview", "Industry-specific examples", "Process recommendations"]
        : ["Entrevista inicial", "Ejemplos de su sector", "Recomendaciones por proceso"],
      highlighted: true,
    },
  ];

  const steps = [
    {
      step: "01",
      title: isEn ? "We understand your context" : "Entendemos vuestro contexto",
      description: isEn
        ? "10-15 min to align goals, audience, and real risks."
        : "10-15 min para alinear objetivos, audiencia y riesgos reales.",
    },
    {
      step: "02",
      title: isEn ? "Hands-on training with examples" : "Formación práctica con ejemplos",
      description: isEn
        ? "Most of the time, with current cases and participation."
        : "La mayor parte del tiempo, con casos actuales y participación.",
    },
    {
      step: "03",
      title: isEn ? "Checklist and action plan" : "Checklist y plan de acción",
      description: isEn
        ? "Close with recommendations and next steps."
        : "Cierre con recomendaciones y próximos pasos.",
    },
  ];

  const faqs = [
    {
      value: "faq-para-quien",
      question: isEn ? "Who is it for?" : "¿Para quién es?",
      answer: isEn
        ? "For non-technical teams, leadership, and business areas. We can adjust depth to the profile."
        : "Para equipos no técnicos, dirección y áreas de negocio. Podemos ajustar la profundidad según el perfil.",
    },
    {
      value: "faq-2",
      question: isEn ? "Can it be customized?" : "¿Se puede personalizar?",
      answer: isEn
        ? "Yes. We offer custom training with real examples and processes from your company."
        : "Sí. Ofrecemos formaciones a medida con ejemplos y procesos reales de vuestra empresa.",
    },
    {
      value: "faq-3",
      question: isEn ? "Do you provide materials?" : "¿Se entrega material?",
      answer: isEn
        ? "Includes checklist, best practices, and a mini guide to reinforce the session."
        : "Incluye checklist, buenas prácticas y una mini guía posterior para reforzar lo visto.",
    },
    {
      value: "faq-4",
      question: isEn ? "Online or on-site?" : "¿Online o presencial?",
      answer: isEn
        ? "Both. We recommend on-site for larger teams, but online works very well."
        : "Ambos formatos. Recomendamos presencial para equipos grandes, pero online funciona muy bien.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <section className="relative overflow-hidden pt-24">
          <div className="absolute inset-0 bg-hero-pattern" />
          <div className="absolute top-0 left-0 w-80 h-80 overflow-hidden hidden md:block">
            <div className="absolute -top-20 -left-20 w-96 h-96 geometric-accent transform rotate-45 opacity-80" />
          </div>
          <div className="container mx-auto px-6 relative z-10 py-20">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {isEn ? "Training" : "Formaciones"}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mt-4 mb-6">
                {isEn ? "Cybersecurity training" : "Formaciones de ciberseguridad"}
              </h1>
              <p className="text-lg md:text-xl text-white max-w-2xl mx-auto">
                {isEn
                  ? "Practical sessions, current examples, and recommendations you can apply from day one."
                  : "Sesiones prácticas, ejemplos actuales y recomendaciones aplicables desde el primer día."}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {isEn ? "What's included" : "Qué incluye"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                {isEn ? "Everything you need to apply" : "Todo lo necesario para aplicar"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {includes.map((item) => (
                <div
                  key={item.title}
                  className="bg-card/10 border border-border/20 rounded-2xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-white">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {isEn ? "Training" : "Formaciones"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                {isEn ? "Training programs" : "Programas de formación"}
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              {trainings.map((training) => (
                <div
                  key={training.title}
                  className={`relative bg-card/10 border rounded-2xl p-8 transition-colors ${
                    training.highlighted
                      ? "border-accent/30 shadow-lg shadow-accent/10"
                      : "border-border/20 hover:border-accent/30"
                  }`}
                >
                  {training.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 rounded-full bg-accent text-accent-foreground text-xs font-semibold">
                      {isEn ? "Most popular" : "Más popular"}
                    </span>
                  </div>
                )}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{training.title}</h3>
                  </div>
                  <p className="text-white mb-4">{training.objective}</p>
                  <ul className="space-y-2 mb-8">
                    {training.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-white text-sm">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">
                {isEn ? "How we work" : "Cómo trabajamos"}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                {isEn ? "A simple, actionable process" : "Un proceso simple y accionable"}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="bg-card/10 border border-border/20 rounded-2xl p-6 hover:border-accent/30 transition-colors"
                >
                  <div className="text-accent text-sm font-bold mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-white">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq-para-quien" className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-4">
                {isEn ? "Frequently asked questions" : "Preguntas frecuentes"}
              </h2>
            </div>
            <div className="max-w-3xl mx-auto bg-card/10 border border-border/20 rounded-2xl p-6">
              <Accordion
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
                className="w-full"
              >
                {faqs.map((faq) => (
                  <AccordionItem key={faq.value} value={faq.value} className="border-border/20">
                    <AccordionTrigger className="text-foreground">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-white">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="bg-card/10 border border-border/20 p-10 rounded-2xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                {isEn ? "Do you want it tailored to your company?" : "¿Quieres que lo adaptemos a tu empresa?"}
              </h2>
              <p className="text-lg text-white mb-8">
                {isEn
                  ? "The more real the context, the higher the training ROI."
                  : "Cuanto más real sea el contexto, más ROI tiene la formación."}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://wa.me/34610626409">
                    {isEn ? "Contact us" : "Contacta con nosotros"}
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="/#products">{isEn ? "See services" : "Ver servicios"}</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Formaciones;
