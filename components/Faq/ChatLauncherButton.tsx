import clsx from "clsx";

export const CHAT_LAUNCHER_POSITION_CLASSES =
  "fixed bottom-11 right-20 z-50 sm:right-[7.5rem] lg:right-[5.5rem]";

type ChatLauncherButtonProps = {
  onClick: () => void;
  className?: string;
};

const ChatLauncherButton = ({
  onClick,
  className,
}: ChatLauncherButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-medium shadow-lg transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300",
        BORDER.primary,
        BG.surface,
        TEXT.primary,
        "hover:bg-sky-800",
        className
      )}
    >
      <span aria-hidden className="text-lg">
        💬
      </span>
      <span className="flex items-center gap-2 text-sm font-medium">
        Kliknij tutaj
        <span
          aria-hidden
          className="h-3 w-3 animate-pulse rounded-full bg-red-400 shadow-[0_0_0_2px_rgba(16,185,129,0.35)]"
        />
      </span>
    </button>
  );
};

export default ChatLauncherButton;
import { BG, BORDER, TEXT } from "~/components/theme/colors";
