import { createContext, useContext, useEffect, useState } from "react";

type Locale = "es" | "en";

type LocaleContextValue = {
  locale: Locale;
};

const LocaleContext = createContext<LocaleContextValue>({ locale: "es" });

const detectLocale = (): Locale => {
  if (typeof navigator === "undefined") {
    return "es";
  }

  const lang = navigator.language?.toLowerCase() ?? "";
  return lang.startsWith("es") ? "es" : "en";
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocale] = useState<Locale>("es");

  useEffect(() => {
    const detected = detectLocale();
    setLocale(detected);
    if (typeof document !== "undefined") {
      document.documentElement.lang = detected;
    }
  }, []);

  return <LocaleContext.Provider value={{ locale }}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => useContext(LocaleContext);
