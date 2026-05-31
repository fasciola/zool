import { useEffect, useRef } from "react";

interface Drop {
  x: number;
  y: number;
  r: number; // radius
  vy: number; // speed
  opacity: number;
  trail: { x: number; y: number }[];
}

export function RainOnGlass() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Read user access preferences
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // List of static droplets and actively dripping raindrops
    const drops: Drop[] = [];
    const maxDrops = 40;

    const createDrop = (isInitial = false): Drop => {
      return {
        x: Math.random() * width,
        y: isInitial ? Math.random() * height : -10,
        r: Math.random() * 3 + 1.5,
        vy: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.4 + 0.2,
        trail: [],
      };
    };

    // Initialize initial rain pool
    for (let i = 0; i < maxDrops; i++) {
      drops.push(createDrop(true));
    }

    // Static micro-condensation droplets on glass
    const staticDrops: { x: number; y: number; r: number; opacity: number }[] = [];
    const maxStatic = 80;
    for (let i = 0; i < maxStatic; i++) {
      staticDrops.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    const draw = () => {
      // Clear canvas with trace transparency to create visual trails
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Static Micro-drops (provides realistic condensation texture)
      staticDrops.forEach((d) => {
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);

        // Core highlight
        ctx.fillStyle = `rgba(212, 176, 106, ${d.opacity})`; // Warm gold-cream refraction
        ctx.fill();

        // Shimmer glint
        ctx.beginPath();
        ctx.arc(d.x - d.r * 0.3, d.y - d.r * 0.3, d.r * 0.2, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
        ctx.fill();
      });

      // 2. Draw active dripping droplets
      drops.forEach((d, index) => {
        // Drop path
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${d.opacity})`;
        ctx.fill();

        // Glass refraction border (outer ring)
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r + 0.8, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(193, 154, 68, ${d.opacity * 0.4})`; // gold hue border
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Dynamic refraction highlights inside waterdrop
        ctx.beginPath();
        ctx.arc(d.x - d.r * 0.3, d.y - d.r * 0.3, d.r * 0.25, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.75)";
        ctx.fill();

        // Let trace trailing tail bleed
        d.trail.push({ x: d.x, y: d.y });
        if (d.trail.length > 5) d.trail.shift();

        d.trail.forEach((p, idx) => {
          ctx.beginPath();
          ctx.arc(p.x, p.y, d.r * (idx / 5) * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${d.opacity * (idx / 5) * 0.4})`;
          ctx.fill();
        });

        // Update location with randomized slight wind-drift direction
        d.y += d.vy;
        d.x += Math.sin(d.y / 20) * 0.15;

        // Reset droplets when slipping past the boundary
        if (d.y > height + 20) {
          drops[index] = createDrop();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    // Responsive Canvas Resizing support
    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(canvas);

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-45 mix-blend-overlay z-[1]"
    />
  );
}
