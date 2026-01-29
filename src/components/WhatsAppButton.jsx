import React from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
    const phoneNumber = "6282298721671";
    const message = "Halo Swara Visual, saya tertarik dengan layanan Anda.";
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
    )}`;

    return (
        <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            // Mengubah bg-[#25D366] menjadi bg-brandLime dan text-white menjadi text-black agar kontras
            className="fixed bottom-8 right-8 z-[999] bg-brandLime text-black p-4 rounded-full shadow-[0_0_20px_rgba(217,255,0,0.3)] hover:scale-110 hover:rotate-12 transition-all duration-300 group"
            aria-label="Chat with us on WhatsApp">
            <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-[10px] font-black px-3 py-1 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg uppercase tracking-widest">
                Contact Us!
            </span>

            <MessageCircle size={28} fill="currentColor" />
        </a>
    );
};

export default WhatsAppButton;
