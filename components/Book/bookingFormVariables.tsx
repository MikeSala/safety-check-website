import { ReactNode } from "react";
import { RadioOption } from "~/components/Fields/RadioField";
import { NAV_LABELS } from "~/pages/content/Labels";
import { ROUTES } from "~/pages/content/Routes";

export enum SERVICE_KEYS {
  FullServicePackage = "full-service-package",
  ElectricalSafetyCheck = "electrical-safety-check",
  GasSafetyCheck = "gas-safety-check",
  SmokeAlarmService = "smoke-alarm-service",
  ElectricalSafetyCheckAndGasSafetyCheck = "electrical-safety-check-gas-safety-check",
  ElectricalSafetyCheckSmokeAlarmService = "electrical-safety-check-smoke-alarm-service",
  SmokeAlarmServiceAndGasSafetyCheck = "smoke-alarm-service-gas-safety-check",
}

export enum ADDITIONAL_SERVICES_VALUES {
  WithGas = "yes-with-gas",
  WithoutGas = "yes-without-gas",
  None = "none",
}

export type Service = {
  label: string;
  value: SERVICE_KEYS;
  address?: string;
  price: number;
  description?: ReactNode;
};

export type AdditionalServicesOption = RadioOption & { oneTimeFee?: number };

export const SERVICES: Service[] = [
  {
    label: NAV_LABELS.ELECTRICAL_CHECK,
    value: SERVICE_KEYS.ElectricalSafetyCheck,
    price: 30000,
    address: ROUTES.ELECTRICAL_CHECK,
    description: (
      <>
        <p>
          Przegląd wszystkich punktów elektrycznych zgodnie z sekcją 4 normy
          AS/NZS 3019 „Instalacje elektryczne — okresowa weryfikacja” wymaganej
          przez Residential Tenancies Act 2021, Consumer Affairs i Energy Safe
          Victoria.
        </p>
        <p>
          Po zakończeniu zostanie dostarczony szczegółowy raport elektryczny
          jako ważny dokument prawny potwierdzający wykonanie usługi.
        </p>
      </>
    ),
  },
  {
    label: NAV_LABELS.GAS_CHECK,
    value: SERVICE_KEYS.GasSafetyCheck,
    price: 35000,
    address: ROUTES.GAS_CHECK,
    description: (
      <>
        <p>
          Przegląd wszystkich urządzeń gazowych dostarczonych przez właściciela
          nieruchomości zgodnie z normami AS 4575, AS/NZ 5601, Energy Safe
          Victoria i Consumer Affairs. Przykłady: kuchenki gazowe, ogrzewacze,
          podgrzewacze wody oraz testy tlenku węgla itp.
        </p>
        <p>
          Po zakończeniu zostanie dostarczony szczegółowy raport gazowy jako
          ważny dokument prawny potwierdzający wykonanie usługi.
        </p>
      </>
    ),
  },
  {
    label: NAV_LABELS.SMOKE_ALARM_CHECK,
    value: SERVICE_KEYS.SmokeAlarmService,
    price: 9000,
    address: ROUTES.SMOKE_ALARM_CHECK,
    description: (
      <>
        <p>
          Serwis wszystkich czujników dymu zgodnie z Victoria Building
          Regulations 2006, S.R.No.68/2006, Australian Standards 3786 oraz
          sekcją 3.7.2.2 Kodeksu Budowlanego Australii.
        </p>
        <p>
          Po zakończeniu zostanie dostarczony szczegółowy raport dotyczący
          czujników dymu jako ważny dokument prawny potwierdzający wykonanie
          usługi.
        </p>
      </>
    ),
  },
  {
    label: "Pakiet pełnego serwisu",
    value: SERVICE_KEYS.FullServicePackage,
    price: 60000,
    address: ROUTES.SERVICES,
    description: (
      <>
        <ul className="flex flex-col gap-2">
          <li>Serwis czujników dymu</li>
          <li>Przegląd instalacji elektrycznej</li>
          <li>Przegląd instalacji gazowej</li>
        </ul>
      </>
    ),
  },
  {
    label: "Przegląd instalacji elektrycznej i gazowej",
    value: SERVICE_KEYS.ElectricalSafetyCheckAndGasSafetyCheck,
    price: 65000,
  },
  {
    label: "Przegląd instalacji elektrycznej i serwis czujników dymu",
    value: SERVICE_KEYS.ElectricalSafetyCheckSmokeAlarmService,
    price: 39000,
  },
  {
    label: "Serwis czujników dymu i przegląd instalacji gazowej",
    value: SERVICE_KEYS.SmokeAlarmServiceAndGasSafetyCheck,
    price: 44000,
  },
];

