"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/pricing", label: "Pricing" },
  { href: "/certificate", label: "Certificate" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-white/10
        bg-black/30
        backdrop-blur-xl
      "
    >
      {/* CONTAINER (1440 SYSTEM) */}
      <div
        className="
          container-custom
          h-16 md:h-20
          flex items-center justify-between
        "
      >

        {/* LOGO */}
        <Link
          href="/"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            bg-emerald-500
            font-bold
            text-black
            shadow-lg shadow-emerald-500/20
            transition
            hover:scale-105
          "
        >
          KH
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-sm
                text-white/70
                transition
                hover:text-white
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
            md:hidden
            border-t border-white/10
            bg-black/95
            backdrop-blur-xl
          "
        >
          <nav className="container-custom flex flex-col py-6 gap-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-2
                  text-white/70
                  transition
                  hover:text-white
                "
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}