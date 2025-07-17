import clsx from "clsx";
import { format } from "date-fns";
import { useMemo } from "react";
import { FieldValues, UseFormGetValues } from "react-hook-form";
import {
  ADDITIONAL_SERVICES_OPTIONS,
  ADDITIONAL_SERVICES_VALUES,
  BookingFormValues,
  SERVICES,
} from "~/components/Book/bookingFormVariables";
import StepLayout from "~/components/layouts/StepLayout";
import {
  GST_RATE,
  MULTIPLE_PROPERTY_DISCOUNT_PERCENT,
  PriceHelper,
} from "~/utils/priceHelper";

type BookingFormSectionFourProps = {
  title: string;
  stepId: string;
  getValues: UseFormGetValues<FieldValues>;
};

type ReviewItemProps = {
  title: string;
  description: string;
  className?: string;
};

const getDescriptionForComplianceSubscription = (
  complianceSubscription: string
): string => {
  const option = ADDITIONAL_SERVICES_OPTIONS?.find(
    (option) => option.value === complianceSubscription
  );

  return option?.label ?? "";
};

const ReviewItem: React.FC<ReviewItemProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <dt className="font-semibold text-gray-900">{title}</dt>
      <dd className="text-gray-700">{description}</dd>
    </div>
  );
};

const BookingFormSectionFour = (props: BookingFormSectionFourProps) => {
  const { title, stepId, getValues } = props;
  const values = useMemo(() => getValues(), [getValues]) as BookingFormValues;
  const priceHelper = new PriceHelper(values.properties);
  const formStep = `step-${stepId}`;

  const formatDate = (date: Date) => {
    return format(date, "dd MMMM yyyy");
  };

  const getServiceLabel = (service: string) => {
    const serviceLabel = SERVICES.find((option) => option.value === service);
    return serviceLabel ? serviceLabel.label : "";
  };

  const getServicePrice = (service: string) => {
    return priceHelper.getServicePrice(service) / 100;
  };

  const getOneTimeFee = (property: BookingFormValues["properties"][number]) => {
    return priceHelper.getOneTimeFee(property) / 100;
  };

  const getSubtotalServicePrice = () => {
    return priceHelper.getSubtotalServicePrice() / 100;
  };

  const getDisplayedProcessingFees = () => {
    return priceHelper.getDisplayedProcessingFees() / 100;
  };

  const getTotalPrice = () => {
    return priceHelper.getTotalPrice() / 100;
  };

  const getTotalGSTAmount = () => {
    return priceHelper.getTotalGSTAmount() / 100;
  };

  const topSection: ReviewItemProps[] = [
    {
      title: "Owner's Full Name",
      description: values.ownerFullName,
    },
    {
      title: "Date Booked",
      description: formatDate(values.date),
    },
    {
      title: "Owner's Phone",
      description: values.ownerPhone,
    },
    {
      title: "Owner's Mobile",
      description: values.ownerMobile || "N/A",
    },
    {
      title: "Billing Address",
      description: values.billingAddress,
      className: "sm:col-span-2",
    },

    {
      title: "Owner's Email",
      description: values.ownerEmail,
    },
  ];

  return (
    <StepLayout id={formStep} title={title}>
      <dl className="grid gap-8 text-sm sm:grid-cols-2">
        <h3 className="text-lg font-bold sm:col-span-2">Owner Details</h3>
        {topSection.map((item) => (
          <ReviewItem key={item.description} {...item} />
        ))}
      </dl>

      <hr className="my-4" />

      <dl className="flex flex-col gap-8 text-sm">
        <h3 className="text-lg font-bold sm:col-span-3">Property Details</h3>
        {values.properties.map((property) => (
          <div
            key={property.address}
            className="grid gap-8 rounded border-2 border-gray-300 p-4 sm:grid-cols-3"
          >
            <ReviewItem
              title={property.address}
              description={getServiceLabel(property.service)}
              className="text-base sm:col-span-3"
            />
            <ReviewItem
              title="Property Manager's Full Name"
              description={property.propertyManagerFullName}
            />
            <ReviewItem
              title="Property Manager's Phone Number"
              description={property.propertyManagerPhone}
            />
            <ReviewItem
              title="Property Manager's Email"
              description={property.propertyManagerEmail}
            />
            <ReviewItem
              title="Include in the property compliance subscription"
              description={getDescriptionForComplianceSubscription(
                property.complianceSubscription
              )}
              className="sm:col-span-3"
            />
            <ReviewItem
              title="Price"
              description={`$${getServicePrice(property.service)}`}
            />
            {getOneTimeFee(property) && (
              <ReviewItem
                title="One-Time Maintenance Fee"
                description={`$${getOneTimeFee(property)}`}
              />
            )}
          </div>
        ))}
      </dl>

      <hr className="my-4" />

      <div className="flex flex-col gap-6">
        <h3 className="text-lg font-bold sm:col-span-2">Order Summary</h3>

        <dl className="space-y-6 border-gray-200 text-sm">
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Subtotal</dt>
            <dd className="text-gray-700">${getSubtotalServicePrice()}</dd>
          </div>
          {values.properties.length > 1 && (
            <div className="flex justify-between">
              <dt className="flex font-medium text-gray-900">
                Discount
                <span className="ml-2 rounded-full bg-gray-200 py-0.5 px-2 text-xs text-gray-600">
                  Multiple Properties
                </span>
              </dt>
              <dd className="text-gray-700">
                <span>
                  -$
                  {getSubtotalServicePrice() *
                    MULTIPLE_PROPERTY_DISCOUNT_PERCENT}{" "}
                  ({MULTIPLE_PROPERTY_DISCOUNT_PERCENT * 100}%)
                </span>
              </dd>
            </div>
          )}
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">GST</dt>
            <dd className="text-gray-900">
              <span>
                ${getTotalGSTAmount()} ({GST_RATE * 100}%)
              </span>
            </dd>
          </div>
          <div className="flex justify-between">
            <dt className="font-medium text-gray-900">Processing Fees</dt>
            <dd className="text-gray-900">${getDisplayedProcessingFees()}</dd>
          </div>
          <div className="flex justify-between text-base font-bold text-gray-900">
            <dt>Order Total</dt>
            <dd>${getTotalPrice()}</dd>
          </div>
        </dl>
      </div>
    </StepLayout>
  );
};

export default BookingFormSectionFour;
