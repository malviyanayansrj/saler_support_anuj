import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  Users,
  ShoppingBag,
  Sparkles,
  Zap,
  Layers,
  ShieldCheck,
  Store,
  BarChart2,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Seller Services | Saler Support",
  description:
    "Explore our 8 core seller support services: Dedicated Account Manager, Listing & Cataloging, PPC Ads Management, Account Health Recovery, and Brand A+ Content.",
};

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Dedicated Account Manager",
      description: "A dedicated marketplace specialist handling your daily seller operations, order monitoring, inventory health, and issue resolution.",
      icon: Users,
      highlights: ["Daily account health monitoring", "Case log management", "Catalog health & suppressed listing fixes"],
    },
    {
      id: 2,
      title: "Seller Setup & Onboarding",
      description: "Complete seller account registration, brand documentation verification, category approvals, and marketplace launch checklist.",
      icon: ShoppingBag,
      highlights: ["Amazon, Flipkart & Meesho registration", "GTIN / Trademark exemption help", "Category & brand approvals"],
    },
    {
      id: 3,
      title: "Product Listing & Cataloging",
      description: "SEO-optimized titles, high-converting bullet points, keyword-rich descriptions, and error-free bulk catalog uploading.",
      icon: Sparkles,
      highlights: ["Marketplace search algorithm SEO", "High-conversion product copy", "Variation & parent-child indexing"],
    },
    {
      id: 4,
      title: "Advertising / Ads Management (PPC)",
      description: "Sponsored ads campaign setup, high-intent keyword targeting, negative keyword management, and aggressive ACoS reduction.",
      icon: Zap,
      highlights: ["Sponsored Products & Brands Ads", "Bid & budget optimization", "ACoS & TACoS performance tracking"],
    },
    {
      id: 5,
      title: "Marketplace Operations & Inventory",
      description: "Real-time inventory updates, automated price adjustment workflows, order status coordination, and return reconciliations.",
      icon: Layers,
      highlights: ["Stock out prevention alerts", "Price parity maintenance", "Return & claim management"],
    },
    {
      id: 6,
      title: "Account Health & Compliance",
      description: "Policy compliance monitoring, suspension recovery plans, listing reinstatement support, and direct issue escalations.",
      icon: ShieldCheck,
      highlights: ["Plan of Action (POA) drafting", "Policy violation appeal submission", "Performance metric safeguard"],
    },
    {
      id: 7,
      title: "Brand Store & A+ Content",
      description: "Custom Amazon Brand Store creation, enhanced brand content (EBC) graphic layouts, and premium product visual branding.",
      icon: Store,
      highlights: ["Custom Brand Store storefront", "High-impact A+ Content modules", "Visual lifestyle graphic design"],
    },
    {
      id: 8,
      title: "Reporting & Growth Consulting",
      description: "Comprehensive weekly and monthly performance reports, sales trend analysis, and tailored marketplace expansion planning.",
      icon: BarChart2,
      highlights: ["Transparent weekly sales breakdown", "Competitor benchmark analysis", "Quarterly growth roadmap"],
    },
  ];

  return (
    <div className="py-16 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight max-w-3xl mx-auto">
          Everything You Need to Scale Your Marketplace Store
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          From account onboarding to automated advertising and listing SEO, we manage your store operations so you achieve maximum revenue growth.
        </p>
      </section>

      {/* 8 Core Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.id} className="agency-card p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-tiffany-light text-dark-gray border border-tiffany/40 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Service #{service.id}</span>
                      <h2 className="font-heading font-extrabold text-xl text-dark-gray">{service.title}</h2>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-tiffany-muted shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-slate-100">
                  <span className="text-xs font-semibold text-slate-500">Custom Scope • No Fixed Price</span>
                  <Button href="/contact" variant="secondary" size="sm">
                    Enquire Now
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Why No Fixed Pricing Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="agency-card p-8 sm:p-10 bg-surface-50 border-tiffany/40 space-y-4 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-dark-gray font-bold text-sm">
              <HelpCircle className="w-5 h-5 text-tiffany-muted" />
              <span>Why Don't We Show Fixed Prices?</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every seller account is unique — product catalog sizes, marketplace platforms, and advertising needs vary significantly. We create custom scope-based proposals tailored specifically to your business goals.
            </p>
          </div>
          <Button href="/contact" variant="primary" size="md" className="shrink-0">
            Request a Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
