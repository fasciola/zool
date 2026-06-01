import { useEffect, useRef } from "react";
import { SectionHeader } from "../components/SectionHeader";
import { ServiceCard } from "../components/ServiceCard";
import { useLanguage } from "../contexts/LanguageContext";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function ServicesSection() {
    const { content } = useLanguage();
    const revealRef = useScrollReveal();

    return (
        <section
            ref={revealRef}
            id="services"
            className="relative w-full py-20 sm:py-28 bg-transparent overflow-hidden"
        >
            {/* Behind-screen Backdrop Overlay to let WebGL show beautifully */}
            <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0 pointer-events-none">
                {/* Transparent dark backdrop overlay to let WebGL show */}
                <div className="absolute inset-0 bg-black/40" />
                {/* Soft linear border flare */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-black/55 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
                {/* Section Header */}
                <SectionHeader
                    badge={content.services.badge}
                    title={content.services.title}
                    subtitle={content.services.subtitle}
                    center={true}
                    isDark={true}
                />

                {/* 10 Services Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-12">
                    {content.services.list.map((service) => (
                        <ServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
}
