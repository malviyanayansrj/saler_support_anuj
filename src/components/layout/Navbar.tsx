"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/services";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const otherNavLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Why Us", href: "/#why-us" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-300">
      {/* Main Navbar Container */}
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
              <span className="h-0.5 w-full bg-tiffany scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full" />
              <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider transition-colors group-hover:text-dark-gray">
                Marketplace Growth Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 h-full">
            <Link
              href="/#hero"
              className="relative text-sm font-bold text-slate-700 hover:text-dark-gray transition-colors py-1 group/nav"
            >
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tiffany group-hover/nav:w-full transition-all duration-300 rounded-full" />
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative py-6 flex items-center"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                className="flex items-center gap-1.5 text-sm font-bold text-slate-700 hover:text-dark-gray transition-colors py-1 group/nav focus:outline-none"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                    servicesDropdownOpen ? "rotate-180 text-tiffany-dark" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-tiffany group-hover/nav:w-full transition-all duration-300 rounded-full" />
              </button>

              {/* Seamless Desktop Dropdown Menu */}
              {servicesDropdownOpen && (
                <div
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl shadow-slate-300/50 border border-slate-200/90 p-2 z-50 transition-all duration-200 before:absolute before:-top-4 before:left-0 before:w-full before:h-4 before:content-['']"
                >
                  <div className="space-y-1">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        onClick={() => setServicesDropdownOpen(false)}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-tiffany-light hover:text-dark-gray transition-colors group/item"
                      >
                        <span className="group-hover/item:translate-x-0.5 transition-transform duration-200">
                          {service.title}
                        </span>
                        <ChevronRight className="w-4 h-4 text-tiffany-dark opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {otherNavLinks.slice(1).map((link) => (
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
        <div className="lg:hidden border-b border-surface-200 bg-white px-4 pt-2 pb-6 space-y-3 max-h-[85vh] overflow-y-auto">
          <Link
            href="/#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-800 hover:bg-tiffany-light hover:text-dark-gray"
          >
            Home
          </Link>

          {/* Mobile Services Accordion */}
          <div className="border border-slate-200/80 rounded-2xl bg-surface-50 overflow-hidden">
            <button
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3.5 py-3 text-base font-bold text-slate-800 focus:outline-none"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${
                  mobileServicesOpen ? "rotate-180 text-tiffany-dark" : ""
                }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="px-2 pb-2.5 space-y-1 border-t border-slate-100 pt-1.5 bg-white">
                {SERVICES_DATA.map((service) => (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3.5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-tiffany-light hover:text-dark-gray transition-colors"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {otherNavLinks.slice(1).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-800 hover:bg-tiffany-light hover:text-dark-gray"
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
