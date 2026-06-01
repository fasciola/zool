import React, { useState } from "react";
import { RotateCcw, Send } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import { RainOnGlass } from "../components/RainOnGlass";
import { SectionHeader } from "../components/SectionHeader";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface PartnerMetadata {
    category: string;
    description: string;
    authority: string;
    highlight: string;
}

const PARTNER_METADATA_EN: PartnerMetadata[] = [
    {
        category: "Government Entity",
        description: "Official representative of Ajman Government, streamlining all local approvals, commercial relations, and corporate registrations.",
        authority: "Ajman Government",
        highlight: "Sovereign Link"
    },
    {
        category: "Free Zone Setup",
        description: "Premium investment hub in Ajman offering cost-effective business configurations, smart offices, and 100% foreign ownership.",
        authority: "AFZ Dubai Link",
        highlight: "Tax Holiday"
    },
    {
        category: "Federal Authority",
        description: "The primary federal organization for processing investor residency visas, business identity papers, customs affairs, and entry clearances.",
        authority: "FAICS UAE",
        highlight: "Official Pass"
    },
    {
        category: "Healthcare Licensing",
        description: "Direct authority for medical establishment configurations, statutory clinic licenses, and healthcare team permits.",
        authority: "EHS Approved",
        highlight: "Medical Hub"
    },
    {
        category: "Federal Integration",
        description: "Assisting with corporate security files, commercial regulatory safety frameworks, and direct federal gateway integrations.",
        authority: "MOI Integrated",
        highlight: "Secure Path"
    },
    {
        category: "Corporate Legal",
        description: "Managing power of attorney authentications, statutory notary attestations, and corporate structural legality under judicial decree.",
        authority: "MOJ Aligned",
        highlight: "Certified Authority"
    },
    {
        category: "Trade & Transport Zone",
        description: "Official logistical and business hub providing priority container clearances, sea/air cargo facilities, and commercial setups.",
        authority: "ANC Strategic",
        highlight: "Logistics Hub"
    },
    {
        category: "Virtual Free Zone",
        description: "Modern digitization-focused free zone offering easy digital platform setups, virtual desks, and 0% corporate tax benefits.",
        authority: "Meydan Official",
        highlight: "100% Remote"
    },
    {
        category: "Economic Giant",
        description: "Ras Al Khaimah's supreme business gateway offering flexible warehousing, industrial manufacturing zones, and global market pathways.",
        authority: "RAKEZ Partner",
        highlight: "SME Gateway"
    },
    {
        category: "Aviation Partners",
        description: "Providing seamless corporate travel connections, express logistical solutions, and global corporate account services.",
        authority: "Air Arabia Official",
        highlight: "SME Rates"
    },
    {
        category: "Aviation Partners",
        description: "Direct premium air chartering, cargo routing, and regional African/Middle-Eastern executive transport networks.",
        authority: "Badr Strategic",
        highlight: "Priority Freight"
    },
    {
        category: "Aviation Partners",
        description: "Connecting global business visionaries with world-class long-haul flight rewards, corporate program benefits and VIP travel.",
        authority: "Emirates Corporate",
        highlight: "Global Route"
    },
    {
        category: "Aviation Partners",
        description: "Star Alliance airline facilitating premier African business trade routes and cargo consolidations directly from the UAE.",
        authority: "Ethiopian Cargo",
        highlight: "Active Cargo"
    },
    {
        category: "Aviation Partners",
        description: "Regional business-class travel integration with fast-track terminal benefits for quick regional corporate missions.",
        authority: "Flydubai Business",
        highlight: "Terminal 2 VIP"
    }
];

