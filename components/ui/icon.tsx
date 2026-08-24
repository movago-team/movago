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
      <>
        <path d="M22 2 9.6 14.4" />
        <path d="m16 2 6 0 0 6" />
        <path d="M10.7 8.6 6.3 4.2 4 5l2.5 5.8-4 4.1 1.3 1.3 4.1-4 5.8 2.5.8-2.3-4.4-4.4" />
      </>
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
        <path d="m5 17-1 1v2h2l1-2h10l1 2h2v-2l-1-1-2-7H7l-2 7Z" />
        <path d="M7 10 8.5 6h7L17 10" />
        <circle cx="7.5" cy="15.5" r="1" />
        <circle cx="16.5" cy="15.5" r="1" />
      </>
    ),
  };

  return (
    <svg {...common}>
      {paths[name] ?? null}
    </svg>
  );
}
