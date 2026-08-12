import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { content, type Copy, type Locale } from "@/i18n/content";

const STORAGE_KEY = "rfs.locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (next: Locale) => void;
  toggle: () => void;
  /** Copy for the active locale. */
  c: Copy;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

const isLocale = (value: unknown): value is Locale => value === "es" || value === "en";

/** Peninsula, Canary Islands, and the North African cities. */
const SPAIN_TIMEZONES = new Set(["Europe/Madrid", "Atlantic/Canary", "Africa/Ceuta"]);

/**
 * Where the visitor is, not what language their browser is set to.
 *
 * The timezone is the signal: it is local, instant, needs no network call and
 * leaks nothing to a third party — unlike IP geolocation, which would mean
 * shipping every visitor's address to an external service. It is a proxy, so
 * a VPN or a traveller can fool it; the toggle is right there in the nav.
 */
const isInSpain = (): boolean => {
  try {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (timeZone) return SPAIN_TIMEZONES.has(timeZone);
  } catch {
    /* Very old engines: fall through to the region tag below. */
  }

  const tags = navigator.languages ?? [navigator.language ?? ""];
  return tags.some((tag) => tag.toLowerCase().endsWith("-es"));
};

/**
 * Stored choice always wins, so the toggle survives reloads. Otherwise: in
 * Spain the site opens in Spanish, everywhere else in English.
 * Resolved lazily during the first render to avoid a flash of the wrong locale.
 */
const resolveInitialLocale = (): Locale => {
  if (typeof window === "undefined") return "es";

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* localStorage can be blocked; fall through to location detection. */
  }

  return isInSpain() ? "es" : "en";
};

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(resolveInitialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* Not being able to persist is not worth breaking the toggle over. */
    }
  }, []);

  const toggle = useCallback(() => {
    setLocale(locale === "es" ? "en" : "es");
  }, [locale, setLocale]);

  const value = useMemo<LocaleContextValue>(
    () => ({ locale, setLocale, toggle, c: content[locale] }),
    [locale, setLocale, toggle],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
};

export const useLocale = () => {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
};
