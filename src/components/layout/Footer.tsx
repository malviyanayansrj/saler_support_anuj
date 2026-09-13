import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const mapSearchUrl = "https://www.google.com/maps/search/?api=1&query=Adhartal+Tiraha,+Jabalpur,+Madhya+Pradesh+482004";

  return (
    <footer className="bg-dark-gray text-white pt-12 pb-10 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-dark-border items-start">
          {/* Col 1: Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <Link href="/" className="flex items-center gap-0.5 group inline-flex">
              <div className="relative w-18 h-18 sm:w-20 sm:h-20 shrink-0">
                <Image
                  src="/logo.png"
                  alt="Saler Support Logo"
                  width={80}
                  height={80}
                  className="w-full h-full object-contain scale-110"
                />
              </div>
              <div className="flex flex-col relative -ml-1.5">
                <span className="font-heading font-extrabold text-2xl tracking-tight text-white transition-colors">
                  Saler<span className="text-tiffany group-hover:drop-shadow-[0_0_10px_rgba(33,241,168,0.8)] transition-all">Support</span>
                </span>
                <span className="h-0.5 w-full bg-tiffany scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-center rounded-full" />
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider transition-colors group-hover:text-white">
                  Marketplace Growth Agency
                </span>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Dedicated seller account management for Amazon, Flipkart, Meesho, JioMart & Blinkit.
            </p>

            <ul className="space-y-2.5 text-sm text-slate-300 pt-1">
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-tiffany shrink-0" />
                <span>Adhartal Tiraaha, Jabalpur, MP 482004</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-tiffany shrink-0" />
                <a href="mailto:support@salersupport.com" className="hover:text-white transition-colors">
                  support@salersupport.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-tiffany shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3 pt-2">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-tiffany">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link href="/#hero" className="hover:text-tiffany transition-colors">Home</Link></li>
              <li><Link href="/#services" className="hover:text-tiffany transition-colors">Core Services</Link></li>
              <li><Link href="/#why-us" className="hover:text-tiffany transition-colors">Why Choose Us</Link></li>
              <li><Link href="/#how-it-works" className="hover:text-tiffany transition-colors">How It Works</Link></li>
              <li><Link href="/#faq" className="hover:text-tiffany transition-colors">Seller FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-tiffany transition-colors font-bold text-tiffany">Get a Free Quote</Link></li>
            </ul>
          </div>

          {/* Col 3: Interactive Adhartal Tiraaha Map */}
          <div className="md:col-span-5 space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-tiffany">
                Agency Headquarter Location
              </h4>
              <a
                href={mapSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-tiffany hover:underline flex items-center gap-1"
              >
                <span>Adhartal Tiraaha, Jabalpur ↗</span>
              </a>
            </div>

            <div className="relative rounded-2xl overflow-hidden border border-dark-border h-64 sm:h-72 w-full">
              {/* Interactive Embedded Google Map (Slide, Drag & Pan Enabled) */}
              <iframe
                title="Saler Support Adhartal Tiraha Jabalpur Location Map"
                src="https://maps.google.com/maps?q=Adhartal%20Tiraha%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482004&t=&z=17&ie=UTF8&iwloc=B&output=embed"
                width="100%"
                height="100%"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-95 hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Saler Support. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
