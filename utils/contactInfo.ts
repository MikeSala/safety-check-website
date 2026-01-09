export type ContactInfo = {
  phoneNumber?: string;
  phoneHref?: string;
  email?: string;
  emailHref?: string;
};

export const getContactInfo = (): ContactInfo => {
  const phoneNumber = process.env.NEXT_PUBLIC_TEL_LINK?.trim();
  const email = process.env.NEXT_PUBLIC_EMAIL_LINK?.trim();

  const phoneHref = phoneNumber ? `tel:${phoneNumber}` : undefined;
  const emailHref = email ? `mailto:${email}` : undefined;

  return { phoneNumber, phoneHref, email, emailHref };
};
