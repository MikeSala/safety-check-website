import Link from "next/link";
import { Icons8ArrowRight, Icons8checkmark } from "~/src/components/icons";
import Icon8Checkmark from "~/src/components/icons/Icon8checkmark";

export interface FaqItem {
  id: number;
  question: string;
  answer: string | JSX.Element;
}

export interface FaqSectionData {
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

const FaqSectionsData: FaqSectionData[] = [
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
    title: "Najczęstsze pytania – czujniki dymu",
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
    title: "Najczęstsze pytania – bezpieczeństwo elektryczne",
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
    title: "Bezpieczeństwo Gazowe",
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
    title: "FAQ dotyczące przeglądów gazowych w przyczepach kempingowych",
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
        answer:
          "Upewnij się, że: - Przyczepa stoi na równym podłożu. - Jest zainstalowany punkt testowy gazu. - Butla gazowa jest napełniona. - Wszystkie urządzenia działają prawidłowo. - Masz reduktor dwustopniowy z zabezpieczeniem nadciśnieniowym. - Używasz wyłącznie urządzeń z polską lub europejską certyfikacją.",
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
    title: "FAQ dotyczące modernizacji tablic rozdzielczych",
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
    title: "Interconnected Smoke Alarms FAQ",
    items: [
      {
        id: 81,
        question: "What's an interconnected smoke alarm?",
        answer: (
          <>
            {" "}
            <p>
              An interconnected smoke alarm is a system where multiple smoke
              alarms are linked so that, if one detects smoke, all the alarms
              sound simultaneously. This interconnectedness ensures that people
              in all areas of a property are alerted prompty.
            </p>
          </>
        ),
      },
      {
        id: 82,
        question:
          "How do interconnected smoke alarms differ from traditional smoke alarms?",
        answer: (
          <>
            <p>
              Traditional smoke alarms operate independently. In contrast,
              interconnected alarms communicate with each other, ensuring that
              if one alarm is triggered, every alarm in the system sounds. This
              increases the chances of early detection and evacuation.
            </p>
          </>
        ),
      },
      {
        id: 83,
        question:
          "Why should I consider installing interconnected smoke alarms in my property?",
        answer: (
          <>
            {" "}
            <p>
              Interconnected alarms provide enhanced safety. If a fire starts in
              a remote part of a property, residents in other areas are alerted
              immediately, increasing evacuation time. This can be especially
              important in larger homes or properties.
            </p>
          </>
        ),
      },
      {
        id: 84,
        question:
          "How do interconnected smoke alarms communicate with each other?",
        answer: (
          <>
            {" "}
            <p>
              Most modern interconnected alarms communicate wirelessly, while
              some older systems may use hard-wired connections. This
              communication ensures synchronous alerts across alarms, creating a
              networked safety system.
            </p>
          </>
        ),
      },
      {
        id: 85,
        question:
          "What power sources can interconnected smoke alarms operate on: batteries, mains power, or both?",
        answer: (
          <>
            {" "}
            <p>
              They can operate on both. Many interconnected alarms are
              hard-wired to the mains power with a battery backup, ensuring they
              work even during power outages. This dual-power approach maximises
              reliability.
            </p>
          </>
        ),
      },
      {
        id: 86,
        question:
          "How many interconnected smoke alarms can be linked together in a single system?",
        answer: (
          <>
            {" "}
            <p>
              It varies by brand and model, but commonly, up to 12-24 alarms can
              be interconnected in one system. This range allows them to cater
              to properties of different sizes.
            </p>
          </>
        ),
      },
      {
        id: 87,
        question:
          "Are interconnected smoke alarms compatible with smart home systems or apps?",
        answer: (
          <>
            {" "}
            <p>
              Yes, many modern interconnected alarms can integrate with smart
              home systems, allowing remote monitoring and notifications via
              smartphone apps. This feature adds an additional layer of
              convenience and security.
            </p>
          </>
        ),
      },
      {
        id: 88,
        question:
          "What considerations should be made when positioning interconnected smoke alarms throughout a property?",
        answer: (
          <>
            {" "}
            <p>
              Alarms should be placed in every bedroom, outside sleeping areas,
              and on every level of the home. Avoid placing them near kitchens
              or bathrooms to reduce false alarms from steam or cooking smoke.
              Proper placement ensures effective coverage and reduces nuisances.
            </p>
          </>
        ),
      },
      {
        id: 89,
        question:
          "How frequently do interconnected smoke alarms need maintenance or testing?",
        answer: (
          <>
            {" "}
            <p>
              Test interconnected alarms monthly using the test button. Replace
              batteries annually (unless they&apos;re long-life batteries) and
              replace the entire unit every 10 years or as recommended by the
              manufacturer. Regular testing and maintenance keep the system
              optimal.
            </p>
          </>
        ),
      },
      {
        id: 90,
        question:
          "Are there specific brands or types of interconnected smoke alarms recommended for certain types of buildings or conditions?",
        answer: (
          <>
            {" "}
            <p>
              Recommendations can vary based on regional regulations and
              building types. Always check local guidelines and consult with
              fire safety professionals when choosing a system. Different
              structures might have unique requirements.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Property Compliance Subscription FAQ",
    items: [
      {
        id: 91,
        question: "What is the Property Compliance Subscription?",
        answer: (
          <>
            {" "}
            <p>
              The Property Compliance Subscription offers regular electrical,
              gas and smoke alarm safety checks as a package for a discounted
              annual fee. It&apos;s a simple and effective solution.
            </p>{" "}
            <p>
              The Property Compliance Subscription is available only for rental
              properties.
            </p>
          </>
        ),
      },
      {
        id: 92,
        question: "How often are the safety checks conducted on my property?",
        answer: (
          <>
            <p>
              This service includes:
              <ul className="list-disc space-y-2 pl-5">
                <li>An electrical safety check every two years.</li>
                <li>A gas safety check every two years.</li>
                <li>A smoke alarm safety check every year.</li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 93,
        question:
          "What kind of service calls are covered under the Property Compliance Subscription?",
        answer: (
          <>
            Service calls for verified safety issues related to gas and
            electrical installations, appliances and fittings are covered under
            the subscription. This includes problems with gas appliances, pilot
            light reignition, switchboards and power points.
          </>
        ),
      },
      {
        id: 94,
        question:
          "What happens if there's a recurring issue with my gas or electrical appliance?",
        answer: (
          <>
            We will provide solutions for any reported appliance issues.
            However, we reserve the right to exclude recurring appliance issues
            from the service if RCSC&apos;s repair recommendations are declined.
          </>
        ),
      },
      {
        id: 95,
        question:
          "Are there any complimentary parts included in the subscription?",
        answer: (
          <>
            Yes, certain complementary parts are included, such as thermocouple
            replacements for gas services, standard safety switches, light
            switches, power points, fuses, and circuit breakers for electrical
            services.
          </>
        ),
      },
      {
        id: 96,
        question:
          "What's not covered in the subscription regarding electrical installations and appliances?",
        answer: (
          <>
            The subscription doesn&apos;t cover general faults in electrical
            installations, appliances and fittings, as well as issues with
            lighting or the replacement of light bulbs.
          </>
        ),
      },
      {
        id: 97,
        question:
          "What kind of materials are provided for free under the subscription?",
        answer: (
          <>
            <p className="mb-2">
              For gas safety, examples include control valve replacements,
              temporary heaters and lagging of exposed PEX pipework.
            </p>
            <p className="mb-2">
              For electrical safety, the materials include standard switch and
              socket outlet.
            </p>
          </>
        ),
      },
      {
        id: 98,
        question: "When does the subscription start?",
        answer: <>It begins on the invoice issuance date.</>,
      },
      {
        id: 99,
        question: "When are the services executed?",
        answer: (
          <>
            Services start as soon as the subscription becomes active. However,
            they&apos;re not normally executed on the subscription start date
            itself in order to avoid operational difficulties.
          </>
        ),
      },
      {
        id: 100,
        question: "How is payment for services processed?",
        answer: (
          <>
            For those affiliated with our partner agencies, we coordinate
            payments through them. Other clients receive invoices directly from
            us.
          </>
        ),
      },
    ],
  },
  {
    title: "Solutions for Landlords FAQ",
    items: [
      {
        id: 101,
        question:
          "What safety standards should I be aware of for electrical systems, gas appliances, and smoke alarms in my rental properties?",
        answer: (
          <>
            <p>
              As a Landlord, you must uphold the Residential Tenancies
              Regulations 2021 by observing the following:
              <ul className="mb-1 list-disc space-y-2 pl-5">
                <li>
                  Safety Checks for Electrical and Gas Installations: Both
                  electrical and gas systems should undergo safety checks by
                  qualified professionals every two years. Tenants are entitled
                  to know the dates of the latest checks upon request.
                </li>
                <li>
                  Smoke Alarms: They must be correctly installed, maintained,
                  and tested according to the manufacturer&apos;s instructions
                  at least once a year. Batteries should be replaced when
                  required. If a smoke alarm is found to be defective, it&apos;s
                  the tenant&apos;s responsibility to report it in writing.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 102,
        question: "When can I schedule an appointment?",
        answer: (
          <>
            <p>
              You can schedule an appointment Monday to Friday, between 08:00
              and 16:00.
            </p>
            <p>Saturdays are available by prior arrangement only.</p>
          </>
        ),
      },
      {
        id: 103,
        question: "How long does each appointment take?",
        answer: (
          <>
            <p>
              The duration of the appointment depends on the service:
              <ul className="mb-1 list-disc space-y-2 pl-5">
                <li>Electrical checks: 1-2 hours</li>
                <li>Gas safety checks: 1-3 hours</li>
                <li>Smoke alarm checks: ~15 minutes</li>
              </ul>
              However, these times can vary for several reasons, such as the
              number of appliances or the need for urgent repairs.
            </p>
          </>
        ),
      },
      {
        id: 104,
        question:
          "What service do you suggest for busy landlords who want to ensure their compliance with current regulations?",
        answer: (
          <>
            {" "}
            <p>
              We recommend our{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>{" "}
              . This service is designed to maintain compliance with the latest
              regulations, particularly around safety checks. It removes the
              hassle of remembering deadlines and ensures everything is always
              up-to-date.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                All-In-One Service: Fewer repeat visits, guaranteed lowest
                prices, and swift problem resolution.
              </li>
              <li>
                Hands-Free Management: Set and forget. We handle urgent repairs
                and regular checks, providing a clear audit trail.
              </li>
              <li>
                Transparent Pricing: A consistent annual fee after the first
                year for hassle-free compliance management.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 105,
        question:
          "As a landlord, what are the consequences of neglecting to conduct consistent electrical, gas and smoke alarm safety inspections at rental properties?",
        answer: (
          <>
            <p>
              In Victoria, Landlords are legally required to ensure licensed
              professionals perform electrical and gas safety checks on all
              their properties every two years. Failure to do so will result in
              serious legal consequences and may endanger the tenants&apos;
              lives.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Solutions for Property Managers FAQ",
    items: [
      {
        id: 111,
        question:
          "What safety standards should I be aware of for electrical systems, gas appliances and smoke alarms in my rental units?",
        answer: (
          <>
            <p>
              As a Property Manager, it&apos;s essential to uphold the
              Residential Tenancies Regulations 2021 for the Landlords you
              represent:
            </p>

            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Safety Checks for Electrical and Gas Installations: Both
                electrical and gas systems should undergo safety checks by
                qualified professionals every two years. Tenants are entitled to
                know the dates of the latest checks upon request.
              </li>
              <li>
                Smoke Alarms: They must be correctly installed, maintained, and
                tested according to the manufacturer&apos;s instructions at
                least once a year. Batteries should be replaced when required.
                If a smoke alarm is found to be defective, it&apos;s the
                tenant&apos;s responsibility to report it in writing.
              </li>
            </ul>

            <p>
              We provide both individual safety checks and an annual
              subscription-based service. This service covers all three safety
              checks and is bundled with other benefits to make managing your
              properties more convenient.{" "}
            </p>
            <p>
              Learn more about the{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              , remove the hassle of remembering deadlines, and ensure
              everything is always up-to-date.
            </p>
          </>
        ),
      },
      {
        id: 112,
        question: "How long do the different safety checks take?",
        answer: (
          <>
            <p>The duration of the safety check depends on the service:</p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Electrical checks: 1-2 hours</li>
              <li>Gas safety checks: 1-3 hours</li>
              <li>Smoke alarm checks: ~15 minutes</li>
            </ul>
            <p>
              However, these can vary for several reasons, such as the number of
              appliances or the need for urgent repairs.
            </p>
          </>
        ),
      },
      {
        id: 113,
        question: "How should I prepare my property for the safety checks?",
        answer: (
          <>
            <p>
              Our team will provide detailed instructions on how to prepare,
              tailored to your property type and the specific checks to be
              conducted.
            </p>
          </>
        ),
      },
      {
        id: 114,
        question:
          "What service do you suggest for busy property managers who want to ensure their compliance with current regulations?",
        answer: (
          <>
            {" "}
            <p>
              We recommend our{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              . This service is designed to maintain compliance with the latest
              regulations, particularly around safety checks. It removes the
              hassle of remembering deadlines and ensures everything is always
              up-to-date.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                All-In-One Service: Fewer repeat visits, guaranteed lowest
                prices, and swift problem resolution.
              </li>
              <li>
                Hands-Free Management: Set and forget. We handle urgent repairs
                and regular checks, providing a clear audit trail.
              </li>
              <li>
                Transparent Pricing: A consistent annual fee after the first
                year for hassle-free compliance management.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 115,
        question:
          "What are the potential consequences of not conducting routine electrical, gas, and smoke alarm safety checks?",
        answer: (
          <>
            <p>
              As a Property Manager, it&apos;s essential to uphold the
              Residential Tenancies Regulations 2021 for the Landlords you
              represent. This involves ensuring licensed professionals perform
              electrical and gas safety checks on all their properties every two
              years. Failure to do so will result in serious legal consequences
              and may endanger tenants&apos; lives.
            </p>
            <p>
              {" "}
              To help you stay on top of this, RCSC offers the{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              , a subscription-based service that handles all the safety checks
              on your behalf.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Solutions for Homeowners FAQ",
    items: [
      {
        id: 121,
        question:
          "What safety standards should I be aware of for electrical systems, gas appliances and smoke alarms in my rental units?",
        answer: (
          <>
            <p>
              According to the Residential Tenancies Regulations 2021, your
              obligations include:
              <ul className="mt-1 list-disc space-y-2 pl-5">
                <li>
                  Safety Checks for Electrical and Gas Installations: Both
                  electrical and gas systems should undergo safety checks by
                  qualified professionals every two years. Tenants are entitled
                  to know the dates of the latest checks upon request.
                </li>
                <li className="mb-1">
                  Smoke Alarms: They must be correctly installed, maintained,
                  and tested according to the manufacturer&apos;s instructions
                  at least once a year. Batteries should be replaced when
                  required. If a smoke alarm is found to be defective, it&apos;s
                  the tenant&apos;s responsibility to report it in writing.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 122,
        question: "How long does each appointment take?",
        answer: (
          <>
            <p>
              The duration of the appointment depends on the service:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>Electrical checks: 1-2 hours.</li>
                <li>Gas safety checks: 1-3 hours</li>
                <li>Smoke alarm checks: ~15 minutes</li>
              </ul>
            </p>
            <p>
              However, these times can vary for several reasons, such as the
              number of appliances or the need for urgent repairs.
            </p>
          </>
        ),
      },
      {
        id: 123,
        question: "How should I prepare my property for the safety checks?",
        answer: (
          <>
            <p>
              Our staff will guide you through any necessary preparations based
              on the services chosen for your specific property.
            </p>
          </>
        ),
      },
      {
        id: 124,
        question:
          "What service do you suggest for busy people who are concerned about compliance?",
        answer: (
          <>
            {" "}
            <p>
              The{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>{" "}
              is recommended. This service manages compliance with safety checks
              and eliminates the hassle of remembering deadlines. It&apos;s an
              all-in-one service that includes immediate coverage, hands-free
              management, emergency readiness, and transparent pricing.
            </p>
          </>
        ),
      },
      {
        id: 125,
        question:
          "What are the potential consequences of not conducting routine smoke alarm, electrical, and gas safety checks?",
        answer: (
          <>
            <p>
              For property owners in Victoria, it&apos;s essential that licensed
              professionals perform electrical and gas safety checks on all
              properties every two years. Failure to do so will result in
              serious legal consequences and may endanger lives.
            </p>
            <p>
              If staying on top of this feels daunting, RCSC offers the{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              , a subscription-based service that takes care of all the safety
              checks on your behalf.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Solutions for Building Managers FAQ",
    items: [
      {
        id: 131,
        question:
          "What safety standards should I be aware of for electrical systems, gas appliances and smoke alarms in my rental units?",
        answer: (
          <>
            <p>
              According to the Residential Tenancies Regulations 2021, your
              obligations involve:
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                Safety Checks for Electrical and Gas Installations: Both
                electrical and gas systems should undergo safety checks by
                qualified professionals every two years. Tenants are entitled to
                know the dates of the latest checks upon request.
              </li>
              <li>
                Smoke Alarms: They must be correctly installed, maintained, and
                tested according to the manufacturer&apos;s instructions at
                least once a year. Batteries should be replaced when required.
                If a smoke alarm is found to be defective, it&apos;s the
                tenant&apos;s responsibility to report it in writing.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 132,
        question: "How long do the different safety checks take?",
        answer: (
          <>
            <p>The duration of the safety check varies based on the service:</p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>Electrical checks: 1-2 hours.</li>
              <li>Gas safety checks: 1-3 hours</li>
              <li>Smoke alarm checks: ~15 minutes</li>
            </ul>
            <p>
              However, these times can vary for several reasons, such as the
              number of appliances or the need for urgent repairs.
            </p>
          </>
        ),
      },
      {
        id: 133,
        question: "How should I prepare my property for the safety checks?",
        answer: (
          <>
            <p>
              Our staff will guide you through any necessary preparations based
              on the services chosen for your specific property.
            </p>
          </>
        ),
      },
      {
        id: 134,
        question:
          "What service do you suggest to busy building managers to ensure their compliance with current regulations?",
        answer: (
          <>
            {" "}
            <p>
              We recommend our{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>{" "}
              . This service is designed to maintain compliance with the latest
              regulations, particularly around safety checks. It removes the
              hassle of remembering deadlines and ensures everything is always
              up-to-date.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                All-In-One Service: Fewer repeat visits, guaranteed lowest
                prices, and swift problem resolution.
              </li>
              <li>
                Hands-Free Management: Set and forget. We handle urgent repairs
                and regular checks, providing a clear audit trail.
              </li>
              <li>
                Transparent Pricing: A consistent annual fee after the first
                year for hassle-free compliance management.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 135,
        question:
          "What are the potential consequences of not conducting routine electrical, gas and smoke alarm safety checks?",
        answer: (
          <>
            <p className="mb-4">
              Building managers must uphold the Residential Tenancies
              Regulations 2021. This involves ensuring licensed professionals
              perform electrical and gas safety checks on all their properties
              every two years. Failure to do so will result in serious legal
              consequences and may endanger the lives of tenants.
            </p>

            <p>
              To help you stay on top of this, RCSC offers the{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              , a subscription-based service that handles all the safety checks
              on your behalf.
            </p>
          </>
        ),
      },
    ],
  },
  {
    title: "Solutions for Real Estate FAQ",
    items: [
      {
        id: 141,
        question:
          "What safety standards should I be aware of for electrical systems, gas appliances and smoke alarms in my rental units?",
        answer: (
          <>
            <p>
              According to the Residential Tenancies Regulations 2021, your
              obligations include:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>
                  Safety Checks for Electrical and Gas Installations: Both
                  electrical and gas systems should undergo safety checks by
                  qualified professionals every two years. Tenants are entitled
                  to know the dates of the latest checks upon request.
                </li>
                <li>
                  Smoke Alarms: They must be correctly installed, maintained,
                  and tested according to the manufacturer&apos;s instructions
                  at least once a year. Batteries should be replaced when
                  required. If a smoke alarm is found to be defective, it&apos;s
                  the tenant&apos;s responsibility to report it in writing.
                </li>
              </ul>
            </p>
          </>
        ),
      },
      {
        id: 142,
        question: "How long do each of the checks typically take?",
        answer: (
          <>
            <p>
              The duration of the safety check depends on the service:
              <ul className="mb-1 mt-1 list-disc space-y-2 pl-5">
                <li>Electrical checks: 1-2 hours</li>
                <li>Gas safety checks: 1-3 hours</li>
                <li>Smoke alarm checks: ~15 minutes</li>
              </ul>
              However, these times can vary for several reasons, such as the
              number of appliances or the need for urgent repairs.
            </p>
          </>
        ),
      },
      {
        id: 143,
        question: "How should I prepare my property for the safety checks?",
        answer: (
          <>
            <p>
              Our staff will guide you through any necessary preparations based
              on the services chosen for your specific property.
            </p>
          </>
        ),
      },
      {
        id: 144,
        question:
          "What service do you suggest for busy real estate companies who want to ensure their compliance with current regulations?",
        answer: (
          <>
            {" "}
            <p>
              We recommend our{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>{" "}
              . This service is designed to maintain compliance with the latest
              regulations, particularly around safety checks. It removes the
              hassle of remembering deadlines and ensures everything is always
              up-to-date.
            </p>
            <ul className="mb-1 list-disc space-y-2 pl-5">
              <li>
                All-In-One Service: Fewer repeat visits, guaranteed lowest
                prices, and swift problem resolution.
              </li>
              <li>
                Hands-Free Management: Set and forget. We handle urgent repairs
                and regular checks, providing a clear audit trail.
              </li>
              <li>
                Transparent Pricing: A consistent annual fee after the first
                year for hassle-free compliance management.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 145,
        question:
          "What are the potential consequences of not conducting routine electrical, gas and smoke alarm safety checks?",
        answer: (
          <>
            <p className="mb-4">
              The Residential Tenancies Regulations 2021 must be upheld. This
              involves ensuring licensed professionals perform electrical and
              gas safety checks on all their properties every two years. Failure
              to do so will result in serious legal consequences and may
              endanger tenants&apos; lives.
            </p>
            <p>
              To help you stay on top of this, RCSC offers the{" "}
              <Link
                className="mb-4 cursor-pointer rounded-none border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 ease-in-out hover:border-white hover:text-blue-400"
                href="/property-compliance-subscription/"
              >
                Property Compliance Subscription
              </Link>
              , a subscription-based service that handles all the safety checks
              on your behalf.
            </p>
          </>
        ),
      },
    ],
  },

  {
    title: "Legislation",
    items: [
      {
        id: 151,
        question: "Electrical Safety Activities",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Residential Tenancies Regulations 2021 - Schedule 3 -
              Safety-related activities
            </p>
            <p className="mb-4">
              The residential rental provider must ensure that an electrical
              safety check of all electrical installations, appliances, and
              fittings provided by a residential rental provider in the rented
              premises is conducted every 2 years by a licensed or registered
              electrician and must provide the renter with the date of the most
              recent safety check, in writing, on request by the renter.
            </p>
            <p className="mb-4">
              If an electrical safety check of the rented premises has not been
              conducted within the last 2 years at the time the renter occupies
              the premises, the residential rental provider must arrange an
              electrical safety check as soon as practicable.
            </p>
            <p className="mb-4">
              On and from 29 March 2023, in relation to electrical safety, all
              power outlets and lighting circuits in the rented premises are to
              be connected to:
            </p>
            <ul className="mb-4 list-disc">
              <li className="mb-2 mr-2 flex h-10 items-center">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />a
                switchboard-type circuit breaker that complies with AS/NZS 3000,
                “Electrical Installations”,
              </li>
              <li className="mb-2 mr-2 flex h-10 items-center font-bold">
                <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                and a switchboard-type Residual Current Device:
              </li>
              <li className="h-18 ml-8 mb-2 mr-2 flex items-center">
                <Icons8ArrowRight className="mr-4 h-7 w-7 flex-shrink-0" />
                AS/NZS 3190, “Approval and test specification—Residual current
                devices (current operated earth-leakage devices)”,
              </li>
              <li className="h-18 ml-8 mb-2 mr-2 flex items-center">
                <Icons8ArrowRight className="mr-4 h-7 w-7 flex-shrink-0" />
                or AS/NZS 61008.1, “Residual current operated circuit-breakers
                without integral overcurrent protection for household and
                similar uses (RCBOs): Part 1: General rules”,
              </li>
              <li className="h-18 ml-8 mb-2 mr-2 flex items-center">
                <Icons8ArrowRight className="mr-4 h-7 w-7 flex-shrink-0" />
                or AS/NZS 61009.1, “Residual current operated circuit-breakers
                with integral overcurrent protection for household and similar
                uses (RCCBs) Part 1: General rules”,
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 152,
        question: "Gas Safety Activities",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Residential Tenancies Regulations 2021 - Schedule 3 -
              Safety-related activities
            </p>
            <p>
              The safety-related activities in the below subclauses only apply
              if the rented premises contain any appliances, fixtures or
              fittings which use or supply gas:
            </p>
            <ul className="mb-1 list-disc">
              <li className="mb-2 flex h-20 items-center">
                <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                The residential rental provider must ensure that a gas safety
                check of all gas installations and fittings in the rented
                premises is conducted every 2 years by a licensed or registered
                gasfitter and must provide the renter with the date of the most
                recent safety check, in writing, on request by the renter.
              </li>
              <li className="mb-2 flex h-20 items-center">
                <Icons8checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                If a gas safety check has not been conducted within the last 2
                years at the time the renter occupies the premises, the
                residential rental provider must arrange a gas safety check as
                soon as practicable.
              </li>
            </ul>
          </>
        ),
      },
      {
        id: 153,
        question: "Smoke Alarm Safety Activities",
        answer: (
          <>
            <p className="mb-2 text-center text-xl font-bold">
              Residential Tenancies Regulations 2021 - Schedule 3 -
              Safety-related activities
            </p>

            <ol>
              <li>
                The residential rental provider must ensure that:
                <ul className="mb-1 mt-1 list-disc space-y-2">
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    each smoke alarm is correctly installed and in working
                    condition;
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    each smoke alarm is tested according to the
                    manufacturer&apos;s instructions at least once every 12
                    months;
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    the batteries in each smoke alarm are replaced as required.
                  </li>
                </ul>
              </li>

              <li>
                The residential rental provider must immediately arrange for a
                smoke alarm to be repaired or replaced as an urgent repair if
                they are notified by the renter that it is not in working order.
                <p className="mb-4 mt-4 text-center italic">
                  Note – A suitably qualified person must repair or replace a
                  hard-wired smoke alarm.
                </p>
              </li>

              <li>
                The residential rental provider, on or before the commencement
                of the residential rental agreement, must provide the renter
                with the following information in writing:
                <ul className="mb-1 mt-1 list-disc space-y-2">
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    how each smoke alarm in the rented premises operates;
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    how to test each smoke alarm in the rented premises;
                  </li>
                  <li className="mb-2 mr-2 flex h-10 items-center">
                    <Icon8Checkmark className="mr-4 h-7 w-7 flex-shrink-0" />
                    the renter&apos;s obligations to not tamper with any smoke
                    alarms and to report if a smoke alarm in the rented premises
                    is not in working order.
                  </li>
                </ul>
              </li>

              <li>
                The renter must give written notice to the residential rental
                provider as soon as practicable after becoming aware that a
                smoke alarm in the rented premises is not in working order.
                <p className="mb-4 mt-4 text-center italic">
                  Note – Regulations under the Building Act 1993 require
                  installing smoke alarms in all residential buildings.
                </p>
              </li>
            </ol>
          </>
        ),
      },
    ],
  },
];

export default FaqSectionsData;
