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
      <Banner title="Polityka Prywatności" />

      <MarginLayout className="flex-col sm:mt-20 sm:py-1">
        <div className="p-4">
          <h3 className="mb-4 text-center font-bold h1">
            {privacyPolicyContent.sections[0].title}
          </h3>
        </div>
        <p className="mb-10">{privacyPolicyContent.sections[0].description}</p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[1].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[1].description[0]}
        </p>
        <p className="mb-2">
          {privacyPolicyContent.sections[1].description[1]}
        </p>
        <p className="mb-2">
          {privacyPolicyContent.sections[1].description[2]}
        </p>
        <p className="mb-2">
          {privacyPolicyContent.sections[1].description[3]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[2].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[2].description[0]}
        </p>
        <p className="mb-2">
          {privacyPolicyContent.sections[2].description[1]}
        </p>
        <p className="mb-2">
          {privacyPolicyContent.sections[2].description[2]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[3].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[3].description[0]}
        </p>
        {privacyPolicyContent.sections[3].list && (
          <ul className="mb-2 list-disc pl-5">
            {privacyPolicyContent.sections[3].list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[4].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[4].description[0]}
        </p>

        {privacyPolicyContent.sections[4].list && (
          <ul className="mb-2 list-disc pl-5">
            {privacyPolicyContent.sections[4].list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[5].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[5].description[0]}
        </p>
        <p>{privacyPolicyContent.sections[5].description[1]}</p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[6].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[6].description[0]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[7].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[7].description[0]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[8].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[8].description[0]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[9].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[9].description[0]}
        </p>

        <h3 className="mb-10 mt-20 text-center font-bold h2">
          {privacyPolicyContent.sections[10].title}
        </h3>
        <p className="mb-2">
          {privacyPolicyContent.sections[10].description[0]}
        </p>
        <p className="mb-2">{privacyPolicyContent.address}</p>
        <Link
          className="cursor-pointer text-blue-500 hover:text-blue-400"
          href={`tel:${privacyPolicyContent.phone}`}
        >
          {privacyPolicyContent.phone}
        </Link>
        <Link
          className="mb-20 cursor-pointer text-blue-500 hover:text-blue-400"
          href={`mailto:${privacyPolicyContent.email}`}
          target="_blank"
          rel="noreferrer"
        >
          {privacyPolicyContent.email}
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

export const privacyPolicyContent = {
  updated: "22 stycznia 2024",
  address: "ul. Przykładowa 1, 00-000 Warszawa",
  phone: process.env.NEXT_PUBLIC_TEL_LINK,
  email: process.env.NEXT_PUBLIC_EMAIL_LINK,
  sections: [
    {
      title: "Polityka Prywatności",
      description:
        "Firma Przegląd Instalacji zobowiązuje się do świadczenia usług na najwyższym poziomie. Niniejsza polityka prywatności wyjaśnia, w jaki sposób gromadzimy, wykorzystujemy i chronimy Twoje dane osobowe zgodnie z przepisami RODO oraz ustawą o ochronie danych osobowych.",
    },
    {
      title: "Jakie dane osobowe zbieramy i dlaczego?",
      description: [
        "Dane osobowe to wszelkie informacje umożliwiające identyfikację osoby fizycznej. Mogą to być: imię i nazwisko, adres e-mail, numer telefonu, adres zamieszkania itp.",
        "Dane te pozyskujemy za pośrednictwem formularzy na stronie internetowej www.przegladinstalacji.pl, e-maila, telefonu oraz ciasteczek i innych narzędzi analitycznych. Dane mogą być także przekazane przez strony trzecie (np. zarządców nieruchomości).",
        "Główne cele przetwarzania danych to: świadczenie usług, kontakt z klientami oraz działania marketingowe. W każdej chwili możesz zrezygnować z otrzymywania informacji marketingowych, kontaktując się z nami.",
        "W miarę możliwości poinformujemy Cię, dlaczego potrzebujemy danych i w jaki sposób będą one wykorzystywane.",
      ],
    },
    {
      title: "Inne informacje",
      description: [
        "Możemy gromadzić informacje o przeglądarce, systemie operacyjnym, adresie IP oraz źródle wejścia na naszą stronę. Możemy analizować sposób korzystania z serwisu (częstotliwość odwiedzin, czas spędzony na stronie itp.). Część funkcji strony może nie działać prawidłowo po wyłączeniu obsługi ciasteczek.",
        "Możemy również analizować skuteczność działań marketingowych, jeśli użytkownik nie zrezygnował z udziału w kampanii.",
        "Możemy zbierać zanonimizowane dane o błędach i wydajności działania serwisu.",
      ],
    },
    {
      title: "Dane wrażliwe",
      description: [
        "Dane wrażliwe to m.in. informacje o pochodzeniu rasowym lub etnicznym, poglądach politycznych, stanie zdrowia, przynależności do związków zawodowych itd.",
        "Nie planujemy przetwarzać takich danych, ale jeśli się to zdarzy, dane te będą wykorzystywane wyłącznie:",
      ],
      list: [
        "w celu, dla którego zostały przekazane,",
        "w sposób bezpośrednio powiązany z celem podstawowym,",
        "za Twoją zgodą lub jeśli wymaga tego prawo.",
      ],
    },
    {
      title: "Udostępnianie danych osobowych",
      description: ["Dane osobowe mogą zostać udostępnione:"],
      list: [
        "stronom trzecim za zgodą użytkownika,",
        "w przypadkach wymaganych przez prawo.",
      ],
    },
    {
      title: "Bezpieczeństwo danych osobowych",
      description: [
        "Dane przechowujemy w sposób zabezpieczający przed nieuprawnionym dostępem, modyfikacją lub utratą. Po zakończeniu celu przetwarzania dane są usuwane lub anonimizowane, z wyjątkiem danych, które muszą być przechowywane przez co najmniej 5 lat zgodnie z przepisami.",
        "W miarę możliwości możesz posługiwać się pseudonimem.",
      ],
    },
    {
      title: "Dostęp do danych osobowych",
      description: [
        "Masz prawo wglądu do swoich danych, ich aktualizacji i poprawiania. W tym celu skontaktuj się z nami pisemnie. Przed udzieleniem dostępu możemy poprosić o potwierdzenie tożsamości.",
      ],
    },
    {
      title: "Aktualność danych",
      description: [
        "Dbamy o to, by Twoje dane były aktualne. Jeśli zauważysz, że dane są nieaktualne lub błędne, poinformuj nas o tym, byśmy mogli dokonać stosownych poprawek.",
      ],
    },
    {
      title: "Przekazywanie danych poza Europejski Obszar Gospodarczy",
      description: [
        "Dane osobowe mogą być przekazywane poza EOG jedynie wówczas, gdy odbiorca zapewnia odpowiedni poziom ochrony danych zgodny z RODO (np. przez odpowiednie klauzule umowne).",
      ],
    },
    {
      title: "Aktualizacje polityki",
      description: [
        "Ostatnia aktualizacja polityki: 22 stycznia 2024 r. Zastrzegamy sobie prawo do wprowadzania zmian. Zaktualizowana wersja będzie dostępna na naszej stronie internetowej.",
      ],
    },
    {
      title: "Kontakt i skargi",
      description: [
        "W sprawach dotyczących danych osobowych skontaktuj się z nami:",
      ],
    },
  ],
};
