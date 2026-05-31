import { LanguageProvider } from "./contexts/LanguageContext";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./sections/HeroSection";
import { ServicesSection } from "./sections/ServicesSection";
import { PartnersSection } from "./sections/PartnersSection";
import { AboutSection } from "./sections/AboutSection";
import { ContactSection } from "./sections/ContactSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FlowField } from "./components/FlowField";

export default function App() {
  return (
    <LanguageProvider>
      <div className="relative min-h-screen w-full flex flex-col overflow-x-hidden antialiased">
        {/* Animated WebGL Silk Flow Background */}
        <FlowField />

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

        {/* Floating Quick Action Contacts */}
        <FloatingWhatsApp />
      </div>
    </LanguageProvider>
  );
}
