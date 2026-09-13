import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  Share2,
  Store,
  Code,
  ShieldCheck,
  Layers,
  ArrowRight,
  HelpCircle,
  CheckCircle2,
} from "lucide-react";
import { SERVICES_DATA } from "@/lib/services";

export const metadata: Metadata = {
  title: "Growth Services | Saler Support",
  description:
    "Explore our core seller support services: Social Media Marketing, Marketplace Brand Store, Website Development, GST & Trademark Registration, and Marketplaces Account Management.",
};

export default function ServicesPage() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Share2":
        return Share2;
      case "Store":
        return Store;
      case "Code":
        return Code;
      case "ShieldCheck":
        return ShieldCheck;
      case "Layers":
      default:
        return Layers;
    }
  };

  return (
    <div className="py-16 space-y-20">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-extrabold uppercase tracking-widest text-tiffany-dark">
          Marketplace & D2C Solutions
        </span>
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight max-w-4xl mx-auto leading-tight">
          Everything You Need to Scale Your Seller Business
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          From full marketplace account management and A+ content design to D2C website engineering and social media marketing.
        </p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = getIcon(service.iconName);
            return (
              <div
                key={service.slug}
                className="agency-card p-8 flex flex-col justify-between space-y-6 hover:border-tiffany/60 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-2xl bg-tiffany-light text-dark-gray border border-tiffany/40 flex items-center justify-center shrink-0">
                        <IconComponent className="w-6 h-6 text-dark-gray" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold text-tiffany-dark uppercase tracking-wider">
                          {service.badge}
                        </span>
                        <h2 className="font-heading font-extrabold text-xl text-dark-gray group-hover:text-tiffany-dark transition-colors">
                          {service.title}
                        </h2>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">{service.shortDescription}</p>

                  {/* Highlights list */}
                  <ul className="space-y-2 pt-2 border-t border-slate-100">
                    {service.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-tiffany-dark shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 flex items-center justify-between border-t border-slate-100 gap-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-extrabold text-dark-gray group-hover:text-tiffany-dark flex items-center gap-1 hover:underline"
                  >
                    View Service Details <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
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
              <HelpCircle className="w-5 h-5 text-tiffany-dark" />
              <span>Why Don't We Show Fixed Prices?</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every seller store is unique — product catalog sizes, marketplace platforms, and ad budgets vary significantly. We create custom scope-based proposals tailored specifically to your business goals.
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
