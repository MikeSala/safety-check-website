import { NextSeo } from "next-seo";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import FaqSectionsData from "~/components/Faq/FaqContent";
import FormComponent from "~/components/FormComponent";
import { ServiceBanner, ServiceBannerProps } from "~/components/ServiceBanner";
import { ServiceProjects } from "~/components/ServiceProjects";
import ServiceSelector from "~/components/ServiceSelector";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { servicesPageContent as content } from "./content.pl";

const selectedId = [
  1, 2, 3, 4, 11, 12, 15, 21, 22, 23, 41, 42, 43, 44, 71, 72, 81, 83, 91, 93,
  95, 97,
];

const serviceBanners: ServiceBannerProps[] = [
  {
    serviceOfferings: content.serviceBanners.gas.offerings,
    imageUrl: "/services-details-gas.webp",
    title: content.serviceBanners.gas.title,
    priority: true,
  },
  {
    serviceOfferings: content.serviceBanners.electric.offerings,
    imageUrl: "/services-details-electric.webp",
    title: content.serviceBanners.electric.title,
    priority: true,
  },
  {
    serviceOfferings: content.serviceBanners.smoke.offerings,
    imageUrl: "/services-details-smoke.webp",
    title: content.serviceBanners.smoke.title,
  },
];

const ServicesPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title={content.bannerTitle} />
      <MarginLayout className="mt-10 flex-col gap-4">
        <h2 className="h2">{content.introHeading}</h2>
        <p>{content.introParagraph}</p>
        <ServiceSelector />
      </MarginLayout>
      {serviceBanners.map((service, i) => {
        return (
          <ServiceBanner key={i} {...service} imageFirst={Boolean(i % 2)} />
        );
      })}

      <FormComponent titleId="ourServices" />
      <ServiceProjects />
      <SubscriptionServiceBanner />
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
        title={content.seo.title}
        description={content.seo.description}
      />
      {page}
    </MainLayout>
  );
};

export default ServicesPage;
