import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & E-commerce Insights | Saler Support",
  description:
    "Stay updated with the latest e-commerce growth strategies, Amazon seller tips, algorithm updates, and analytics insights.",
};

export default function BlogPage() {
  return (
    <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="font-heading text-4xl sm:text-5xl font-extrabold text-dark-gray tracking-tight">
          Latest Trends & Growth Strategies for Online Brands
        </h1>
        <p className="text-slate-600 text-lg leading-relaxed">
          Actionable guides, marketplace algorithm updates, and expert tips to keep your e-commerce store ahead of the competition.
        </p>
      </div>
    </div>
  );
}
