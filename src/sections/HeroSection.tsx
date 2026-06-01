import { useEffect, useRef } from "react";
import { ArrowDown, Layers, ArrowRight } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function HeroSection() {
    const { content, isRtl } = useLanguage();
    const sectionRef = useRef<HTMLDivElement>(null);
    const headingRef = useRef<HTMLHeadingElement>(null);

    // Smooth scroll handler
    const handleScrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const yOffset = -80;
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: "smooth" });
        }
    };

    // Lightweight CSS-only animations on mobile, GSAP only on desktop
    useEffect(() => {
        const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
        
        if (isMobile) {
            // On mobile, just ensure elements are visible without animation
            if (headingRef.current) {
                headingRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
                headingRef.current.style.opacity = "1";
                headingRef.current.style.transform = "none";
            }
            return;
        }

        // Only load GSAP on desktop for better mobile performance
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            if (headingRef.current) {
                headingRef.current.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
                headingRef.current.style.transform = "none";
                headingRef.current.style.opacity = "1";
            }
            return;
        }

        // Dynamic import of GSAP only when needed (desktop)
        import("gsap").then(({ gsap }) => {
            import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
                gsap.registerPlugin(ScrollTrigger);

                const heading = headingRef.current;

                const ctx = gsap.context(() => {
                    // 1. Clip path text reveal animation
                    if (heading) {
                        gsap.fromTo(
                            heading,
                            {
                                clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                                y: 50,
                                opacity: 0,
                            },
                            {
                                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                                y: 0,
                                opacity: 1,
                                duration: 1.2,
                                ease: "power4.out",
                                delay: 0.3,
                            }
                        );
                    }

                    // 2. Reveal elements in sequence
                    gsap.fromTo(
                        ".hero-fade-in",
                        { opacity: 0, y: 20 },
                        {
                            opacity: 1,
                            y: 0,
                            duration: 0.8,
                            stagger: 0.15,
                            ease: "power3.out",
                            delay: 0.8,
                        }
                    );
                }, sectionRef);

                return () => {
                    ctx.revert();
                };
            });
        });
    }, []);

    return (
        <section
            ref={sectionRef}
            id="hero"
            className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-transparent"
        >
            {/* Background Ambience & Gradient Mesh */}
            <div className="absolute inset-0 w-full h-full overflow-hidden select-none z-0">
                {/* Transparent gradient to let WebGL silk flow shine through */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/25 to-black/60" />

                {/* Professional Polish Ambient Blue/Teal Background Blurs */}
                <div className="absolute top-0 right-0 w-full h-full opacity-15 pointer-events-none">
                    <div className="absolute top-[-20%] right-[-20%] w-[80%] h-[80%] rounded-full bg-[#2B807D] blur-[150px]" />
                    <div className="absolute bottom-[-20%] left-[-20%] w-[60%] h-[60%] rounded-full bg-[#3AA4A1] blur-[120px] opacity-40" />
                </div>

                {/* Subtle decorative mesh overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,_transparent_1px),_linear-gradient(90deg,_rgba(255,255,255,0.015)_1px,_transparent_1px)] bg-[size:40px_40px] opacity-15" />
            </div>

            {/* 2. Hero Content Core */}
            <div
                className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 z-10 text-center flex flex-col items-center justify-center"
            >
                {/* Badge Card - Professional Polish Custom */}
                <div className="hero-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#2B807D]/10 border border-[#2B807D] text-[#2B807D] text-[11px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-6 shadow-sm">
                    <Layers className="h-3.5 w-3.5" />
                    <span>{content.hero.badge}</span>
                </div>

                {/* Dynamic Clipping reveal headline */}
                <h1
                    ref={headingRef}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl"
                    style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" }}
                >
                    {content.hero.headline}
                </h1>

                {/* Support Description */}
                <p className="hero-fade-in text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mt-6 lg:mt-8 font-light leading-relaxed font-sans">
                    {content.hero.subheadline}
                </p>

                {/* Call to Actions Group - Professional Polish Custom */}
                <div className="hero-fade-in flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 w-full sm:w-auto font-mono">
                    <button
                        onClick={() => handleScrollTo("services")}
                        className="flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 bg-[#2B807D] hover:bg-[#3AA4A1] active:scale-95 text-white font-bold font-mono tracking-wider rounded-sm shadow-xl transition-all duration-300 uppercase cursor-pointer text-sm"
                    >
                        <span>{content.getStarted}</span>
                        <ArrowRight className={`h-4 w-4 transform transition-transform group-hover:translate-x-1 ${isRtl ? "rotate-180" : ""}`} />
                    </button>

                    <button
                        onClick={() => handleScrollTo("about")}
                        className="flex w-full sm:w-auto justify-center items-center gap-2.5 px-8 py-4 bg-white/5 hover:bg-white/10 active:scale-95 text-white font-semibold font-mono tracking-wider border border-white/30 rounded-sm transition-all duration-300 uppercase cursor-pointer text-sm"
                    >
                        <span>{content.ourServices}</span>
                    </button>
                </div>
            </div>

            {/* 3. Small Scroll Prompter */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/40 cursor-pointer hover:text-gold transition-colors duration-300" onClick={() => handleScrollTo("services")}>
                <span className="text-[10px] font-mono tracking-widest uppercase">SCROLL</span>
                <ArrowDown className="h-4 w-4 animate-bounce" />
            </div>
        </section>
    );
}
