import React from "react";

export default function StatsStrip() {
  const stats = [
    { value: "500+", label: "Sellers Managed" },
    { value: "5+", label: "Marketplaces Supported" },
    { value: "6+ Yrs", label: "Industry Experience" },
    { value: "99.2%", label: "Client Renewal Rate" },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="rounded-3xl bg-dark-gray text-white p-8 sm:p-10 shadow-xl border border-dark-border">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-dark-border">
          {stats.map((stat, idx) => (
            <div key={idx} className="pt-4 lg:pt-0 lg:px-4 space-y-1">
              <span className="font-heading text-4xl sm:text-5xl font-extrabold text-tiffany">
                {stat.value}
              </span>
              <p className="text-xs sm:text-sm font-bold text-slate-300 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
