import { useState } from "react";
import * as Icons from "lucide-react";
import { ServiceItem } from "../lib/locales";
import { useLanguage } from "../contexts/LanguageContext";

interface ServiceCardProps {
    service: ServiceItem;
    key?: any;
}

// Highly curated high-resolution premium Unsplash photos for each UAE Business Service
const SERVICE_IMAGES: Record<number, string> = {
    1: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop", // Business Setup & Licensing
    2: "https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop", // Trade License Services
    3: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=600&auto=format&fit=crop", // Professional PRO Services
    4: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop", // Corporate Banking Assistance
    5: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=600&auto=format&fit=crop", // Visa & Residency Solutions
    6: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop", // Office Space Solutions
    7: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop", // Tax & VAT Advisory
    8: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=600&auto=format&fit=crop", // Trademark & Brand Protection
    9: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop", // Local Sponsor Services
    10: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=600&auto=format&fit=crop" // Golden Visa Consultations
};

// Specify which service IDs have custom uploaded covers in public/services directory to avoid 404 network hits.
// Keep empty to use high-resolution, instant-loading curated CDN Unsplash photos directly.
const UPLOADED_SERVICES: number[] = [];

export function ServiceCard({ service }: ServiceCardProps) {
    const { isRtl, content } = useLanguage();
    const [imageStage, setImageStage] = useState(() => {
        return UPLOADED_SERVICES.includes(service.id) ? 0 : 1;
    });

    // URL fallback stages
    const localUrl = `/services/service-${service.id}.jpg`;
    const unsplashUrl = SERVICE_IMAGES[service.id] || `https://picsum.photos/seed/${service.id}/600/400`;

    const imageUrl = imageStage === 0 ? localUrl : unsplashUrl;

    const handleImageError = () => {
        setImageStage((prev) => prev + 1);
    };

    const handleInquire = () => {
        // Construct pre-filled inquiry text for ZOOL Businessmen Services
        const message = encodeURIComponent(
            `Hello ZOOL, I would like to inquire about your service: "${service.title}". Please guide me.`
        );
        window.location.href = `https://wa.me/+971568826563?text=${message}`;
    };

    return (
        <div className="group relative flex flex-col justify-between overflow-hidden rounded-sm bg-white/[0.03] backdrop-blur-md border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#2B64F6]/50 hover:shadow-[#2B64F6]/10 reveal-fade-up border-l-4 border-l-transparent hover:border-l-[#2B64F6]">
            <div>
                {/* Card Image Area with fallbacks */}
                <div className="relative h-[180px] w-full overflow-hidden bg-slate-950 rounded-t-sm">
                    {imageStage < 2 ? (
                        <img
                            src={imageUrl}
                            alt={service.title}
                            loading="lazy"
                            referrerPolicy="no-referrer"
                            onError={handleImageError}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        // Premium fallback: Deep metallic blue and black organic gradient with subtle backdrop
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-[#2B64F6]/30">
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
                            <div className="relative px-4 py-2 rounded-sm bg-[#2B64F6]/10 border border-[#2B64F6]/30 text-gold text-xs font-mono font-medium tracking-wider">
                                {service.title}
                            </div>
                        </div>
                    )}

                    {/* Subtle gold ribbon showing Service ID */}
                    <div className={`absolute top-3 ${isRtl ? "left-3" : "right-3"} px-2.5 py-0.5 text-[10px] sm:text-xs font-mono font-medium rounded-sm bg-slate-950/90 text-gold border border-gold/30 backdrop-blur-sm z-10`}>
                        {String(service.id).padStart(2, "0")}
                    </div>
                </div>

                {/* content area */}
                <div className="p-6">
                    <div className="mb-3">
                        <h3 className="text-lg font-bold text-white tracking-tight line-clamp-2 leading-snug group-hover:text-gold transition-colors font-sans">
                            {service.title}
                        </h3>
                    </div>
                    <p className="text-sm text-white leading-relaxed font-sans line-clamp-4">
                        {service.description}
                    </p>
                </div>
            </div>

            {/* action bottom Area */}
            <div className="p-6 pt-0">
                <button
                    onClick={handleInquire}
                    className="flex w-full items-center justify-center gap-2 rounded-sm py-2.5 px-4 text-xs font-semibold uppercase tracking-wider text-white bg-white/[0.04] border border-white/10 hover:border-gold hover:bg-gold hover:text-[#0A1628] transition-all duration-300 font-mono active:scale-[0.98] cursor-pointer"
                >
                    <span>{content.services.viewDetails}</span>
                    <Icons.ArrowUpRight className={`h-4 w-4 transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRtl ? "rotate-270" : ""}`} />
                </button>
            </div>
        </div>
    );
}
