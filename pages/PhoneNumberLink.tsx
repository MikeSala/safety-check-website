export default function PhoneNumberLink() {
  const phoneNumber = process.env.NEXT_PUBLIC_TEL_LINK;

  if (!phoneNumber) {
    return <span className="text-red-500">[Brak Numeru]</span>;
  }

  return (
    <a
      href={`tel:${phoneNumber}`}
      className="text-blue-500 transition-colors duration-300 ease-in-out hover:text-blue-400"
    >
      {phoneNumber}
    </a>
  );
}
