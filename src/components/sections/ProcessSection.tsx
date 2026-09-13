import React from "react";
import { Search, FileText, UserCheck, Activity } from "lucide-react";

export default function ProcessSection() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery & Store Audit",
      description: "We thoroughly review your seller account, product listings, pricing, and current growth bottlenecks.",
      icon: Search,
    },
    {
      number: "02",
      title: "Written Scope & Proposal",
      description: "We provide a clear, customized proposal defining exact deliverables, timelines, and responsibilities.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Authorised Onboarding",
      description: "Secure, authorized sub-user access setup strictly scoped to agreed management responsibilities.",
      icon: UserCheck,
    },
    {
      number: "04",
      title: "Operations & PPC Scaling",
      description: "Daily listing management, PPC optimization, catalog updates, and transparent performance reports.",
      icon: Activity,
    },
  ];

  return (
    <section id="how-it-works" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-20 scroll-mt-20">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase font-extrabold tracking-widest text-tiffany-muted bg-tiffany-light px-4 py-1.5 rounded-full border border-tiffany/30">
          Seamless Engagement Flow
        </span>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-dark-gray tracking-tight">
          How We Work Together
        </h2>
        <p className="text-slate-600 text-base sm:text-lg">
          Our 4-step onboarding ensures total clarity, data security, and seamless daily store operations.
        </p>
      </div>

      {/* Process Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {processSteps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div key={idx} className="agency-card p-8 relative flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-dark-gray text-tiffany flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-slate-300">{step.number}</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl text-dark-gray">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
