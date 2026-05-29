'use client';

import { useRouter } from 'next/navigation';
import { MessageCircle, Phone } from 'lucide-react';
import { whatsappData } from '../data/contactData';

export default function StickyContact() {
  const router = useRouter();
  const whatsappUrl = `https://wa.me/${whatsappData.number}?text=${encodeURIComponent(whatsappData.message)}`;

  return (
    <>
      {/* Desktop & tablet: WhatsApp float bubble (bottom-right) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-heading text-xs font-bold px-4 py-3 rounded-full shadow-xl shadow-green-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-green-500/40"
      >
        <MessageCircle className="w-4 h-4 shrink-0" />
        <span>Chat on WhatsApp</span>
      </a>

      {/* Mobile only: sticky bottom bar with two actions */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-alabaster/95 backdrop-blur-md border-t border-navy/10 px-4 py-3 flex gap-3">
        <button
          onClick={() => router.push('/contact')}
          className="flex-1 flex items-center justify-center gap-2 bg-navy text-alabaster font-heading text-xs font-bold py-3 rounded-xl transition-all duration-200 active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Book a Call</span>
        </button>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading text-xs font-bold py-3 rounded-xl transition-all duration-200 active:scale-95"
        >
          <MessageCircle className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp Us</span>
        </a>
      </div>
    </>
  );
}
