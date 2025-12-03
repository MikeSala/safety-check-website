import Fuse from "fuse.js";
import { useMemo, useState } from "react";
import FaqSectionContent, { FaqContent, FaqItem } from "./FaqContent";

interface Message {
  sender: "bot" | "user";
  text: string | JSX.Element;
}

type ChatboxProps = {
  startOpen?: boolean;
};

export default function Chatbox({ startOpen = false }: ChatboxProps) {
  const [isChatOpen, setIsChatOpen] = useState(startOpen);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot" as const,
      text: "Cześć! Jestem Twoim asystentem. Zadaj pytanie albo wybierz z FAQ 👇",
    },
  ]);
  const [input, setInput] = useState("");

  const flatFaq = useMemo(
    () =>
      FaqSectionContent.flatMap((section: FaqContent) =>
        section.items.map((item: FaqItem) => ({
          id: item.id,
          question: item.question,
          answer: item.answer,
          section: section.title,
        }))
      ),
    []
  );

  // Fuse.js do wyszukiwania
  const fuse = useMemo(
    () =>
      new Fuse(flatFaq, {
        keys: ["question"],
        threshold: 0.3,
      }),
    [flatFaq]
  );

  // Obsługa wysyłania pytania
  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Dodanie wiadomości użytkownika
    setMessages((prev) => [...prev, { sender: "user" as const, text: text }]);

    const result = fuse.search(text);
    let answer: string | JSX.Element =
      "Nie znalazłem odpowiedzi. Spróbuj inaczej sformułować pytanie.";

    if (result.length > 0) {
      answer = result[0].item.answer;
    }

    // Dodanie odpowiedzi bota
    setMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-11 right-20 z-50 sm:right-[7.5rem] lg:right-[5.5rem]">
      {isChatOpen ? (
        <div className="border-t-1 flex h-[400px] w-[350px] flex-col rounded-lg border-white bg-white shadow-xl">
          {/* Nagłówek z przyciskiem zamknięcia */}
          <div className="flex items-center justify-between rounded-lg bg-sky-800 px-3 py-2 text-white">
            <span className="font-medium">Chat z nami</span>
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded px-2 py-1 transition-colors hover:bg-sky-700"
            >
              ✕
            </button>
          </div>

          {/* Okno rozmowy */}
          <div className="min-h-0 flex-1 space-y-2 overflow-y-auto p-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`max-w-[80%] rounded p-2 text-sm ${
                  msg.sender === "bot"
                    ? "self-start bg-gray-100 text-gray-800"
                    : "ml-auto self-end bg-sky-800 text-white"
                }`}
              >
                {typeof msg.text === "string" ? msg.text : msg.text}
              </div>
            ))}
          </div>

          {/* FAQ - wszystkie pytania */}
          <div className="flex shrink-0 gap-1 overflow-x-auto border-t bg-gray-50 p-2">
            {flatFaq.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSend(item.question)}
                className="whitespace-nowrap rounded-lg bg-gray-200 px-2 py-1 text-xs transition-colors hover:bg-gray-300"
              >
                {item.question}
              </button>
            ))}
          </div>

          {/* Pole tekstowe */}
          <div className="flex shrink-0 gap-2 rounded border-t bg-white p-2">
            <input
              className="flex-1 rounded-lg border border-gray-300 px-2 py-1 text-sm focus:border-transparent focus:outline-none focus:ring-1 focus:ring-sky-700"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Napisz pytanie..."
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
            />
            <button
              className="rounded-lg bg-sky-800 px-3 py-1 text-sm text-white transition-colors hover:bg-sky-800 disabled:opacity-50"
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
            >
              Wyślij
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsChatOpen(true)}
          className="flex items-center gap-2 rounded-full border border-sky-800 bg-white px-5 py-2 text-sm font-medium text-sky-800 shadow-lg transition hover:bg-sky-800 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300"
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
      )}
    </div>
  );
}
