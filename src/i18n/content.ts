/**
 * All site copy, both locales, in one place.
 *
 * `en` is typed as `typeof es`, so TypeScript fails the build if the English
 * sibling drifts out of key parity with the Spanish one. Copy is written per
 * locale — not machine-translated.
 *
 * No fabricated statistics live in here. Numbers are either facts about the
 * service or marked TODO for the real track record. See DESIGN.md.
 */

export const CONTACT = {
  email: "info@redfort.security",
  legalEmail: "legal@redfort.security",
  whatsapp: "https://wa.me/34610626409",
  whatsappLabel: "+34 610 626 409",
  linkedin: "https://www.linkedin.com/company/redfort-security",
  linkedinLabel: "/company/redfort-security",
} as const;

/**
 * TODO(rfs): replace with the real track record before going live, or delete
 * the block and the <TrackRecord /> usage in Method.tsx. Do not invent figures.
 */
export const TRACK_RECORD_PLACEHOLDER: { value: string; es: string; en: string }[] = [];

const es = {
  meta: {
    langLabel: "ES",
    otherLangLabel: "EN",
    switchTo: "Ver la web en inglés",
  },

  nav: {
    items: [
      { href: "#exposicion", label: "Exposición" },
      { href: "#auditoria", label: "Auditoría" },
      { href: "#formacion", label: "Formación" },
      { href: "#metodo", label: "Método" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Solicitar diagnóstico",
    menu: "Menú",
    close: "Cerrar",
    skip: "Saltar al contenido",
  },

  hero: {
    kicker: "Ciberseguridad · Ciberinteligencia",
    titleA: "Te mostramos todo lo que",
    titleAccent: "ya saben de ti",
    lead:
      "Antes de atacarte, alguien te investiga. RFS recorre las mismas fuentes abiertas que usaría esa persona —filtraciones, buscadores de dispositivos, registros de dominios, repositorios, foros— y te entrega el resultado por escrito: qué hay de tu empresa ahí fuera, qué se puede hacer con ello y cómo cerrarlo.",
    ctaPrimary: "Solicitar diagnóstico",
    ctaSecondary: "Ver qué buscamos",
    facts: [
      { value: "10", label: "vectores auditados" },
      { value: "0", label: "intrusión en tus sistemas" },
      { value: "72 h", label: "diagnóstico inicial" },
    ],
  },

  /* Counts carry the meaning here — labels stay at one or two words so the
     panel reads as an instrument, not a paragraph. */
  report: {
    title: "Informe de exposición",
    badge: "Muestra",
    command: "rfs-osint --scope acme-industrial.example",
    rows: [
      { k: "credenciales", v: "37", level: "crit" },
      { k: "subdominios", v: "14", level: "med" },
      { k: "puertos abiertos", v: "4", level: "high" },
      { k: "secretos en repos", v: "2", level: "crit" },
      { k: "dominios clon", v: "3", level: "high" },
      { k: "metadatos", v: "6", level: "med" },
    ],
    leak: {
      user: "admin@acme-industrial.example",
      pass: "Verano2019!",
    },
    findings: "hallazgos",
    critical: "críticos",
    footnote: "Muestra con datos sintéticos.",
  },

  ticker: {
    label: "Fuentes",
    items: [
      "volcados de credenciales",
      "combolists",
      "pastes",
      "foros y canales cerrados",
      "registros DNS",
      "certificados TLS",
      "buscadores de dispositivos expuestos",
      "repositorios públicos",
      "metadatos de documentos",
      "registros de dominios",
      "almacenamiento en la nube mal configurado",
      "fuentes de terceros y proveedores",
    ],
  },

  thesis: {
    index: "01",
    label: "El problema",
    title: "Tu perímetro real empieza fuera de tu red",
    lead:
      "Puedes tener el firewall perfecto y seguir siendo un objetivo fácil. La mayoría de las intrusiones no empiezan rompiendo nada: empiezan con información que ya es pública y con una contraseña que ya circula. Eso está fuera de tu control, pero no fuera de tu conocimiento.",
    points: [
      {
        n: "01",
        title: "Ya está publicado",
        body: "Filtraciones de terceros donde alguien reutilizó su contraseña corporativa. No pasó por tu red y aun así es tu problema.",
      },
      {
        n: "02",
        title: "Es gratis y rápido de encontrar",
        body: "Cualquiera con un buscador especializado y una tarde localiza tus servicios expuestos y tu organigrama.",
      },
      {
        n: "03",
        title: "Nadie lo está mirando",
        body: "Los pentests miran hacia dentro y con permiso. La superficie pública no aparece en ese alcance, así que crece sin vigilancia.",
      },
      {
        n: "04",
        title: "Envejece mal",
        body: "Un subdominio olvidado, un becario que se fue, un PDF de 2021. Cada mes que pasa sin revisar es superficie acumulada.",
      },
    ],
  },

  audit: {
    index: "02",
    label: "Servicio 01",
    title: "Auditoría de exposición",
    titleAccent: "OSINT",
    lead:
      "Te mostramos todo lo que ya está en internet sobre tu empresa, con evidencia y priorizado por lo que un atacante haría primero. Y no acabamos ahí: te acompañamos hasta cerrarlo.",
    vectorsLabel: "Qué buscamos",
    vectors: [
      { id: "A1", title: "Credenciales filtradas", body: "Pares usuario:contraseña de tus dominios en volcados, combolists y foros." },
      { id: "A2", title: "Superficie de ataque", body: "Subdominios, hosts olvidados y entornos de preproducción alcanzables." },
      { id: "A3", title: "Servicios expuestos", body: "Puertos, paneles de administración, VPN y escritorios remotos visibles." },
      { id: "A4", title: "Metadatos en documentos", body: "Autores, rutas internas y versiones de software en lo que publicas." },
      { id: "A5", title: "Suplantación de marca", body: "Typosquatting, dominios recién registrados y certificados que imitan el tuyo." },
      { id: "A6", title: "Secretos en repositorios", body: "Claves de API, tokens y credenciales en repos públicos y gists." },
      { id: "A7", title: "Huella de la organización", body: "Qué revela tu estructura pública sobre vectores de ingeniería social." },
      { id: "A8", title: "Terceros y proveedores", body: "Exposición heredada de integraciones, SaaS conectados y cadena de suministro." },
      { id: "A9", title: "Menciones y mercados", body: "Conversaciones, venta de accesos y menciones a tu marca en foros y mercados." },
      { id: "A10", title: "Correo suplantable", body: "SPF, DKIM y DMARC: lo fácil que es escribir en nombre de tu empresa." },
    ],
    phasesLabel: "Cómo lo hacemos",
    phases: [
      { n: "01", title: "Alcance", body: "Definimos dominios, marcas y límites por escrito. NDA firmado antes de empezar.", meta: "Día 0" },
      { n: "02", title: "Recolección", body: "Solo fuentes abiertas. No accedemos a tus sistemas ni probamos las credenciales que encontramos.", meta: "Sin intrusión" },
      { n: "03", title: "Análisis", body: "Descartamos ruido y falsos positivos. Cada hallazgo con evidencia, severidad e impacto real.", meta: "Priorizado" },
      { n: "04", title: "Remediación", body: "Plan concreto por hallazgo y acompañamiento hasta cerrarlo. Reverificamos y lo dejamos por escrito.", meta: "Incluido" },
    ],
    deliverablesLabel: "Qué recibes",
    deliverablesNote:
      "Un informe que puedes llevar a un comité y un anexo que puedes pasar a sistemas. Nada de capturas sueltas sin contexto.",
    deliverables: [
      "Informe ejecutivo en lenguaje de negocio, para dirección y comité",
      "Anexo técnico con la evidencia de cada hallazgo y su fuente",
      "Plan de remediación priorizado por esfuerzo e impacto",
      "Sesión de presentación de resultados con tu equipo",
      "Reverificación posterior para confirmar lo que se ha cerrado",
    ],
  },

  training: {
    index: "03",
    label: "Servicio 02",
    title: "Formación",
    titleAccent: "para que no vuelva a pasar",
    lead:
      "Cerrar los hallazgos arregla el presente; la formación arregla el próximo trimestre. Damos sesiones prácticas, con ejemplos actuales y —cuando hemos hecho la auditoría— con lo que realmente encontramos en tu empresa. No hay material más convincente que el propio.",
    highlight: {
      title: "Formamos con tus propios hallazgos",
      body: "Es la diferencia entre «cuidado con el phishing» y «este es el correo que se podría escribir con lo que hay publicado de nosotros». Los casos se anonimizan internamente antes de usarse en la sesión.",
    },
    programsLabel: "Programas",
    programs: [
      {
        title: "Phishing",
        objective: "Reconocer las señales y no caer.",
        items: ["Guía de detección", "Cómo reportar sin miedo", "Buenas prácticas de correo", "Ejercicios en vivo"],
      },
      {
        title: "Suplantación y deepfakes",
        objective: "Detectar fraude por voz, vídeo o identidad.",
        items: ["Casos típicos (fraude del CEO)", "Verificación por doble canal", "Señales de alerta", "Qué hacer si ya ha pasado"],
      },
      {
        title: "Uso seguro de redes sociales",
        objective: "Reducir fuga de información y riesgo reputacional.",
        items: ["Configuración de privacidad", "Ingeniería social", "Qué no publicar", "Pautas para equipos"],
      },
      {
        title: "A medida",
        objective: "Contenido adaptado a cada rol y a tu sector.",
        items: ["Entrevista previa", "Ejemplos de tu sector", "Recomendaciones por proceso", "Material propio"],
        featured: true,
      },
    ],
    formatLabel: "Formato",
    format: [
      { k: "Modalidad", v: "Online o presencial" },
      { k: "Duración", v: "Adaptada a tu agenda" },
      { k: "Audiencia", v: "Dirección, negocio o equipos técnicos" },
      { k: "Material", v: "Checklist y mini guía posterior" },
      { k: "Idiomas", v: "Español e inglés" },
    ],
    cta: "Pedir propuesta de formación",
  },

  method: {
    index: "04",
    label: "Método",
    title: "Reglas del compromiso",
    lead:
      "Trabajamos sobre información pública, y eso exige ser explícitos sobre los límites. Estas reglas van en el contrato, no solo en la web.",
    rules: [
      { n: "01", title: "Solo fuentes abiertas", body: "No accedemos a tus sistemas, no explotamos vulnerabilidades y no probamos las credenciales que encontramos. Verificamos que existen, no que funcionan." },
      { n: "02", title: "Nada sin alcance firmado", body: "Dominios, marcas y límites acordados por escrito antes de la primera búsqueda." },
      { n: "03", title: "Confidencialidad por defecto", body: "NDA de serie. La evidencia va cifrada y solo a los interlocutores que nos indiques." },
      { n: "04", title: "Datos mínimos y trazables", body: "Tratamiento conforme al RGPD, con registro de lo recogido. Si lo pides, destruimos la evidencia al cerrar el proyecto." },
      { n: "05", title: "Sin humo", body: "Si tu exposición es baja, el informe lo dirá. Un resultado limpio también es información útil, y te sirve ante clientes, auditores y aseguradoras." },
    ],
  },

  faq: {
    index: "05",
    label: "FAQ",
    title: "Preguntas que nos hacen siempre",
    items: [
      {
        q: "¿Esto es legal?",
        a: "Sí. Trabajamos únicamente con información que ya es pública o accesible sin vulnerar ningún control, con un alcance firmado por ti y sin tocar tus sistemas. No hay intrusión, no hay explotación y no hay acceso a datos de terceros.",
      },
      {
        q: "¿Qué necesitáis de mí para empezar?",
        a: "Un dominio, la lista de marcas y nombres comerciales que quieres cubrir, y una persona de contacto. Nada de accesos, credenciales ni despliegues por tu parte.",
      },
      {
        q: "¿Cuánto tarda?",
        a: "El diagnóstico inicial lo tienes en 72 horas. La auditoría completa, con evidencia y plan de remediación, entre 5 y 10 días hábiles según el alcance.",
      },
      {
        q: "¿Tocáis mis sistemas en algún momento?",
        a: "No. Cero intrusión. Si además quieres una prueba de intrusión, es otro servicio, con otro contrato y otras autorizaciones.",
      },
      {
        q: "¿Y si no encontráis nada relevante?",
        a: "Te lo decimos igual y lo pones en valor. Un informe limpio es un activo comercial ante clientes y aseguradoras, y te sirve como línea base para medir el año que viene.",
      },
      {
        q: "¿Puedo contratar solo la formación?",
        a: "Sí. Rinde más después de una auditoría, porque los ejemplos son vuestros, pero funciona perfectamente por separado.",
      },
    ],
  },

  contact: {
    index: "06",
    label: "Contacto",
    title: "Empieza por saber qué hay ahí fuera",
    lead:
      "Diagnóstico inicial sobre un dominio en 72 horas. Te contamos qué encontramos y decides si seguimos. Sin compromiso y sin instalar nada.",
    channels: [
      { k: "Correo", v: CONTACT.email, href: `mailto:${CONTACT.email}?subject=Diagn%C3%B3stico%20de%20exposici%C3%B3n` },
      { k: "WhatsApp", v: CONTACT.whatsappLabel, href: CONTACT.whatsapp },
      { k: "LinkedIn", v: CONTACT.linkedinLabel, href: CONTACT.linkedin },
    ],
    note: "Confidencial · NDA disponible · Metodología documentada · ES / EN",
    cta: "Solicitar diagnóstico",
  },

  footer: {
    tagline: "Ciberseguridad y ciberinteligencia. Auditoría de exposición y formación.",
    location: "España",
    columns: {
      services: "Servicios",
      company: "Compañía",
      legal: "Legal",
    },
    services: [
      { label: "Auditoría de exposición", href: "#auditoria" },
      { label: "Remediación acompañada", href: "#auditoria" },
      { label: "Formación", href: "#formacion" },
    ],
    company: [
      { label: "Método", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
      { label: "Contacto", href: "#contacto" },
    ],
    privacy: "Política de privacidad",
    terms: "Términos de servicio",
    rights: "Todos los derechos reservados.",
  },

  notFound: {
    label: "Error 404",
    title: "Esta ruta no existe",
    body: "El recurso que buscabas no está aquí. Puede que haya cambiado de sitio o que nunca existiera.",
    cta: "Volver al inicio",
  },
};

const en: typeof es = {
  meta: {
    langLabel: "EN",
    otherLangLabel: "ES",
    switchTo: "View this site in Spanish",
  },

  nav: {
    items: [
      { href: "#exposicion", label: "Exposure" },
      { href: "#auditoria", label: "Audit" },
      { href: "#formacion", label: "Training" },
      { href: "#metodo", label: "Method" },
      { href: "#faq", label: "FAQ" },
    ],
    cta: "Request a diagnostic",
    menu: "Menu",
    close: "Close",
    skip: "Skip to content",
  },

  hero: {
    kicker: "Cybersecurity · Cyber intelligence",
    titleA: "We show you everything",
    titleAccent: "they already know",
    lead:
      "Before anyone attacks you, they research you. RFS walks the same open sources they would — breach dumps, device search engines, domain records, code repositories, forums — and hands you the result in writing: what is out there about your company, what can be done with it, and how to shut it down.",
    ctaPrimary: "Request a diagnostic",
    ctaSecondary: "See what we look for",
    facts: [
      { value: "10", label: "vectors audited" },
      { value: "0", label: "intrusion into your systems" },
      { value: "72 h", label: "initial diagnostic" },
    ],
  },

  report: {
    title: "Exposure report",
    badge: "Sample",
    command: "rfs-osint --scope acme-industrial.example",
    rows: [
      { k: "credentials", v: "37", level: "crit" },
      { k: "subdomains", v: "14", level: "med" },
      { k: "open ports", v: "4", level: "high" },
      { k: "repo secrets", v: "2", level: "crit" },
      { k: "look-alike domains", v: "3", level: "high" },
      { k: "metadata", v: "6", level: "med" },
    ],
    leak: {
      user: "admin@acme-industrial.example",
      pass: "Summer2019!",
    },
    findings: "findings",
    critical: "critical",
    footnote: "Sample built on synthetic data.",
  },

  ticker: {
    label: "Sources",
    items: [
      "credential dumps",
      "combolists",
      "pastes",
      "forums and closed channels",
      "DNS records",
      "TLS certificates",
      "exposed device search engines",
      "public repositories",
      "document metadata",
      "domain registrations",
      "misconfigured cloud storage",
      "third-party and supplier sources",
    ],
  },

  thesis: {
    index: "01",
    label: "The problem",
    title: "Your real perimeter starts outside your network",
    lead:
      "You can run a perfect firewall and still be an easy target. Most intrusions do not start by breaking something: they start with information that is already public and a password that is already circulating. That sits outside your control — but not outside your knowledge.",
    points: [
      {
        n: "01",
        title: "It is already published",
        body: "Third-party breaches where someone reused their work password. It never touched your network and it is still your problem.",
      },
      {
        n: "02",
        title: "It is free and fast to find",
        body: "Anyone with a specialised search engine and one afternoon can map your exposed services and your org chart.",
      },
      {
        n: "03",
        title: "Nobody is watching it",
        body: "Pentests look inward, with permission. Your public surface is not in that scope, so it grows unsupervised.",
      },
      {
        n: "04",
        title: "It ages badly",
        body: "A forgotten subdomain, an intern who left, a PDF from 2021. Every unreviewed month is accumulated surface.",
      },
    ],
  },

  audit: {
    index: "02",
    label: "Service 01",
    title: "Exposure audit",
    titleAccent: "OSINT",
    lead:
      "We show you everything already on the internet about your company, with evidence, ranked by what an attacker would reach for first. And we do not stop there: we stay with you until it is closed.",
    vectorsLabel: "What we look for",
    vectors: [
      { id: "A1", title: "Leaked credentials", body: "user:password pairs for your domains in dumps, combolists and forums." },
      { id: "A2", title: "Attack surface", body: "Subdomains, forgotten hosts and reachable pre-production environments." },
      { id: "A3", title: "Exposed services", body: "Ports, admin panels, VPNs and remote desktops visible from the internet." },
      { id: "A4", title: "Document metadata", body: "Authors, internal paths and software versions inside what you publish." },
      { id: "A5", title: "Brand impersonation", body: "Typosquatting, freshly registered domains and certificates mimicking yours." },
      { id: "A6", title: "Secrets in repositories", body: "API keys, tokens and credentials in public repos and gists." },
      { id: "A7", title: "Organisational footprint", body: "What your public structure reveals about social engineering routes." },
      { id: "A8", title: "Third parties and suppliers", body: "Exposure inherited from integrations, connected SaaS and the supply chain." },
      { id: "A9", title: "Mentions and marketplaces", body: "Chatter, access being sold and brand mentions across forums and markets." },
      { id: "A10", title: "Spoofable email", body: "SPF, DKIM and DMARC: how easy it is to write on your company's behalf." },
    ],
    phasesLabel: "How we do it",
    phases: [
      { n: "01", title: "Scope", body: "Domains, brands and limits agreed in writing. NDA signed before anything starts.", meta: "Day 0" },
      { n: "02", title: "Collection", body: "Open sources only. We never touch your systems and never test the credentials we find.", meta: "No intrusion" },
      { n: "03", title: "Analysis", body: "We strip out noise and false positives. Every finding with evidence, severity and real impact.", meta: "Prioritised" },
      { n: "04", title: "Remediation", body: "A concrete plan per finding and support until it is closed. We re-verify and document it.", meta: "Included" },
    ],
    deliverablesLabel: "What you get",
    deliverablesNote:
      "A report you can take to a board and an annex you can hand straight to IT. No context-free screenshots.",
    deliverables: [
      "Executive report in business language, for leadership and the board",
      "Technical annex with the evidence and source behind every finding",
      "Remediation plan prioritised by effort and impact",
      "Findings walkthrough session with your team",
      "Follow-up re-verification confirming what has actually been closed",
    ],
  },

  training: {
    index: "03",
    label: "Service 02",
    title: "Training",
    titleAccent: "so it does not happen again",
    lead:
      "Closing findings fixes today; training fixes next quarter. We run hands-on sessions with current examples and — when we have run the audit — with what we actually found in your company. No material is more convincing than your own.",
    highlight: {
      title: "We train on your own findings",
      body: "It is the difference between \"watch out for phishing\" and \"this is the email someone could write using what is published about us\". Cases are anonymised internally before they reach the session.",
    },
    programsLabel: "Programmes",
    programs: [
      {
        title: "Phishing",
        objective: "Recognise the signals and stop falling for them.",
        items: ["Detection guide", "How to report without fear", "Email best practice", "Live exercises"],
      },
      {
        title: "Impersonation and deepfakes",
        objective: "Spot fraud by voice, video or identity.",
        items: ["Typical cases (CEO fraud)", "Two-channel verification", "Warning signs", "What to do when it already happened"],
      },
      {
        title: "Safe use of social media",
        objective: "Reduce information leakage and reputational risk.",
        items: ["Privacy settings", "Social engineering", "What not to post", "Team guidelines"],
      },
      {
        title: "Tailored",
        objective: "Content adapted to each role and to your sector.",
        items: ["Scoping interview", "Examples from your sector", "Per-process recommendations", "Custom material"],
        featured: true,
      },
    ],
    formatLabel: "Format",
    format: [
      { k: "Delivery", v: "Online or on-site" },
      { k: "Duration", v: "Adapted to your schedule" },
      { k: "Audience", v: "Leadership, business or technical teams" },
      { k: "Material", v: "Checklist and follow-up mini guide" },
      { k: "Languages", v: "Spanish and English" },
    ],
    cta: "Request a training proposal",
  },

  method: {
    index: "04",
    label: "Method",
    title: "Rules of engagement",
    lead:
      "We work on public information, and that demands being explicit about the limits. These rules go in the contract, not just on the website.",
    rules: [
      { n: "01", title: "Open sources only", body: "We do not access your systems, we do not exploit vulnerabilities and we do not test the credentials we find. We verify they exist, not that they work." },
      { n: "02", title: "Nothing without signed scope", body: "Domains, brands and limits agreed in writing before the first search runs." },
      { n: "03", title: "Confidential by default", body: "NDA as standard. Evidence is encrypted and goes only to the contacts you name." },
      { n: "04", title: "Minimal, traceable data", body: "GDPR-compliant handling with a record of what was collected. On request, we destroy the evidence when the project closes." },
      { n: "05", title: "No theatre", body: "If your exposure is low, the report says so. A clean result is useful information too, and it stands up in front of clients, auditors and insurers." },
    ],
  },

  faq: {
    index: "05",
    label: "FAQ",
    title: "The questions we always get",
    items: [
      {
        q: "Is this legal?",
        a: "Yes. We only work with information that is already public or reachable without defeating any control, under a scope you sign, and without touching your systems. No intrusion, no exploitation, no access to third-party data.",
      },
      {
        q: "What do you need from me to start?",
        a: "A domain, the list of brands and trading names you want covered, and one point of contact. No access, no credentials, nothing to deploy on your side.",
      },
      {
        q: "How long does it take?",
        a: "The initial diagnostic lands in 72 hours. The full audit, with evidence and a remediation plan, takes 5 to 10 business days depending on scope.",
      },
      {
        q: "Do you touch my systems at any point?",
        a: "No. Zero intrusion. If you also want a penetration test, that is a separate service with its own contract and its own authorisations.",
      },
      {
        q: "What if you find nothing relevant?",
        a: "We tell you anyway, and you put it to work. A clean report is a commercial asset with clients and insurers, and it gives you a baseline to measure against next year.",
      },
      {
        q: "Can I buy the training on its own?",
        a: "Yes. It pays off more after an audit, because then the examples are yours, but it works perfectly well on its own.",
      },
    ],
  },

  contact: {
    index: "06",
    label: "Contact",
    title: "Start by knowing what is out there",
    lead:
      "Initial diagnostic on one domain within 72 hours. We walk you through what we found and you decide whether to continue. No commitment, nothing to install.",
    channels: [
      { k: "Email", v: CONTACT.email, href: `mailto:${CONTACT.email}?subject=Exposure%20diagnostic` },
      { k: "WhatsApp", v: CONTACT.whatsappLabel, href: CONTACT.whatsapp },
      { k: "LinkedIn", v: CONTACT.linkedinLabel, href: CONTACT.linkedin },
    ],
    note: "Confidential · NDA available · Documented methodology · ES / EN",
    cta: "Request a diagnostic",
  },

  footer: {
    tagline: "Cybersecurity and cyber intelligence. Exposure audits and training.",
    location: "Spain",
    columns: {
      services: "Services",
      company: "Company",
      legal: "Legal",
    },
    services: [
      { label: "Exposure audit", href: "#auditoria" },
      { label: "Supported remediation", href: "#auditoria" },
      { label: "Training", href: "#formacion" },
    ],
    company: [
      { label: "Method", href: "#metodo" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contacto" },
    ],
    privacy: "Privacy policy",
    terms: "Terms of service",
    rights: "All rights reserved.",
  },

  notFound: {
    label: "Error 404",
    title: "This route does not exist",
    body: "The resource you were after is not here. It may have moved, or it may never have existed.",
    cta: "Back to home",
  },
};

export const content = { es, en };

export type Locale = keyof typeof content;
export type Copy = typeof es;