export const ADDITIONAL_SERVICES_OPTIONS: AdditionalServicesOption[] = [
  {
    id: "yes-with-gas",
    label: "Tak – z instalacją gazową",
    value: ADDITIONAL_SERVICES_VALUES.WithGas,
    details:
      "Jednorazowa opłata serwisowa w wysokości 250 zł netto za każdą wynajmowaną nieruchomość objętą subskrypcją.",
    oneTimeFee: 25000,
  },
  {
    id: "yes-without-gas",
    label: "Tak – bez instalacji gazowej",
    value: ADDITIONAL_SERVICES_VALUES.WithoutGas,
    details:
      "Jeśli nieruchomość nie posiada instalacji gazowej, jednorazowa opłata serwisowa wyniesie 125 zł netto.",
    oneTimeFee: 12500,
  },
  {
    id: "no",
    label: "Nie",
    value: ADDITIONAL_SERVICES_VALUES.None,
    details:
      "Nie uwzględniaj adresu nieruchomości w subskrypcji zgodności. \nJako właściciel nieruchomości przyjmuję pełną odpowiedzialność za coroczne utrzymanie zgodności nieruchomości pod wskazanym adresem.",
  },
];

export interface CheckboxOptions {
  title: string;
  content?: string;
  list?: string[];
}

export const CONFIRM_CHECKBOX_OPTIONS: CheckboxOptions[] = [
  {
    title: "Opłaty i koszty",
    content:
      "Opłata za przyjazd serwisu w wysokości 180 zł netto zostanie naliczona w następujących przypadkach:",
    list: [
      "Gdy w nieruchomości nie ma podłączonej energii elektrycznej lub gazu.",
      "Gdy nie ma dostępu do nieruchomości w potwierdzonym terminie wizyty.",
      "Gdy usługodawca zarezerwuje usługę dla nieruchomości typu boarding/shared (budynki klasy 3), a nasz elektryk lub hydraulik potwierdzi to na miejscu.",
    ],
  },
  {
    title: "Dodatkowe opłaty",
    list: [
      "Montaż czujnika dymu zasilanego baterią w nowej lokalizacji w celu spełnienia wymogów to koszt 30 zł netto za sztukę.",
      "Natychmiastowe usunięcie niebezpiecznej lub niezgodnej z przepisami usterki elektrycznej od 60 zł netto.",
      "Wyłączenie lub odłączenie niebezpiecznego urządzenia gazowego lub takiego, które wykryto wyciek tlenku węgla, od 90 zł netto.",
    ],
  },
  {
    title: "Warunki płatności",
    list: [
      "Środki zostaną pobrane z Twojego konta po sprawdzeniu i formalnej akceptacji zlecenia.",
      "Twoja karta kredytowa zostanie obciążona dopiero po przeglądzie i akceptacji zlecenia. Dane karty będą użyte przez Stripe do realizacji wybranego pakietu i nie będą przechowywane. Nie zostaną naliczone żadne dodatkowe opłaty.",
      "Wszystkie zrealizowane płatności są bezzwrotne.",
    ],
  },
  {
    title: "Przetwarzanie płatności kartą",
    list: [
      "Do płatności używamy Stripe, jednego z najlepszych i najbardziej zaufanych dostawców płatności online na świecie.",
      "Po zakończeniu rezerwacji wprowadź dane karty kredytowej do przyszłej płatności.",
      "Stripe pobiera opłatę za przetwarzanie w wysokości 1,75% + 0,30 zł dla kart krajowych oraz 2,9% + 0,30 zł dla kart zagranicznych, doliczaną do opłaty za usługę.",
    ],
  },
];

export const PROPERTY_FORM_FIELDS = [
  "address",
  "service",
  "complianceSubscription",
  "propertyManagerFullName",
  "propertyManagerPhone",
  "propertyManagerEmail",
];

export type BookingFormValues = {
  ownerFullName: string;
  date: Date;
  ownerPhone: string;
  ownerMobile: string;
  billingAddress: string;
  ownerEmail: string;
  properties: PropertyFormValues[];
  confirm?: boolean;
};

export type PropertyFormValues = {
  address: string;
  service: string;
  complianceSubscription: string;
  propertyManagerFullName: string;
  propertyManagerPhone: string;
  propertyManagerEmail: string;
};
