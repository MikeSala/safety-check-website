import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import CookieConsent, { Cookies } from "react-cookie-consent";

const COOKIE_NAME = "pi_cookie_consent";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
};

const buildPreferences = (analytics: boolean, marketing: boolean): CookiePreferences => ({
  necessary: true,
  analytics,
  marketing,
});

const serializePreferences = (preferences: CookiePreferences) => JSON.stringify(preferences);

const parsePreferences = (rawValue: string): CookiePreferences | null => {
  try {
    const parsed = JSON.parse(rawValue) as Partial<CookiePreferences>;

    if (typeof parsed.analytics !== "boolean" || typeof parsed.marketing !== "boolean") {
      return null;
    }

    return {
      necessary: true,
      analytics: parsed.analytics,
      marketing: parsed.marketing,
    };
  } catch {
    return null;
  }
};

const DECLINE_VALUE = serializePreferences(buildPreferences(false, false));

type PreferenceToggleProps = {
  label: string;
  description: string;
  enabled: boolean;
  onChange: (value: boolean) => void;
};

const PreferenceToggle = ({ label, description, enabled, onChange }: PreferenceToggleProps) => {
  return (
    <div className="flex items-start justify-between gap-6 rounded-xl bg-white/5 px-5 py-4 sm:px-6 sm:py-5">
      <div className="max-w-[75%] text-sm sm:max-w-none sm:text-base">
        <p className="font-semibold text-white">{label}</p>
        <p className="mt-1 text-white/80">{description}</p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        onClick={() => onChange(!enabled)}
        className={`relative inline-flex h-7 w-12 flex-shrink-0 items-center rounded-full transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900 sm:h-8 sm:w-14 ${
          enabled ? "bg-primary-400" : "bg-white/30"
        }`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition sm:h-6 sm:w-6 ${
            enabled ? "translate-x-6 sm:translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

const HiddenButton = () => null;

type CookieConsentInstance = InstanceType<typeof CookieConsent>;

const CookieBanner = () => {
  const consentRef = useRef<CookieConsentInstance | null>(null);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(false);
  const [marketingAllowed, setMarketingAllowed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const rawValue = Cookies.get(COOKIE_NAME);
    if (!rawValue) {
      return;
    }

    const parsedPreferences = parsePreferences(rawValue);
    if (!parsedPreferences) {
      return;
    }

    setAnalyticsAllowed(parsedPreferences.analytics);
    setMarketingAllowed(parsedPreferences.marketing);
  }, []);

  const cookieValue = useMemo(
    () => serializePreferences(buildPreferences(analyticsAllowed, marketingAllowed)),
    [analyticsAllowed, marketingAllowed]
  );

  const scheduleAction = (action: () => void) => {
    if (typeof window === "undefined") {
      return;
    }
    window.setTimeout(() => {
      action();
    }, 0);
  };

  const handleSavePreferences = () => {
    consentRef.current?.accept();
  };

  const handleAcceptAll = () => {
    setAnalyticsAllowed(true);
    setMarketingAllowed(true);
    scheduleAction(() => {
      consentRef.current?.accept();
    });
  };

  const handleNecessaryOnly = () => {
    setAnalyticsAllowed(false);
    setMarketingAllowed(false);
    scheduleAction(() => {
      consentRef.current?.decline();
    });
  };

  return (
    <CookieConsent
      ref={consentRef}
      cookieName={COOKIE_NAME}
      location="bottom"
      buttonText="Zapisz preferencje"
      declineButtonText="Tylko niezbędne"
      disableStyles
      enableDeclineButton={false}
      ButtonComponent={HiddenButton}
      buttonWrapperClasses="hidden"
      cookieValue={cookieValue}
      declineCookieValue={DECLINE_VALUE}
      setDeclineCookie
      containerClasses="fixed inset-x-0 bottom-0 z-[100] flex justify-center px-4 pb-4 sm:px-6 sm:pb-6"
      contentClasses="w-full max-w-4xl overflow-hidden rounded-3xl bg-primary-900/95 text-white shadow-2xl backdrop-blur-md"
      ariaAcceptLabel="Zapisz preferencje dotyczące plików cookie"
      ariaDeclineLabel="Ustaw tylko niezbędne pliki cookie"
      expires={180}
      sameSite="Lax"
      extraCookieOptions={{ path: "/" }}
      acceptOnScroll={false}
      acceptOnOverlayClick={false}
    >
      <div className="flex flex-col gap-6 p-6 text-sm leading-relaxed sm:p-8 sm:text-base">
        <div className="space-y-3">
          <p className="font-comfortaa text-xl font-semibold sm:text-2xl">
            Szanujemy Twoją prywatność
          </p>
          <p className="text-white/90">
            Korzystamy z plików cookie, aby zapewnić prawidłowe działanie strony,
            analizować ruch oraz dopasowywać treści marketingowe. Zawsze aktywny
            pozostaje pakiet niezbędny do działania serwisu. Szczegóły znajdziesz w
            naszej
            <Link
              href="/polityka-prywatnosci"
              className="ml-1 inline-flex items-center font-semibold underline decoration-primary-300 decoration-2 underline-offset-4 transition hover:text-primary-200"
            >
              Polityce prywatności
            </Link>
            .
          </p>
        </div>

        <div className="space-y-3">
          <PreferenceToggle
            label="Analityczne"
            description="Pomagają nam monitorować statystyki i ulepszać serwis."
            enabled={analyticsAllowed}
            onChange={setAnalyticsAllowed}
          />
          <PreferenceToggle
            label="Marketingowe"
            description="Pozwalają dopasowywać komunikaty marketingowe do Twoich potrzeb."
            enabled={marketingAllowed}
            onChange={setMarketingAllowed}
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-4 text-sm sm:flex-row sm:items-center sm:justify-end sm:gap-4 sm:pt-6 sm:text-base">
          <button
            type="button"
            onClick={handleNecessaryOnly}
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-3 font-semibold text-white transition hover:border-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
          >
            Tylko niezbędne
          </button>
          <button
            type="button"
            onClick={handleSavePreferences}
            className="inline-flex items-center justify-center rounded-full bg-white/15 px-5 py-3 font-semibold text-white transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
          >
            Zapisz mój wybór
          </button>
          <button
            type="button"
            onClick={handleAcceptAll}
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-5 py-3 font-semibold text-primary-900 transition hover:bg-primary-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
          >
            Akceptuj wszystkie
          </button>
        </div>
      </div>
    </CookieConsent>
  );
};

export default CookieBanner;
