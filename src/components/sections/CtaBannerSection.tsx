import React from "react";
import Button from "@/components/ui/Button";

export default function CtaBannerSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="agency-card-tiffany text-dark-gray p-8 sm:p-12 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 rounded-3xl shadow-xl">
        <div className="space-y-2 max-w-2xl">
          <h3 className="font-heading text-2xl sm:text-4xl font-extrabold text-dark-gray">
            Ready to Scale Your Marketplace Sales?
          </h3>
          <p className="text-dark-gray/80 text-sm font-medium">
            Contact our seller support experts today for a free store audit and customized scope proposal.
          </p>
        </div>
        <Button href="/contact" variant="secondary" size="lg" className="shrink-0">
          Request a Free Quote
        </Button>
      </div>
    </section>
  );
}
