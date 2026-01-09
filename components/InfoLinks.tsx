import Link from "next/link";
import { ROUTES } from "~/content/Routes";
import PhoneNumberLink from "~/components/PhoneNumberLink";

export default function InfoLinks() {
  const linkClasses =
    "mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400";

  return (
    <div>
      <p className="mb-4">
        Bardziej szczegółowe informacje znajdziesz w sekcji FAQ. Jeśli
        interesują Cię przepisy i regulacje dotyczące kontroli bezpieczeństwa,
        odwiedź naszą{" "}
        <Link href={ROUTES.LEGISLATION} title="Przepisy" className={linkClasses}>
          stronę z przepisami
        </Link>
        .
      </p>
      <p className="mt-4">
        Alternatywnie możesz{" "}
        <Link href={ROUTES.CONTACT_US} title="Kontakt" className={linkClasses}>
          skontaktować się z nami
        </Link>{" "}
        lub zadzwonić pod <PhoneNumberLink />.
      </p>
    </div>
  );
}
