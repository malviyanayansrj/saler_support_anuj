"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do we get started with Saler Support?",
      answer: "Starting is simple! Click 'Get a Free Quote' or contact us. We conduct a preliminary audit of your seller store, discuss your catalog size & goals, and provide a clear, customized proposal.",
    },
    {
      question: "Do you require full master password access to our seller accounts?",
      answer: "No, never! We strictly operate through authorized sub-user access (User Permissions) on Amazon Seller Central, Flipkart Seller Hub, and Meesho Supplier Panel. Your main login credentials and payment settings remain 100% secure with you.",
    },
    {
      question: "Why don't you display fixed monthly pricing packages on your website?",
      answer: "Every seller's requirement is unique — catalog sizes range from 10 SKUs to 10,000+ SKUs, and advertising budgets vary. We prepare custom scope proposals based on your exact marketplace goals to ensure you only pay for what your business needs.",
    },
    {
      question: "Which marketplaces and platforms do you manage?",
      answer: "We specialize in Amazon (FBA & MFN), Flipkart (FBF & Smart), Meesho, JioMart, and Blinkit Quick Commerce integrations.",
    },
    {
      question: "Can you help recover suspended listings or policy warnings?",
      answer: "Yes, our team has extensive experience preparing Plan of Actions (POA) for policy violations, IP complaints, and listing suppressions to help reinstate your products as quickly as possible.",
    },
    {
      question: "How frequently will we receive performance and PPC sales reports?",
      answer: "We provide weekly transparent performance reports detailing order volume, revenue growth, PPC ad spend, ACoS, and strategic recommendations for the upcoming week.",
    },
  ];

  return (
    <section id="faq" className="bg-surface-50 py-20 border-y border-surface-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-4">
          <span className="inline-flex items-center gap-2 text-xs uppercase font-extrabold tracking-widest text-dark-gray bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            <HelpCircle className="w-4 h-4 text-tiffany-muted" />
            <span>Frequently Asked Questions</span>
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-gray tracking-tight">
            Got Questions? We Have Answers.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Everything you need to know about working with our marketplace account management team.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-heading font-extrabold text-lg text-dark-gray">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-dark-gray shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-tiffany-muted" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
