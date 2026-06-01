import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if mobile - disable animations on mobile for better performance
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    
    if (isMobile) {
      // On mobile, just set elements to visible without animation
      if (containerRef.current) {
        const animElements = containerRef.current.querySelectorAll(".reveal-fade-up");
        animElements.forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
      }
      return;
    }

    // Graceful degrading for users asking for reduced performance/motion
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      // Set opacity manually and exit
      if (containerRef.current) {
        const animElements = containerRef.current.querySelectorAll(".reveal-fade-up");
        animElements.forEach((el) => {
          (el as HTMLElement).style.opacity = "1";
          (el as HTMLElement).style.transform = "none";
        });
      }
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const animElements = container.querySelectorAll(".reveal-fade-up");

    // Dynamic import of GSAP only when needed
    import("gsap").then(({ gsap: gsapModule }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger: ST }) => {
        gsapModule.registerPlugin(ST);

        const ctx = gsapModule.context(() => {
          animElements.forEach((element) => {
            gsapModule.fromTo(
              element,
              { opacity: 0, y: 40 },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: element,
                  start: "top 88%",
                  toggleActions: "play none none none",
                },
              }
            );
          });
        }, container);

        return () => {
          ctx.revert();
        };
      });
    });
  }, []);

  return containerRef;
}
