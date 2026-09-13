import React from "react";
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
} from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Dedicated Account Manager",
      description: "An expert account manager handling daily store operations, order monitoring, inventory health, and issue resolution.",
      highlights: ["Daily Account Monitoring", "Cases & Escalations", "Performance Insights"],
      icon: Users,
    },
    {
      title: "Seller Account Setup & Launch",
      description: "End-to-end seller registration, brand documentation, category approvals, and marketplace launch checklist.",
      highlights: ["GST & Bank Verification", "Brand Registry Support", "Category Approval"],
      icon: ShoppingBag,
    },
    {
      title: "Product Listing & Cataloging",
      description: "SEO-optimized titles, bullet points, A+ content design, and bulk listing creation for maximum visibility.",
      highlights: ["SEO Keyword Research", "High-Converting Copy", "Bulk Upload & Errors"],
      icon: Sparkles,
    },
    {
      title: "Advertising & PPC Management",
      description: "Sponsored PPC ads setup, target keyword bidding, negative keywords, and aggressive ACoS reduction.",
      highlights: ["ACoS Optimization", "Keyword Bidding", "ROAS Scaling Strategy"],
      icon: Zap,
    },
    {
      title: "Marketplace Operations & Inventory",
      description: "Inventory updates, price adjustment workflows, order status coordination, and return reconciliations.",
      highlights: ["FBA & Smart Fulfillment", "Stock Sync", "Returns Audit"],
      icon: Layers,
    },
    {
      title: "Account Health & Suspension Recovery",
      description: "Proactive policy monitoring, suspension prevention, listing reinstatement support, and POA case escalation.",
      highlights: ["Plan of Action (POA)", "Policy Compliance", "Listing Unblocking"],
      icon: ShieldCheck,
    },
    {
      title: "Brand Store & A+ EBC Content",
      description: "Custom Amazon Brand Storefront setup, graphic module design, and enhanced brand content creation.",
      highlights: ["Custom Storefront Design", "Enhanced Brand Modules", "Visual Assets"],
      icon: Store,
    },
    {
      title: "Full Account & Catalog Audit",
      description: "Comprehensive review of your current marketplace presence, listing quality, pricing strategy, and ad waste.",
      highlights: ["Listing Scorecard", "PPC Waste Detection", "Growth Roadmap"],
      icon: BarChart2,
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 py-16 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-widest text-tiffany-muted bg-tiffany-light px-4 py-1.5 rounded-full border border-tiffany/30">
          Core Marketplace Solutions
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-gray tracking-tight">
          Services We Provide
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Custom scope-based management tailored specifically to your catalog size and growth targets. No hidden pricing traps.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="agency-card p-8 flex flex-col justify-between space-y-6 hover:border-tiffany/60 transition-all group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-tiffany-light text-dark-gray border border-tiffany/40 flex items-center justify-center group-hover:bg-tiffany transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-dark-gray">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>

                <ul className="space-y-2 pt-2 border-t border-slate-100">
                  {service.highlights.map((h, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-tiffany-muted shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Custom Quote</span>
                <Button href="/contact" variant="secondary" size="sm">
                  Enquire Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
