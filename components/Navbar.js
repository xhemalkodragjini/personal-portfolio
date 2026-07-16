"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About me", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Education", href: "/#education" },
    { name: "Projects", href: "/#projects" },
    { name: "EduLab", href: "/courses" },
    { name: "Contact me", href: "/#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-neutral-200/70 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-neutral-900 tracking-tight">
            X K O
          </Link>

          <div className="hidden md:flex space-x-10">
            {menuItems.map((item) => (
              <NavItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>

          <button
            className="md:hidden text-neutral-900 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-white border-t border-neutral-200/70 py-4 space-y-4">
            {menuItems.map((item) => (
              <NavItem
                key={item.name}
                href={item.href}
                name={item.name}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

// NavItem Component
function NavItem({ href, name, onClick }) {
  return (
    <Link
      href={href}
      className="text-neutral-500 hover:text-neutral-900 text-sm font-medium transition-colors"
      onClick={onClick}
    >
      {name}
    </Link>
  );
}
