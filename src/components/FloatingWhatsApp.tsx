import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  const handleWhatsAppClick = () => {
    const defaultText = encodeURIComponent(
      "Hello ZOOL Businessmen Services, I would like to get in touch regarding UAE business setup solutions."
    );
    window.open(`https://wa.me/+971568826563?text=${defaultText}`, "_blank", "referrer");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group pointer-events-auto">
      {/* Outer Ripple Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75 animate-ping -z-10 scale-125"></span>
      
      {/* Main WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        aria-label="Contact ZOOL on WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg hover:bg-emerald-600 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-12 cursor-pointer border border-emerald-400/25"
        id="whatsapp-floating-btn"
      >
        <MessageCircle className="h-7 w-7 fill-white stroke-none" />
      </button>

      {/* Floating Tooltip Label */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap bg-white text-navy font-semibold text-xs py-1.5 px-3 rounded-md shadow-md border border-slate-105 select-none font-sans">
        Chat with ZOOL
      </div>
    </div>
  );
}
