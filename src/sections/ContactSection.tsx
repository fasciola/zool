import { MapPin, Phone, Mail, Clock, Map } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeader } from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function ContactSection() {
    const { content, isRtl } = useLanguage();
    const revealRef = useScrollReveal();

    return (
        <section
            ref={revealRef}
            id="contact"
            className="relative w-full py-20 sm:py-28 bg-transparent overflow-hidden"
        >
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Section Header */}
                <SectionHeader
                    badge={content.contact.badge}
                    title={content.contact.title}
                    subtitle={content.contact.subtitle}
                    center={true}
                />

                {/* Contact Split Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-16 items-stretch">

                    {/* Left Column: Premium Contact Info Card */}
                    <div className="reveal-fade-up flex flex-col justify-between p-8 sm:p-10 rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md shadow-2xl transition-all duration-300">
                        <div className="space-y-8">

                            {/* Item 1: Address */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/15 text-[#2B64F6] border border-gold/30">
                                    <MapPin className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                                        {content.contact.addressLabel}
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-200 font-semibold font-sans leading-relaxed">
                                        {content.contact.addressValue}
                                    </p>
                                </div>
                            </div>

                            {/* Item 2: Clickable Phones */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/15 text-[#2B64F6] border border-gold/30">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                                        {content.contact.phoneLabel}
                                    </h4>
                                    <div className="flex flex-col gap-1">
                                        {content.contact.phones.map((phone) => (
                                            <a
                                                key={phone}
                                                href={`tel:${phone.replace(/\s+/g, "")}`}
                                                className="text-base sm:text-lg font-bold text-white hover:text-gold transition-colors font-mono tracking-wide block select-all direction-ltr"
                                            >
                                                {phone}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Item 3: Email */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/15 text-[#2B64F6] border border-gold/30">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                                        {content.contact.emailLabel}
                                    </h4>
                                    <a
                                        href={`mailto:${content.contact.emailValue}`}
                                        className="text-base sm:text-lg font-bold text-white hover:text-gold transition-colors font-mono select-all block"
                                    >
                                        {content.contact.emailValue}
                                    </a>
                                </div>
                            </div>

                            {/* Item 4: Working Hours */}
                            <div className="flex items-start gap-4 text-left">
                                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-sm bg-gold/15 text-[#2B64F6] border border-gold/30">
                                    <Clock className="h-5 w-5" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 font-mono">
                                        {content.contact.hoursLabel}
                                    </h4>
                                    <p className="text-sm sm:text-base text-slate-200 font-semibold font-sans leading-relaxed">
                                        {content.contact.hoursValue}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* Right Column: Google Maps Embed Card */}
                    <div className="reveal-fade-up relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-white/[0.02] backdrop-blur-md min-h-[350px] lg:min-h-full flex flex-col justify-between p-1">
                        <div className="absolute top-4 left-4 z-10 px-3 py-1 bg-black/85 backdrop-blur-sm text-gold border border-gold/30 rounded-sm text-xs font-mono flex items-center gap-1.5 shadow-md">
                            <Map className="h-3.5 w-3.5" />
                            <span>{content.contact.mapLabel}</span>
                        </div>

                        {/* Google Road Map frame targeting Aldana - Al Hamidiya 1 - Ajman */}
                        <iframe
                            title="ZOOL Businessmen Services GPS Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.98733006927!2d55.513618699999995!3d25.405234699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f7a102973973%3A0x93b4027d09086a10!2sZool%20businessmen!5e0!3m2!1sen!2sae!4v1780267900375!5m2!1sen!2sae"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full flex-1 rounded-sm min-h-[340px]"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
}
