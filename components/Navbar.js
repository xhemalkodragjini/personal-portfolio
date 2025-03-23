"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "About me", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Contact me", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#EBEBEB] shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-bold text-gray-900">
            X K O
          </Link>

          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <NavItem key={item.name} href={item.href} name={item.name} />
            ))}
          </div>

          <button
            className="md:hidden text-gray-900 text-2xl focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden flex flex-col items-center bg-[#EBEBEB] py-4 space-y-4">
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
      className="text-gray-600 hover:text-gray-900 transition"
      onClick={onClick}
    >
      {name}
    </Link>
  );
}
