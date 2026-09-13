"use client";

import { Phone } from "lucide-react";

export default function FloatingActionButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3 pointer-events-auto">
      {/* Official WhatsApp Floating Icon Button (Top) */}
      <a
        href="https://wa.me/919876543210?text=Hi%20Saler%20Support,%20I%20want%20a%20free%20quote%20for%20my%20seller%20account."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
        title="Chat on WhatsApp"
        className="w-13 h-13 rounded-full bg-[#25D366] hover:bg-[#20bd5a] flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <svg
          className="w-7 h-7 fill-current text-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 2.15.679 4.144 1.836 5.782L2.5 21.5l3.856-1.309A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.803 0-3.48-.475-4.93-1.305l-.353-.2-.23.078-2.288.777.778-2.253.082-.236-.214-.361A7.954 7.954 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
        </svg>
      </a>

      {/* Call Floating Icon Button (Bottom) */}
      <a
        href="tel:+919876543210"
        aria-label="Call Saler Support"
        title="Call Saler Support"
        className="w-13 h-13 rounded-full bg-dark-gray hover:bg-black flex items-center justify-center text-tiffany border border-dark-border shadow-2xl transition-all duration-300 hover:scale-110"
      >
        <Phone className="w-6 h-6 text-tiffany" />
      </a>
    </div>
  );
}
