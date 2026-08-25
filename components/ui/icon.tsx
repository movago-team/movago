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
  };

  return (
    <svg {...common}>
      {paths[name] ?? null}
    </svg>
  );
}
