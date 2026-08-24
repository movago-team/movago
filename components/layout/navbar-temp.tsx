"use client";

import Link from "next/link";
import { useState } from "react";
import Icon from "../ui/icon";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Our Services",
    href: "/services",
  },
  {
    label: "Vehicles",
    href: "/vehicles",
  },
  {
    label: "Destinations",
    href: "/destinations",
  },
  {
    label: "Corporate",
    href: "/corporate",
  },
  {
    label: "About Us",
    href: "/about",
  },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [lang, setLang] =
    useState<"EN" | "TH">("EN");

  return (
    <header className="topbar">

      {/* Logo */}
      <Link
        href="/"
        className="brand"
        aria-label="MOVAGO Home"
      >
        <img
          src="/movago/logo.png"
          alt="MOVAGO"
        />
      </Link>

      {/* Menu */}
      <nav
        className={`desktop-nav ${menuOpen ? "is-open" : ""
          }`}
      >
        {navItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={
              index === 0 ? "active" : ""
            }
            onClick={() =>
              setMenuOpen(false)
            }
          >
            {item.label}

            {/* {item.hasChevron && (
              <span
                className="nav-chevron"
                aria-hidden="true"
              />
            )} */}
          </Link>
        ))}
      </nav>

      {/* Right side */}
      <div className="nav-actions">

        {/* Language */}
        <button
          type="button"
          className="lang-btn"
          onClick={() =>
            setLang(
              lang === "EN"
                ? "TH"
                : "EN"
            )
          }
          aria-label="Change language"
        >
          <span>{lang}</span>

          <span
            className="nav-chevron"
            aria-hidden="true"
          />
        </button>

        {/* Book Now */}
        <Link
          href="/book"
          className="gold-btn nav-book"
        >
          Book Now
        </Link>

        {/* Mobile Menu */}
        <button
          type="button"
          className="menu-btn"
          onClick={() =>
            setMenuOpen(
              (open) => !open
            )
          }
          aria-label="Toggle menu"
        >
          <Icon
            name={
              menuOpen
                ? "x"
                : "menu"
            }
            size={24}
          />
        </button>

      </div>
    </header>
  );
}
