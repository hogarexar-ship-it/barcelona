const paths: Record<"calculator" | "document" | "chat", string> = {
  calculator:
    "M6 3h12a1 1 0 011 1v16a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1zm2 3v3h8V6H8zm0 5v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM8 14v2h2v-2H8zm4 0v2h2v-2h-2zm4 0v2h2v-2h-2zM8 18v1h8v-1H8z",
  document:
    "M6 2h9l5 5v14a1 1 0 01-1 1H6a1 1 0 01-1-1V3a1 1 0 011-1zm8 1.5V8h4.5L14 3.5zM8 12h8v2H8v-2zm0 4h8v2H8v-2zm0-8h4v2H8V8z",
  chat: "M4 4h16a1 1 0 011 1v11a1 1 0 01-1 1H9l-4 4v-4H4a1 1 0 01-1-1V5a1 1 0 011-1z",
};

export function ProToolIcon({ icon }: { icon: "calculator" | "document" | "chat" }) {
  return (
    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-terracotta-500/10 text-terracotta-600">
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
        <path d={paths[icon]} />
      </svg>
    </span>
  );
}
