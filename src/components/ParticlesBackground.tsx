import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  targetAlpha: number;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Defer initialization for better First Contentful Paint
    const initTimeout = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      let animationFrameId: number;
      let particles: Particle[] = [];
      // Reduce particle count significantly on mobile
      const maxParticles = typeof window !== "undefined" && window.innerWidth < 768 ? 15 : 40;

      // Mouse positions for subtle attraction/repulsion
      const mouse = { x: -1000, y: -1000, active: false };

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        initParticles();
      };

      const initParticles = () => {
        particles = [];
        for (let i = 0; i < maxParticles; i++) {
          const radius = Math.random() * 2 + 1; // Subtle 1px to 3px dots
          particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            vx: (Math.random() - 0.5) * 0.3, // Even slower drift speeds
            vy: (Math.random() - 0.5) * 0.3,
            radius,
            alpha: Math.random() * 0.5 + 0.1,
            targetAlpha: Math.random() * 0.5 + 0.1,
          });
        }
      };

      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // We can also draw ambient glowing spots
        const gradient = ctx.createRadialGradient(
          canvas.width * 0.8,
          canvas.height * 0.2,
          0,
          canvas.width * 0.8,
          canvas.height * 0.2,
          canvas.width * 0.4
        );
        gradient.addColorStop(0, "rgba(43, 128, 125, 0.05)");
        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        particles.forEach((p) => {
          // Move particle
          p.x += p.vx;
          p.y += p.vy;

          // Mouse interaction: subtle drift away from mouse cursor
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 120) {
              const force = (120 - dist) / 120;
              p.x += (dx / dist) * force * 1.5;
              p.y += (dy / dist) * force * 1.5;
            }
          }

          // Boundary wrapping
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;

          // Draw particle with gentle glow
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          // Soft teal or warm gold tones for Zool Businessmen Services context
          ctx.fillStyle = `rgba(58, 164, 161, ${p.alpha})`;
          ctx.shadowBlur = 4;
          ctx.shadowColor = "rgba(58, 164, 161, 0.4)";
          ctx.fill();
          ctx.shadowBlur = 0; // reset
        });

        // Simple, beautiful connections if particles are close - reduced on mobile
        const connectionDistance = typeof window !== "undefined" && window.innerWidth < 768 ? 80 : 100;
        ctx.lineWidth = 0.5;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const p1 = particles[i];
            const p2 = particles[j];
            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < connectionDistance) {
              const alpha = (connectionDistance - dist) / connectionDistance * 0.12;
              ctx.strokeStyle = `rgba(58, 164, 161, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          }
        }

        animationFrameId = requestAnimationFrame(draw);
      };

      window.addEventListener("resize", resizeCanvas);
      
      // Only enable mouse tracking on desktop
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      if (!isMobile) {
        const handleMouseMove = (e: MouseEvent) => {
          mouse.x = e.clientX;
          mouse.y = e.clientY;
          mouse.active = true;
        };

        const handleMouseLeave = () => {
          mouse.active = false;
        };

        window.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          window.removeEventListener("resize", resizeCanvas);
          window.removeEventListener("mousemove", handleMouseMove);
          document.removeEventListener("mouseleave", handleMouseLeave);
          cancelAnimationFrame(animationFrameId);
        };
      }

      resizeCanvas();
      draw();

      return () => {
        window.removeEventListener("resize", resizeCanvas);
        cancelAnimationFrame(animationFrameId);
      };
    }, 100); // Small delay to prioritize content rendering

    return () => {
      clearTimeout(initTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none select-none"
      style={{ zIndex: 1 }}
    />
  );
}
