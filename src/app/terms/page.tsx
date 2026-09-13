import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Saler Support",
  description: "Saler Support Terms of Service - Terms governing our marketplace consulting and seller support services.",
};

export default function TermsPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="font-heading text-4xl font-extrabold text-dark-900">Terms of Service</h1>
        <p className="text-slate-500 text-sm">Last updated: September 2026</p>
      </div>

      <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">1. Service Scope & Custom Quotes</h2>
          <p>
            Saler Support provides customized, scope-based marketplace management and consulting services. All engagement deliverables, timelines, and responsibilities are defined in a written proposal prior to onboarding. We do not offer fixed public pricing packages.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">2. Authorised Access</h2>
          <p>
            Clients agree to provide appropriate sub-user permissions necessary for agreed account management tasks. Clients retain full ownership of their marketplace seller accounts and credentials.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">3. Independent Service Provider Disclaimer</h2>
          <p>
            Saler Support is an independent service provider and is not affiliated with, endorsed by, or sponsored by Amazon, Flipkart, Meesho, JioMart, Blinkit, or any other marketplace platform mentioned on this website unless explicitly stated. All trademarks belong to their respective owners.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">4. Limitation of Liability</h2>
          <p>
            While we apply industry best practices and strict compliance protocols, final account performance and marketplace algorithm policies remain subject to third-party marketplace terms and consumer demand.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">5. Contact Us</h2>
          <p>
            For any legal or terms inquiries, email us at <a href="mailto:support@salersupport.com" className="text-emerald-600 font-bold hover:underline">support@salersupport.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
