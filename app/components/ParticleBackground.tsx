"use client";
import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let W: number, H: number;
    let animId: number;
    const mouse = { x: -9999, y: -9999 };
    const DPR = window.devicePixelRatio || 1;

    type Particle = {
      x: number; y: number; ox: number; oy: number;
      vx: number; vy: number; r: number; opacity: number;
    };

    let particles: Particle[] = [];

    function resize() {
      W = canvas.width = window.innerWidth * DPR;
      H = canvas.height = window.innerHeight * DPR;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
    }

    function mkParticle(): Particle {
      const x = Math.random() * W;
      const y = Math.random() * H;
      return {
        x, y, ox: x, oy: y, vx: 0, vy: 0,
        r: (0.8 + Math.random() * 1.4) * DPR,
        opacity: 0.15 + Math.random() * 0.35,
      };
    }

    function init() {
      resize();
      const count = Math.max(100, Math.floor((W * H) / (DPR * DPR * 6000)));
      particles = Array.from({ length: count }, mkParticle);
    }

    function draw() {
      ctx.clearRect(0, 0, W, H);
      const mx = mouse.x * DPR;
      const my = mouse.y * DPR;
      const R = 150 * DPR;
      const zR = 70 * DPR;

      for (const p of particles) {
        const dx = p.x - mx, dy = p.y - my;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < R && d > 0) {
          const force = 1 - d / R;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force * 3.5 * DPR;
          p.vy += Math.sin(angle) * force * 3.5 * DPR;
        }
        p.vx += (p.ox - p.x) * 0.04;
        p.vy += (p.oy - p.y) * 0.04;
        p.vx *= 0.78;
        p.vy *= 0.78;
        p.x += p.vx;
        p.y += p.vy;

        const dOrig = Math.sqrt((p.x - p.ox) ** 2 + (p.y - p.oy) ** 2);
        const scale = 1 + Math.min(dOrig / zR, 1.8) * 0.9;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * scale, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(166,255,140,${p.opacity})`;
        ctx.fill();
      }

      const lineThresh = 80 * DPR;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < lineThresh) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(166,255,140,${(1 - d / lineThresh) * 0.12})`;
            ctx.lineWidth = 0.6 * DPR;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(draw);
    }

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    const onResize = () => { cancelAnimationFrame(animId); init(); draw(); };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
  position: "fixed",
  inset: 0,
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  zIndex: 0,
  WebkitMaskImage: "linear-gradient(to bottom, black 55%, transparent 85%)",
  maskImage: "linear-gradient(to bottom, black 55%, transparent 85%)",
}}
      aria-hidden="true"
    />
  );
}
