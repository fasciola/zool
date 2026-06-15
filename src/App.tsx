import {
  ArrowRight,
  Award,
  Briefcase,
  Building,
  ChevronDown,
  ChevronUp,
  FileText,
  Fingerprint,
  Globe,
  Landmark,
  Lock,
  Mail,
  MapPin,
  Menu,
  Percent,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useState } from "react";
import { LanguageProvider, useLanguage } from "./contexts/LanguageContext";

const whatsappUrl = "https://wa.me/971568826563";

const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  FileText,
  ShieldCheck,
  Landmark,
  Fingerprint,
  Building,
  Percent,
  Lock,
  Users,
  Award,
};

const serviceImages = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80",
];

function goTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function initials(name: string) {
  const clean = name.replace(/\([^)]*\)/g, "").replace(/[^A-Za-z0-9\s]/g, " ").trim();
  return clean.split(/\s+/).slice(0, 3).map((word) => word[0]).join("").toUpperCase();
}

function Header() {
  const { content, toggleLanguage, isRtl } = useLanguage();
  const [open, setOpen] = useState(false);
  const nav = [
    { id: "home", label: content.nav.hero },
    { id: "services", label: content.nav.services },
    { id: "partners", label: content.nav.partners },
    { id: "about", label: content.nav.about },
    { id: "contact", label: content.nav.contact },
  ];
  const openSection = (id: string) => {
    setOpen(false);
    goTo(id);
  };

  return (
    <>
      <div className="hidden bg-[#eef7fb] text-xs text-[#071634] lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-[#d3063b]" /> {content.contact.addressValue}</span>
            <span className="flex items-center gap-2"><Mail className="h-3.5 w-3.5 text-[#d3063b]" /> {content.contact.emailValue}</span>
          </div>
          <a href={`tel:${content.contact.phones[0]}`} className="flex items-center gap-2 font-semibold hover:text-[#d3063b]"><Phone className="h-3.5 w-3.5 text-[#d3063b]" /> {content.contact.phones[0]}</a>
        </div>
      </div>
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <button onClick={() => openSection("home")}><img src="/zool_logo.png" alt={content.company} className="h-11 w-auto object-contain" /></button>
          <nav className="hidden items-center gap-7 text-sm font-semibold text-[#081631] lg:flex">
            {nav.map((item) => <button key={item.id} onClick={() => openSection(item.id)} className="transition hover:text-[#d3063b]">{item.label}</button>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <button onClick={toggleLanguage} className="inline-flex items-center gap-2 rounded-sm border border-slate-200 bg-white px-4 py-3 text-xs font-black uppercase tracking-wider text-[#071634] transition hover:border-[#d3063b] hover:text-[#d3063b]"><Globe className="h-4 w-4" /> {content.langToggle}</button>
            <a href={whatsappUrl} className="rounded-sm bg-[#071634] px-5 py-3 text-xs font-black uppercase tracking-wider text-white shadow-lg transition hover:bg-[#d3063b]">{content.getStarted}</a>
          </div>
          <button onClick={() => setOpen(true)} className="rounded-md border border-slate-200 p-2 text-[#081631] lg:hidden"><Menu className="h-6 w-6" /></button>
        </div>
      </header>
      {open && (
        <div className="fixed inset-0 z-[60] bg-[#071634] text-white lg:hidden" dir={isRtl ? "rtl" : "ltr"}>
          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <img src="/zool_logo.png" alt={content.company} className="h-10 w-auto brightness-0 invert" />
            <button onClick={() => setOpen(false)} className="rounded-md border border-white/20 p-2"><X className="h-5 w-5" /></button>
          </div>
          <div className="flex flex-col gap-5 p-8 text-xl font-bold">
            {nav.map((item) => <button key={item.id} onClick={() => openSection(item.id)} className="text-start hover:text-[#ffbf00]">{item.label}</button>)}
            <button onClick={toggleLanguage} className="mt-4 text-start text-sm font-black uppercase tracking-widest text-[#ffbf00]">{content.langToggle}</button>
            <a href={whatsappUrl} className="mt-6 rounded-sm bg-[#d3063b] px-6 py-4 text-center text-sm uppercase tracking-widest">{content.getStarted}</a>
          </div>
        </div>
      )}
    </>
  );
}

function Hero() {
  const { content, isRtl } = useLanguage();
  const heroText = isRtl ? "text-white" : "text-[#071634]";
  const heroSub = isRtl ? "text-white/80" : "text-slate-700";

  return (
    <section id="home" className="relative overflow-hidden bg-[#eef7fb]" dir={isRtl ? "rtl" : "ltr"}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.9),transparent_30%),linear-gradient(115deg,rgba(255,255,255,.92)_0%,rgba(255,255,255,.68)_42%,transparent_43%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-1/2 bg-[linear-gradient(135deg,rgba(7,22,52,.94),rgba(7,22,52,.7)),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80')] bg-cover bg-center lg:block" />
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(3,48,88,.14)_1px,transparent_1px),linear-gradient(90deg,rgba(3,48,88,.14)_1px,transparent_1px)] [background-size:46px_46px]" />
      <div className="relative mx-auto grid min-h-[680px] max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
        <div className={`max-w-2xl pt-8 ${isRtl ? "rounded-[2rem] bg-[#071634]/90 p-7 shadow-2xl backdrop-blur-md lg:bg-transparent lg:p-0 lg:shadow-none" : ""}`}>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-black uppercase tracking-[.2em] text-[#d3063b] shadow-sm"><Sparkles className="h-4 w-4" /> {content.hero.badge}</span>
          <h1 className={`text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl ${heroText}`}>{content.hero.headline}</h1>
          <p className={`mt-6 max-w-xl text-base leading-8 sm:text-lg ${heroSub}`}>{content.hero.subheadline}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={whatsappUrl} className="group inline-flex items-center justify-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white shadow-xl transition hover:bg-[#d3063b]">{content.getStarted} <ArrowRight className={`h-4 w-4 ${isRtl ? "rotate-180" : ""}`} /></a>
            <button onClick={() => goTo("services")} className="inline-flex items-center justify-center rounded-sm border border-[#071634]/15 bg-white px-7 py-4 text-sm font-black uppercase tracking-wider text-[#071634] shadow-sm transition hover:border-[#d3063b] hover:text-[#d3063b]">{content.ourServices}</button>
          </div>
        </div>
        <div className="relative hidden lg:block">
          <div className="absolute -right-6 -top-10 h-28 w-28 rounded-full bg-[#ffbf00]" />
          <div className="absolute -bottom-8 left-10 h-20 w-20 rounded-full bg-[#d3063b]" />
          <div className="relative ml-auto max-w-md rounded-[2rem] border border-white/25 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
            <div className="overflow-hidden rounded-[1.5rem] bg-white shadow-xl">
              <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt="Business setup consultation" className="h-48 w-full object-cover" />
              <div className="grid grid-cols-2 gap-4 p-6">
                {content.services.list.slice(0, 4).map((service) => {
                  const Icon = iconMap[service.iconName] || Briefcase;
                  return <div key={service.id} className="rounded-2xl border border-slate-100 bg-[#f7fbfd] p-5 text-center shadow-sm"><Icon className="mx-auto h-9 w-9 text-[#d3063b]" /><p className="mt-3 text-xs font-black uppercase tracking-wider text-[#071634]">{service.title}</p></div>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PartnersLogos() {
  const { content } = useLanguage();
  const partners = content.partners.list.slice(0, 10);
  return (
    <section id="partners" className="relative z-20 -mt-10 bg-white pb-10 pt-6 sm:-mt-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="rounded-[2rem] border border-slate-100 bg-white/95 p-5 shadow-xl backdrop-blur">
          <div className="mb-5 text-center">
            <p className="text-xs font-black uppercase tracking-[.25em] text-[#d3063b]">{content.partners.badge}</p>
            <h2 className="mt-2 text-2xl font-black text-[#071634]">{content.partners.title}</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {partners.map((partner, index) => (
              <div key={partner} className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-4 shadow-sm transition hover:-translate-y-1 hover:border-[#d3063b]/30 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#071634] text-sm font-black text-white ring-4 ring-[#eef7fb] group-hover:bg-[#d3063b]">
                  {initials(partner) || index + 1}
                </div>
                <span className="text-sm font-black leading-snug text-slate-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const { content } = useLanguage();
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div className="relative min-h-[420px]">
          <img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80" alt="ZOOL business consultation" className="absolute left-0 top-0 h-80 w-80 rounded-full object-cover shadow-xl" />
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80" alt="Business consultant" className="absolute bottom-0 right-8 h-48 w-48 rounded-full border-8 border-white object-cover shadow-xl" />
          <div className="absolute bottom-10 left-12 rounded-full bg-[#d3063b] px-6 py-4 font-black text-white shadow-lg">17 +<br /><span className="text-xs uppercase">Years</span></div>
        </div>
        <div><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">{content.about.badge}</p><h2 className="mt-3 text-3xl font-black leading-tight text-[#071634] sm:text-5xl">{content.about.title}</h2><p className="mt-6 leading-8 text-slate-700">{content.about.subtitle}</p><p className="mt-4 leading-8 text-slate-700">{content.about.paragraph1}</p><p className="mt-4 leading-8 text-slate-700">{content.about.paragraph2}</p><a href={whatsappUrl} className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#d3063b]">{content.getStarted} <ArrowRight className="h-4 w-4" /></a></div>
      </div>
    </section>
  );
}

function Values() {
  const { content } = useLanguage();
  return <section className="bg-[#eef7fb] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mb-12 max-w-3xl"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">{content.partners.valuesBadge}</p><h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">{content.partners.valuesTitle}</h2></div><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{content.partners.valuesList.map((value) => <div key={value.number} className="overflow-hidden rounded-sm bg-white shadow-lg"><div className="flex h-40 items-center justify-center bg-[#071634]"><span className="text-6xl font-black text-white/20">{value.number}</span></div><div className="p-7 text-center"><h3 className="text-xl font-black text-[#071634]">{value.title}</h3><p className="mt-4 text-sm leading-7 text-slate-600">{value.description}</p></div></div>)}</div></div></section>;
}

function Services() {
  const { content, isRtl } = useLanguage();
  return <section id="services" className="bg-white py-20 sm:py-28" dir={isRtl ? "rtl" : "ltr"}><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mb-12 max-w-3xl"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">{content.services.badge}</p><h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">{content.services.title}</h2><p className="mt-4 leading-8 text-slate-600">{content.services.subtitle}</p></div><div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">{content.services.list.map((service, index) => { const Icon = iconMap[service.iconName] || Briefcase; return <article key={service.id} className="group overflow-hidden rounded-sm border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"><div className="relative h-48 overflow-hidden"><img src={serviceImages[index % serviceImages.length]} alt={service.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-[#071634]/25" /><div className="absolute left-4 top-4 rounded-full bg-white/90 p-3 text-[#d3063b] shadow-md backdrop-blur"><Icon className="h-5 w-5" /></div></div><div className="p-5"><h3 className="font-black leading-snug text-[#071634]">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p><a href={whatsappUrl} className="mt-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#d3063b]">{content.services.viewDetails} <ArrowRight className={`h-3.5 w-3.5 ${isRtl ? "rotate-180" : ""}`} /></a></div></article>; })}</div></div></section>;
}

function Commitment() {
  const { content } = useLanguage();
  return <section className="relative overflow-hidden bg-[#eef7fb] py-20 sm:py-28"><div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#9dd6e0_1px,transparent_1px)] [background-size:24px_24px]" /><div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">{content.about.differentiatorsTitle}</p><h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black text-[#071634] sm:text-5xl">{content.about.subtitle}</h2><div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-5">{content.about.differentiators.map((item, index) => <div key={item} className="rounded-3xl border border-slate-200 bg-white px-5 py-8 shadow-sm"><div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#071634] text-sm font-black text-white">{index + 1}</div><p className="text-sm font-bold leading-6 text-[#071634]">{item}</p></div>)}</div><a href={whatsappUrl} className="mt-8 inline-flex items-center gap-3 rounded-sm bg-[#071634] px-7 py-4 text-sm font-black uppercase tracking-wider text-white transition hover:bg-[#d3063b]">{content.getStarted} <ArrowRight className="h-4 w-4" /></a></div></section>;
}

function FAQ() {
  const { content } = useLanguage();
  const [active, setActive] = useState(0);
  const faqs = content.about.differentiators.map((item, index) => ({ q: item, a: index % 2 === 0 ? content.about.paragraph1 : content.about.paragraph2 }));
  return <section className="bg-white py-20 sm:py-28"><div className="mx-auto max-w-5xl px-4 sm:px-6"><div className="mb-10 text-center"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">Frequently Ask Question?</p><h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">{content.about.differentiatorsTitle}</h2></div><div className="space-y-4">{faqs.map((faq, index) => <div key={faq.q} className="rounded-sm border border-slate-100 bg-white shadow-md"><button onClick={() => setActive(active === index ? -1 : index)} className="flex w-full items-center justify-between gap-4 p-5 text-start font-black text-[#071634]"><span>{index + 1}. {faq.q}</span>{active === index ? <ChevronUp className="h-5 w-5 text-[#d3063b]" /> : <ChevronDown className="h-5 w-5" />}</button>{active === index && <p className="border-t border-slate-100 p-5 pt-4 leading-7 text-slate-600">{faq.a}</p>}</div>)}</div></div></section>;
}

function PartnersTestimonials() {
  const { content } = useLanguage();
  return <section className="bg-[#fafafa] py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-6"><div className="mb-12 text-center"><p className="text-sm font-black uppercase tracking-[.25em] text-[#d3063b]">{content.partners.badge}</p><h2 className="mt-3 text-3xl font-black text-[#071634] sm:text-5xl">{content.partners.title}</h2><p className="mx-auto mt-4 max-w-3xl leading-8 text-slate-600">{content.partners.subtitle}</p></div><div className="grid gap-7 md:grid-cols-3">{content.partners.valuesList.slice(0, 3).map((item) => <div key={item.number} className="rounded-sm bg-white p-8 text-center shadow-sm"><Quote className="mx-auto h-10 w-10 fill-[#d3063b]/10 text-[#d3063b]" /><p className="mt-6 min-h-[112px] leading-7 text-slate-600">“{item.description}”</p><div className="mt-6 flex justify-center gap-1 text-[#ffbf00]">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div><h3 className="mt-6 font-black text-[#071634]">{item.title}</h3><p className="text-xs font-bold uppercase tracking-wider text-[#d3063b]">{content.company}</p></div>)}</div></div></section>;
}

function Footer() {
  const { content } = useLanguage();
  return <footer id="contact" className="bg-[#071634] text-white"><div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.2fr_.8fr_1fr]"><div><img src="/zool_logo.png" alt={content.company} className="h-12 w-auto brightness-0 invert" /><p className="mt-6 max-w-sm leading-7 text-white/70">{content.footer.desc}</p></div><div><h3 className="text-lg font-black">{content.footer.quickLinks}</h3><div className="mt-5 grid gap-3 text-white/70"><button onClick={() => goTo("home")} className="text-start hover:text-[#ffbf00]">{content.nav.hero}</button><button onClick={() => goTo("services")} className="text-start hover:text-[#ffbf00]">{content.nav.services}</button><button onClick={() => goTo("partners")} className="text-start hover:text-[#ffbf00]">{content.nav.partners}</button><button onClick={() => goTo("about")} className="text-start hover:text-[#ffbf00]">{content.nav.about}</button></div></div><div><h3 className="text-lg font-black">{content.footer.connect}</h3><div className="mt-5 grid gap-4 text-white/70"><p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0 text-[#d3063b]" /> {content.contact.addressValue}</p>{content.contact.phones.map((phone) => <a key={phone} href={`tel:${phone}`} className="flex gap-3 hover:text-white"><Phone className="h-5 w-5 shrink-0 text-[#d3063b]" /> {phone}</a>)}<p className="flex gap-3"><Mail className="h-5 w-5 shrink-0 text-[#d3063b]" /> {content.contact.emailValue}</p></div></div></div><div className="border-t border-white/10 py-5 text-center text-sm text-white/50">© 2026 {content.company}. {content.footer.allRightsReserved}</div></footer>;
}

function RedesignedSite() {
  return <div className="min-h-screen bg-white font-sans text-[#071634]"><Header /><main><Hero /><PartnersLogos /><About /><Values /><Services /><Commitment /><FAQ /><PartnersTestimonials /></main><Footer /><a href={whatsappUrl} aria-label="WhatsApp" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#13c7a4] text-white shadow-2xl transition hover:scale-105"><Phone className="h-6 w-6" /></a></div>;
}

export default function App() {
  return <LanguageProvider><RedesignedSite /></LanguageProvider>;
}
