import { ReactNode } from "react";
import { RadioOption } from "~/components/Fields/RadioField";

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
    label: "Electrical Safety Check",
    value: SERVICE_KEYS.ElectricalSafetyCheck,
    price: 30000,
    address: "/electrical-safety-check/",
    description: (
      <>
        <p>
          Electrical safety check of all electrical points in accordance with
          section 4 of AS/NZS 3019 &quot;Electrical installations—Periodic
          verification&quot; as required by the Residential Tenancies Act 2021,
          Consumer Affairs and Energy Safe Victoria
        </p>
        <p>
          Supply of a detailed electrical report as a valid legal record for
          proof of servicing will be provided on completion
        </p>
      </>
    ),
  },
  {
    label: "Gas Safety Check",
    value: SERVICE_KEYS.GasSafetyCheck,
    price: 35000,
    address: "/gas-safety-check/",
    description: (
      <>
        <p>
          Gas safety check of all owner supplied gas appliances at the property
          in accordance with the AS 4575, AS/NZ 5601, Energy Safe Victoria &
          Consumer Affairs. E.g. Gas stoves, heaters, hot water units and carbon
          monoxide testing etc..
        </p>
        <p>
          Supply of a detailed gas report as a valid legal record for proof of
          servicing will be provided on completion
        </p>
      </>
    ),
  },
  {
    label: "Smoke Alarm Check",
    value: SERVICE_KEYS.SmokeAlarmService,
    price: 9000,
    address: "/smoke-alarm-safety-check/",
    description: (
      <>
        <p>
          Service all smoke alarms in accordance with the Victoria Building
          Regulations 2006, S.R.No.68/2006, Australian Standards 3786 and
          Section 3.7.2.2 of the Building Code of Australia
        </p>
        <p>
          Supply of a detailed smoke alarm report as a valid legal record for
          proof of servicing will be provided on completion
        </p>
      </>
    ),
  },
  {
    label: "Full Service Package",
    value: SERVICE_KEYS.FullServicePackage,
    price: 60000,
    address: "/services/",
    description: (
      <>
        <ul className="flex flex-col gap-2">
          <li>Smoke Alarm Service</li>
          <li>Electrical Safety Check</li>
          <li>Gas Safety Check</li>
        </ul>
      </>
    ),
  },
  {
    label: "Electrical Safety Check & Gas Safety Check",
    value: SERVICE_KEYS.ElectricalSafetyCheckAndGasSafetyCheck,
    price: 65000,
  },
  {
    label: "Electrical Safety Check & Smoke Alarm Service",
    value: SERVICE_KEYS.ElectricalSafetyCheckSmokeAlarmService,
    price: 39000,
  },
  {
    label: "Smoke Alarm Service & Gas Safety Check",
    value: SERVICE_KEYS.SmokeAlarmServiceAndGasSafetyCheck,
    price: 44000,
  },
];

export const ADDITIONAL_SERVICES_OPTIONS: AdditionalServicesOption[] = [
  {
    id: "yes-with-gas",
    label: "Yes - With Gas",
    value: ADDITIONAL_SERVICES_VALUES.WithGas,
    details:
      "A one-time only maintenance fee of $250 ex GST per rental property you subscribe with.",
    oneTimeFee: 25000,
  },
  {
    id: "yes-without-gas",
    label: "Yes - Without Gas",
    value: ADDITIONAL_SERVICES_VALUES.WithoutGas,
    details:
      "If the property has no gas, the one-time only maintenance fee will be $125 ex GST.",
    oneTimeFee: 12500,
  },
  {
    id: "no",
    label: "No",
    value: ADDITIONAL_SERVICES_VALUES.None,
    details:
      "Do not include the property address in the property compliance subscription. \nI/WE acknowledge as the landlord, I/WE will take full responsibility for the annual maintenance of the property compliance for the property address.",
  },
];

export interface CheckboxOptions {
  title: string;
  content?: string;
  list?: string[];
}

export const CONFIRM_CHECKBOX_OPTIONS: CheckboxOptions[] = [
  {
    title: "Fees and Charges",
    content:
      "A call-out fee of $180 (ex GST) will be charged in the following scenarios:",
    list: [
      "If there is no electricity or gas connected at the property.",
      "If RCSC is unable to access the property at the confirmed appointment time.",
      "If the rental provider books a service for a boarding/shared property (Class 3 Buildings) and our Electrician or Plumber identifies this on arrival.",
    ],
  },
  {
    title: "Additional Fees",
    list: [
      "Installation of battery-operated smoke detectors in a new location to meet regulations incurs a fee of $30 (ex GST) per detector.",
      "Immediate rectification of a dangerous/non-compliant electrical issue starts from $60 (ex GST).",
      "Decommissioning or capping off an unsafe gas appliance or one leaking carbon monoxide starts from $90 (ex GST).",
    ],
  },
  {
    title: "Payment Terms",
    list: [
      "Funds will be debited from your account after your work order has been reviewed and formally accepted by RCSC.",
      "Your credit card will only be charged once the work order has been reviewed and formally accepted by RCSC. The credit card details will be used by Stripe for the selected package/s and will not be stored on file by RCSC. No additional charges will be applied.",
      "All processed payments are non-refundable.",
    ],
  },
  {
    title: "Credit Card Processing",
    list: [
      "For payments, we use Stripe, one of the world's best and most trusted third-party providers for online payments.",
      "At the end of the booking, enter your credit card details for future payment.",
      "Stripe charges a processing fee of 1.75% + $0.30 for domestic cards or 2.9% + $0.30 for international cards, added on top of RCSC's service charge.",
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
