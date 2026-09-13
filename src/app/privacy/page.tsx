import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Saler Support",
  description: "Saler Support Privacy Policy - How we handle seller data, contact information, and security.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      <div className="space-y-3 border-b border-slate-200 pb-6">
        <h1 className="font-heading text-4xl font-extrabold text-dark-900">Privacy Policy</h1>
        <p className="text-slate-500 text-sm">Last updated: September 2026</p>
      </div>

      <div className="space-y-6 text-slate-700 text-sm leading-relaxed">
        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">1. Information We Collect</h2>
          <p>
            When you submit a quote request or contact form on Saler Support, we collect information including your Full Name, Business/Brand Name, Email Address, Mobile Number, Marketplace Preferences, and specific service requirements.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">2. How We Use Your Information</h2>
          <p>
            Your information is used strictly to evaluate your seller account requirements, prepare customized scope proposals, communicate via Phone/WhatsApp/Email, and provide requested seller support services.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">3. Data Confidentiality & Security</h2>
          <p>
            We take your marketplace account security seriously. We never sell, lease, or share your contact details or seller account data with third parties. Any sub-user authorization provided for seller account management is used strictly for agreed operations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">4. Independent Provider Disclaimer</h2>
          <p>
            Saler Support is an independent seller service provider and is not affiliated with, endorsed by, or sponsored by Amazon, Flipkart, Meesho, JioMart, Blinkit, or any other marketplace.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="font-heading text-xl font-bold text-dark-900">5. Contact Information</h2>
          <p>
            If you have questions regarding our privacy practices, please contact us at <a href="mailto:support@salersupport.com" className="text-emerald-600 font-bold hover:underline">support@salersupport.com</a>.
          </p>
        </section>
      </div>
    </div>
  );
}
