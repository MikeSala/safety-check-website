import { getContactInfo } from "~/utils/contactInfo";

export default function PhoneNumberLink() {
  const { phoneNumber, phoneHref } = getContactInfo();

  if (!phoneNumber) {
    return <span className="text-red-500">[Brak Numeru]</span>;
  }

  return (
    <a
      href={phoneHref}
      className="text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-400"
    >
      {phoneNumber}
    </a>
  );
}
