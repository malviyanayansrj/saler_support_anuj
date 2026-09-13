import React from "react";

export default function MarketplacesStrip() {
  const marketplaces = [
    { name: "Amazon", tag: "FBA & MFN Growth" },
    { name: "Flipkart", tag: "Assured & Smart Fulfillment" },
    { name: "Meesho", tag: "Catalog & Ads Scaling" },
    { name: "JioMart", tag: "Seller Onboarding" },
    { name: "Blinkit", tag: "Quick Commerce Sync" },
  ];

  return (
    <section className="bg-surface-50 border-y border-surface-200 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        <p className="text-xs uppercase font-extrabold tracking-widest text-slate-500">
          Supported E-Commerce Platforms & Marketplaces
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {marketplaces.map((m, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-tiffany transition-all flex flex-col items-center justify-center space-y-1.5 group"
            >
              <span className="font-heading font-extrabold text-xl text-dark-gray group-hover:text-tiffany-dark transition-colors">
                {m.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 text-center">{m.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
