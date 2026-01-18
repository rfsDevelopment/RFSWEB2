import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLocale } from "@/contexts/LocaleContext";

const NotFound = () => {
  const location = useLocation();
  const { locale } = useLocale();
  const isEn = locale === "en";

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">
          {isEn ? "Oops! Page not found" : "Ups, no encontramos esta página"}
        </p>
        <a href="/" className="text-primary underline hover:text-primary/90">
          {isEn ? "Return to Home" : "Volver al inicio"}
        </a>
      </div>
    </div>
  );
};

export default NotFound;
