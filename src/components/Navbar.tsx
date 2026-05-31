import { useState } from "react";
import { Menu, X, Phone, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavScroll } from "../hooks/useNavScroll";

export function Navbar() {
    const { language, toggleLanguage, content, isRtl } = useLanguage();
    const { isScrolled, isVisible } = useNavScroll();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const handleScrollTo = (id: string) => {
        setIsMobileOpen(false);
        const element = document.getElementById(id);
        if (element) {
            // Small offset adjustment for header size
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const navItems = [
        { id: "hero", label: content.nav.hero },
        { id: "services", label: content.nav.services },
        { id: "partners", label: content.nav.partners },
        { id: "about", label: content.nav.about },
        { id: "contact", label: content.nav.contact },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 transform ${isVisible ? "translate-y-0" : "-translate-y-full"
                } ${isScrolled
                    ? "bg-black/80 backdrop-blur-md border-b border-[#2B64F6]/30 py-4 shadow-lg text-white"
                    : "bg-transparent py-6 border-b border-white/5 text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">

                    {/* Brand/Logo Design */}
                    <button
                        onClick={() => handleScrollTo("hero")}
                        className="flex items-center gap-3 cursor-pointer group text-left focus:outline-none"
                    >
                        {/* Custom logo image with robust fallback to stylized emblem */}
                        <div className="relative flex h-10 items-center">
                            <img
                                src="/zool_logo.png"
                                alt="ZOOL Logo"
                                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                                onError={(e) => {
                                    e.currentTarget.style.display = "none";
                                    const fallback = document.getElementById("nav-logo-fallback");
                                    if (fallback) fallback.style.display = "flex";
                                }}
                            />
                            <div
                                id="nav-logo-fallback"
                                style={{ display: "none" }}
                                className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#2B64F6] font-bold text-white rounded-sm shadow-md transition-transform duration-300"
                            >
                                <span className="font-sans text-lg font-extrabold text-[#0A1628] leading-none">Z</span>
                            </div>
                        </div>
                    </button>

                    {/* Desktop Navigation Links */}
                    <nav className="hidden md:flex items-center gap-8 font-sans">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleScrollTo(item.id)}
                                className="relative text-sm font-medium hover:text-gold transition-colors duration-300 cursor-pointer py-1 group focus:outline-none"
                            >
                                {item.label}
                                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </button>
                        ))}
                    </nav>

                    {/* CTAs Control (Language Switcher, Call CTA, Mobile Toggle) */}
                    <div className="flex items-center gap-4 animate-fade-in">

                        {/* Language Toggle Pill with Crossfade Effect */}
                        <button
                            onClick={toggleLanguage}
                            className="relative flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold tracking-wider uppercase border border-white/20 rounded-full bg-white/10 hover:bg-white/20 hover:border-gold/30 hover:text-gold cursor-pointer transition-all duration-300 font-mono text-white"
                            aria-label="Toggle language"
                        >
                            <Globe className="h-3.5 w-3.5 text-gold" />
                            <span className="transition-opacity duration-300">{content.langToggle}</span>
                        </button>

                        {/* Premium Blue Call Button */}
                        <a
                            href="tel:+971568826563"
                            className="hidden sm:flex items-center gap-2 px-5 py-2.5 text-xs md:text-sm font-bold uppercase tracking-wider text-[#0A1628] bg-[#2B64F6] hover:bg-[#528BFF] active:scale-95 rounded-sm shadow-sm transition-all duration-300 font-mono"
                        >
                            <Phone className="h-3.5 w-3.5" />
                            <span>{content.callUs}</span>
                        </a>

                        {/* Hamburger Mobile Toggle btn */}
                        <button
                            onClick={() => setIsMobileOpen(!isMobileOpen)}
                            className="flex md:hidden p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white cursor-pointer focus:outline-none focus:ring-1 focus:ring-gold/30"
                            aria-label="Open navigation menu"
                        >
                            {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>

                    </div>
                </div>
            </div>

            {/* Full-screen Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 top-0 left-0 h-screen w-screen bg-[#111] text-white z-50 transform transition-transform duration-500 ease-out flex flex-col justify-between ${isMobileOpen ? "translate-x-0" : isRtl ? "-translate-x-full" : "translate-x-full"
                    } md:hidden`}
            >
                {/* Mobile menu header */}
                <div className="flex items-center justify-between px-6 py-5 border-b border-white/5 bg-black/85 backdrop-blur-sm">
                    <div className="flex items-center gap-2">
                        <img
                            src="/zool_logo.png"
                            alt="ZOOL Logo"
                            className="h-8 w-auto object-contain"
                            referrerPolicy="no-referrer"
                            onError={(e) => {
                                e.currentTarget.style.display = "none";
                                const fallback = document.getElementById("mobile-logo-fallback");
                                if (fallback) fallback.style.display = "flex";
                            }}
                        />
                        <div
                            id="mobile-logo-fallback"
                            style={{ display: "none" }}
                            className="flex h-8 w-8 items-center justify-center rounded bg-gold text-[#111] font-black text-sm"
                        >
                            Z
                        </div>
                    </div>

                    <button
                        onClick={() => setIsMobileOpen(false)}
                        className="p-1.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Vertical Links List */}
                <div className="flex-1 flex flex-col justify-center items-center gap-8 py-8 px-6">
                    {navItems.map((item, index) => (
                        <button
                            key={item.id}
                            onClick={() => handleScrollTo(item.id)}
                            className="text-xl font-bold font-sans tracking-wide hover:text-gold transition-colors focus:outline-none"
                            style={{
                                animationDelay: `${index * 80}ms`,
                            }}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Mobile menu footer contact/actions */}
                <div className="p-8 border-t border-white/5 bg-black/55 flex flex-col gap-4 text-center items-center">
                    <p className="text-xs text-white/40 font-mono tracking-widest leading-relaxed">
                        {content.company.toUpperCase()} BUSINESSMEN SERVICES
                    </p>

                    <a
                        href="tel:+971568826563"
                        className="flex w-full items-center justify-center gap-2 py-3.5 px-6 rounded-full bg-gold text-[#111] text-sm font-extrabold uppercase tracking-wide shadow-xl active:scale-95 transition-transform"
                    >
                        <Phone className="h-4 w-4 shrink-0" />
                        <span>+971 56 882 6563</span>
                    </a>

                    <button
                        onClick={() => {
                            toggleLanguage();
                            setIsMobileOpen(false);
                        }}
                        className="flex items-center gap-1 text-xs text-gold hover:text-gold-light py-2"
                    >
                        <Globe className="h-3.5 w-3.5" />
                        <span>{content.langToggle}</span>
                    </button>
                </div>
            </div>
        </header>
    );
}
