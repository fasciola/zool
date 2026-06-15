import {
    ArrowRight,
    Award,
    Banknote,
    BriefcaseBusiness,
    Building2,
    CheckCircle2,
    ChevronDown,
    ChevronUp,
    CircleHelp,
    FileCheck2,
    Globe2,
    Landmark,
    Mail,
    MapPin,
    Menu,
    Phone,
    Plane,
    Quote,
    ShieldCheck,
    Sparkles,
    Star,
    Stethoscope,
    Store,
    Truck,
    UserRoundCheck,
    Utensils,
    Wind,
    X,
    Zap,
} from "lucide-react";
import { useState } from "react";

const phoneNumber = "+971568826563";
const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}`;

const navItems = ["Home", "About Us", "Services", "Blogs", "Contact"];

const ventures = [
    {
        title: "E-commerce Platform",
        text: "Launch online stores, payment journeys, and logistics-ready platforms for Saudi customers.",
        image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=900&q=80",
        icon: Store,
    },
    {
        title: "Food Truck & Catering Services",
        text: "High-demand food concepts supported with licensing, location strategy, and operations planning.",
        image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=900&q=80",
        icon: Utensils,
    },
    {
        title: "Tech Startup & SaaS Solutions",
        text: "Build digital products, AI tools, booking systems, and scalable subscription businesses.",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
        icon: Zap,
    },
    {
        title: "Healthcare & Wellness Services",
        text: "Clinics, wellness centers, and health-support services with compliant setup pathways.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80",
        icon: Stethoscope,
    },
    {
        title: "Tourism and Travel Agency",
        text: "Travel, hospitality, and destination services built for Saudi Arabia’s growing tourism economy.",
        image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
        icon: Plane,
    },
    {
        title: "Educational Services",
        text: "Training centers, tutoring platforms, and professional education projects for new skills.",
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80",
        icon: Globe2,
    },
    {
        title: "Renewable Energy Solutions",
        text: "Solar, efficiency, and sustainability-focused ventures aligned with future development goals.",
        image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=80",
        icon: Wind,
    },
    {
        title: "Event Planning and Management",
        text: "Corporate events, exhibitions, entertainment setups, and premium guest experiences.",
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80",
        icon: Sparkles,
    },
];

const processSteps = [
    "KSA License",
    "License Management",
    "Complete License With Official Address",
    "Issuance Of The GM Visa",
    "Government Portal Registration",
    "Assistance in Bank Account Opening",
];

const faqs = [
    {
        q: "What is the difference between a business setup and a market-entry plan in Saudi Arabia?",
        a: "Business setup handles the license and legal formation. Market-entry planning adds positioning, cost strategy, office requirements, banking, hiring, and launch steps.",
    },
    {
        q: "What are the key steps involved in setting up a business in Saudi Arabia?",
        a: "The usual flow is activity selection, license application, official address, government portal registration, visa processing, banking support, and operational launch.",
    },
    {
        q: "What are the most important legal requirements for starting a business in Saudi Arabia?",
        a: "Requirements depend on activity and ownership structure, but typically include approved trade activity, compliant documents, licensed address, and registration with relevant authorities.",
    },
    {
        q: "Can you help with visas and bank account opening?",
        a: "Yes. We support the license-to-operation journey including visa guidance, portal registration, and coordination for business bank account opening.",
    },
];

const testimonials = [
    {
        name: "Ali R.",
        role: "Founder",
        text: "The process was clear from the first call. They explained the steps, costs, and documents without confusion.",
    },
    {
        name: "Ahmed S.",
        role: "General Manager",
        text: "Professional team, fast response, and strong follow up until our company was ready to operate.",
    },
    {
        name: "Fatima A.",
        role: "Co-Founder",
        text: "They helped us understand what to do next and kept the setup journey organized from start to finish.",
    },
];

function Header() {
    const [open, setOpen] = useState(false);

    const scrollTo = (id: string) => {
        setOpen(false);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <>
            <div className="hidden bg-[#eef7fb] text-[#06122b] text-xs lg:block">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
                    <div className="flex items-center gap-6">
                        <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#d3063b]" /> Ajman, UAE</span>
                        <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#d3063b]" /> zoolbusinessmenservicestyoi@gmail.com</span>
                    </div>
                    <a href={`tel:${phoneNumber}`} className="flex items-center gap-2 font-semibold hover:text-[#d3063b]"><Phone className="h-3.5 w-3.5 text-[#d3063b]" /> {phoneNumber}</a>
                </div>
            </div>

            <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
                    <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
                        <img src="/zool_logo.png" alt="ZOOL" className="h-11 w-auto object-contain" />
                    </button>

                    <nav className="hidden items-center gap-7 text-sm font-semibold text-[#081631] lg:flex">
                        {navItems.map((item) => (
                            <button key={item} onClick={() => scrollTo(item === "Home" ? "home" : item === "About Us" ? "about" : item === "Services" ? "services" : item === "Blogs" ? "ventures" : "contact")} className="transition hover:text-[#d3063b]">
                                {item}
                            </button>
                        ))}
                    </nav>

                    <div className="hidden items-center gap-3 lg:flex">
                        <a href={`tel:${phoneNumber}`} className="rounded-sm bg-[#071634] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#d3063b]">Get Started</a>
                        <a href={whatsappUrl} className="rounded-sm bg-[#d3063b] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#071634]">WhatsApp</a>
                    </div>

                    <button onClick={() => setOpen(true)} className="rounded-md border border-slate-200 p-2 text-[#081631] lg:hidden" aria-label="Open menu">
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </header>

            {open && (
                <div className="fixed inset-0 z-[60] bg-[#071634] text-white lg:hidden">
                    <div className="flex items-center justify-between border-b border-white/10 p-5">
                        <img src="/zool_logo.png" alt="ZOOL" className="h-10 w-auto brightness-0 invert" />
                        <button onClick={() => setOpen(false)} className="rounded-md border border-white/20 p-2"><X className="h-5 w-5" /></button>
                    </div>
                    <div className="flex flex-col gap-5 p-8 text-xl font-bold">
                        {navItems.map((item) => (
                            <button key={item} onClick={() => scrollTo(item === "Home" ? "home" : item === "About Us" ? "about" : item === "Services" ? "services" : item === "Blogs" ? "ventures" : "contact")} className="text-left hover:text-[#ffbf00]">
                                {item}
                            </button>
                        ))}
                        <a href={whatsappUrl} className="mt-8 rounded-sm bg-[#d3063b] px-6 py-4 text-center text-sm uppercase tracking-widest">Start on WhatsApp</a>
                    </div>
                </div>
            )}
        </>
    );
}

function Hero() {
    return (
        <section id="home" className="relative overflow-hidden bg-[#eef7fb]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),transparent_30%),linear-gradient(115deg,rgba(255,255,255,.9)_0%,rgba(255,255,255,.65)_38%,transparent_39%)]" />
            <div className="absolute right-0 top-0 h-full w-1/2 bg-[linear-gradient(135deg,rgba(7,22,52,.92),rgba(7,22,52,.2)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center max-lg:hidden" />
            <div className="absolute left-0 top-0 h-full w-full opacity-35 [background-image:linear-gradient(rgba(3,48,88,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(3,48,88,.14)_1px,transparent_1px)] [background-size:46px_46px]" />
            <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
                <div className="max-w-2xl pt-8">
                    <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-[#d3063b] shadow-sm">
                        <Sparkles className="h-4 w-4" /> Saudi Market Entry Specialists
                    </span>
                    <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-[#071634] sm:text-6xl lg:text-7xl">
                        Your Gateway To Business Setup <span className="text-[#d3063b]">In Saudi</span>
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-8 text-slate-700 sm:text-lg">
                        Start your company with a clear path from license planning to visa, address, portal registration, and bank account support.
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a href={whatsappUrl} className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:bg-[#d3063b]">
                            Get Free Consultation <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                        </a>
                        <a href="#ventures" className="inline-flex items-center justify-center gap-3 rounded-sm border border-[#071634]/15 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#071634] shadow-sm transition hover:border-[#d3063b] hover:text-[#d3063b]">
                            Explore Opportunities
                        </a>
                    </div>
                    <div className="mt-10 flex flex-wrap gap-4">
                        {["17+ Years", "Fast License Path", "Visa Support"].map((item) => (
                            <div key={item} className="rounded-xl border border-white bg-white/75 px-5 py-4 shadow-sm backdrop-blur">
                                <p className="text-lg font-black text-[#d3063b]">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="relative hidden lg:block">
                    <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-[#ffbf00]" />
                    <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full bg-[#d3063b]" />
                    <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                        <div className="rounded-[1.5rem] bg-white p-6 shadow-xl">
                            <div className="grid grid-cols-2 gap-4">
                                {[FileCheck2, Truck, Building2, Landmark].map((Icon, index) => (
                                    <div key={index} className="rounded-2xl border border-slate-100 bg-[#f7fbfd] p-5 text-center shadow-sm">
                                        <Icon className="mx-auto h-9 w-9 text-[#d3063b]" />
                                        <p className="mt-3 text-xs font-black uppercase tracking-wider text-[#071634]">Step {index + 1}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-5 rounded-2xl bg-[#071634] p-5 text-white">
                                <p className="text-sm font-bold">From License to Operation</p>
                                <p className="mt-2 text-xs leading-6 text-white/70">A guided journey designed for founders entering the Saudi market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" className="bg-white py-20 sm:py-28">
            <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
                <div className="relative min-h-[360px]">
                    <img className="absolute left-0 top-0 h-72 w-72 rounded-full object-cover shadow-xl" src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt="Business consultants" />
                    <img className="absolute bottom-0 right-12 h-44 w-44 rounded-full border-8 border-white object-cover shadow-xl" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80" alt="Consultant" />
                    <div className="absolute bottom-8 left-12 rounded-full bg-[#d3063b] px-6 py-4 font-black text-white shadow-lg">17 +<br /><span className="text-xs uppercase">Years</span></div>
                </div>
                <div>
                    <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Why Choose Saudi Arabia?</p>
                    <h2 className="mt-3 text-3xl font-black leading-tight text-[#071634] sm:text-5xl">A high-growth destination for ambitious founders</h2>
                    <p className="mt-6 leading-8 text-slate-700">
                        Saudi Arabia is transforming into one of the region’s most exciting business destinations. New sectors, mega projects, technology adoption, and strong consumer demand create opportunities for investors who enter with the right structure.
                    </p>
                    <p className="mt-4 leading-8 text-slate-700">
                        ZOOL helps entrepreneurs move from idea to operation with licensing guidance, documentation support, visa planning, and practical launch steps.
                    </p>
                    <a href={whatsappUrl} className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#d3063b]">Start The Conversation <ArrowRight className="h-4 w-4" /></a>
                </div>
            </div>
        </section>
    );
}

function Services() {
    return (
        <section id="services" className="bg-[#eef7fb] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">We’ve Been Thriving in 17 Years</p>
                    <h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">Built for clear setup, trusted execution, and long-term growth</h2>
                </div>
                <div className="grid gap-6 md:grid-cols-3">
                    {[
                        [Award, "Our Mission", "To simplify business setup with transparent guidance, clear documentation, and dependable follow-up."],
                        [ShieldCheck, "Our Vision", "To become a trusted market-entry partner for founders expanding across the GCC."],
                        [CheckCircle2, "Our Goal", "To help you become fully operational faster, with fewer delays and better planning."],
                    ].map(([Icon, title, text]) => {
                        const IconComponent = Icon as typeof Award;
                        return (
                            <div key={String(title)} className="group overflow-hidden rounded-sm bg-white shadow-lg transition hover:-translate-y-1 hover:shadow-2xl">
                                <div className="flex h-44 items-center justify-center bg-[#071634] bg-[radial-gradient(circle_at_top,rgba(211,6,59,.35),transparent_35%)]">
                                    <IconComponent className="h-16 w-16 text-white" />
                                </div>
                                <div className="p-7 text-center">
                                    <h3 className="text-xl font-black text-[#071634]">{String(title)}</h3>
                                    <p className="mt-4 text-sm leading-7 text-slate-600">{String(text)}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Ventures() {
    return (
        <section id="ventures" className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-12 max-w-3xl">
                    <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Top Business Ideas</p>
                    <h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">Top 8 Lucrative Business Ventures for Starting in Saudi Arabia</h2>
                </div>
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
                    {ventures.map((venture) => {
                        const Icon = venture.icon;
                        return (
                            <article key={venture.title} className="group overflow-hidden rounded-sm border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
                                <div className="relative h-48 overflow-hidden">
                                    <img src={venture.image} alt={venture.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                                    <div className="absolute left-4 top-4 rounded-full bg-white/90 p-3 text-[#d3063b] shadow-md backdrop-blur"><Icon className="h-5 w-5" /></div>
                                </div>
                                <div className="p-5">
                                    <h3 className="font-black leading-snug text-[#071634]">{venture.title}</h3>
                                    <p className="mt-3 text-sm leading-6 text-slate-600">{venture.text}</p>
                                    <a href={whatsappUrl} className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#d3063b]">More Info <ArrowRight className="h-3.5 w-3.5" /></a>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

function Process() {
    return (
        <section className="relative overflow-hidden bg-[#eef7fb] py-20 sm:py-28">
            <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#9dd6e0_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6">
                <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Fast Launch Path</p>
                <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black text-[#071634] sm:text-5xl">Get your KSA License in <span className="text-[#d3063b]">30 Days</span><br />and Become Fully Operational in Less Than 3 Months</h2>
                <div className="relative mt-14 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
                    {processSteps.map((step, index) => (
                        <div key={step} className="relative rounded-full border border-slate-200 bg-white px-5 py-8 shadow-sm">
                            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#071634] text-sm font-black text-white">{index + 1}</div>
                            <p className="text-sm font-bold leading-6 text-[#071634]">{step}</p>
                        </div>
                    ))}
                </div>
                <p className="mx-auto mt-10 max-w-3xl text-sm font-bold uppercase tracking-wider text-slate-600">Book a free consultation, share your activity, and we will map the suitable setup steps.</p>
                <a href={whatsappUrl} className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#d3063b]">Get Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </div>
        </section>
    );
}

function FAQ() {
    const [active, setActive] = useState(1);
    return (
        <section className="bg-white py-20 sm:py-28">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <div className="mb-10 text-center">
                    <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Frequently Ask Question?</p>
                    <h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">What founders ask before starting</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={faq.q} className="rounded-sm border border-slate-100 bg-white shadow-md">
                            <button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-black text-[#071634]">
                                <span>{index + 1}. {faq.q}</span>
                                {active === index ? <ChevronUp className="h-5 w-5 text-[#d3063b]" /> : <ChevronDown className="h-5 w-5" />}
                            </button>
                            {active === index && <p className="border-t border-slate-100 p-5 pt-4 leading-7 text-slate-600">{faq.a}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Testimonials() {
    return (
        <section className="bg-[#fafafa] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="mb-12 text-center">
                    <p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Testimonials & Feedback</p>
                    <h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">All Professional Testimonials</h2>
                </div>
                <div className="grid gap-7 md:grid-cols-3">
                    {testimonials.map((item) => (
                        <div key={item.name} className="rounded-sm bg-white p-8 text-center shadow-sm">
                            <Quote className="mx-auto h-10 w-10 fill-[#d3063b]/10 text-[#d3063b]" />
                            <p className="mt-6 min-h-[112px] leading-7 text-slate-600">“{item.text}”</p>
                            <div className="mt-6 flex justify-center gap-1 text-[#ffbf00]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
                            <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#eef7fb] text-[#d3063b]"><UserRoundCheck className="h-6 w-6" /></div>
                            <h3 className="mt-3 font-black text-[#071634]">{item.name}</h3>
                            <p className="text-xs font-bold uppercase tracking-wider text-[#d3063b]">{item.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ContactFooter() {
    return (
        <footer id="contact" className="bg-[#071634] text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_.8fr_1fr]">
                <div>
                    <img src="/zool_logo.png" alt="ZOOL" className="h-12 w-auto brightness-0 invert" />
                    <p className="mt-6 max-w-sm leading-7 text-white/70">ZOOL Businessmen Services helps founders and investors establish, structure, and launch their businesses with practical support and clear communication.</p>
                </div>
                <div>
                    <h3 className="text-lg font-black">Quick Links</h3>
                    <div className="mt-5 grid gap-3 text-white/70">
                        {navItems.map((item) => <a key={item} href={`#${item === "Home" ? "home" : item === "About Us" ? "about" : item === "Services" ? "services" : item === "Blogs" ? "ventures" : "contact"}`} className="hover:text-[#ffbf00]">{item}</a>)}
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-black">Contact Us</h3>
                    <div className="mt-5 grid gap-4 text-white/70">
                        <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[#d3063b]" /> Aldana - Al Hamidiya 1 - Ajman</p>
                        <a href={`tel:${phoneNumber}`} className="flex gap-3 hover:text-white"><Phone className="h-5 w-5 shrink-0 text-[#d3063b]" /> {phoneNumber}</a>
                        <p className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-[#d3063b]" /> zoolbusinessmenservicestyoi@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10 py-5 text-center text-sm text-white/50">© 2026 ZOOL. All rights reserved.</div>
        </footer>
    );
}

function FloatingWhatsApp() {
    return (
        <a href={whatsappUrl} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#13c7a4] text-white shadow-2xl transition hover:scale-105">
            <Phone className="h-6 w-6" />
        </a>
    );
}

export default function App() {
    return (
        <div className="min-h-screen bg-white font-sans text-[#071634]">
            <Header />
            <main>
                <Hero />
                <About />
                <Services />
                <Ventures />
                <Process />
                <FAQ />
                <Testimonials />
            </main>
            <ContactFooter />
            <FloatingWhatsApp />
        </div>
    );
}
