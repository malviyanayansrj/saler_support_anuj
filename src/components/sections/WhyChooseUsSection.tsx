import React from "react";
import { CheckCircle2, ShieldCheck, TrendingUp, Users, Lock, BarChart3 } from "lucide-react";

export default function WhyChooseUsSection() {
  const whyChooseUs = [
    {
      title: "Dedicated Account Experts",
      description: "Get direct access to seasoned marketplace managers who treat your account like their own business.",
      icon: Users,
    },
    {
      title: "Data-Driven PPC Strategy",
      description: "We use advanced seller analytics and keyword search data to capture top search rankings and lower ACoS.",
      icon: TrendingUp,
    },
    {
      title: "Compliance-First Approach",
      description: "Strict adherence to Amazon, Flipkart & Meesho seller policies to keep your store 100% safe.",
      icon: ShieldCheck,
    },
    {
      title: "Transparent Weekly Reporting",
      description: "No hidden numbers. Clear breakdown of sales volume, PPC spend, order growth, and performance metrics.",
      icon: BarChart3,
    },
    {
      title: "Multi-Marketplace Expertise",
      description: "Scale simultaneously on Amazon, Flipkart, Meesho, JioMart & Blinkit without operational confusion.",
      icon: CheckCircle2,
    },
    {
      title: "Strict Data Confidentiality",
      description: "Authorized sub-user access only. Your customer data and supplier pricing remain completely confidential.",
      icon: Lock,
    },
  ];

  return (
    <section id="why-us" className="bg-surface-50 py-20 border-y border-surface-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-dark-gray bg-white px-4 py-1.5 rounded-full border border-slate-200 shadow-sm">
            Agency Trust Pillars
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-gray tracking-tight">
            Why Online Brands Partner With Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            We provide hands-on, end-to-end seller support so you can focus on inventory and brand expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-3xl border border-slate-200 space-y-4 shadow-sm hover:shadow-md hover:border-tiffany transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-tiffany text-dark-gray flex items-center justify-center font-bold">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-extrabold text-xl text-dark-gray">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
