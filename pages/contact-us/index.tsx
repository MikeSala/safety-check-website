import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { ContactForm } from "~/components/ContactForm";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const ContactPage: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Contact Us" />

      <MarginLayout className="-mt-10 flex items-center justify-center md:-mb-20">
        <div className="my-4 -mb-20 text-center">
          <h2 className="text-2xl h4">
            If you&apos;d like to book safety checks for your property, please
            make an appointment on the{" "}
            <Link
              href="/book-now"
              className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 font-bold text-blue-500 transition-colors duration-300 ease-in-out h4 hover:border-white hover:text-blue-400"
            >
              Book Now
            </Link>{" "}
            page. <br></br> <br></br>
            For plumbing service, caravan safety check or switchboard upgrade or
            any other inquiries and bookings use this form.
          </h2>
        </div>
      </MarginLayout>
      <MarginLayout className="items-center justify-center">
        <div className="gap-12 md:grid md:grid-cols-2">
          <iframe
            className="h-3/4 w-full"
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3138.9527097571467!2d145.13328191579782!3d-38.11803457969842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad674ab7d057495%3A0xc8c874fe20a0df6f!2s82%20Bardia%20Ave%2C%20Seaford%20VIC%203198%2C%20Australia!5e0!3m2!1sen!2sus!4v1673845456634!5m2!1sen!2sus"
            allowFullScreen
            loading="eager"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <div className="order-1">
            <ContactForm />
          </div>
        </div>
      </MarginLayout>
    </>
  );
};

ContactPage.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Contact Us"
        description="Contact us and book your safety check, plumbing service, switchboard upgrade or any if you have any question regarding our business"
      />
      {page}
    </MainLayout>
  );
};

export default ContactPage;
