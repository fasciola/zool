import { Phone, Mail, MessageCircle, ArrowUp, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Footer() {
    const { content, toggleLanguage, isRtl } = useLanguage();

    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-transparent text-white border-t border-white/5 pt-16 pb-8 font-sans z-10" id="global-footer">

            {/* Decorative Top subtle golden line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 pb-12 border-b border-white/5">

                    {/* Column 1 - Brand Info */}
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => handleScrollTo("hero")}
                            className="flex items-center gap-3 cursor-pointer self-start group focus:outline-none"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-sm bg-[#2B807D] text-[#0A1628] font-bold text-lg shadow-md">
                                Z
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-extrabold tracking-tight text-white leading-none">
                                    {content.company}
                                </span>
                                <span className="text-[10px] uppercase tracking-widest text-[#2B807D] font-medium mt-1 leading-none">
                                    {content.companySub}
                                </span>
                            </div>
                        </button>
                        <p className="text-sm text-slate-400 leading-relaxed font-light mt-2">
                            {content.footer.desc}
                        </p>
                    </div>

                    {/* Column 2 - Quick Links */}
                    <div className="flex flex-col gap-4 md:items-center">
                        <div className="w-full md:max-w-[180px]">
                            <h4 className="text-sm font-bold uppercase tracking-widest text-gold font-mono mb-4 text-left">
                                {content.footer.quickLinks}
                            </h4>
                            <ul className="flex flex-col gap-2.5 text-sm text-slate-400 text-left">
                                {["hero", "services", "partners", "about", "contact"].map((sectionId) => (
                                    <li key={sectionId}>
                                        <button
                                            onClick={() => handleScrollTo(sectionId)}
                                            className="hover:text-gold hover:translate-x-1 transition-all duration-300 capitalize cursor-pointer focus:outline-none py-0.5"
                                        >
                                            {content.nav[sectionId as keyof typeof content.nav]}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3 - Connect Info */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-gold font-mono mb-1 text-left">
                            {content.footer.connect}
                        </h4>
                        <ul className="flex flex-col gap-3.5 text-sm text-slate-400 text-left">
                            <li>
                                <a
                                    href="tel:+971568826563"
                                    className="flex items-center gap-2.5 hover:text-gold transition-colors"
                                >
                                    <Phone className="h-4 w-4 text-gold shrink-0" />
                                    <span className="font-mono direction-ltr">+971 56 882 6563</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:zoolbusinessmenservicestyoi@gmail.com"
                                    className="flex items-center gap-2.5 hover:text-gold transition-colors"
                                >
                                    <Mail className="h-4 w-4 text-gold shrink-0" />
                                    <span className="font-mono">zoolbusinessmenservicestyoi@gmail.com</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/+971568826563"
                                    className="flex items-center gap-2.5 text-emerald-500 hover:text-emerald-400 transition-colors font-semibold"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="h-4 w-4 shrink-0 fill-current stroke-none" />
                                    <span>WhatsApp Chat</span>
                                </a>
                            </li>
                        </ul>

                        {/* Language switch quick link */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-1.5 text-xs text-gold hover:text-gold-light mt-3 cursor-pointer self-start focus:outline-none"
                        >
                            <Globe className="h-3.5 w-3.5" />
                            <span>{content.langToggle}</span>
                        </button>
                    </div>

                </div>

                {/* Bottom Bar: Copyright and Scroll To Top */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-slate-500 font-mono">
                    <p className="text-center sm:text-left leading-relaxed">
                        &copy; {currentYear} {content.company} {content.companySub}. {content.footer.allRightsReserved}
                    </p>

                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-sm border border-white/10 hover:border-gold/30 hover:text-gold bg-white/5 hover:bg-white/10 transition-colors group focus:outline-none cursor-pointer"
                        aria-label="Back to top"
                    >
                        <span>TOP</span>
                        <ArrowUp className="h-3.5 w-3.5 transform transition-transform group-hover:-translate-y-0.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
}
