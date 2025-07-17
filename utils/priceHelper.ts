import {
  BookingFormValues,
  SERVICES,
  SERVICE_KEYS,
  ADDITIONAL_SERVICES_OPTIONS,
} from "~/components/Book/bookingFormVariables";

export const STRIPE_PROCESSING_FEE_MARGIN_DOMESTIC = 0.017818181818;
export const STRIPE_PROCESSING_FEE_MARGIN_INT = 0.029918181818;
export const STRIPE_PROCESSING_FEE_FIXED = 30;
export const GST_RATE = 0.1;
export const SMOKE_ALARM_DISCOUNT = 1500;
export const MULTIPLE_PROPERTY_DISCOUNT_PERCENT = 0.1;

export class PriceHelper {
  private readonly properties: BookingFormValues["properties"];
  private readonly isMultiProperties: boolean;

  constructor(properties: BookingFormValues["properties"]) {
    this.properties = properties;
    this.isMultiProperties = this.properties.length > 1;
  }
  //OK
  getOneTimeFee = (
    property: BookingFormValues["properties"][number]
  ): number => {
    return (
      ADDITIONAL_SERVICES_OPTIONS.find(
        (p) => p.id === property.complianceSubscription
      )?.oneTimeFee ?? 0
    );
  };

  // 1. get basic service price
  //OK
  getServicePrice = (service: string): number => {
    return SERVICES.find((option) => option.value === service)?.price ?? 0;
  };

  // 2. get single service while checking if its multi property
  //OK
  getSingleServicePriceWithMultiPropertyDisc = (service: string) => {
    let servicePrice = this.getServicePrice(service);

    if (this.isMultiProperties) {
      if (servicePrice && service === SERVICE_KEYS.SmokeAlarmService) {
        // Apply smoke alarm discount for multi-property booking
        servicePrice = servicePrice - SMOKE_ALARM_DISCOUNT;
      } else {
        servicePrice =
          servicePrice - servicePrice * MULTIPLE_PROPERTY_DISCOUNT_PERCENT;
      }
    }

    return servicePrice;
  };

  // 3. apply GST for service price
  //OK
  getGSTIncludedSingleServicePrice = (service: string): number => {
    const basePrice = this.getSingleServicePriceWithMultiPropertyDisc(service);
    return basePrice + basePrice * GST_RATE;
  };
  //OK
  getGSTIncludedOneTimeFee = (
    property: BookingFormValues["properties"][number]
  ) => {
    return (
      this.getOneTimeFee(property) + this.getOneTimeFee(property) * GST_RATE
    );
  };

  // 4. get Stripe processing fees
  getProcessingFees = (priceWithGst: number) => {
    // use only domestic margin for now
    // const stripeMargin = this.isDomesticCard
    //     ? STRIPE_PROCESSING_FEE_MARGIN_DOMESTIC
    //     : STRIPE_PROCESSING_FEE_MARGIN_INT;
    const stripeMargin = STRIPE_PROCESSING_FEE_MARGIN_DOMESTIC;

    return priceWithGst * stripeMargin + STRIPE_PROCESSING_FEE_FIXED;
  };

  // 5. calculate processing fees
  getSingleServiceOrderProcessingFees = (service: string) => {
    return this.getProcessingFees(
      this.getGSTIncludedSingleServicePrice(service)
    );
  };

  getSingleServiceOneTimeFeeProcessingFees = (
    property: BookingFormValues["properties"][number]
  ) => {
    return this.getProcessingFees(this.getGSTIncludedOneTimeFee(property));
  };

  // 6. get order price for single service
  getSingleServiceOrderPrice(service: string) {
    return (
      this.getGSTIncludedSingleServicePrice(service) +
      this.getSingleServiceOrderProcessingFees(service)
    );
  }

  getSingleServiceOneTimeFeeOrderPrice = (
    property: BookingFormValues["properties"][number]
  ) => {
    return (
      this.getGSTIncludedOneTimeFee(property) +
      this.getSingleServiceOneTimeFeeProcessingFees(property)
    );
  };

  getDisplayedProcessingFees = () => {
    return this.ceilAndSumAmounts(
      this.properties.map(
        (property) =>
          this.getSingleServiceOrderProcessingFees(property.service) +
          this.getSingleServiceOneTimeFeeProcessingFees(property)
      )
    );
  };

  getSubtotalServicePrice = () => {
    let totalServicePrice = 0;
    this.properties.forEach((property) => {
      totalServicePrice +=
        this.getServicePrice(property.service || "") +
        this.getOneTimeFee(property);
    });
    return totalServicePrice;
  };

  getPriceWithMultiPropertyDisc = (
    price: number,
    properties: BookingFormValues["properties"]
  ) => {
    const isMultiProperties = properties.length > 1;
    const discountAppliedPrice =
      price - price * MULTIPLE_PROPERTY_DISCOUNT_PERCENT;
    return isMultiProperties ? discountAppliedPrice : price;
  };
  //OK
  getTotalBasePrice = () => {
    const subtotalServicePrice = this.getSubtotalServicePrice();
    const priceAfterMultiPropsDisc = this.getPriceWithMultiPropertyDisc(
      subtotalServicePrice,
      this.properties
    );
    return priceAfterMultiPropsDisc;
  };

  getTotalPrice = () => {
    return this.ceilAndSumAmounts(
      this.properties.map(
        (property) =>
          this.getSingleServiceOrderPrice(property.service) +
          this.getSingleServiceOneTimeFeeOrderPrice(property)
      )
    );
  };

  getTotalGSTAmount = () => {
    return this.getTotalBasePrice() * GST_RATE;
  };

  ceilAndSumAmounts = (amountArr: number[]) => {
    return amountArr.reduce((partialSum, a) => partialSum + Math.ceil(a), 0);
  };
}
