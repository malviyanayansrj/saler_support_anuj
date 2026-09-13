"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { ArrowRight, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Services", href: "/#services" },
    { name: "Why Us", href: "/#why-us" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-0.5 group">
            <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0">
              <Image
                src="/logo.png"
                alt="Saler Support Logo"
                width={80}
                height={80}
                className="w-full h-full object-contain scale-110"
                priority
              />
            </div>
            <div className="flex flex-col relative -ml-1.5">
              <span className="font-heading font-extrabold text-2xl tracking-tight text-dark-gray transition-colors">
                Saler<span className="text-tiffany-muted group-hover:text-tiffany transition-colors">Support</span>
              </span>
              {/* Expanding Underline Effect from center */}
              <span className="h-0.5 w-full bg-tiffany scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full" />
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider transition-colors group-hover:text-dark-gray">
                Marketplace Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold text-slate-700 hover:text-dark-gray transition-colors py-1 group/nav"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tiffany group-hover/nav:w-full transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <Button href="/contact" variant="primary" size="md">
              Get a Free Quote
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-surface-100 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-surface-200 bg-white px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2.5 rounded-xl text-base font-semibold text-slate-800 hover:bg-tiffany-light hover:text-dark-gray"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Free Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
