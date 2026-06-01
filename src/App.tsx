import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { PartnersSection } from "./sections/PartnersSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { ParticlesBackground } from "./components/ParticlesBackground";

export default function App() {
    return (
        <LanguageProvider>
            <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden antialiased bg-[#030408]">
                {/* Light, ultra-fast CSS & JS Canvas Particle Ambient Background */}
                <ParticlesBackground />

                {/* Content wrapper with higher z-index to overlay background elements correctly */}
                <div className="relative z-10 flex flex-col min-h-screen w-full justify-between">
                    {/* Global Navigation Bar */}
                    <Navbar />

                    {/* Master Section layouts */}
                    <main className="flex-grow">
                        <HeroSection />
                        <ServicesSection />
                        <PartnersSection />
                        <AboutSection />
                        <ContactSection />
                    </main>

                    {/* Global Footer */}
                    <Footer />
                </div>

                {/* Floating Quick Action Contacts */}
                <FloatingWhatsApp />
            </div>
        </LanguageProvider>
    );
}
