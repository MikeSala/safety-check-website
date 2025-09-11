import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Button, { ButtonColor } from "~/components/Button";
import { Icons8RegisterSimple } from "~/src/components/icons";

interface ContactButtonsProps {
  className?: string;
  isMobile?: boolean;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ isMobile }) => {
  if (isMobile) {
    return (
      <div className="mx-2 flex flex-wrap gap-2">
        <Button
          className="h-14 w-14 rounded-full bg-white"
          href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
          color={ButtonColor.Primary}
          size="sm"
          title="Zadzwoń"
          outline
        >
          <PhoneIcon className="h-7 w-7" />
        </Button>

        <Button
          className="group relative h-14 w-14 rounded-full bg-white"
          title="Zarezerwuj Przegląd"
          color={ButtonColor.Error}
          href="/zarezerwuj-przeglad/"
          size="sm"
          outline
        >
          <span className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
            <Icons8RegisterSimple className="h-7 w-7" />
          </span>

          <ArrowLongRightIcon className="absolute inset-0 m-auto h-6 w-6 -translate-x-1/2 transform opacity-0 transition-all duration-500 group-hover:translate-x-0  group-hover:opacity-100" />
        </Button>
      </div>
    );
  }
  return (
    <div className="flex grid-cols-2 flex-wrap gap-2">
      <Button
        className="h-12 w-40 rounded bg-white text-sm"
        href={`tel:${process.env.NEXT_PUBLIC_TEL_LINK}`}
        color={ButtonColor.Primary}
        size="lg"
        title="Zadzwoń"
        outline
      >
        <PhoneIcon className="-ml-2 h-6 w-6" />
        {process.env.NEXT_PUBLIC_TEL_LINK}
      </Button>

      <Button
        className="group relative flex h-12 w-40 items-center justify-center overflow-hidden rounded bg-white"
        title="Zarezerwuj Przegląd"
        color={ButtonColor.Error}
        href="/zarezerwuj-przeglad"
        size="lg"
        outline
      >
        <span className="absolute inset-0 flex items-center justify-center opacity-100 transition-opacity duration-300 group-hover:opacity-0">
          Rezerwuj
        </span>
        <ArrowLongRightIcon className="absolute -left-1 h-9 w-9 transform opacity-0 transition-all duration-500 group-hover:translate-x-16 group-hover:opacity-100" />
      </Button>
    </div>
  );
};

export default ContactButtons;
