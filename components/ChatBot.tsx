import Fuse from "fuse.js";
import { useState } from "react";
import FaqSectionContent, {
  FaqContent,
  FaqItem,
} from "~/components/FAQ/FaqContent";

interface Message {
  sender: "bot" | "user";
  text: string | JSX.Element;
}

export default function Chatbox() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot" as const,
      text: "Cześć! Jestem Twoim asystentem. Zadaj pytanie albo wybierz z FAQ 👇",
    },
  ]);
  const [input, setInput] = useState("");

  const flatFaq = FaqSectionContent.flatMap((section: FaqContent) =>
    section.items.map((item: FaqItem) => ({
      id: item.id,
      question: item.question,
      answer: item.answer,
      section: section.title,
    }))
  );

  // Fuse.js do wyszukiwania
  const fuse = new Fuse(flatFaq, {
    keys: ["question"],
    threshold: 0.3,
  });

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
    <div className=" fixed bottom-11 right-24 z-50">
      {isChatOpen ? (
        <div className="border-t-1 flex h-[400px] w-[350px] flex-col rounded-lg border-white bg-white shadow-xl">
          {/* Nagłówek z przyciskiem zamknięcia */}
          <div className="flex items-center justify-between rounded-lg bg-sky-800 px-3 py-2 text-white">
            <span className="font-medium">Chat z nami</span>
            <button
              onClick={() => setIsChatOpen(false)}
              className="rounded px-2 py-1 transition-colors hover:bg-sky-800"
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
              className="rounded-lg bg-blue-500 px-3 py-1 text-sm text-white transition-colors hover:bg-sky-800 disabled:opacity-50"
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
          className="rounded-full bg-blue-600 px-4 py-2 text-white shadow-lg transition-colors hover:bg-blue-700"
        >
          💬 Kliknij tutaj
        </button>
      )}
    </div>
  );
}
