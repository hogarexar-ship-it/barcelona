import type { ReactNode } from "react";

export type IconName =
  | "alert"
  | "arrowRight"
  | "bath"
  | "bolt"
  | "building"
  | "bulb"
  | "calendar"
  | "camera"
  | "car"
  | "chart"
  | "chat"
  | "check"
  | "clock"
  | "document"
  | "drain"
  | "droplet"
  | "euro"
  | "faucet"
  | "flame"
  | "globe"
  | "home"
  | "inbox"
  | "mail"
  | "mapPin"
  | "megaphone"
  | "panel"
  | "phone"
  | "plug"
  | "question"
  | "search"
  | "shield"
  | "star"
  | "trendingUp"
  | "userCheck"
  | "users"
  | "wrench";

const paths: Record<IconName, ReactNode> = {
  alert: <path d="M12 3.5 21.5 20h-19L12 3.5zM12 10v4M12 17h.01" />,
  bath: <path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2zM6 12V6a2 2 0 0 1 4 0M7 19l-1 2M17 19l1 2" />,
  building: <path d="M4 21V5l8-2v18M12 7l8 3v11M3 21h18M8 8h.01M8 12h.01M8 16h.01M16 13h.01M16 17h.01" />,
  bulb: <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  car: <path d="M5 16v-5l2-5h10l2 5v5M3 16h18v3H3zM7.5 13h.01M16.5 13h.01" />,
  chat: <path d="M4 5h16v11H9l-5 4V5zM8 10h8M8 13h5" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  document: <path d="M7 3h7l5 5v13H7V3zM14 3v5h5M10 13h6M10 17h6" />,
  drain: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M8.5 9.5h.01M12 9.5h.01M15.5 9.5h.01M8.5 14.5h.01M12 14.5h.01M15.5 14.5h.01" strokeWidth={2.4} />
    </>
  ),
  faucet: <path d="M4 9h10a4 4 0 0 1 4 4v1M4 7v4M9 9V5M6.5 5h5M18 17.5v.5M18 20.5v.5" />,
  flame: <path d="M12 3c1 3 5 5 5 10a5 5 0 0 1-10 0c0-3 2-4.5 2-6.5 1.5 1 2.2 2.6 2.2 4.2C12.5 9.5 13 6.5 12 3z" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  panel: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <path d="M8 7v4M12 7v4M16 7v4M8 15h8M8 18h5" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
  plug: <path d="M9 3v5M15 3v5M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v4" />,
  question: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14M12 17h.01" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  trendingUp: <path d="m3 17 6-6 4 4 8-8M15 7h6v6" />,
  userCheck: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 11l2 2 4-4" />
    </>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
  camera: (
    <>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <circle cx="12" cy="13" r="3.5" />
      <path d="M8 6l1.5-2h5L16 6" />
    </>
  ),
  chart: <path d="M4 20h16M7 16v-4M12 16V8M17 16V5" />,
  check: <path d="m5 13 4 4L19 7" />,
  droplet: <path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z" />,
  euro: <path d="M17 6.5A6.5 6.5 0 1 0 17 17.5M4 10h9M4 14h9" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </>
  ),
  home: <path d="M3 11l9-8 9 8M5 10v10h14V10M10 20v-6h4v6" />,
  inbox: <path d="M4 13h4l2 3h4l2-3h4M4 13l2-8h12l2 8v6H4z" />,
  mapPin: (
    <>
      <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  megaphone: <path d="M4 10v4a1 1 0 0 0 1 1h2l6 4V5L7 9H5a1 1 0 0 0-1 1zM17 9a4 4 0 0 1 0 6M19.5 6.5a8 8 0 0 1 0 11" />,
  shield: <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3zM9 12l2 2 4-4" />,
  star: <path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3z" />,
  users: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" />
    </>
  ),
};

export function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
