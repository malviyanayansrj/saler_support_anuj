import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { ArrowRight, ShieldCheck, Users, TrendingUp, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Saler Support",
  description:
    "Learn about Saler Support's mission, values, dedicated seller account management team, and marketplace growth track record.",
};

export default function AboutPage() {
  return (
    <div className="py-16 space-y-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight max-w-3xl mx-auto">
          Your Dedicated Marketplace Growth Partner
        </h1>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We help e-commerce sellers launch, optimize, and scale their store presence on Amazon, Flipkart, Meesho, JioMart, and Blinkit.
        </p>
      </section>

      {/* Our Story & Mission */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-heading text-3xl font-extrabold text-dark-gray">
              Built to Solve Seller Operations & Growth Challenges
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Managing multiple marketplace accounts can be overwhelming — listing errors, account suspensions, fluctuating PPC ad costs, and algorithm changes often drain time and resources.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Saler Support was founded to provide online brands with dedicated, compliance-focused seller account management. We combine hands-on operational support with data-driven PPC marketing to scale store revenue predictably.
            </p>
            <div className="space-y-3 pt-2">
              {[
                "Dedicated Account Manager assigned to every seller",
                "100% policy compliance & risk prevention",
                "Custom scope-based proposals with no hidden price traps",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3 text-sm font-semibold text-dark-gray">
                  <CheckCircle2 className="w-5 h-5 text-tiffany-muted shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="agency-card-dark text-white p-8 sm:p-10 space-y-6">
            <h3 className="font-heading text-2xl font-extrabold text-white">Our Mission & Vision</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              Our mission is to make e-commerce selling frictionless, transparent, and highly profitable for businesses of all sizes.
            </p>
            <div className="p-6 rounded-2xl bg-dark-card border border-dark-border space-y-2">
              <span className="text-xs font-bold text-tiffany uppercase tracking-wider">Growth Focus</span>
              <p className="text-xs text-slate-300 leading-relaxed">
                We measure our success purely by the revenue expansion, ACoS reduction, and operational peace of mind we deliver to our client sellers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sellers Trust Us */}
      <section className="bg-surface-50 py-16 border-y border-surface-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-wider text-tiffany-muted">Core Pillars</span>
            <h2 className="font-heading text-3xl font-extrabold text-dark-gray">
              Why Sellers Trust Saler Support
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: "Transparency First",
                desc: "Clear weekly reports with zero hidden fees or fake growth promises.",
                icon: ShieldCheck,
              },
              {
                title: "Dedicated Managers",
                desc: "Single point of contact for daily store updates and instant communication.",
                icon: Users,
              },
              {
                title: "Compliance Safeguard",
                desc: "Strict adherence to seller policies to prevent suspensions.",
                icon: CheckCircle2,
              },
              {
                title: "Custom Scope",
                desc: "Proposals tailored to your exact catalog size and marketplace targets.",
                icon: TrendingUp,
              },
            ].map((pillar, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 shadow-sm text-center">
                <div className="w-10 h-10 rounded-xl bg-tiffany-light text-dark-gray mx-auto flex items-center justify-center">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-base text-dark-gray">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="font-heading text-3xl font-extrabold text-dark-gray">
          Want to Work With Saler Support?
        </h2>
        <p className="text-slate-600 text-base max-w-xl mx-auto">
          Contact our team today for a free store audit and customized marketplace growth quote.
        </p>
        <div>
          <Button href="/contact" variant="primary" size="lg">
            Request a Custom Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
