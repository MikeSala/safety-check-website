import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import FormComponent from "~/components/FormComponent";
import { ServiceBanner, ServiceBannerProps } from "~/components/ServiceBanner";
import { ServiceProjects } from "~/components/ServiceProjects";
import ServiceSelector from "~/components/ServiceSelector";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const selectedId = [
  1, 2, 3, 4, 11, 12, 15, 21, 22, 23, 41, 42, 43, 44, 71, 72, 81, 83, 91, 93,
  95, 97,
];

const serviceBanners: ServiceBannerProps[] = [
  {
    serviceOfferings: [
      "Pressure retention test of the main gas line to the property.",
      "Gas safety checks of all owner-supplied gas appliances at the property, such as gas stoves, heaters and hot water units.",
      "Service of gas heaters, including a carbon monoxide safety test.",
    ],
    imageUrl: "/services-details-gas.webp",
    title: "Gas Safety Checks",
    priority: true,
  },
  {
    serviceOfferings: [
      "Testing of all electrical points in accordance with Section 4 of AS/NZS 3019.",
      "Periodic checks of electrical installations.",
    ],
    imageUrl: "/services-details-electric.webp",
    title: "Electrical Safety Checks",
    priority: true,
  },
  {
    serviceOfferings: [
      "Testing of smoke alarms.",
      "Battery replacement in all smoke alarms.",
      "Verification that smoke alarms are correctly located.",
    ],
    imageUrl: "/services-details-smoke.webp",
    title: "Smoke Alarm Service",
  },
];

const ServicesPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Our Services" />
      <MarginLayout className="flex-col gap-4">
        <h2 className="h2">
          Our safety check and compliance services are only available in
          Melbourne.
        </h2>
        <p>
          We operate from the City to the Mornington Peninsula, South East,
          Bayside, and Westernport areas of Melbourne. For your peace of mind,
          we offer extensive comprehensive safety and compliance checks to keep
          properties in line with current and future legislation. Our reliable,
          fully-qualified electricians and plumbers have the knowledge and
          experience to tackle emergency jobs and regular maintenance,fixing
          problems quickly and keeping occupants safe.
        </p>
      </MarginLayout>

      <MarginLayout className="-mt-20">
        <ServiceSelector />
      </MarginLayout>
      {serviceBanners.map((service, i) => {
        return (
          <ServiceBanner key={i} {...service} imageFirst={Boolean(i % 2)} />
        );
      })}
      <SubscriptionServiceBanner />
      <FormComponent titleId="ourServices" />
      <ServiceProjects />
      <MarginLayout className="flex-col gap-4 sm:py-1">
        <div className="px-4">
          <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
        </div>
      </MarginLayout>
    </>
  );
};

ServicesPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Safety Checks, Plumbing Services & Switchboard Upgrades"
        description="Protect your property with our professional safety checks. Book now to ensure your property meets safety standards and runs no risks."
      />
      {page}
    </MainLayout>
  );
};

export default ServicesPage;
