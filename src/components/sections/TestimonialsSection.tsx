import React from "react";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="agency-card p-8 sm:p-12 text-center space-y-6 relative overflow-hidden border-tiffany/50">
        <div className="text-tiffany-muted text-5xl font-serif leading-none select-none">“</div>
        <div className="flex justify-center text-amber-400 gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} className="w-5 h-5 fill-current" />
          ))}
        </div>
        <blockquote className="font-heading text-lg sm:text-2xl font-extrabold text-dark-gray leading-snug max-w-2xl mx-auto">
          “Saler Support helped us audit our listing catalog and restructure our PPC ad campaigns. Our monthly sales tripled within 90 days with zero listing compliance issues!”
        </blockquote>
        <div className="pt-2">
          <span className="font-bold text-dark-gray block text-base">Amit Verma</span>
          <span className="text-xs text-slate-500 font-semibold">Founder, Consumer Lifestyle Brand</span>
        </div>
      </div>
    </section>
  );
}
