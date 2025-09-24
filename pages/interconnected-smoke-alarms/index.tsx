import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import FaqComponent from "~/components/Faq/Faq";
import faqSectionsData from "~/components/Faq/FaqContent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { PhoneNumberLink } from "~/pages/dla-administratorow-budynkow";
import smokeAlarmIntroImage from "~/src/assets/images/smoke-alarm-check.webp";
import smokeAlarmDetailImage from "~/src/assets/images/smoke_4.jpg";

const selectedId = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

const InterconnectedSmokeAlarmsPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Interconnected Smoke Alarms" />

      <MarginLayout className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 rounded bg-white p-8 shadow-sm md:grid md:grid-cols-2">
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src={smokeAlarmIntroImage}
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
          <div>
            <div className="mx-auto max-w-7xl px-4 text-gray-700 sm:px-6 lg:px-8">
              <h3 className="mb-2 text-xl font-bold text-gray-800 h3">
                Interconnected Smoke Alarm service in Melbourne
              </h3>

              <p className="mb-4">
                As fire safety experts, we at RCSC understand the importance of
                interconnected smoke alarms in protecting your property and its
                occupants. Interconnected smoke alarms are designed to
                communicate with each other and sound simultaneously when one
                alarm detects smoke, providing early warning for occupants to
                escape.
              </p>

              <p className="mb-4">
                In certain states, such as Victoria, New South Wales, and South
                Australia, properties built after specific dates must have
                interconnected smoke alarms where more than one is present. For
                example: in Queensland, since 1 January 2022, smoke alarms must
                be photoelectric, interconnected and installed on each storey
                and in all bedrooms and hallways, powered by mains power or a
                non-removable 10-year lithium battery.
              </p>
            </div>
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="mx-auto max-w-7xl">
        <div className="-mt-20 flex flex-col-reverse gap-8 rounded bg-white p-8 shadow-sm md:grid md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              Our Offer on Interconnected Smoke Alarms
            </h3>

            <p className="mb-4">
              We offer a competitive price of AS 3786:2014-compliant
              interconnected smoke alarms in 10-year lithium and hardwired
              variants. With a 3-year product warranty and a 10-year service
              warranty, our services are backed by quality assurance.
            </p>

            <p className="mb-4">
              We provide a per-alarm pricing structure, including delivery and
              installation, to make it easier for you to ensure compliance with
              fire safety regulations.
            </p>

            <p className="mb-4">
              If you are not sure how many alarms your property needs, you can{" "}
              <Link
                href="/kontakt"
                title="Contact Us"
                className="cursor-pointer font-bold text-blue-500 hover:text-blue-400"
              >
                contact us directly
              </Link>{" "}
              or call us at{" "}
              <strong>
                <PhoneNumberLink />
              </strong>
              .
            </p>

            <p className="mb-4 font-semibold">
              Book interconnected smoke alarm service with the best provider in
              fire safety and ensure the safety of your rental property and its
              occupants today.
            </p>
          </div>
          <div className="relative top-0 flex flex-col md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src={smokeAlarmDetailImage}
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <SubscriptionServiceBanner />
      <ServiceBoxes />
      <MarginLayout className="flex-col gap-1 sm:py-1">
        <div className="px-4">
          <FaqComponent sections={faqSectionsData} selectedIds={selectedId} />
        </div>
      </MarginLayout>
    </>
  );
};

InterconnectedSmokeAlarmsPage.getLayout = function GetLayout(
  page: ReactElement
) {
  return (
    <MainLayout>
      <NextSeo
        title="Interconnected Smoke Alarms"
        description="Protect your commercial property with interconnected smoke alarms. Our reliable solutions ensure early detection of fires and compliance with regulations."
      />
      {page}
    </MainLayout>
  );
};

export default InterconnectedSmokeAlarmsPage;
