import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { Banner } from "~/components/Banner";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <>
      <Banner title="Privacy Policy" />

      <MarginLayout className="flex-col sm:mt-20 sm:py-1">
        <div className="p-4">
          <h3 className="mb-4 text-center font-bold h1">Privacy Policy</h3>
        </div>
        <p className="mb-10">
          RCSC is committed to providing quality services to you and this policy
          outlines our ongoing obligations to you in respect of how we manage
          your Personal Information.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          What is Personal Information and why do we collect it?
        </h3>
        <p className="mb-2">
          Personal Information is data or an opinion that identifies an
          individual. Examples of Personal Information we collect includes
          names, addresses, email addresses and phone numbers.
        </p>
        <p className="mb-2">
          This Personal Information is obtained in many ways from you and third
          parties (including real estate agents, landlords and tenants) by, for
          example, telephone, email, via our website at
          https://www.przegladinstalacji.pl, from your website, from cookies and
          other electronic tools and/or customer surveys.
        </p>
        <p className="mb-2">
          We do not guarantee website links or the policy of authorised third
          parties.
        </p>
        <p className="mb-2">
          We collect your Personal Information for the primary purpose of
          providing our services to you, providing information to our clients
          and marketing. We may also use your Personal Information for secondary
          purposes closely related to the primary purpose, in circumstances
          where you would reasonably expect such use or disclosure. You may
          unsubscribe from our mailing/marketing lists at any time by contacting
          us in writing.
        </p>
        <p className="mb-2">
          When we collect Personal Information we will, where appropriate and
          where possible, explain to you why we are collecting the information
          and how we plan to use it.
        </p>
        <div className="p-4">
          <h3 className="mb-10 mt-20 text-center font-bold h2">
            Other information
          </h3>
        </div>
        <p className="mb-2">
          We may gather information from you through our electronic systems such
          as your browser type, operating system, IP address, and/or the
          referring domain name from which you access this site (e.g.,
          www.google.com).
        </p>
        <p className="mb-2">
          We may collect information about your browsing behaviour, such as the
          number of visits, the date you visited, and the duration of your use
          of our digital services. You may opt out by adjusting your internet
          browser settings. However, this may limit the functionality and
          personalisation of some parts of our platform.
        </p>
        <p className="mb-2">
          {" "}
          We may electronically monitor the success of any marketing campaign
          from which you have not opted out.{" "}
        </p>
        <p className="mb-10">
          We may also receive anonymised data about performance and errors while
          you use our digital platform.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Sensitive Information
        </h3>
        <p className="mb-2">
          {" "}
          Sensitive information is defined in the Privacy Act to include
          information or opinion about such things as an individual&#39;s racial
          or ethnic origin, political opinions, membership of a political
          association, religious or philosophical beliefs, membership of a trade
          union or other professional body, criminal record or health
          information.{" "}
        </p>
        <p className="mb-2">
          We do not ordinarily expect to hold Sensitive information. However,
          should we fall into possession of Sensitive information, such
          information will be used by us only:
        </p>{" "}
        <ul className="mb-2 list-disc pl-5">
          <li>For the primary purpose for which it was obtained.</li>
          <li>
            For a secondary purpose that is directly related to the primary
            purpose.
          </li>
          <li>With your consent; or where required or authorised by law.</li>
        </ul>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Disclosure of Personal Information
        </h3>
        <p className="mb-2">
          Your Personal Information may be disclosed in a number of
          circumstances including the following:
        </p>
        <ul className="mb-2 list-disc pl-5">
          <li>Third parties where you consent to the use or disclosure; and</li>
          <li>Where required or authorised by law.</li>
        </ul>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Security of Personal Information
        </h3>
        <p className="mb-2">
          Your Personal Information is stored in a manner that reasonably
          protects it from misuse and loss and from unauthorized access,
          modification or disclosure.
        </p>
        <p className="mb-2">
          When your Personal Information is no longer needed for the purpose for
          which it was obtained, we will take reasonable steps to destroy or
          permanently de-identify your Personal Information. However, most of
          the Personal Information is or will be stored in client files which
          will be kept by us for a minimum of 7 years.
        </p>
        <p>
          To the extent it is practical, you may use synonymies when dealing
          with us.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Access to your Personal Information
        </h3>
        <p className="mb-2">
          You may access the Personal Information we hold about you and update
          or correct it, subject to certain exceptions. If you wish to access
          your Personal Information, please contact us in writing.
        </p>
        <p>
          RCSC may charge an administrative fee for providing a copy of your
          Personal Information. Page 3 In order to protect your Personal
          Information, we may require identification from you before releasing
          the requested information.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Maintaining the Quality of your Personal Information
        </h3>
        <p className="mb-2">
          It is important to us that your Personal Information is up to date. We
          will take reasonable steps to make sure that your Personal Information
          is accurate, complete and up-to-date. However, if you find that the
          information we have is not up to date or is inaccurate, please advise
          us as soon as practicable so we can update our records and ensure we
          can continue to provide quality services to you.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Transferring Information Overseas
        </h3>
        <p className="mb-2">
          We will only share personal information about an individual with a
          foreign entity if we believe, in good faith, that the receiving party
          is subject to laws (including contracts with us) that effectively
          uphold data protection principles equivalent to this policy.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">Policy Updates</h3>
        <p className="mb-2">
          This Policy was last updated on 22 January 2024. This Policy may
          change from time to time and is available on our website.
        </p>
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          Privacy Policy Complaints and Enquiries
        </h3>
        <p className="mb-2">
          If you have any queries or complaints about our Privacy Policy, please
          contact us at:
        </p>{" "}
        <p className="mb-2"> 82 Bardia Street, Seaford, Victoria </p>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
        >
          {process.env.NEXT_PUBLIC_TEL_LINK}
        </Link>
        <Link
          className="mb-20 cursor-pointer text-blue-500 hover:text-blue-400"
          href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_LINK}`}
          target="_blank"
          rel="noreferrer"
        >
          {process.env.NEXT_PUBLIC_EMAIL_LINK}
        </Link>
      </MarginLayout>
    </>
  );
};

PrivacyPolicy.getLayout = function GetLayout(page: ReactElement) {
  return (
    <MainLayout>
      <NextSeo
        title="Privacy Policy"
        description="Read our Privacy Policy to understand how we collect, use, and protect your personal information in compliance with Australian privacy laws."
      />
      {page}
    </MainLayout>
  );
};

export default PrivacyPolicy;