const PARTNER_METADATA_AR: PartnerMetadata[] = [
    {
        category: "شريك حكومي",
        description: "المظلة الحاكمة لإمارة عجمان والتي توجه كافة الموافقات المحلية، والعلاقات التجارية، وتأسيس وتوثيق الكيانات الاقتصادية.",
        authority: "حكومة عجمان بمحبة",
        highlight: "بوابة سيادية"
    },
    {
        category: "حلول المناطق الحرة",
        description: "شريك متميز لتسهيل التراخيص الصناعية والتجارية مع ميزة التملك الأجنبي الكامل بنسبة ١٠٠٪ في إمارة عجمان.",
        authority: "منطقة عجمان الحرة",
        highlight: "إعفاء ضريبي"
    },
    {
        category: "هيئة اتحادية سيادية",
        description: "الجهة الاتحادية العليا المسؤولة عن تنسيق تأشيرات الإقامة للمستثمرين، الهويات القانونية، حماية المنافذ الجمركية، والدخول الآمن.",
        authority: "معتمد لدى FAICS",
        highlight: "إقامات مضمونة"
    },
    {
        category: "تراخيص الرعاية الصحية",
        description: "تنظيم تراخيص المنشآت الطبية والعيادات والمستشفيات، وتصاريح طواقم العمل الطبي المعتمدة اتحادياً بدولة الإمارات.",
        authority: "مؤسسة EHS الطبية",
        highlight: "رعاية ممتازة"
    },
    {
        category: "منظومة اتحادية أمنية",
        description: "تكامل وتسهيل ملفات الهجرة والتأشيرات وتراخيص الأمن والسلامة والربط الفيدرالي الذكي لشركتك الجديدة.",
        authority: "بوابة وزارة الداخلية",
        highlight: "أمان واستقرار"
    },
    {
        category: "الشؤون القضائية والتوثيق",
        description: "بوابة توثيق عقود التأسيس، تصديق الوكالات القانونية الرسمية، وحماية وحفظ الكيان الاعتباري قانونياً تحت إشراف قضائي.",
        authority: "وزارة العدل الإتحادية",
        highlight: "حماية قانونية"
    },
    {
        category: "الممرات اللوجستية والشحن",
        description: "بوابة لوجستية متكاملة تضمن سرعة النقل العابر للحدود وفتح ممرات إمداد وتصدير جمركي لا مثيل له.",
        authority: "اتحاد ANC اللوجستي",
        highlight: "تخليص معجل"
    },
    {
        category: "منطقة حرة رائدة رقمياً",
        description: "منطقة حرة متطورة تقدم خدمات تأسيس افتراضية ميسرة وخيارات مكاتب ذكية مثالية لريادة الأعمال التكنولوجية.",
        authority: "منطقة حرة ميدان",
        highlight: "تكامل ذكي بالكامل"
    },
    {
        category: "عملاق الاستثمار والصناعة",
        description: "بوابة رأس الخيمة الاقتصادية والتجارية الداعمة للشركات، لتوفير مستودعات مرنة، ومصانع مجهزة وتراخيص عالمية متميزة.",
        authority: "بوابة RAKEZ الرسمية",
        highlight: "حلول صناعية مرنة"
    },
    {
        category: "شركاء الطيران",
        description: "تسهيل حجوزات الشركات والربط اللوجستي وتقديم أسعار خاصة مدعومة لرواد الأعمال والمستثمرين الجدد.",
        authority: "العربية للطيران",
        highlight: "خصومات الشركات"
    },
    {
        category: "شركاء الطيران",
        description: "ممرات الشحن اللوجستي السريع والرحلات التجارية العارضة لتسهيل المبادلات الاقتصادية والرحلات الإقليمية والدولية متميزة الكفاءة.",
        authority: "بدر للطيران الرسمي",
        highlight: "شحن معجل"
    },
    {
        category: "شركاء الطيران",
        description: "ربط مستثمري دبي بأسواق الأرض عبر أسطول طيران هو الأفضل عالمياً، مع توفير برامج مكافآت رفيعة للشركات وخدمات VIP.",
        authority: "طيران الإمارات",
        highlight: "شبكة عالمية"
    },
    {
        category: "شركاء الطيران",
        description: "تيسير عمليات الشحن الجوي وصادرات قطاع السلع الهامة والمبادلات التجارية بين الإمارات والقارة الأفريقية بكفاءة استباقية بالغة.",
        authority: "الخطوط الإثيوبية",
        highlight: "تحالف ممتد"
    },
    {
        category: "شركاء الطيران",
        description: "رحلات عمل إقليمية مريحة وذكية مع مزايا الصعود المعزز والمرونة القصوى وتخليص الإجراءات في مبنى رقم ٢ مخصصاً لك.",
        authority: "فلاي دبي للأعمال",
        highlight: "درجة ممتازة"
    }
];

// Map partner indexes to specific custom filename bases inside the public folder /logos/
const PARTNER_LOGO_FILENAMES: Record<number, string> = {
    0: "gov_ajman",
    1: "AJMAN",
    2: "gov_faics",
    3: "gov_health",
    4: "gov_interior",
    5: "gov_justice",
    6: "anc-logo",
    7: "Meydan",
    8: "RAKEZ",
    9: "air_arabia",
    10: "badr_aviation",
    11: "emirates",
    12: "ethiopian_airlines",
    13: "flydubai"
};

