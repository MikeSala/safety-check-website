import Link from "next/link";
import Icon8Checkmark from "~/src/components/icons/Icon8checkmark";

export interface FaqItem {
  id: number;
  question: string;
  answer: string | JSX.Element;
}

export interface FaqContent {
  title: string;
  items: FaqItem[];
}

/* INFO ABOUT DATA
Sections and ID ranges covered by these sections:
General, 1-10
Smoke, 11-20
Electrical, 21-40
Gas, 41-60
Caravan Gas Compliance Check, 61-70
Switchboard Upgrade, 71-80
Interconnected Smoke Alarm, 81-90
Property Compliance Service, 91-100
Solutions for Landlords, 101-110
Solutions for Property Managers, 111-120
Solutions for Homeowners, 121-130
Solutions for Building Managers, 131-140
Solutions for Real Estate, 141-150
Legislation Page Elements, 151-160*/

const FaqSectionsContent: FaqContent[] = [
  {
    title: "Najczęstsze pytania ogólne",
    items: [
      {
        id: 1,
        question: "Na kiedy mogę umówić się na wizytę?",
        answer: (
          <>
            <p>
              Terminy wizyt są elastyczne. Nasz zespół przyjmuje zgłoszenia od
              poniedziałku do piątku, w godzinach 08:00–16:00.
            </p>
          </>
        ),
      },
      {
        id: 2,
        question: "Ile czasu trwa wizyta?",
        answer: (
          <>
            <p className="mb-2">Czas trwania przeglądów wygląda następująco:</p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Przegląd instalacji elektrycznej: 1–2 godziny</li>
              <li>
                Przegląd instalacji gazowej: 1–3 godziny, w zależności od liczby
                urządzeń
              </li>
              <li>Kontrola czujników dymu: około 15 minut</li>
            </ul>
            Czas trwania może się różnić w zależności od ilości urządzeń lub
            potrzeby wykonania pilnych napraw.
          </>
        ),
      },
      {
        id: 3,
        question: "Jak przygotować się do wizyty?",
        answer: (
          <>
            <p className="mb-2">
              Przed wizytą nasz zespół poinformuje Cię, jak przygotować
              mieszkanie lub lokal, w zależności od rodzaju przeglądu.
            </p>
          </>
        ),
      },
      {
        id: 4,
        question: "Jakie są ryzyka związane z brakiem przeglądów instalacji?",
        answer: (
          <>
            <p className="mb-2">
              Brak regularnych przeglądów instalacji elektrycznych, gazowych
              oraz czujników dymu może prowadzić do poważnych zagrożeń dla
              zdrowia i życia mieszkańców, a także do odpowiedzialności prawnej
              właściciela nieruchomości.
            </p>
            <p>
              Przeglądy elektryczne i gazowe należy wykonywać co dwa lata, a
              czujniki dymu – co najmniej raz do roku. Każdy przegląd powinien
              być wykonany przez licencjonowanego specjalistę.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - czujniki dymu",
    items: [
      {
        id: 11,
        question:
          "Kto odpowiada za czujniki dymu w wynajmowanej nieruchomości?",
        answer: (
          <>
            <p>
              Zgodnie z obowiązującymi przepisami to właściciel nieruchomości ma
              obowiązek:
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Zadbać o prawidłowy montaż i konserwację czujników dymu</li>
              <li>Zapewnić coroczne testowanie każdego czujnika</li>
              <li>Wymieniać baterie w razie potrzeby</li>
            </ul>
            <p>
              Najemca powinien niezwłocznie poinformować właściciela, jeśli
              którykolwiek z czujników przestanie działać.
            </p>
          </>
        ),
      },
      {
        id: 12,
        question:
          "Czy właściciel musi zatrudnić fachowca do konserwacji czujników?",
        answer: (
          <>
            <p className="mb-2">
              Zaleca się, by właściciele zlecali przegląd czujników dymu
              wyspecjalizowanym firmom. Taki wykonawca posiada ubezpieczenie OC
              i gwarantuje profesjonalne wykonanie usługi.
            </p>
          </>
        ),
      },
      {
        id: 13,
        question: "Ile czujników dymu powinno być w domu lub mieszkaniu?",
        answer: (
          <>
            <p>
              Zgodnie z przepisami, co najmniej jeden czujnik powinien być
              zamontowany na każdej kondygnacji budynku. Dokładna liczba zależy
              od układu pomieszczeń.
            </p>
            <p>
              Czujniki powinny spełniać normy bezpieczeństwa zgodne z
              odpowiednimi normami europejskimi.
            </p>
          </>
        ),
      },
      {
        id: 14,
        question: "Czy konserwacja czujników to tylko wymiana baterii?",
        answer: (
          <>
            <p className="mb-2">
              Nie – czujniki mogą tracić skuteczność z powodu kurzu, owadów lub
              starzenia się elektroniki. Dlatego regularna konserwacja i testy
              są niezbędne.
            </p>
            <p>
              Czujniki należy wymieniać co 10 lat lub wcześniej – zgodnie z
              terminem przydatności.
            </p>
          </>
        ),
      },
      {
        id: 15,
        question: "Jak często należy wykonywać przegląd czujników dymu?",
        answer: (
          <>
            <p>
              Zaleca się, aby każdy czujnik dymu był testowany przynajmniej raz
              do roku.
            </p>
          </>
        ),
      },
      {
        id: 16,
        question: "Czy dotyczy to także czujników 240 V zasilanych z sieci?",
        answer: (
          <>
            <p>
              Tak. Czujniki 240 V również wymagają przeglądów – trzeba
              regularnie testować ich działanie, czyścić je, wymieniać baterie
              zapasowe oraz wymieniać urządzenia po upływie ich ważności.
            </p>
          </>
        ),
      },
      {
        id: 17,
        question: "Jakie czujniki są montowane podczas wymiany?",
        answer: (
          <>
            <p>
              Nasi technicy montują czujniki dymu z technologią fotoelektryczną
              – są one standardem w budynkach mieszkalnych i cechują się wysoką
              czułością.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - bezpieczeństwo elektryczne",
    items: [
      {
        id: 21,
        question:
          "Czym jest przegląd elektryczny i jak często trzeba go wykonywać?",
        answer: (
          <>
            <p className="mb-2">
              Przegląd elektryczny to kontrola wszystkich elementów instalacji,
              gniazdek, oświetlenia i zabezpieczeń, wykonywana zgodnie z
              obowiązującymi normami.
            </p>
            <p>
              Zaleca się przeprowadzanie przeglądu co dwa lata, a w przypadku
              wynajmu – przed każdą zmianą najemcy. Przegląd musi być
              przeprowadzony przez licencjonowanego elektryka.
            </p>
          </>
        ),
      },
      {
        id: 22,
        question:
          "Kto odpowiada za wykonanie przeglądu elektrycznego w wynajmowanym mieszkaniu?",
        answer: (
          <>
            <p className="mb-2">
              Odpowiedzialność za regularny przegląd instalacji elektrycznej
              spoczywa na właścicielu nieruchomości.
            </p>
            <p>
              Na żądanie najemcy właściciel powinien przekazać pisemną
              informację z datą ostatniego przeglądu.
            </p>
          </>
        ),
      },
      {
        id: 23,
        question: "Kto jest uprawniony do wykonania przeglądu elektrycznego?",
        answer: (
          <>
            Zgodnie z prawem, przegląd instalacji elektrycznej może wykonać
            wyłącznie licencjonowany lub zarejestrowany elektryk.
          </>
        ),
      },
      {
        id: 24,
        question: "Do jakich pomieszczeń będzie potrzebował dostępu elektryk?",
        answer: (
          <>
            Przegląd instalacji elektrycznej obejmuje kontrolę wszystkich
            dostępnych elementów instalacji, osprzętu i urządzeń. Elektryk musi
            mieć dostęp do gniazdek, włączników, rozdzielnicy elektrycznej oraz
            urządzeń elektrycznych stanowiących wyposażenie wynajmowanego
            lokalu.
          </>
        ),
      },
      {
        id: 25,
        question: "Po co wykonywać przegląd instalacji elektrycznej?",
        answer: (
          <>
            <p>
              Przegląd pozwala wykryć potencjalne zagrożenia i upewnić się, że
              instalacja działa bezpiecznie, chroniąc zarówno nieruchomość, jak
              i jej mieszkańców.
            </p>
          </>
        ),
      },
      {
        id: 26,
        question: "Jak często należy wykonywać przegląd elektryczny?",
        answer: (
          <>
            <p>
              Zaleca się, aby właściciele nieruchomości zapewniali wykonanie
              przeglądu instalacji elektrycznej co najmniej raz na dwa lata
              przez licencjonowanego lub zarejestrowanego elektryka.
            </p>
          </>
        ),
      },
      {
        id: 27,
        question: "Na czym polega przegląd elektryczny?",
        answer: (
          <>
            <p className="mb-2">
              Przegląd instalacji elektrycznej to szczegółowa kontrola systemu
              elektrycznego w budynku, w tym okablowania, rozdzielnic i urządzeń
              elektrycznych.
            </p>
            <p>
              Po przeglądzie właściciel otrzymuje szczegółowy raport z wynikami
              oraz, jeśli to konieczne, wycenę napraw lub modernizacji.
            </p>
          </>
        ),
      },
      {
        id: 28,
        question: "Czy mogę samodzielnie zrobić przegląd elektryczny?",
        answer: (
          <>
            <p>
              Nie. Przegląd elektryczny może wykonać wyłącznie licencjonowany
              specjalista z odpowiednimi uprawnieniami.
            </p>
          </>
        ),
      },
      {
        id: 29,
        question: "Ile czasu trwa przegląd elektryczny?",
        answer: (
          <>
            <p>
              Standardowy przegląd elektryczny trwa od jednej do trzech godzin.
              Czas ten zależy od wielkości nieruchomości i złożoności
              instalacji.
            </p>
          </>
        ),
      },
      {
        id: 30,
        question:
          "Co się stanie, jeśli instalacja elektryczna nie przejdzie przeglądu?",
        answer: (
          <>
            <p>
              Jeśli instalacja nie przejdzie przeglądu, elektryk sporządzi
              szczegółowy raport z wykrytymi nieprawidłowościami oraz
              zaleceniami dotyczącymi napraw lub modernizacji. Może również
              przygotować wycenę tych prac.
            </p>
          </>
        ),
      },
      {
        id: 31,
        question: "Jakie są objawy, że potrzebny jest przegląd elektryczny?",
        answer: (
          <>
            <p>Na konieczność wykonania przeglądu mogą wskazywać:</p>
            <ul className="mb-1 list-disc space-y-1 pl-4">
              <li>Częste zaniki zasilania</li>
              <li>
                Wyłączające się bezpieczniki lub wyzwalacze różnicowoprądowe
              </li>
              <li>Mrugające światła</li>
              <li>Przebarwione lub nadpalone gniazdka</li>
              <li>Zapach spalenizny</li>
              <li>Brzęczenie w instalacji</li>
            </ul>
            <p>
              Jeśli zauważysz którykolwiek z tych objawów, umów przegląd jak
              najszybciej.
            </p>
          </>
        ),
      },
      {
        id: 32,
        question: "Jak bardzo przegląd elektryczny zakłóci mój dzień?",
        answer: (
          <>
            <p>
              Przegląd może trwać kilka godzin, a w tym czasie może być
              konieczne wyłączenie zasilania w niektórych częściach budynku.
              Dokładamy jednak wszelkich starań, aby ograniczyć niedogodności do
              minimum.
            </p>
          </>
        ),
      },
      {
        id: 33,
        question: "Czy muszę być obecny podczas przeglądu elektrycznego?",
        answer: (
          <>
            <p>
              Nie jest to obowiązkowe, ale zalecane. Obecność właściciela lub
              najemcy pozwala na bezpośrednią rozmowę z elektrykiem, zadanie
              pytań i omówienie ewentualnych usterek lub sposobów ich usunięcia.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Bezpieczeństwo Gazowe",
    items: [
      {
        id: 41,
        question:
          "Czym jest przegląd instalacji gazowej i jak często należy go wykonywać?",
        answer: (
          <>
            <p className="mb-2">
              Przegląd instalacji gazowej dotyczy nieruchomości z urządzeniami,
              instalacjami lub przyłączami gazowymi.
            </p>
            <p className="mb-2">
              Zgodnie z polskim prawem budowlanym i przepisami BHP zaleca się,
              aby taki przegląd był wykonywany co najmniej raz w roku przez
              osobę posiadającą odpowiednie uprawnienia gazowe.
            </p>
            <p className="mb-2">
              Regularne kontrole zapewniają bezpieczeństwo użytkowników i
              zgodność z obowiązującymi przepisami.
            </p>
          </>
        ),
      },
      {
        id: 42,
        question:
          "Kto jest odpowiedzialny za wykonywanie przeglądów gazowych w wynajmowanej nieruchomości?",
        answer: (
          <>
            <p className="mb-2">
              W Polsce obowiązek zapewnienia regularnych przeglądów instalacji
              gazowej spoczywa na właścicielu lub zarządcy nieruchomości.
            </p>
            <p>
              Wynajmujący musi zapewnić, aby wszystkie urządzenia i instalacje
              gazowe w lokalu były sprawdzane przez uprawnionego specjalistę co
              najmniej raz w roku.
            </p>
          </>
        ),
      },
      {
        id: 43,
        question: "Kto jest uprawniony do przeprowadzania przeglądu gazowego?",
        answer: (
          <>
            Przegląd instalacji gazowej może przeprowadzić wyłącznie osoba
            posiadająca odpowiednie uprawnienia gazowe (SEP grupa 3) oraz
            doświadczenie w wykonywaniu tego typu kontroli.
          </>
        ),
      },
      {
        id: 44,
        question: "Na czym polega przegląd instalacji gazowej?",
        answer: (
          <>
            <p className="mb-2">Podczas przeglądu uprawniony specjalista:</p>
            <ul className="mb-2 list-disc space-y-2 pl-5">
              <li>Kontroluje stan wszystkich urządzeń gazowych i przewodów.</li>
              <li>
                Sprawdza szczelność instalacji pod kątem ewentualnych wycieków
                gazu.
              </li>
              <li>
                Weryfikuje poprawność działania wentylacji i przewodów
                spalinowych.
              </li>
            </ul>
            <p className="mb-2">
              Dodatkowo może przeprowadzić testy, aby upewnić się, że urządzenia
              działają z odpowiednim ciśnieniem i w wymaganym zakresie zużycia
              gazu.
            </p>
            Po przeglądzie wystawiane jest stosowne potwierdzenie lub protokół.
          </>
        ),
      },
      {
        id: 45,
        question: "Ile czasu trwa przegląd instalacji gazowej?",
        answer: (
          <>
            <p>
              Przegląd instalacji gazowej trwa zwykle od jednej do dwóch godzin,
              w zależności od wielkości nieruchomości i liczby urządzeń
              gazowych.
            </p>
          </>
        ),
      },
      {
        id: 46,
        question: "Czy mogę samodzielnie wykonać przegląd instalacji gazowej?",
        answer: (
          <>
            <p>
              Nie. Tylko osoba posiadająca odpowiednie uprawnienia gazowe i
              przeszkolenie może przeprowadzić przegląd instalacji gazowej
              zgodnie z przepisami.
            </p>
          </>
        ),
      },
      {
        id: 47,
        question: "Co zrobić, jeśli poczuję zapach gazu w domu?",
        answer: (
          <>
            <p>
              Wycieki gazu są bardzo niebezpieczne. W przypadku wyczucia gazu
              należy:
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Nie używać włączników elektrycznych ani urządzeń, które mogą
                wywołać iskrę.
              </li>
              <li>Wyłączyć wszystkie urządzenia gazowe.</li>
              <li>
                Otworzyć wszystkie drzwi i okna, aby przewietrzyć pomieszczenia.
              </li>
              <li>Zakazać palenia i używania otwartego ognia.</li>
              <li>
                Zakręcić zawór gazowy przy liczniku lub butli (jeśli to
                możliwe).
              </li>
              <li>
                Skontaktować się z pogotowiem gazowym lub licencjonowanym
                specjalistą jak najszybciej.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 48,
        question: "Jak bardzo przegląd gazowy zakłóci mój dzień?",
        answer: (
          <>
            <p className="mb-2">
              Przegląd może powodować drobne niedogodności, ponieważ specjalista
              musi mieć dostęp do wszystkich urządzeń i przewodów gazowych.
            </p>
            <p>
              Jeśli dostęp jest zapewniony, staramy się ograniczać zakłócenia do
              minimum.
            </p>
          </>
        ),
      },
      {
        id: 49,
        question: "Czym jest tlenek węgla i dlaczego jest niebezpieczny",
        answer: (
          <>
            {" "}
            <p className="mb-2">
              Tlenek węgla (CO) to bezwonny, bezbarwny i bezsmakowy gaz, którego
              nie da się wykryć bez specjalistycznego sprzętu. Powstaje w wyniku
              niecałkowitego spalania paliw. Po wdychaniu zastępuje tlen we
              krwi, prowadząc do zatrucia.
            </p>
            <p className="mb-2">
              Objawy mogą przypominać grypę, zatrucie pokarmowe lub
              przeziębienie i obejmują m.in. bóle głowy, zawroty głowy,
              nudności, duszności, osłabienie czy ból w klatce piersiowej.
            </p>
          </>
        ),
      },
      {
        id: 50,
        question: "Które urządzenia mogą emitować tlenek węgla?",
        answer: (
          <>
            {" "}
            <p className="mb-2">
              Każde urządzenie gazowe może emitować tlenek węgla, jeśli jest
              niesprawne. Szczególne ryzyko stwarzają nieserwisowane piece
              gazowe oraz używanie urządzeń przenośnych (np. grilli) we
              wnętrzach bez wentylacji.
            </p>
          </>
        ),
      },

      {
        id: 51,
        question:
          "Jakie są konsekwencje braku regularnych przeglądów gazowych?",
        answer: (
          <>
            <p className="mb-2">
              Zgodnie z prawem, przegląd instalacji gazowej musi być
              przeprowadzany co dwa lata przez uprawnionego specjalistę.
              Zaniedbanie tej czynności może skutkować zagrożeniem życia,
              odpowiedzialnością cywilną, a nawet karami finansowymi.
            </p>
          </>
        ),
      },
      {
        id: 52,
        question:
          "Dlaczego mój zawór ciśnieniowo-temperaturowy (PTR) jest niezgodny z przepisami?",
        answer: (
          <>
            <p>
              Zawór PTR musi odprowadzać wodę o temperaturze nawet do 99°C w
              bezpieczne miejsce. Najczęstszą przyczyną niezgodności jest
              skierowanie odpływu w niebezpieczne miejsce.
            </p>
          </>
        ),
      },
      {
        id: 53,
        question: "Co oznacza pęknięty wymiennik ciepła?",
        answer: (
          <>
            <p>
              Wymiennik ciepła musi być szczelny, by nie dochodziło do emisji
              tlenku węgla. W razie wykrycia pęknięcia urządzenie zostaje
              odłączone z powodu zagrożenia.
            </p>
          </>
        ),
      },
      {
        id: 54,
        question: "Czym jest podciśnienie?",
        answer: (
          <>
            <p>
              Podciśnienie powstaje, gdy okapy kuchenne lub wentylatory
              wyciągowe powodują zasysanie powietrza z pomieszczeń. Może to
              doprowadzić do cofania się spalin z urządzeń gazowych, co stanowi
              zagrożenie.
            </p>
          </>
        ),
      },
      {
        id: 55,
        question: "Czym się różni niezgodność krytyczna od niekrytycznej?",
        answer: (
          <>
            <p>
              Niezgodność krytyczna oznacza bezpośrednie zagrożenie i wymaga
              natychmiastowej naprawy. Niekrytyczna nie stanowi zagrożenia w
              danym momencie, ale jej usunięcie jest zalecane.
            </p>
          </>
        ),
      },
      {
        id: 56,
        question: "Dlaczego muszę przenieść regulator gazowy?",
        answer: (
          <>
            <p>
              Aby wykonać pełen przegląd instalacji, regulator musi być dostępny
              dla specjalisty do testów ciśnienia i regulacji.
            </p>
          </>
        ),
      },
      {
        id: 57,
        question: "Dlaczego piec na poddaszu nie został objęty przeglądem?",
        answer: (
          <>
            <p>
              Zgodnie z przepisami (AS/NZS 5601.1), dostęp do pieca musi być
              bezpieczny i zapewniony poprzez platformę techniczną. Jeśli jej
              brak, wykonanie przeglądu może być niemożliwe ze względów BHP.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - przeglądy gazowe w przyczepach kempingowych",
    items: [
      {
        id: 61,
        question:
          "Na czym polega przegląd instalacji gazowej w przyczepie kempingowej?",
        answer:
          "Przegląd instalacji gazowej w przyczepie to kompleksowa kontrola wszystkich instalacji, urządzeń i armatury gazowej. Wszystkie inspekcje wykonujemy zgodnie z polskimi normami i wymaganiami bezpieczeństwa. W niektórych przypadkach przyczepa może wymagać dodatkowych prac, aby spełnić wymagania przed wydaniem zaświadczenia o zgodności.",
      },
      {
        id: 62,
        question:
          "Dlaczego zgodność instalacji gazowej w przyczepie kempingowej jest ważna?",
        answer:
          "Zgodność instalacji gazowej gwarantuje bezpieczeństwo użytkowników i spełnienie wymogów prawnych. Jest to również istotne przy rejestracji pojazdu – zgodność musi być potwierdzana przy każdej sprzedaży lub modyfikacji systemu gazowego.",
      },
      {
        id: 63,
        question:
          "Kto jest uprawniony do przeprowadzenia przeglądu instalacji gazowej w przyczepie?",
        answer:
          "Przeglądu instalacji gazowej może dokonać tylko licencjonowany gazownik, który sprawdzi, czy instalacje i urządzenia spełniają normy bezpieczeństwa i przepisy prawa.",
      },
      {
        id: 64,
        question:
          "Jak często należy wykonywać przegląd instalacji gazowej w przyczepie?",
        answer:
          "Zalecamy coroczne kontrole. System gazowy przyczepy należy również sprawdzić po każdej modyfikacji urządzeń gazowych, po naprawach oraz przed sprzedażą.",
      },
      {
        id: 65,
        question: "Jak przygotować przyczepę kempingową do przeglądu gazowego?",
        answer: `Upewnij się, że:
  - Przyczepa stoi na równym podłożu.
  - Jest zainstalowany punkt testowy gazu.
  - Butla gazowa jest napełniona.
  - Wszystkie urządzenia działają prawidłowo.
  - Masz reduktor dwustopniowy z zabezpieczeniem nadciśnieniowym.
  - Używasz wyłącznie urządzeń z polską lub europejską certyfikacją.`,
      },
      {
        id: 66,
        question: "Czy są przepisy dotyczące przechowywania gazu w przyczepie?",
        answer:
          "Gaz powinien być przechowywany w specjalnej komorze na zewnątrz przyczepy, szczelnej wobec wnętrza, dobrze wentylowanej i odpornej na korozję. Powinna być oznakowana i zawierać wyłącznie zabezpieczone butle gazowe oraz armaturę.",
      },
      {
        id: 67,
        question:
          "Co się dzieje, jeśli moja przyczepa nie przejdzie przeglądu zgodności?",
        answer:
          "Jeśli przyczepa nie przejdzie przeglądu, otrzymasz raport z wyszczególnionymi pracami potrzebnymi do osiągnięcia zgodności. Możesz zlecić je naszej firmie w Krakowie lub innemu wykwalifikowanemu usługodawcy.",
      },
      {
        id: 68,
        question:
          "Jak różne rodzaje gazu wpływają na zgodność instalacji w przyczepie?",
        answer:
          "Różne rodzaje gazu, np. propan i butan, mają różne wymagania dotyczące przechowywania, ustawień ciśnienia i zgodności urządzeń. Przegląd potwierdza, że instalacja w przyczepie jest odpowiednio skonfigurowana dla używanego gazu.",
      },
      {
        id: 69,
        question:
          "Jakie urządzenia bezpieczeństwa są sprawdzane podczas przeglądu?",
        answer:
          "Podczas przeglądu kontrolujemy m.in. czujniki gazu, zawory odcinające awaryjne oraz reduktory ciśnienia.",
      },
      {
        id: 70,
        question:
          "Dlaczego wentylacja w przyczepie jest ważna dla bezpieczeństwa gazowego?",
        answer:
          "Odpowiednia wentylacja jest kluczowa, aby zapobiec gromadzeniu się niebezpiecznych oparów gazu. Podczas przeglądu sprawdzamy, czy system wentylacyjny działa prawidłowo i spełnia przepisy.",
      },
    ],
  },
  {
    title: "FAQ - modernizacja tablic rozdzielczych",
    items: [
      {
        id: 71,
        question:
          "Czym jest tablica rozdzielcza i dlaczego warto ją modernizować?",
        answer:
          "Tablica rozdzielcza zarządza przepływem prądu i rozdziela go do obwodów i urządzeń. Modernizacja pozwala bezpiecznie obsłużyć większe obciążenie elektryczne, zmniejsza ryzyko pożaru lub porażenia prądem. Stara lub przeciążona tablica stanowi poważne zagrożenie dla mieszkańców. Modernizacja może też poprawić efektywność energetyczną, obniżyć rachunki i zwiększyć wartość nieruchomości. Niespełnianie norm może skutkować karami finansowymi.",
      },
      {
        id: 72,
        question:
          "Jakie są kluczowe zmiany w przepisach wpływające na modernizację tablic?",
        answer:
          "Nowe przepisy w Polsce wymagają, by tablice rozdzielcze spełniały najnowsze normy bezpieczeństwa elektrycznego. Muszą być wyposażone w urządzenia wykrywania łuku (AFDD) zapobiegające pożarom od łuku elektrycznego. Muszą też mieć wyłączniki różnicowoprądowe (RCD), które odcinają zasilanie w przypadku wykrycia zwarcia lub upływu prądu. Modernizacja może wymagać wymiany okablowania, przełączników i innych komponentów.",
      },
      {
        id: 73,
        question: "Jak rozpoznać, że moja tablica wymaga modernizacji?",
        answer:
          "Częste wyłączanie bezpieczników, migotanie świateł, zapach spalenizny lub iskrzące przełączniki to typowe sygnały. Aby ocenić zgodność z przepisami i konieczność modernizacji, najlepiej skonsultować się z licencjonowanym elektrykiem.",
      },
      {
        id: 74,
        question: "Jakie są konsekwencje braku modernizacji tablicy?",
        answer:
          "Brak modernizacji i niespełnianie norm może prowadzić do kar finansowych. To też duże zagrożenie dla mieszkańców. W razie wypadku ubezpieczyciel może odmówić wypłaty odszkodowania, a właściciel może ponieść odpowiedzialność za obrażenia lub zniszczenia.",
      },
      {
        id: 75,
        question: "Czy mogę samodzielnie modernizować tablicę rozdzielczą?",
        answer:
          "Nie, modernizację tablicy może przeprowadzić wyłącznie licencjonowany elektryk. Samodzielna próba jest niebezpieczna, grozi obrażeniami lub uszkodzeniem mienia, a także skutkuje brakiem zgodności z obowiązującymi przepisami.",
      },
    ],
  },
  {
    title: "FAQ - Czujniki Dymu Połączone w Sieć",
    items: [
      {
        id: 81,
        question: "Czym jest czujnik dymu połączony w sieć?",
        answer: (
          <p>
            To system czujników, które są ze sobą połączone – jeśli jeden
            wykryje dym, uruchamiają się wszystkie jednocześnie. Zapewnia to
            szybsze ostrzeżenie dla osób znajdujących się w różnych częściach
            budynku.
          </p>
        ),
      },
      {
        id: 82,
        question: "Czym różni się czujnik połączony od tradycyjnego?",
        answer: (
          <p>
            Tradycyjne czujniki działają niezależnie. Połączone w sieć
            komunikują się ze sobą, co zwiększa szanse na szybką ewakuację –
            szczególnie w dużych domach.
          </p>
        ),
      },
      {
        id: 83,
        question: "Dlaczego warto zainstalować czujniki połączone w sieć?",
        answer: (
          <p>
            Dają lepszą ochronę – ogień w piwnicy czy garażu może być wykryty
            wcześniej, a sygnał dotrze do całego domu. To ważne dla rodzin i
            większych budynków.
          </p>
        ),
      },
      {
        id: 84,
        question: "Jak komunikują się czujniki połączone w sieć?",
        answer: (
          <p>
            Najczęściej przez połączenie radiowe (bezprzewodowe), choć niektóre
            starsze modele mogą być połączone przewodowo.
          </p>
        ),
      },
      {
        id: 85,
        question: "Na jakim zasilaniu działają takie czujniki?",
        answer: (
          <p>
            Mogą być zasilane z sieci 230V z baterią awaryjną lub wyłącznie
            bateryjnie. Najlepiej wybrać wersje łączące oba źródła zasilania dla
            bezpieczeństwa w razie awarii prądu.
          </p>
        ),
      },
      {
        id: 86,
        question: "Ile czujników można połączyć w jednej instalacji?",
        answer: (
          <p>
            Zazwyczaj od 12 do 24, zależnie od producenta. Wystarczy to do
            zabezpieczenia całego domu lub mieszkania.
          </p>
        ),
      },
      {
        id: 87,
        question:
          "Czy czujniki połączone w sieć można połączyć z systemem smart home?",
        answer: (
          <p>
            Tak, nowoczesne modele obsługują integrację z aplikacjami i
            systemami inteligentnego domu. Pozwalają one otrzymywać
            powiadomienia na telefon i monitorować czujniki zdalnie.
          </p>
        ),
      },
      {
        id: 88,
        question: "Gdzie najlepiej zamontować czujniki w domu?",
        answer: (
          <p>
            W każdej sypialni, na korytarzach i na każdej kondygnacji. Unikaj
            kuchni i łazienek – para i dym z gotowania mogą wywoływać fałszywe
            alarmy.
          </p>
        ),
      },
      {
        id: 89,
        question: "Jak często należy testować i konserwować czujniki?",
        answer: (
          <p>
            Testuj co miesiąc przyciskiem testowym. Wymieniaj baterie co roku
            (chyba że są to baterie długowieczne). Cały czujnik należy wymienić
            co 10 lat lub zgodnie z zaleceniami producenta.
          </p>
        ),
      },
      {
        id: 90,
        question: "Czy są rekomendowane modele do określonych budynków?",
        answer: (
          <p>
            Tak – różne budynki (np. bloki, domy wolnostojące) mogą mieć inne
            wymagania. Skonsultuj wybór z ekspertem lub zapoznaj się z lokalnymi
            przepisami ppoż.
          </p>
        ),
      },
    ],
  },
  {
    title: "Abonament na zgodność instalacji",
    items: [
      {
        id: 91,
        question: "Czym jest Abonament na Zgodność Instalacji?",
        answer: (
          <>
            <p>
              Abonament na zgodność to usługa w formie rocznego pakietu z
              przeglądami instalacji elektrycznej, gazowej i czujników dymu
              realizowanymi cyklicznie, w preferencyjnej cenie. To wygodne i
              bezpieczne rozwiązanie dla właścicieli nieruchomości.
            </p>
            <p>
              Abonament przeznaczony jest wyłącznie dla mieszkań i domów
              wynajmowanych.
            </p>
          </>
        ),
      },
      {
        id: 92,
        question: "Jak często wykonywane są przeglądy?",
        answer: (
          <p>
            Usługa obejmuje:
            <ul className="list-disc space-y-2 pl-5">
              <li>Przegląd instalacji elektrycznej co 2 lata</li>
              <li>Przegląd instalacji gazowej co 2 lata</li>
              <li>Przegląd czujników dymu raz w roku</li>
            </ul>
          </p>
        ),
      },
      {
        id: 93,
        question: "Jakie wezwania serwisowe są objęte abonamentem?",
        answer: (
          <>
            W ramach abonamentu realizujemy zgłoszenia dotyczące bezpieczeństwa
            instalacji gazowej i elektrycznej, w tym problemy z urządzeniami
            gazowymi, iskrownikami, rozdzielnicą czy gniazdkami.
          </>
        ),
      },
      {
        id: 94,
        question: "Co jeśli problem z urządzeniem powraca?",
        answer: (
          <>
            Wykonujemy naprawy i zalecamy rozwiązania. Jeśli jednak klient nie
            zastosuje się do rekomendacji, zastrzegamy sobie prawo do wyłączenia
            danego urządzenia z dalszych usług.
          </>
        ),
      },
      {
        id: 95,
        question: "Czy w abonamencie są darmowe części zamienne?",
        answer: (
          <>
            Tak, w cenie abonamentu zawarte są m.in.: wymiana termopar (gaz),
            standardowe wyłączniki różnicowoprądowe, gniazdka, bezpieczniki i
            wyłączniki nadprądowe (elektryka).
          </>
        ),
      },
      {
        id: 96,
        question: "Czego nie obejmuje abonament?",
        answer: (
          <>
            Abonament nie obejmuje ogólnych usterek instalacji, wymiany żarówek,
            opraw oświetleniowych oraz napraw niezwiązanych z bezpieczeństwem.
          </>
        ),
      },
      {
        id: 97,
        question: "Jakie materiały są bezpłatnie dostarczane w ramach usługi?",
        answer: (
          <>
            <p className="mb-2">
              Dla instalacji gazowej: zawory kontrolne, nagrzewnice tymczasowe,
              izolacja rur PEX.
            </p>
            <p className="mb-2">
              Dla elektryki: standardowe gniazdka i włączniki.
            </p>
          </>
        ),
      },
      {
        id: 98,
        question: "Kiedy zaczyna się abonament?",
        answer: <>Abonament aktywowany jest w dniu wystawienia faktury.</>,
      },
      {
        id: 99,
        question: "Kiedy wykonywane są usługi?",
        answer: (
          <>
            Prace serwisowe rozpoczynają się po aktywacji abonamentu, ale nie
            zawsze dokładnie w dniu jego startu – ze względów logistycznych.
          </>
        ),
      },
      {
        id: 100,
        question: "Jak przebiega płatność?",
        answer: (
          <>
            Dla klientów współpracujących z agencjami nieruchomości – płatności
            koordynowane są przez agencje. Pozostali otrzymują faktury
            bezpośrednio od nas.
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Rozwiązania dla Właścicieli Nieruchomości na Wynajem",
    items: [
      {
        id: 101,
        question:
          "Jakie przepisy muszę spełniać jako właściciel mieszkania lub domu na wynajem?",
        answer: (
          <>
            <p>
              Jako właściciel masz obowiązek zapewnić zgodność z polskim prawem
              budowlanym i przepisami PPOŻ. Obejmuje to m.in.:
              <ul className="mb-1 list-disc space-y-2 pl-5">
                <li>
                  Regularne przeglądy instalacji elektrycznej i gazowej przez
                  uprawnionego specjalistę co najmniej co 2 lata.
                </li>
                <li>
                  Czujniki dymu muszą być zamontowane, sprawne, testowane co
                  najmniej raz w roku i mieć wymieniane baterie. Najemca
                  powinien zgłaszać niesprawność.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 102,
        question: "Kiedy mogę umówić wizytę technika?",
        answer: (
          <>
            <p>
              Przeglądy i serwis wykonujemy od poniedziałku do piątku w
              godzinach 8:00–16:00. Sobota – wyłącznie po wcześniejszym
              ustaleniu.
            </p>
          </>
        ),
      },
      {
        id: 103,
        question: "Ile trwa wizyta technika?",
        answer: (
          <>
            <p>
              Czas trwania zależy od usługi:
              <ul className="mb-1 list-disc space-y-2 pl-5">
                <li>Elektryka: ok. 1–2 godziny</li>
                <li>Gaz: ok. 1–3 godziny</li>
                <li>Czujniki dymu: ok. 15 minut</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 104,
        question:
          "Co polecacie właścicielom, którzy chcą mieć wszystko pod kontrolą?",
        answer: (
          <>
            <p>
              Polecamy{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc"
              >
                Abonament na Zgodność
              </Link>
              . To kompleksowa usługa, która zapewnia pełną zgodność z
              przepisami i spokój na co dzień.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Usługa „wszystko w jednym”: mniej wizyt, niskie ceny, szybka
                reakcja.
              </li>
              <li>
                Obsługa bez zaangażowania: my pamiętamy o terminach i zapewniamy
                dokumentację.
              </li>
              <li>
                Stała cena roczna – brak ukrytych kosztów i pewność działania.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 105,
        question:
          "Jakie są konsekwencje prawne i praktyczne braku regularnych przeglądów instalacji elektrycznej, gazowej i czujników dymu w nieruchomościach na wynajem?",
        answer: (
          <>
            <p>
              W Polsce właściciel nieruchomości ma obowiązek zapewnienia
              bezpieczeństwa lokalu zgodnie z Prawem budowlanym, ustawą o
              ochronie przeciwpożarowej oraz Kodeksem cywilnym. Brak cyklicznych
              przeglądów instalacji elektrycznej, gazowej i niesprawne czujniki
              dymu może skutkować:
            </p>
            <ul className="mt-2 list-disc space-y-2 pl-5">
              <li>odpowiedzialnością cywilną i karną w razie wypadku,</li>
              <li>
                karami administracyjnymi lub sankcjami z nadzoru budowlanego,
              </li>
              <li>nieważnością polisy ubezpieczeniowej,</li>
              <li>zagrożeniem życia i zdrowia najemców.</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Rozwiązania dla Zarządców Nieruchomości",
    items: [
      {
        id: 111,
        question:
          "Jakie normy bezpieczeństwa powinienem uwzględniać przy instalacjach elektrycznych, gazowych i czujnikach dymu w wynajmowanych lokalach?",
        answer: (
          <>
            <p>
              Jako zarządca nieruchomości masz obowiązek zapewnić zgodność
              lokali z obowiązującymi przepisami budowlanymi oraz PPOŻ w imieniu
              właścicieli. Wymagane są:
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Przeglądy instalacji elektrycznej i gazowej – co najmniej raz na
                2 lata, wykonywane przez uprawnionych specjalistów.
              </li>
              <li>
                Sprawne i przetestowane czujniki dymu – minimum raz w roku.
                Wymiana baterii oraz naprawa po zgłoszeniu usterki przez
                najemcę.
              </li>
            </ul>
            <p>
              Oferujemy zarówno pojedyncze przeglądy, jak i usługę abonamentową
              obejmującą wszystkie elementy bezpieczeństwa w jednym pakiecie.
            </p>
            <p>
              Dowiedz się więcej o{" "}
              <Link
                href="/abonament-na-zgodnosc"
                className="text-blue-500 hover:underline"
              >
                Abonamencie na Zgodność
              </Link>{" "}
              i zadbaj o terminową zgodność z przepisami bez zbędnego stresu.
            </p>
          </>
        ),
      },
      {
        id: 112,
        question: "Ile czasu trwają poszczególne przeglądy?",
        answer: (
          <>
            <p>Szacowany czas wykonania usługi:</p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Przegląd elektryczny: 1–2 godziny</li>
              <li>Przegląd gazowy: 1–3 godziny</li>
              <li>Kontrola czujników dymu: ok. 15 minut</li>
            </ul>
            <p>
              Czas może się wydłużyć w zależności od liczby urządzeń lub
              potrzeby wykonania naprawy.
            </p>
          </>
        ),
      },
      {
        id: 113,
        question: "Jak przygotować lokal do przeglądów?",
        answer: (
          <p>
            Nasz zespół przed każdą wizytą przekazuje szczegółowe informacje
            dopasowane do rodzaju nieruchomości i zakresu kontroli.
          </p>
        ),
      },
      {
        id: 114,
        question: "Jaką usługę polecacie zapracowanym zarządcom nieruchomości?",
        answer: (
          <>
            <p>
              Najlepszym rozwiązaniem jest{" "}
              <Link
                href="/abonament-na-zgodnosc"
                className="text-blue-500 hover:underline"
              >
                Abonament na Zgodność
              </Link>
              , który kompleksowo obsługuje wszystkie wymagane przeglądy,
              pozwalając Ci zająć się innymi obowiązkami.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Kompletna usługa – jeden pakiet, minimum wizyt i niskie koszty
              </li>
              <li>
                Zarządzanie bezobsługowe – my pamiętamy o terminach i naprawach
              </li>
              <li>Stała cena roczna – pełna przewidywalność i dokumentacja</li>
            </ul>
          </>
        ),
      },
      {
        id: 115,
        question:
          "Jakie są konsekwencje braku cyklicznych przeglądów instalacji i czujników?",
        answer: (
          <>
            <p>
              Obowiązkiem zarządcy jest nadzorowanie zgodności z przepisami dla
              wszystkich zarządzanych lokali. Zaniedbanie przeglądów może
              skutkować odpowiedzialnością prawną, brakiem ważności
              ubezpieczenia oraz zagrożeniem życia lokatorów.
            </p>
            <p>
              Skorzystaj z{" "}
              <Link
                href="/abonament-na-zgodnosc"
                className="text-blue-500 hover:underline"
              >
                Abonamentu na Zgodność
              </Link>
              , który realizuje wszystkie kontrole w Twoim imieniu.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Rozwiązania dla Właścicieli Domów",
    items: [
      {
        id: 121,
        question:
          "Jakie standardy bezpieczeństwa powinienem znać w zakresie instalacji elektrycznych, urządzeń gazowych i czujników dymu w moim domu?",
        answer: (
          <>
            <p>
              Zgodnie z przepisami *Residential Tenancies Regulations 2021*
              Twoje obowiązki obejmują:
              <ul className="mt-1 list-disc space-y-2 pl-5">
                <li>
                  Przeglądy instalacji elektrycznej i gazowej: Obie instalacje
                  powinny być sprawdzane przez wykwalifikowanych specjalistów co
                  dwa lata. Najemcy mają prawo znać daty ostatnich kontroli na
                  żądanie.
                </li>
                <li className="mb-1">
                  Czujniki dymu: Muszą być poprawnie zainstalowane, konserwowane
                  i testowane zgodnie z instrukcją producenta co najmniej raz w
                  roku. Baterie należy wymieniać w razie potrzeby. Jeśli czujnik
                  dymu jest niesprawny, obowiązkiem najemcy jest zgłoszenie tego
                  pisemnie.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 122,
        question: "Ile trwa każda wizyta serwisowa?",
        answer: (
          <>
            <p>
              Czas trwania wizyty zależy od rodzaju usługi:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>Przegląd elektryczny: 1–2 godziny</li>
                <li>Przegląd gazowy: 1–3 godziny</li>
                <li>Kontrola czujników dymu: około 15 minut</li>
              </ul>
            </p>
            <p>
              Czas może się różnić w zależności od liczby urządzeń lub
              konieczności pilnych napraw.
            </p>
          </>
        ),
      },
      {
        id: 123,
        question: "Jak przygotować nieruchomość do przeglądów?",
        answer: (
          <>
            <p>
              Nasz zespół poinformuje Cię o wszelkich wymaganych
              przygotowaniach, zależnie od rodzaju usług i typu nieruchomości.
            </p>
          </>
        ),
      },
      {
        id: 124,
        question:
          "Jaką usługę polecacie osobom zapracowanym, które chcą zadbać o zgodność z przepisami?",
        answer: (
          <>
            <p>
              Rekomendujemy naszą usługę{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              . Usługa ta zapewnia zgodność z aktualnymi przepisami, w
              szczególności dotyczącymi kontroli bezpieczeństwa. Eliminuje
              konieczność pamiętania o terminach i zapewnia kompleksową obsługę.
            </p>
          </>
        ),
      },
      {
        id: 125,
        question:
          "Jakie są potencjalne konsekwencje braku regularnych przeglądów instalacji elektrycznej, gazowej i czujników dymu?",
        answer: (
          <>
            <p>
              Dla właścicieli nieruchomości w stanie Wiktoria kluczowe jest, aby
              licencjonowani specjaliści przeprowadzali przeglądy instalacji
              elektrycznych i gazowych co dwa lata. Zaniechanie tych obowiązków
              grozi poważnymi konsekwencjami prawnymi oraz zagrożeniem życia.
            </p>
            <p>
              Jeśli dbanie o zgodność z przepisami wydaje się zbyt
              skomplikowane, skorzystaj z{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              – subskrypcyjnej usługi, która przejmuje odpowiedzialność za
              przeprowadzanie wszystkich wymaganych przeglądów.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Rozwiązania dla Zarządców Budynków",
    items: [
      {
        id: 131,
        question:
          "Jakie standardy bezpieczeństwa powinienem znać w zakresie instalacji elektrycznych, urządzeń gazowych i czujników dymu w lokalach, którymi zarządzam?",
        answer: (
          <>
            <p>
              Zgodnie z przepisami *Residential Tenancies Regulations 2021*,
              Twoje obowiązki obejmują:
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Przeglądy instalacji elektrycznej i gazowej: Obie instalacje
                powinny być sprawdzane przez wykwalifikowanych specjalistów co
                dwa lata. Najemcy mają prawo znać daty ostatnich kontroli na
                żądanie.
              </li>
              <li>
                Czujniki dymu: Muszą być poprawnie zainstalowane, konserwowane i
                testowane zgodnie z instrukcją producenta co najmniej raz w
                roku. Baterie należy wymieniać w razie potrzeby. Jeśli czujnik
                dymu jest niesprawny, obowiązkiem najemcy jest zgłoszenie tego
                pisemnie.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 132,
        question: "Ile trwają poszczególne przeglądy bezpieczeństwa?",
        answer: (
          <>
            <p>Czas trwania przeglądu zależy od rodzaju usługi:</p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Przegląd elektryczny: 1–2 godziny</li>
              <li>Przegląd gazowy: 1–3 godziny</li>
              <li>Kontrola czujników dymu: około 15 minut</li>
            </ul>
            <p>
              Czas może się różnić w zależności od liczby urządzeń lub
              konieczności pilnych napraw.
            </p>
          </>
        ),
      },
      {
        id: 133,
        question: "Jak przygotować nieruchomość do przeglądów?",
        answer: (
          <>
            <p>
              Nasz zespół udzieli szczegółowych instrukcji dostosowanych do
              rodzaju nieruchomości i planowanych przeglądów.
            </p>
          </>
        ),
      },
      {
        id: 134,
        question:
          "Jaką usługę polecacie zapracowanym zarządcom budynków, aby zadbali o zgodność z przepisami?",
        answer: (
          <>
            <p>
              Rekomendujemy naszą usługę
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              . Usługa ta zapewnia zgodność z aktualnymi przepisami i eliminuje
              konieczność pamiętania o terminach.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Wszystko w jednym: mniej wizyt, niższe koszty, szybkie naprawy.
              </li>
              <li>Zarządzanie bez wysiłku: my zajmujemy się wszystkim.</li>
              <li>Jasne ceny: stała opłata roczna po pierwszym roku.</li>
            </ul>
          </>
        ),
      },
      {
        id: 135,
        question:
          "Jakie są potencjalne konsekwencje braku regularnych przeglądów instalacji elektrycznej, gazowej i czujników dymu?",
        answer: (
          <>
            <p className="mb-4">
              Zarządcy budynków muszą przestrzegać przepisów *Residential
              Tenancies Regulations 2021*, zapewniając regularne przeglądy przez
              licencjonowanych specjalistów co dwa lata. Brak działań może
              prowadzić do poważnych konsekwencji prawnych i zagrożenia życia
              mieszkańców.
            </p>
            <p>
              Aby temu zapobiec, skorzystaj z
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              – subskrypcyjnej usługi realizującej wszystkie obowiązkowe
              przeglądy.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "FAQ - Rozwiązania dla Agencji Nieruchomości",
    items: [
      {
        id: 141,
        question:
          "Jakie standardy bezpieczeństwa powinienem znać w zakresie instalacji elektrycznych, gazowych i czujników dymu w nieruchomościach, którymi zarządzamy?",
        answer: (
          <>
            <p>
              Zgodnie z *Residential Tenancies Regulations 2021* Twoje obowiązki
              obejmują:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>Regularne kontrole elektryczne i gazowe co 2 lata</li>
                <li>
                  Testy i konserwacja czujników dymu przynajmniej raz w roku
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 142,
        question: "Ile zazwyczaj trwają poszczególne przeglądy?",
        answer: (
          <>
            <p>
              To zależy od usługi:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>Instalacje elektryczne: 1–2 godziny</li>
                <li>Instalacje gazowe: 1–3 godziny</li>
                <li>Czujniki dymu: ok. 15 minut</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 143,
        question: "Jak przygotować nieruchomość do przeglądów?",
        answer: (
          <>
            <p>
              Nasz zespół przeprowadzi Cię przez proces przygotowania na
              podstawie rodzaju Twojej nieruchomości i wybranych usług.
            </p>
          </>
        ),
      },
      {
        id: 144,
        question:
          "Jaką usługę polecacie zapracowanym agencjom nieruchomości, które chcą dbać o zgodność z przepisami?",
        answer: (
          <>
            <p>
              Polecamy naszą
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              . Gwarantuje zgodność z przepisami i wygodę zarządzania.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Wszystko w jednym: mniej wizyt, szybsze naprawy</li>
              <li>Brak stresu: pełne zarządzanie przez nasz zespół</li>
              <li>Przejrzyste ceny: stała opłata po pierwszym roku</li>
            </ul>
          </>
        ),
      },
      {
        id: 145,
        question:
          "Jakie są konsekwencje zaniechania regularnych przeglądów elektrycznych, gazowych i przeciwpożarowych?",
        answer: (
          <>
            <p className="mb-4">
              Obowiązkiem agencji nieruchomości jest zapewnienie, że wszystkie
              nieruchomości są objęte kontrolami co 2 lata przez uprawnionych
              fachowców. Brak działań może prowadzić do sankcji prawnych i
              zagrożeń dla najemców.
            </p>
            <p>
              Aby ułatwić przestrzeganie przepisów, oferujemy
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/abonament-na-zgodnosc/"
              >
                Property Compliance Subscription
              </Link>
              – kompleksową usługę przeglądów w ramach jednej subskrypcji.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Wymagania Prawne",
    items: [
      {
        id: 151,
        question: "Bezpieczeństwo Instalacji Elektrycznych",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Obowiązkowe kontrole instalacji elektrycznej – zgodnie z polskim
              prawem
            </p>
            <p className="mb-4">
              Zgodnie z ustawą Prawo budowlane oraz Rozporządzeniem Ministra
              Infrastruktury, właściciel lub zarządca budynku ma obowiązek
              wykonywania okresowej kontroli instalacji elektrycznej co najmniej
              raz na 5 lat. Kontrola obejmuje stan techniczny, sprawność
              połączeń, zabezpieczeń i środków ochrony przeciwporażeniowej.
            </p>
            <p className="mb-4">
              Kontrola powinna być przeprowadzana przez osobę z odpowiednimi
              uprawnieniami SEP (Stowarzyszenie Elektryków Polskich).
            </p>
            <p className="mb-4">
              W nowoczesnych instalacjach wymagane jest również stosowanie
              wyłączników różnicowoprądowych (RCD) oraz zabezpieczeń
              nadprądowych zgodnych z obowiązującymi normami technicznymi.
            </p>
            <ul className="mb-4 list-disc">
              <li className="mb-2 mr-2 flex h-10 items-center">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                Regularna kontrola rozdzielnic, przewodów i gniazd
                elektrycznych.
              </li>
              <li className="mb-2 mr-2 flex h-10 items-center">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                Weryfikacja obecności i sprawności wyłączników
                różnicowoprądowych.
              </li>
            </ul>{" "}
          </>
        ),
      },
      {
        id: 152,
        question: "Bezpieczeństwo Instalacji Gazowych",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Przeglądy instalacji gazowej – obowiązki właściciela lub zarządcy
            </p>
            <p>
              Właściciel lub zarządca budynku ma obowiązek zapewnienia
              regularnych kontroli instalacji gazowych zgodnie z przepisami
              Prawa budowlanego. Przegląd powinien być wykonywany co najmniej
              raz w roku przez osobę posiadającą odpowiednie uprawnienia gazowe.
            </p>
            <ul className="mb-1 list-disc">
              <li className="mb-2 flex h-20 items-center">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                Kontrola obejmuje szczelność instalacji, stan przewodów i
                urządzeń gazowych.
              </li>
              <li className="mb-2 flex h-20 items-center">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                Brak wykonania przeglądu może skutkować sankcjami
                administracyjnymi i zwiększa ryzyko awarii.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 153,
        question: "Bezpieczeństwo Instalacji Przeciwpożarowych",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Czujniki dymu – obowiązki wynikające z przepisów przeciwpożarowych
            </p>
            <ol>
              <li>
                Właściciel lub zarządca nieruchomości ma obowiązek:
                <ul className="mb-1 mt-1 list-disc space-y-2">
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    zapewnić sprawność działania czujników dymu we wszystkich
                    lokalach,
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    dokonywać testów zgodnie z zaleceniami producenta co
                    najmniej raz w roku,
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    wymieniać baterie w czujnikach, jeśli są wymagane.
                  </li>
                </ul>
              </li>
              <li>
                W razie zgłoszenia niesprawności czujnika, należy bezzwłocznie
                zlecić jego naprawę lub wymianę. W przypadku czujników
                zasilanych sieciowo, wymiana powinna być przeprowadzona przez
                osobę uprawnioną.
              </li>
              <li>
                Przed wynajmem lokalu najemcy należy przekazać instrukcję
                obsługi czujników, w tym:
                <ul className="mb-1 mt-1 list-disc space-y-2">
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    sposób działania i testowania urządzeń,
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    obowiązek nieingerowania w czujniki oraz zgłaszania usterek.
                  </li>
                </ul>
              </li>
              <li>
                Najemca ma obowiązek zgłosić niesprawność czujnika zaraz po jej
                wykryciu.
                <p className="mb-4 mt-4 text-center italic">
                  Uwaga – Zgodnie z Rozporządzeniem Ministra Infrastruktury, w
                  każdym budynku mieszkalnym wymagane jest stosowanie czujników
                  dymu lub systemów sygnalizacji pożaru.
                </p>
              </li>
            </ol>
          </>
        ),
      },
    ],
  },
];

export default FaqSectionsContent;
