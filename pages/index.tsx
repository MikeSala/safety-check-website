import clsx from "clsx";
import { NextSeo } from "next-seo";
import { ReactElement, useContext } from "react";
import Bar from "~/components/Bar";
import FaqComponent from "~/components/FAQ/FaqComponent";
import FaqSectionsData from "~/components/FAQ/FaqData";
import HeaderComponent from "~/components/HeaderComponent";
import { ResponsiveImage } from "~/components/ResponsiveImage";
import { ServiceBoxes } from "~/components/ServiceBoxes";
import ServiceSelector from "~/components/ServiceSelector";
import SolutionSelector from "~/components/SolutionSelector";
import SubscriptionServiceBanner from "~/components/SubscriptionServiceBanner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";
import { ViewportContext } from "~/providers/ViewportProvider";
import { Icons8checkmark } from "~/src/components/icons";

const selectedId = [
  1, 2, 3, 4, 11, 12, 15, 21, 22, 23, 41, 42, 43, 44, 71, 72, 81, 83, 91, 93,
  95, 97,
];

const HomePage: NextPageWithLayout = () => {
  const { isMobile } = useContext(ViewportContext);

  return (
    <>
      <HeaderComponent />
      <Bar
        backgroundColor="bg-black"
        textColor="text-white"
        iconColor="text-white"
      />
      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">Our Services</h2>
      </article>
      <MarginLayout>
        <div className="my-4 -mb-20 text-center">
          <h2 className="text-2xl h4">
            Operating from the City to the Mornington Peninsula, South East,
            Bayside, and Westernport areas of Melbourne, RCSC provides
            comprehensive Electrical, Gas and Smoke Alarm Electrical Safety
            Checks.
          </h2>
        </div>
      </MarginLayout>
      <MarginLayout className="md:-mt-20">
        <ServiceSelector />
      </MarginLayout>

      <article className="flex h-[100px] flex-col items-center justify-center gap-4 bg-gray-200 px-4 py-12 text-center text-2xl h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">Our Solutions</h2>
      </article>
      <MarginLayout>
        <SolutionSelector />
      </MarginLayout>
      <ResponsiveImage className="-mt-15" src="/hero-hallway.webp" />
      <MarginLayout className="-mt-15">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl rounded bg-white shadow-sm",
            isMobile
              ? "flex-col-reverse gap-3 p-3"
              : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex flex-col text-gray-700 ">
            <h3 className="mb-4 text-xl font-bold h3">
              Electrical, Gas and Smoke Alarm Safety Checks in Melbourne
            </h3>
            <p className="mb-4">
              RCSC is a residential and commercial safety compliance service
              provider in Victoria. Whether you&apos;re a property owner,
              manager or homeowner, it&apos;s vital to ensure your properties
              are safe and comply with all relevant regulations.
            </p>
            <p className="mb-4">
              That&apos;s where RCSC comes in. With years of experience serving
              clients throughout Melbourne, we have the expertise needed to help
              you meet all safety requirements. We&apos;re dedicated to
              providing top-quality services that you can rely on.
            </p>
            <p className="mb-4">
              RCSC covers all aspects of electrical, gas and smoke alarm
              maintenance, and as a medium-sized company, we can offer you a
              personalised approach, tailoring our services to fit your needs.
            </p>
            <p className="mb-4">
              Our team of highly-trained and experienced technicians perform
              thorough safety checks that will verify that your properties are
              compliant with all regulations and give you the peace of mind that
              comes with knowing they&apos;re safe.
            </p>
            Our team is ready to conduct inspections that meet all legislative
            standards in these Melbourne areas:{" "}
            <ul className="mb-2 mt-2 list-disc">
              <li className="mb-2 flex h-8 items-center">
                <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
                Melbourne City/Inner suburbs
              </li>
              <li className="mb-2  flex h-8 items-center">
                <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
                Mornington Peninsula
              </li>
              <li className="mb-2  flex h-8 items-center">
                <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
                South East
              </li>
              <li className="mb-2  flex h-8 items-center">
                <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
                Bayside
              </li>
              <li className=" flex h-8 items-center">
                <Icons8checkmark className="mr-2 h-7 w-7 flex-shrink-0" />
                Westernport
              </li>
            </ul>{" "}
            <p>
              Choose RCSC for your Electrical, Gas and Smoke Alarm Safety Checks
              in Melbourne and enjoy the perfect solution for your property
              needs.
            </p>
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/smoke_3.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <SubscriptionServiceBanner />

      <ServiceBoxes />
      <article className="mt-20 flex h-[100px] flex-col items-center justify-center gap-4 bg-black px-4 py-12 text-center text-2xl text-white h3 sm:py-24 lg:px-8">
        <h2 className="font-semibold h2">
          Safety Compliance Reports with RCSC
        </h2>
      </article>
      <MarginLayout className="mx-auto max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8"
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/elec_3.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 60vw, 100vw"
            />
          </div>

          <div className="min-w-0 flex-1 text-gray-700">
            <h3 className="mb-4 text-xl font-bold text-gray-800 h3">
              Electrical Safety Checks
            </h3>

            <p className="mb-4 ">
              Electrical faults and malfunctions can cause a variety of issues,
              from electric shocks to fires, which could lead to personal harm
              and property damage.
            </p>

            <p className="mb-4 ">
              By having regular electrical safety checks, potential problems can
              be detected and corrected before they pose any risks, and you can
              rest assured that all your electrical appliances, installations,
              and fittings are operating safely.
            </p>

            <p className="mb-4 ">
              RCSC employs only qualified experts with extensive experience in
              performing electrical safety testing. They provide a professional
              service that not only reduces risk but also ensures compliance
              with all Victorian legislation.
            </p>
            <p className="">Electrical Safety Checks include:</p>
            <ul className="mb-2 mt-2 list-disc">
              <li
                className={`flex items-center ${
                  isMobile ? "h-30 mb-4 text-sm" : "h-24"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Electrical safety testing in accordance with Section 4 of the
                AS/NZS 3019 Electrical installations*
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? "h-30 mb-4 text-sm" : "h-24"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Ensuring the house complies with AS/NZS 3000 Wiring Rules as per
                AS/NZS 3019 Electrical installations*
              </li>
            </ul>
            <i className="mb-4">* Periodic verification requirements</i>
            <p className="mt-2">
              Trust RCSC for thorough and professional electrical safety checks.
            </p>
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="-mt-20">
        <div
          className={clsx(
            "mx-auto flex max-w-7xl rounded bg-white shadow-sm",
            isMobile
              ? "flex-col-reverse gap-3 p-3"
              : "gap-8 p-8 md:grid md:grid-cols-2"
          )}
        >
          <div className="flex-2 relative min-w-0 flex-col items-center justify-center text-gray-700">
            <h3 className="mb-4 text-xl font-bold h3">Gas Safety Checks</h3>
            <p className="mb-4 ">
              It&apos;s essential to have gas installations regularly inspected
              as gas leaks can be incredibly dangerous. They can cause fires or
              explosions that endanger not only your property but your person as
              well. In addition, poorly maintained appliances can release carbon
              monoxide: a colourless, odourless gas that can be lethal at high
              concentrations.
            </p>
            <p className="mb-4 ">
              RCSC offers thorough gas safety installation checks in Victoria,
              conducted by qualified gasfitters endorsed to service Type A
              appliances. Regular gas safety checks can detect potential
              problems and ensure that gas appliances and fittings operate
              safely, reducing the risk of gas-related accidents.
            </p>
            <p className=" text-gray-800">Gas Safety Checks include:</p>
            <ul className="mt-2 list-disc">
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-8 text-sm" : "h-20"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Gas testing in accordance with the AS 4575 & AS/NZS 5601.1.
              </li>

              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-10 text-sm" : "h-20"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Checking all installations adhere to the AS/NZS 5601.
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-10 text-sm" : "h-20"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Gas safety checks of all owner-supplied gas appliances fixed to
                the property (stoves, heaters and hot water units).
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-10 text-sm" : "h-20"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Servicing of gas appliances, including a carbon monoxide safety
                test.
              </li>
            </ul>
            <p>
              Prioritise safety with RCSC&apos;s comprehensive gas safety
              services.
            </p>
          </div>
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            {" "}
            <ResponsiveImage
              src="/RCSC/smoke_9.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>
        </div>
      </MarginLayout>
      <MarginLayout className="mx-auto -mt-20 max-w-7xl">
        <div
          className={clsx(
            "flex flex-col rounded bg-white shadow-sm md:grid md:grid-cols-2",
            isMobile ? "gap-3 p-3" : "gap-8 p-8"
          )}
        >
          <div className="relative top-0 md:sticky md:top-[100px] md:h-[400px]">
            <ResponsiveImage
              src="/RCSC/Mobile/smoke_2.webp"
              sizes="(min-width: 1024px) 33vw,(min-width: 640px) 50vw, 100vw"
            />
          </div>{" "}
          <div className="min-w-0 flex-1 text-gray-700">
            <h3 className="mb-4 text-xl font-bold  h3">
              Smoke Alarm Safety Checks
            </h3>

            <p className="mb-4">
              RCSC provides professional smoke alarm testing in Melbourne
              through our fully insured and certified team. We offer
              comprehensive safety checks that align with the latest Victorian
              regulations to make sure your smoke alarms function correctly and
              provide protection to occupants.
            </p>
            <p className="mb-2">Smoke Alarm Safety Checks include:</p>
            <ul className="mb-6 mt-2 list-disc">
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-8 text-sm" : "h-14"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Thorough testing of all smoke alarms.
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-8 text-sm" : "h-14"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Correct placement of smoke alarms.
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? " mb-4 h-8 text-sm" : "h-14"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                9V Battery replacement.
              </li>
              <li
                className={`flex items-center ${
                  isMobile ? "mb-4 h-8 text-sm" : "h-14"
                }`}
              >
                <Icons8checkmark
                  className={`-ml-1 flex-shrink-0 ${
                    isMobile ? "mr-2 h-6 w-6" : "mr-2 h-7 w-7"
                  }`}
                />
                Free smoke alarm replacements if customers sign up for the
                Property Compliance Subscription.
              </li>
            </ul>
            <p className="mb-2">
              Trust RCSC for thorough, practical smoke alarm safety checks.
            </p>
          </div>
        </div>
      </MarginLayout>

      <FaqComponent sections={FaqSectionsData} selectedIds={selectedId} />
    </>
  );
};

HomePage.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <NextSeo
        title="Electrical, Gas and Smoke Alarm Safety Checks | RCSC - Residential & Commercial Safety Checks"
        description="Electrical, gas and smoke alarm safety checks, plumbing services and switchboard upgrades in rented or commercial properties in Melbourne."
      />
      {page}
    </MainLayout>
  );
};

export default HomePage;