// Specify which partner indices have uploaded logos in the public/logos directory.
const UPLOADED_LOGOS: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// Optimized 3D Flipping Card Component
const PartnerCard = React.memo(({ name, index }: { name: string; index: number }) => {
    const { language, isRtl } = useLanguage();
    const [isFlipped, setIsFlipped] = useState(false);
    const [imgStage, setImgStage] = useState(() => {
        return UPLOADED_LOGOS.includes(index) ? 0 : 2;
    });

    // Look for uploaded logos inside the public folder /logos/ dynamically
    const baseName = PARTNER_LOGO_FILENAMES[index] || `logo-${index + 1}`;
    const localPng = `/logos/${baseName}.png`;
    const localJpg = `/logos/${baseName}.jpg`;
    const currentImg = imgStage === 0 ? localPng : imgStage === 1 ? localJpg : "";

    const handleImgError = () => {
        setImgStage((prev) => prev + 1);
    };

    const currentMetadata = language === "ar"
        ? (PARTNER_METADATA_AR[index] || PARTNER_METADATA_AR[0])
        : (PARTNER_METADATA_EN[index] || PARTNER_METADATA_EN[0]);

    // Extract a robust, beautiful acronym for fallback monograms
    const getInitials = (nameStr: string) => {
        return nameStr
            .replace(/\(.*?\)/g, "") // remove parentheses
            .split(" ")
            .filter(word => word.length > 0 && word.toLowerCase() !== "of" && word.toLowerCase() !== "and" && word.toLowerCase() !== "the")
            .map(word => word[0])
            .join("")
            .slice(0, 3)
            .toUpperCase();
    };

    const initials = getInitials(name);

    const handleWhatsApp = (e: React.MouseEvent) => {
        e.stopPropagation(); // Stop click from flipping the card
        const msg = encodeURIComponent(
            language === "ar"
                ? `مرحباً زول لخدمات رجال الأعمال، أود الاستفسار عن تفاصيل تأسيس وتسهيل الإجراءات بالتنسيق مع: "${name}". يرجى الإفادة بالخطوات.`
                : `Hello ZOOL Businessmen Services, I would like to inquire about setups and corporate solutions linked with "${name}". Please advise.`
        );
        window.location.href = `https://wa.me/+971568826563?text=${msg}`;
    };

    return (
        <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="relative w-full h-[250px] perspective-1000 cursor-pointer select-none group"
        >
            <div
                className={`relative w-full h-full duration-500 preserve-3d transition-transform ${isFlipped ? "rotate-y-180" : ""
                    } lg:group-hover:rotate-y-180`}
            >

                {/* CARD FRONT FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-md p-6 flex flex-col justify-between items-center hover:border-gold/30 transition-all duration-300 shadow-lg overflow-hidden">
                    {/* Decorative ambient radial gradient */}
                    <div className="absolute w-28 h-28 rounded-full bg-gold/5 filter blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                    {/* Top category ribbon and count */}
                    <div className="w-full flex justify-between items-center z-10">
                        <span className="text-[9px] font-mono font-bold tracking-wider text-gold bg-gold/10 px-2 py-0.5 rounded-sm border border-gold/20">
                            {currentMetadata.category}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500 font-bold">
                            #{String(index + 1).padStart(2, "0")}
                        </span>
                    </div>

                    {imgStage < 2 ? (
                        <>
                            {/* Center Logo Area */}
                            <div className="relative flex items-center justify-center w-full h-24 z-10">
                                <img
                                    src={currentImg}
                                    alt={name}
                                    onError={handleImgError}
                                    className="max-h-16 max-w-[85%] object-contain filter brightness-110 drop-shadow-[0_0_12px_rgba(255,255,255,0.15)] transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* Name & Tap to Flip Prompt */}
                            <div className="w-full text-center z-10">
                                <h4 className="text-sm font-extrabold text-white tracking-tight leading-snug line-clamp-2 max-w-[95%] mx-auto font-sans">
                                    {name}
                                </h4>
                                <div className="flex items-center justify-center gap-1.5 mt-2 text-[9px] font-mono text-slate-500 group-hover:text-gold transition-colors">
                                    <span>{language === "ar" ? "اضغط للتفاصيل" : "TAP TO FLIP"}</span>
                                    <RotateCcw className="h-2.5 w-2.5 animate-pulse" />
                                </div>
                            </div>
                        </>
                    ) : (
                        <>
                            {/* Text Only Fallback: Center the name elegantly as a hero header */}
                            <div className="flex-1 flex flex-col justify-center items-center w-full text-center z-10 px-2">
                                <h4 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-relaxed font-sans group-hover:text-gold transition-colors duration-300">
                                    {name}
                                </h4>
                            </div>

                            {/* Tap to Flip Prompt */}
                            <div className="w-full text-center z-10">
                                <div className="flex items-center justify-center gap-1.5 text-[9px] font-mono text-slate-500 group-hover:text-gold transition-colors">
                                    <span>{language === "ar" ? "اضغط للتفاصيل" : "TAP TO FLIP"}</span>
                                    <RotateCcw className="h-2.5 w-2.5 animate-pulse" />
                                </div>
                            </div>
                        </>
                    )}
                </div>

                {/* CARD BACK FACE */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-sm border border-gold/30 bg-gradient-to-br from-[#050C19] via-[#0A1628] to-slate-950 p-6 flex flex-col justify-between shadow-2xl shadow-gold/5 overflow-hidden">
                    {/* Micro dot matrix bg */}
                    <div className="absolute inset-0 bg-[radial-gradient(#2b64f60c_1px,transparent_1px)] [background-size:14px_14px] pointer-events-none opacity-40" />

                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-3 z-10">
                        <span className="text-[10px] font-mono text-gold font-bold tracking-wider uppercase">
                            {currentMetadata.authority}
                        </span>
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded-sm bg-white/5 text-slate-300 border border-white/10 uppercase">
                            {currentMetadata.highlight}
                        </span>
                    </div>

                    {/* Mini strategic description */}
                    <div className="flex-1 flex flex-col justify-center py-4 z-10">
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-sans font-normal">
                            {currentMetadata.description}
                        </p>
                    </div>

                    {/* Direct call-to-action buttons */}
                    <div className="flex items-center gap-2 border-t border-white/5 pt-3 z-10 w-full">
                        <button
                            onClick={handleWhatsApp}
                            className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 rounded-sm bg-gold hover:bg-gold-light font-mono text-[9px] font-bold text-white uppercase tracking-wider transition-all duration-300 active:scale-[0.97] cursor-pointer"
                        >
                            <span>{language === "ar" ? "استفسار فوري" : "INQUIRE NOW"}</span>
                            <Send className="h-2.5 w-2.5" />
                        </button>
                        <button
                            className="px-2.5 py-1.5 rounded-sm bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white transition-all duration-350 font-mono text-[9px]"
                            aria-label="Flip back"
                        >
                            <RotateCcw className="h-3 w-3" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
});

PartnerCard.displayName = "PartnerCard";

export function PartnersSection() {
    const { content } = useLanguage();
    const revealRef = useScrollReveal();

    return (
        <section
            ref={revealRef}
            id="partners"
            className="relative w-full py-20 sm:py-28 bg-transparent overflow-hidden"
        >
            {/* Rain on Glass background simulation */}
            <RainOnGlass />

            {/* Deep decorative shadows to frame content on top of rain canvas */}
            <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

                {/* Frosted Glass Header Card */}
                <div className="reveal-fade-up max-w-4xl mx-auto p-6 md:p-8 rounded-sm border border-white/10 bg-black/35 backdrop-blur-md shadow-2xl mb-16 text-center">
                    <SectionHeader
                        badge={content.partners.badge}
                        title={content.partners.title}
                        subtitle={content.partners.subtitle}
                        center={true}
                        isDark={true}
                    />
                </div>

                {/* Dynamic 3D flipping cards grid (Replacing older marquee component) */}
                <div className="reveal-fade-up grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-24 pointer-events-auto">
                    {content.partners.list.map((partner, index) => (
                        <PartnerCard key={partner} name={partner} index={index} />
                    ))}
                </div>

                {/* 4 Frosted Glass Value Cards */}
                <div className="mt-16">
                    <div className="text-center mb-10 sm:mb-12 reveal-fade-up">
                        <span className="inline-block px-3 py-1 mb-3 text-xs md:text-sm font-bold tracking-widest text-[#2B64F6] uppercase bg-[#2B64F6]/10 rounded-sm border border-[#2B64F6]/30 font-mono">
                            {content.partners.valuesBadge}
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-sans">
                            {content.partners.valuesTitle}
                        </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {content.partners.valuesList.map((val) => (
                            <div
                                key={val.number}
                                className="reveal-fade-up flex flex-col justify-between p-6 rounded-sm border border-white/5 bg-white/[0.02] backdrop-blur-md border-l-2 border-l-transparent hover:border-l-[#2B64F6] hover:bg-white/[0.05] hover:border-r-white/10 transition-all duration-300 hover:-translate-y-1.5 shadow-xl group"
                            >
                                <div>
                                    <div className="text-xl sm:text-2xl font-black font-mono text-gold/30 group-hover:text-gold transition-colors duration-300 mb-4">
                                        {val.number}
                                    </div>
                                    <h4 className="text-lg font-bold text-white mb-2 font-sans group-hover:text-gold transition-colors">
                                        {val.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-sans mt-2">
                                        {val.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
