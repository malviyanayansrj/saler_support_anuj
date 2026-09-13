"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Send, Phone, Mail, MessageCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selectedMarketplaces, setSelectedMarketplaces] = useState<string[]>([]);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const marketplaces = ["Amazon", "Flipkart", "Meesho", "JioMart", "Blinkit", "Other"];
  const servicesList = [
    "Dedicated Account Manager",
    "Seller Onboarding & Setup",
    "Product Listing & Cataloging",
    "Advertising / Ads Management",
    "Account Health Recovery",
    "Brand Store & A+ Content",
  ];

  const toggleMarketplace = (item: string) => {
    setSelectedMarketplaces((prev) =>
      prev.includes(item) ? prev.filter((m) => m !== item) : [...prev, item]
    );
  };

  const toggleService = (item: string) => {
    setSelectedServices((prev) =>
      prev.includes(item) ? prev.filter((s) => s !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight">
          Request A Free Quote & Store Audit
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Tell us about your seller account and requirements. Our e-commerce experts will contact you with a customized scope proposal.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Form Container */}
        <div className="lg:col-span-7 agency-card p-8 sm:p-10 space-y-8">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-tiffany text-dark-gray flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h2 className="font-heading text-2xl font-bold text-dark-gray">
                Thank You for Contacting Saler Support!
              </h2>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                We have received your quote request. Our account manager will analyze your details and contact you within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-dark-gray text-white font-extrabold text-xs uppercase tracking-wider hover:bg-black transition-colors"
              >
                Submit Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Rahul Sharma"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-tiffany focus:ring-2 focus:ring-tiffany/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="HomeStyle Goods"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-tiffany focus:ring-2 focus:ring-tiffany/20 outline-none text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@homestyle.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-tiffany focus:ring-2 focus:ring-tiffany/20 outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-tiffany focus:ring-2 focus:ring-tiffany/20 outline-none text-sm"
                  />
                </div>
              </div>

              {/* Marketplaces Checkboxes */}
              <div>
                <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                  Marketplace(s) of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {marketplaces.map((m) => {
                    const isSelected = selectedMarketplaces.includes(m);
                    return (
                      <button
                        type="button"
                        key={m}
                        onClick={() => toggleMarketplace(m)}
                        className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all border ${
                          isSelected
                            ? "bg-tiffany text-dark-gray border-tiffany shadow-sm"
                            : "bg-surface-50 text-slate-700 border-slate-300 hover:border-tiffany"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Services Checkboxes */}
              <div>
                <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                  Service(s) Required
                </label>
                <div className="flex flex-wrap gap-2">
                  {servicesList.map((s) => {
                    const isSelected = selectedServices.includes(s);
                    return (
                      <button
                        type="button"
                        key={s}
                        onClick={() => toggleService(s)}
                        className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all border ${
                          isSelected
                            ? "bg-dark-gray text-tiffany border-dark-gray shadow-sm"
                            : "bg-surface-50 text-slate-700 border-slate-300 hover:border-tiffany"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message Details */}
              <div>
                <label className="block text-xs font-extrabold text-dark-gray uppercase tracking-wider mb-2">
                  Message / Requirement Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your current store, catalog size, or specific growth challenges..."
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-tiffany focus:ring-2 focus:ring-tiffany/20 outline-none text-sm resize-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  required
                  id="consent"
                  className="mt-1 w-4 h-4 text-tiffany rounded border-slate-300 focus:ring-tiffany"
                />
                <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed font-medium">
                  I give permission to Saler Support to contact me via Call, SMS, WhatsApp, or Email regarding my quote request.
                </label>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="primary" size="lg" className="w-full">
                Request Custom Quote
              </Button>
            </form>
          )}
        </div>

        {/* Direct Contact Sidebar */}
        <div className="lg:col-span-5 space-y-8">
          <div className="agency-card-dark text-white p-8 space-y-6">
            <h2 className="font-heading font-extrabold text-2xl text-white">Direct Contact Info</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Prefer speaking directly with a consultant? Reach out to us via call or WhatsApp.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-border hover:border-tiffany transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-tiffany flex items-center justify-center text-dark-gray shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Direct Call</span>
                  <span className="font-extrabold text-white text-base">+91 98765 43210</span>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-border hover:border-tiffany transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-tiffany flex items-center justify-center text-dark-gray shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">WhatsApp Direct</span>
                  <span className="font-extrabold text-white text-base">Chat on WhatsApp</span>
                </div>
              </a>

              <a
                href="mailto:support@salersupport.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-dark-card border border-dark-border hover:border-tiffany transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-tiffany flex items-center justify-center text-dark-gray shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-medium">Official Email</span>
                  <span className="font-extrabold text-white text-base">support@salersupport.com</span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-dark-border text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-tiffany shrink-0" />
              <span>We keep your marketplace credentials & data 100% confidential.</span>
            </div>
          </div>

          <div className="agency-card p-6 space-y-3 bg-tiffany-light border-tiffany/40">
            <h3 className="font-heading font-bold text-dark-gray text-base">Fast Response Guaranteed</h3>
            <p className="text-dark-gray/80 text-xs leading-relaxed font-medium">
              Our team responds to all quote requests within 24 hours with a customized scope document.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
