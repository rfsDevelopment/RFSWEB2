import { Shield, Mail, MapPin, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-accent" />
              <span className="text-xl font-bold text-foreground">
                RedFort<span className="text-accent">Security</span>
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm mb-6">
              Cyber Due Diligence para M&A y business angels. Evaluamos la exposición digital de empresas antes de invertir o
              adquirir, y como auditoría interna.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/redfort-security"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@redfort.security"
                className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-accent hover:bg-accent/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-3">
              {["Cyber Due Diligence", "Employee Footprint Monitor", "Informe Ejecutivo", "Consultoría"].map((item) => (
                <li key={item}>
                  <a
                    href="#products"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                info@redfort.security
              </li>
              <li className="flex items-start gap-2 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                España
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 RedFort Security. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-sm">
            <a
              href="mailto:legal@redfort.security?subject=Politica%20de%20privacidad"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Política de privacidad
            </a>
            <a
              href="mailto:legal@redfort.security?subject=Terminos%20de%20servicio"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Términos de servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
