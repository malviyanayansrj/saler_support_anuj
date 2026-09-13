import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio & Case Studies | Saler Support",
  description:
    "See real results and seller growth transformations powered by Saler Support's custom strategies and management.",
};

export default function PortfolioPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight">
          Proven Success Stories from Real Sellers
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Explore how we helped seller accounts scale 3x-10x in monthly sales volume across major e-commerce platforms.
        </p>
      </div>
    </div>
  );
}
