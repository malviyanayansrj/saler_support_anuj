import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Button from "@/components/ui/Button";
import {
  Share2,
  Store,
  Code,
  ShieldCheck,
  Layers,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  ChevronRight,
  Zap,
} from "lucide-react";
import { getServiceBySlug, getAllServices } from "@/lib/services";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | Saler Support",
    };
  }

  return {
    title: `${service.title} | Saler Support Growth Agency`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Share2":
        return Share2;
      case "Store":
        return Store;
      case "Code":
        return Code;
      case "ShieldCheck":
        return ShieldCheck;
      case "Layers":
      default:
        return Layers;
    }
  };

  const IconComponent = getIcon(service.iconName);
  const otherServices = getAllServices().filter((s) => s.slug !== service.slug);

  return (
    <div className="py-12 space-y-16 sm:space-y-20">
      {/* Hero & Breadcrumb Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-8">
          <Link href="/" className="hover:text-dark-gray transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/services" className="hover:text-dark-gray transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-dark-gray font-bold">{service.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-tiffany-light border border-tiffany/40 text-dark-gray text-xs font-extrabold tracking-wide uppercase">
              <Zap className="w-3.5 h-3.5 text-tiffany-dark" />
              <span>{service.badge}</span>
            </div>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark-gray tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-xl font-medium text-tiffany-dark">{service.tagline}</p>

            <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
              {service.heroDescription}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <Button href="/contact" variant="primary" size="lg">
                Get a Free Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore All Services
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="agency-card p-8 bg-gradient-to-br from-white to-surface-50 border-tiffany/40 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-tiffany-light text-dark-gray flex items-center justify-center shrink-0 border border-tiffany/40 shadow-sm">
                  <IconComponent className="w-7 h-7 text-dark-gray" />
                </div>
                <div>
                  <h3 className="font-heading font-extrabold text-lg text-dark-gray">Service Highlights</h3>
                  <span className="text-xs text-slate-500 font-semibold">Tailored Growth Plan</span>
                </div>
              </div>

              <ul className="space-y-3 pt-2 border-t border-slate-100">
                {service.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs font-bold text-slate-700 leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-tiffany-dark shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features & Capabilities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tiffany-dark">
            What We Deliver
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-dark-gray tracking-tight">
            Key Capabilities & Features
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {service.features.map((feature, idx) => (
            <div key={idx} className="agency-card p-8 space-y-4 hover:border-tiffany/60 transition-all">
              <div className="w-10 h-10 rounded-xl bg-surface-100 text-dark-gray flex items-center justify-center font-bold text-sm border border-slate-200">
                0{idx + 1}
              </div>
              <h3 className="font-heading font-extrabold text-xl text-dark-gray">{feature.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Strategic Benefits */}
      <section className="bg-surface-50 py-16 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-tiffany-dark">
              Why Partner With Us
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-dark-gray tracking-tight">
              Expected Business Results
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm space-y-3">
                <div className="w-8 h-8 rounded-full bg-tiffany-light flex items-center justify-center text-tiffany-dark font-extrabold text-sm">
                  ✓
                </div>
                <h3 className="font-heading font-extrabold text-lg text-dark-gray">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Execution Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-tiffany-dark">
            Our Execution Methodology
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-dark-gray tracking-tight">
            How We Implement {service.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((p) => (
            <div key={p.step} className="agency-card p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <span className="text-3xl font-extrabold font-heading text-tiffany-muted">{p.step}</span>
                <h3 className="font-heading font-extrabold text-lg text-dark-gray">{p.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{p.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-tiffany-dark">
            <HelpCircle className="w-4 h-4 text-tiffany-dark" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-dark-gray tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {service.faqs.map((faq, idx) => (
            <div key={idx} className="agency-card p-6 space-y-2">
              <h3 className="font-heading font-extrabold text-lg text-dark-gray">{faq.question}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Other Related Services Slider/Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="border-t border-slate-200 pt-12 space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-2xl font-extrabold text-dark-gray">Explore Other Services</h3>
            <Link href="/services" className="text-sm font-bold text-tiffany-dark hover:underline flex items-center gap-1">
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.slug}
                href={`/services/${other.slug}`}
                className="agency-card p-6 flex flex-col justify-between space-y-4 hover:border-tiffany/60 transition-all group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-tiffany-dark">{other.badge}</span>
                  <h4 className="font-heading font-extrabold text-base text-dark-gray group-hover:text-tiffany-dark transition-colors">
                    {other.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2">{other.shortDescription}</p>
                </div>
                <div className="text-xs font-bold text-slate-700 flex items-center gap-1 group-hover:text-tiffany-dark">
                  Learn More <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="agency-card p-8 sm:p-12 bg-dark-gray text-white space-y-6 text-center rounded-3xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready to Accelerate Your Brand Growth?
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Get a customized scope-based proposal for {service.title} built specifically around your marketplace catalog and targets.
            </p>
            <div className="pt-2">
              <Button href="/contact" variant="primary" size="lg" className="inline-flex">
                Request a Custom Quote <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
