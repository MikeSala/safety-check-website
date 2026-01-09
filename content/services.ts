import { NAV_LABELS } from "~/content/Labels";
import { ROUTES } from "~/content/Routes";

export enum SERVICE_KEYS {
  FullServicePackage = "full-service-package",
  ElectricalSafetyCheck = "electrical-safety-check",
  GasSafetyCheck = "gas-safety-check",
  SmokeAlarmService = "smoke-alarm-service",
}

export type ServiceCard = {
  label: string;
  value: SERVICE_KEYS;
  href: string;
  iconType: "electrical" | "gas" | "smoke" | "package";
};

export const SERVICE_CARDS: ServiceCard[] = [
  {
    label: NAV_LABELS.ELECTRICAL_CHECK,
    value: SERVICE_KEYS.ElectricalSafetyCheck,
    href: ROUTES.ELECTRICAL_CHECK,
    iconType: "electrical",
  },
  {
    label: NAV_LABELS.GAS_CHECK,
    value: SERVICE_KEYS.GasSafetyCheck,
    href: ROUTES.GAS_CHECK,
    iconType: "gas",
  },
  {
    label: NAV_LABELS.SMOKE_ALARM_CHECK,
    value: SERVICE_KEYS.SmokeAlarmService,
    href: ROUTES.SMOKE_ALARM_CHECK,
    iconType: "smoke",
  },
  {
    label: "Pakiet pełnego serwisu",
    value: SERVICE_KEYS.FullServicePackage,
    href: ROUTES.SERVICES,
    iconType: "package",
  },
];

export const RECOMMENDED_SERVICE_KEYS = [SERVICE_KEYS.FullServicePackage];
