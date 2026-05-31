import { useLanguage } from "../contexts/LanguageContext";

interface SectionHeaderProps {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  isDark?: boolean;
}

export function SectionHeader({ badge, title, subtitle, center = true, isDark = false }: SectionHeaderProps) {
  const { isRtl } = useLanguage();

  return (
    <div className={`max-w-3xl mb-12 sm:mb-16 reveal-fade-up ${center ? "mx-auto text-center" : isRtl ? "text-right" : "text-left"}`}>
      <span className="inline-block px-3 py-1 mb-3 text-xs md:text-sm font-bold tracking-widest text-[#2B64F6] uppercase bg-[#2B64F6]/10 rounded-sm border border-[#2B64F6]/30 font-mono">
        {badge}
      </span>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight font-sans text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed font-sans font-light text-slate-300">
          {subtitle}
        </p>
      )}
    </div>
  );
}
