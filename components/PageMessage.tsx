import React from "react";
import Link from "next/link";

export interface PageMessageProps {
  heading: string;
  mainContent: string;
  note?: string;
  link?: {
    href: string;
    text: string;
  };
}

export function initPageMessageContent(): PageMessageProps {
  return {
    heading: "",
    mainContent: "",
  };
}

const PageMessage: React.FC<PageMessageProps> = ({
  heading,
  mainContent,
  note,
  link,
}) => {
  return (
    <>
      <p className="font-semibold">{heading}</p>
      <p>{mainContent}</p>
      {note && <p>{note}</p>}
      {link && (
        <p>
          <Link href={link.href} className="link">
            {link.text}
          </Link>
        </p>
      )}
    </>
  );
};

export default PageMessage;
