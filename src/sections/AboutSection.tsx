import { useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { SectionHeader } from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AboutSection() {
  const { content } = useLanguage();
  const revealRef = useScrollReveal();
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (!line) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      line.style.transform = "scaleY(1)";
      return;
    }

    // Scroll trigger to grow the vertical divider line
    const anim = gsap.fromTo(
      line,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: "#about",
          start: "top 65%",
          end: "bottom 80%",
          scrub: 1,
        },
      }
    );

    return () => {
      if (anim.scrollTrigger) anim.scrollTrigger.kill();
    };
  }, []);

  return (
    <section
      ref={revealRef}
      id="about"
      className="relative w-full py-20 sm:py-28 bg-transparent overflow-hidden"
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Section Header */}
        <SectionHeader
          badge={content.about.badge}
          title={content.about.title}
          subtitle={content.about.subtitle}
          center={true}
        />

        {/* Modular Grid Layout: Left Content, Center Star Line, Right Differentiators */}
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-12 lg:gap-8 items-stretch mt-16">
          
          {/* Left Side: Paragraph Statement */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-6 reveal-fade-up">
            <div className="space-y-6">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-sans font-normal">
                {content.about.paragraph1}
              </p>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans font-light">
                {content.about.paragraph2}
              </p>
            </div>
          </div>

          {/* Center Column: 8-Point Geometric Star + Animated Line (Desktop only, hidden otherwise) */}
          <div className="hidden lg:col-span-1 lg:flex flex-col items-center justify-start relative select-none">
            {/* 8-point Rub el Hizb Islamic/Arabic star emblem */}
            <div className="flex items-center justify-center p-2 rounded-full border border-gold/25 bg-gold/5 text-gold animate-spin-slow">
              <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
                <path d="M12 1.5l2.6 3.9 4.3-1.6-1.6 4.3 3.9 2.6-3.9 2.6 1.6 4.3-4.3-1.6-2.6 3.9-2.6-3.9-4.3 1.6 1.6-4.3-3.9-2.6 3.9-2.6-1.6-4.3 4.3 1.6z" />
              </svg>
            </div>
            {/* The animated progression vertical guide line */}
            <div className="w-[1.5px] bg-gradient-to-b from-gold via-gold/30 to-transparent flex-1 mt-4 origin-top min-h-[250px] relative">
              <div
                ref={lineRef}
                className="absolute inset-0 bg-gold origin-top"
              />
            </div>
          </div>

          {/* Right Side: Differentiators List */}
          <div className="lg:col-span-5 flex flex-col justify-center reveal-fade-up">
            <h3 className="text-xl sm:text-2xl font-bold font-sans text-white mb-6 tracking-tight">
              {content.about.differentiatorsTitle}
            </h3>
            
            <div className="space-y-4">
              {content.about.differentiators.map((diff, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-sm hover:bg-white/[0.03] hover:backdrop-blur-sm hover:shadow-md transition-all duration-355 border border-transparent hover:border-white/10 hover:border-l-[#2B64F6] hover:border-l-4 group"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-sm bg-[#2B64F6]/15 text-gold border border-[#2B64F6]/30 mt-0.5 group-hover:bg-[#2B64F6] group-hover:text-white transition-colors">
                    <Check className="h-3.5 w-3.5 font-bold" />
                  </div>
                  <span className="text-sm sm:text-base text-slate-300 font-sans leading-relaxed group-hover:text-white transition-colors font-medium">
                    {diff}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
