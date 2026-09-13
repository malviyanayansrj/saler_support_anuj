import React from "react";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <section id="hero" className="relative pt-10 lg:pt-16 pb-16 bg-gradient-to-b from-surface-50 via-white to-white overflow-hidden bg-grid-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-6 space-y-7 text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-gray tracking-tight leading-[1.1]">
              Launch, Manage & Scale Your Store
            </h1>

            {/* Concise Sub-headline */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
              Dedicated seller account management, catalog SEO, and PPC ad strategy for Amazon, Flipkart, Meesho & JioMart.
            </p>

            {/* UIverse Style Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Get a Free Quote
              </Button>

              <Button href="#services" variant="outline" size="lg" className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>

            {/* Rich Hero Stats Strip */}
            <div className="pt-6 border-t border-slate-200/90 grid grid-cols-3 gap-4 max-w-lg mx-auto lg:mx-0 text-left">
              <div>
                <span className="font-heading font-extrabold text-2xl text-dark-gray block">500+</span>
                <span className="text-xs text-slate-500 font-semibold">Active Sellers</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="font-heading font-extrabold text-2xl text-dark-gray block">3.8x</span>
                <span className="text-xs text-slate-500 font-semibold">Avg Revenue Lift</span>
              </div>
              <div className="border-l border-slate-200 pl-4">
                <span className="font-heading font-extrabold text-2xl text-dark-gray block">99.2%</span>
                <span className="text-xs text-slate-500 font-semibold">Client Renewal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Illustration */}
          <div className="lg:col-span-6 relative pt-4">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <img
                src="/hero-illustration-exact.png"
                alt="Saler Support E-Commerce Management Illustration"
                className="w-full h-auto object-contain transition-transform duration-500 hover:scale-102"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
