import clsx from "clsx";
import Link from "next/link";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const MainLayout: React.FC<Props> = ({ children, className }) => {
  return (
    <>
      <Link className="sr-only" href="#main-content">
        Skip Navigation
      </Link>
      <Header />
      <main
        id="main-content"
        className={clsx("flex-grow", className)}
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};
