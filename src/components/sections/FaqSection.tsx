"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do we get started with Saler Support?",
      answer:
        "Starting is simple! Click 'Get a Free Quote' or contact us. We conduct a preliminary audit of your seller store, discuss your catalog size & goals, and provide a clear, customized proposal within 24 hours.",
    },
    {
      question: "Do you require full master password access to our seller accounts?",
      answer:
        "No, never! We strictly operate through authorized sub-user access (User Permissions) on Amazon Seller Central, Flipkart Seller Hub, and Meesho Supplier Panel. Your main login credentials and payment settings remain 100% secure with you.",
    },
    {
      question: "Why don't you display fixed monthly pricing packages on your website?",
      answer:
        "Every seller's requirement is unique — catalog sizes range from 10 SKUs to 10,000+ SKUs, and advertising budgets vary. We prepare custom scope proposals based on your exact marketplace goals to ensure you only pay for what your business needs.",
    },
    {
      question: "Which marketplaces and eCommerce platforms do you manage?",
      answer:
        "We specialize in Amazon (FBA & MFN), Flipkart (FBF & Smart Fulfillment), Meesho, JioMart, Blinkit Quick Commerce, Zepto, Myntra, Nykaa, and D2C Shopify stores.",
    },
    {
      question: "Do we get a dedicated Account Manager for our store?",
      answer:
        "Yes, every client is assigned a dedicated Account Manager who handles your daily seller operations and communicates directly with you via a dedicated WhatsApp group, phone calls, and email.",
    },
    {
      question: "How do you optimize PPC ad spend and reduce high ACoS?",
      answer:
        "We perform granular keyword harvesting, negative keyword isolation, automated bid adjustments, and campaign restructuring to eliminate wasted ad spend while driving high-intent target buyer traffic.",
    },
    {
      question: "How frequently will we receive performance and PPC ad reports?",
      answer:
        "We provide transparent weekly and monthly performance reports detailing order volume, net revenue growth, PPC ad spend, TACoS/ACoS metrics, and strategic recommendations for the upcoming period.",
    },
    {
      question: "Do you design Amazon Brand Stores and A+ Enhanced Content?",
      answer:
        "Yes! Our in-house design team creates custom multi-page Amazon Brand Stores, high-impact A+ Content modules, comparison charts, and lifestyle visual assets to boost store conversion rates by up to 30%.",
    },
    {
      question: "Can you assist with GST registration and multi-state warehouse APOB setup?",
      answer:
        "Absolutely. We handle new GST registrations as well as multi-state Additional Place of Business (APOB/VPOB) registrations required for storing stock in Amazon FBA & Flipkart Smart fulfillment centers across India.",
    },
    {
      question: "Can you help recover suspended listings or account policy warnings?",
      answer:
        "Yes, our compliance specialists draft tailored Plan of Actions (POA) for policy violations, IP complaints, ODR spikes, and listing suppressions to help reinstate your products quickly.",
    },
    {
      question: "What is the typical timeframe to see growth in sales after onboarding?",
      answer:
        "Most sellers experience initial improvements in listing search rank, ad efficiency, and catalog indexing within 14 to 30 days of campaign restructuring and SEO optimization.",
    },
    {
      question: "Are there any hidden charges or long-term lock-in contracts?",
      answer:
        "No hidden fees whatsoever. All deliverables, SLAs, and pricing are clearly documented in our customized proposal before project launch with flexible monthly scope terms.",
    },
  ];

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-slate-200/80 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Section Heading matching Hero Section font-heading typography */}
        <div className="text-center">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-gray tracking-tight leading-[1.1] max-w-3xl mx-auto">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion FAQ List */}
        <div className="space-y-3 pt-2">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-surface-50 transition-colors focus:outline-none"
                >
                  <span className="font-heading font-extrabold text-base sm:text-lg lg:text-xl text-dark-gray tracking-tight">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-tiffany-dark" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 font-sans text-sm sm:text-base text-slate-600 leading-relaxed font-medium border-t border-slate-100 pt-4 bg-surface-50/50">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Banner matching Hero typography */}
        <div className="p-8 bg-surface-50 border border-slate-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-dark-gray tracking-tight">
              Still have questions about your store?
            </h3>
            <p className="font-sans text-slate-600 text-sm sm:text-base font-medium">
              Speak directly with our marketplace specialists today.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md" className="shrink-0">
            Contact Support
          </Button>
        </div>
      </div>
    </section>
  );
}
