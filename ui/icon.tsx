import { ReactNode } from "react";

type IconProps = {
  name: string;
  size?: number;
};

export default function Icon({
  name,
  size = 18,
}: IconProps) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "block shrink-0",
    "aria-hidden": true,
  };

  const paths: Record<string, ReactNode> = {
    plane: (
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    ),
    airplane: (
      <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
    ),

    users: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    bag: (
      <>
        <rect
          x="3"
          y="7"
          width="18"
          height="14"
          rx="2"
        />
        <path d="M8 7V5a4 4 0 0 1 8 0v2" />
        <path d="M8 12h8" />
      </>
    ),

    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),

    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9.5 12 1.6 1.6 3.6-4" />
      </>
    ),

    briefcase: (
      <>
        <rect
          x="3"
          y="7"
          width="18"
          height="13"
          rx="2"
        />
        <path d="M8 7V5h8v2" />
        <path d="M3 12h18" />
      </>
    ),

    chart: (
      <>
        <path d="M4 20V10" />
        <path d="M10 20V4" />
        <path d="M16 20v-7" />
        <path d="M22 20H2" />
      </>
    ),

    phone: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1 .37 1.98.72 2.91a2 2 0 0 1-.45 2.11L8.1 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.93.35 1.91.59 2.91.72A2 2 0 0 1 22 16.92Z" />
    ),

    mail: (
      <>
        <rect
          x="3"
          y="5"
          width="18"
          height="14"
          rx="2"
        />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    menu: (
      <>
        <path d="M4 6h16" />
        <path d="M4 12h16" />
        <path d="M4 18h16" />
      </>
    ),

    x: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    car: (
      <>
        <path d="M5 10.5 7 5.5A2 2 0 0 1 8.9 4h6.2a2 2 0 0 1 1.9 1.5l2 5" />
        <rect x="3" y="10.5" width="18" height="7.5" rx="2" />
        <circle cx="7" cy="14.25" r="1" />
        <circle cx="17" cy="14.25" r="1" />
        <path d="M5.5 18v2.5" />
        <path d="M18.5 18v2.5" />
      </>
    ),

    facebook: (
      <path
        d="M18 2h-3.2A4.8 4.8 0 0 0 10 6.8V10H7v4h3v8h4v-8h3.3l.7-4h-4V7.2c0-.7.5-1.2 1.2-1.2H18V2z"
        fill="currentColor"
        stroke="none"
      />
    ),

    instagram: (
      <>
        <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" stroke="none" />
      </>
    ),

    line: (
      <>
        <path
          d="M12 2.5C6.75 2.5 2.5 6.2 2.5 10.75c0 4.05 3.35 7.45 7.85 8.1.3.06.7.2.8.45.09.23.06.58.03.81l-.13.82c-.04.25-.2.98.9.54 1.1-.44 5.9-3.48 8.05-5.96C21.4 13.3 21.5 12.05 21.5 10.75 21.5 6.2 17.25 2.5 12 2.5z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M7 8.2v4.6h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.7 8.2v4.6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 12.8V8.2l2.3 4.6V8.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.8 8.2h-1.8v4.6h1.8M17 10.5h1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </>
    ),

    eye: (
      <>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),

    diamond: (
      <>
        <path d="M6 3h12l4 6-10 12L2 9z" />
        <path d="M11 3 8 9l4 12 4-12-3-6" />
        <path d="M2 9h20" />
      </>
    ),

    leaf: (
      <>
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </>
    ),

    award: (
      <>
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
      </>
    ),

    headset: (
      <>
        <path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5a9 9 0 0 1 18 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3" />
        <path d="M21 16v2a3 3 0 0 1-3 3h-5" />
      </>
    ),

    quote: (
      <>
        <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
        <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      </>
    ),

    user: (
      <>
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </>
    ),    handshake: (
      <>
        <path d="m11 17 2 2a1 1 0 0 0 1.4 0l4.6-4.6a2 2 0 0 0 0-2.8l-1.4-1.4a2 2 0 0 0-2.8 0L13 12" />
        <path d="m13 7 1.6-1.6a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8L16.2 12" />
        <path d="m3 14 3-3a2 2 0 0 1 2.8 0l1.4 1.4a2 2 0 0 1 0 2.8L7 18.4a1 1 0 0 1-1.4 0L3 16a1.4 1.4 0 0 1 0-2Z" />
        <path d="m6 11 1.4-1.4a2 2 0 0 1 2.8 0L12 11" />
      </>
    ),


    "arrow-right": (
      <>
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
      </>
    ),

    "chevron-down": (
      <path d="m6 9 6 6 6-6" />
    ),

    search: (
      <>
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </>
    ),

    grid: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </>
    ),

    "credit-card": (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </>
    ),

    "help-circle": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </>
    ),

    "file-check": (
      <>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="m9 15 2 2 4-4" />
      </>
    ),

    "chevron-up": (
      <path d="m18 15-6-6-6 6" />
    ),

    "chevron-right": (
      <path d="m9 18 6-6-6-6" />
    ),

    whatsapp: (
      <>
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
        <path d="M9.5 9a1.5 1.5 0 0 0-.5 1c0 2 2 4 4 4a1.5 1.5 0 0 0 1-.5l.8-.8a.5.5 0 0 0 0-.7l-1.5-1.5a.5.5 0 0 0-.7 0l-.5.5c-.3.3-.8.3-1.1 0l-1.4-1.4c-.3-.3-.3-.8 0-1.1l.5-.5a.5.5 0 0 0 0-.7L9 7.8a.5.5 0 0 0-.7 0z" />
      </>
    ),

    chat: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </>
    ),

    send: (
      <>
        <line x1="22" y1="2" x2="11" y2="13" />
        <polygon points="22 2 15 22 11 13 2 9 22 2" />
      </>
    ),

    refresh: (
      <>
        <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
      </>
    ),


    star: (
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    ),

    swap: (
      <>
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H4" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h16" />
      </>
    ),

    "arrow-left-right": (
      <>
        <path d="m16 3 4 4-4 4" />
        <path d="M20 7H4" />
        <path d="m8 21-4-4 4-4" />
        <path d="M4 17h16" />
      </>
    ),

    lock: (
      <>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </>
    ),

    check: (
      <path d="M20 6 9 17l-5-5" />
    ),

    "check-circle": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m8.5 12.5 2.5 2.5 5-5" />
      </>
    ),

    "circle-check": (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="m8.5 12.5 2.5 2.5 5-5" />
      </>
    ),

    "file-text": (
      <>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 9H8" />
        <path d="M16 13H8" />
        <path d="M16 17H8" />
      </>
    ),

    receipt: (
      <>
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8h-8" />
        <path d="M16 12h-8" />
        <path d="M12 16h-4" />
      </>
    ),

    tag: (
      <>
        <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
        <path d="M7 7h.01" />
      </>
    ),

    calendar: (
      <>
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M16 2v4" />
        <path d="M8 2v4" />
        <path d="M3 10h18" />
        <circle cx="12" cy="15" r="2" />
      </>
    ),

    wifi: (
      <>
        <path d="M5 12.55a11 11 0 0 1 14.08 0" />
        <path d="M1.42 9a16 16 0 0 1 21.16 0" />
        <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        <line x1="12" y1="20" x2="12.01" y2="20" />
      </>
    ),

    "water-wifi": (
      <>
        {/* Sleek water bottle with droplet */}
        <path d="M4 2h4v2H4z" />
        <path d="M3.5 5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1.2a2 2 0 0 1-.6 1.4l-.8.8a2 2 0 0 0-.6 1.4V19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-9.2a2 2 0 0 0-.6-1.4l-.8-.8A2 2 0 0 1 2 6.2V5a1 1 0 0 1 1-1" />
        <line x1="4" y1="12.5" x2="8" y2="12.5" />
        {/* Wi-Fi signal arcs */}
        <path d="M13 10.5a8 8 0 0 1 8.5 0" />
        <path d="M14.5 13.5a5 5 0 0 1 5.5 0" />
        <circle cx="17.2" cy="17.5" r="1.1" fill="currentColor" />
      </>
    ),

    charger: (
      <>
        <rect x="7" y="5" width="10" height="14" rx="2.5" />
        <path d="M10 2.5v2.5" />
        <path d="M14 2.5v2.5" />
        <path d="M12.5 8.5l-2.5 3.5h3l-2 3.5" />
        <line x1="12" y1="19" x2="12" y2="21.5" />
      </>
    ),

    "child-seat": (
      <>
        {/* Car seat shell: backrest, base, headrest */}
        <path d="M6 4a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v3" />
        <path d="M6 5v10a4 4 0 0 0 4 4h7a3 3 0 0 0 3-3v-1a2 2 0 0 0-2-2h-5" />
        {/* Baby profile inside */}
        <circle cx="11.5" cy="8.5" r="1.8" />
        <path d="M11 11.5c0 1.8 1.2 3.5 3.5 3.5" />
      </>
    ),

    "plane-up": (
      <path d="M12 2c-.8 0-1.5.8-1.5 2.5V11L3 14v1.8l7.5-1.8v4.5L8 20v1.5l4-.8 4 .8V20l-2.5-1.5V14.5L21 16.3V14.5L13.5 11V4.5C13.5 2.8 12.8 2 12 2z" />
    ),

    stopwatch: (
      <>
        <circle cx="12" cy="13.5" r="7.5" />
        <path d="M12 9.5v4l2.5 1.5" />
        <path d="M12 3v3" />
        <path d="M5 5.5l2 2" />
        <path d="M19 5.5l-2 2" />
      </>
    ),

    "toll-card": (
      <>
        <rect x="4" y="3" width="11" height="17" rx="2.5" />
        <path d="M9.5 8l-1.5 3h2l-1 3" />
        <circle cx="16.5" cy="16.5" r="4.5" />
        <circle cx="16.5" cy="16.5" r="1.8" />
      </>
    ),

    sunroof: (
      <>
        <path d="M4 14h16" />
        <path d="M6 10l2-4h8l2 4" />
        <path d="M3 18h18" />
      </>
    ),

    sparkles: (
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    ),

    parking: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
      </>
    ),

    armchair: (
      <>
        <path d="M19 9a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z" />
        <path d="M5 18v2" />
        <path d="M19 18v2" />
        <path d="M3 11v3a2 2 0 0 0 2 2" />
        <path d="M21 11v3a2 2 0 0 1-2 2" />
      </>
    ),

    "shield-check": (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),

    van: (
      <>
        <path d="M17 6h-2a2 2 0 0 0-2 2v2H3a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h1" />
        <path d="M17 6h4l2 4v7a2 2 0 0 1-2 2h-1" />
        <circle cx="7" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M9 19h6" />
      </>
    ),

    suv: (
      <>
        <path d="M5 10.5 7 5.5A2 2 0 0 1 8.9 4h6.2a2 2 0 0 1 1.9 1.5l2 5" />
        <rect x="3" y="10.5" width="18" height="7.5" rx="2" />
        <circle cx="7" cy="14.25" r="1.2" />
        <circle cx="17" cy="14.25" r="1.2" />
        <path d="M5.5 18v2" />
        <path d="M18.5 18v2" />
      </>
    ),

    building: (
      <>
        <path d="M3 21h18" />
        <path d="M5 21V7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14" />
        <path d="M11 21V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v18" />
        <path d="M17 21v-9a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v9" />
        <line x1="8" y1="10" x2="8.01" y2="10" />
        <line x1="8" y1="14" x2="8.01" y2="14" />
        <line x1="14" y1="6" x2="14.01" y2="6" />
        <line x1="14" y1="10" x2="14.01" y2="10" />
        <line x1="14" y1="14" x2="14.01" y2="14" />
      </>
    ),

    palmtree: (
      <>
        <path d="M12 9a4 4 0 0 0-4-4 4 4 0 0 0-4 4" />
        <path d="M12 3v2" />
        <path d="m6.34 4.34 1.41 1.41" />
        <path d="M2 15c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
        <path d="M2 19c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
      </>
    ),

    beach: (
      <>
        <path d="M12 9a4 4 0 0 0-4-4 4 4 0 0 0-4 4" />
        <path d="M12 3v2" />
        <path d="m6.34 4.34 1.41 1.41" />
        <path d="M2 15c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
        <path d="M2 19c2 1 4 1 6 0s4-1 6 0 4 1 6 0" />
      </>
    ),

    waves: (
      <>
        <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
        <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1" />
      </>
    ),

    mountain: (
      <>
        <path d="m2 20 7-12 5 7 3-4 5 9H2Z" />
        <circle cx="18" cy="6" r="2.5" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
      </>
    ),

    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <polygon points="12 7 14.5 12 12 17 9.5 12" />
      </>
    ),

    zeekr: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
        />
        <path
          d="M 9.8 3 v 6.5 l 4.4 5 v 6.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
      </>
    ),

    toyota: (
      <>
        <ellipse cx="12" cy="12" rx="10.8" ry="7.8" stroke="currentColor" strokeWidth="1.9" fill="none" />
        <ellipse cx="12" cy="12" rx="3.8" ry="7.4" stroke="currentColor" strokeWidth="1.9" fill="none" />
        <ellipse cx="12" cy="8.2" rx="6.6" ry="3.2" stroke="currentColor" strokeWidth="1.9" fill="none" />
      </>
    ),

    honda: (
      <svg
        viewBox="0 0 26 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        width={size * 1.1}
        height={size}
        className="block shrink-0"
        aria-hidden="true"
      >
        <rect x="2" y="2.5" width="22" height="19" rx="4" />
        <path d="M7 6v12M19 6v12M7 12h12" />
      </svg>
    ),

    nissan: (
      <svg
        viewBox="0 0 26 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        width={size * 1.1}
        height={size}
        className="block shrink-0"
        aria-hidden="true"
      >
        <circle cx="13" cy="12" r="9.5" />
        <path d="M2 12h22" strokeWidth="3.5" />
      </svg>
    ),

    suzuki: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        width={size}
        height={size}
        className="block shrink-0"
        aria-hidden="true"
      >
        <path d="M4 5h12L8.5 12h11.5L16 19H4l7.5-7H0L4 5Z" />
      </svg>
    ),
  };

  return (
    <svg {...common}>
      {paths[name] ?? null}
    </svg>
  );
}
