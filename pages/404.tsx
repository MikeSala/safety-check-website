import { NextSeo } from "next-seo";
import Link from "next/link";
import { ReactElement } from "react";
import { MainLayout } from "~/components/layouts/MainLayout";
import { MarginLayout } from "~/components/layouts/MarginLayout";
import { NextPageWithLayout } from "~/pages/_app";

const NotFoundPage: NextPageWithLayout = () => {
  return (
    <MarginLayout className="flex-col justify-center" verticalPadding="lg">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
        404 error
      </p>
      <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-2 text-base text-gray-500">
        Sorry, we couldn&apos;t find the page you&apos;re looking for.
      </p>
      <div className="mt-6">
        <Link className="link" href="/">
          Go back home<span aria-hidden="true"> &rarr;</span>
        </Link>
      </div>
    </MarginLayout>
  );
};

NotFoundPage.getLayout = (page: ReactElement) => {
  return (
    <MainLayout className="flex">
      <NextSeo
        title="Page not found"
        description="Page not found - sometimes it may happen, so return to homepage."
        noindex
      />
      {page}
    </MainLayout>
  );
};

export default NotFoundPage;
