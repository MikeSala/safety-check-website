import { ArrowLongRightIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Link from "next/link";
import { Icons8RegisterSimple } from "~/src/components/icons";
import { getContactInfo } from "~/utils/contactInfo";

interface ContactButtonsProps {
  className?: string;
  isMobile?: boolean;
}

const ContactButtons: React.FC<ContactButtonsProps> = ({ isMobile }) => {
  const { phoneNumber, phoneHref } = getContactInfo();

  if (isMobile) {
    return (
      <div className="flex items-center gap-2">
        {phoneHref && (
          <motion.a
            href={phoneHref}
            whileTap={{ scale: 0.95 }}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-sky-600 bg-white text-sky-600 shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white hover:shadow-md"
            title="Zadzwoń"
          >
            <PhoneIcon className="h-5 w-5" />
          </motion.a>
        )}

        <motion.div whileTap={{ scale: 0.95 }}>
          <Link
            href="/zarezerwuj-przeglad/"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg"
            title="Zarezerwuj Przegląd"
          >
            <Icons8RegisterSimple className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {phoneHref && (
        <motion.a
          href={phoneHref}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex h-11 items-center gap-2 rounded-lg border-2 border-sky-600 bg-white px-4 text-sm font-semibold text-sky-700 shadow-sm transition-all duration-300 hover:bg-sky-600 hover:text-white hover:shadow-md"
          title="Zadzwoń"
        >
          <PhoneIcon className="h-5 w-5" />
          <span>{phoneNumber}</span>
        </motion.a>
      )}

      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link
          href="/zarezerwuj-przeglad/"
          className="group relative flex h-11 items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-red-500 to-red-600 px-5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-lg"
          title="Zarezerwuj Przegląd"
        >
          <span className="relative z-10 transition-transform duration-300 group-hover:-translate-x-1">
            Rezerwuj
          </span>
          <ArrowLongRightIcon className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </div>
  );
};

export default ContactButtons;
