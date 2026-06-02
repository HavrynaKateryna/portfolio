"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/projects",
    label: "Projects",
  },
  {
    href: "/pricing",
    label: "Pricing",
  },
  {
    href: "/certificate",
    label: "Certificate",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-50
        border-b border-white/10
        bg-black/20
        backdrop-blur-xl
      "
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <Link
          href="/"
          className="
            flex h-10 w-10 items-center justify-center
            rounded-xl
            bg-emerald-500
            font-bold
            text-black
            shadow-lg shadow-emerald-500/20
          "
        >
          KH
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="
                text-sm
                text-white/80
                transition
                hover:text-white
              "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="
            border-t border-white/10
            bg-black/95
            md:hidden
          "
        >
          <nav className="flex flex-col p-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  py-3
                  text-white/80
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