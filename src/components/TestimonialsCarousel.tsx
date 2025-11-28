"use client";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function TestimonialsCarousel({ children, speed = 50 }: Readonly<{children: React.ReactNode; speed: number}>) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const velocity =
    typeof window !== "undefined" && window.innerWidth < 768
      ? speed * 0.6
      : speed;

  useAnimationFrame((t, delta) => {
    const move = (velocity * delta) / 1000;
    baseX.set(baseX.get() - move);

    const container = containerRef.current;
    if (!container) return;

    const totalWidth = container.scrollWidth / 2;

    if (Math.abs(baseX.get()) >= totalWidth) {
      baseX.set(0);
    }
  });

  return (
    <div className="max-w-[2500px] mx-auto overflow-hidden relative w-full py-6">
      <motion.div
        ref={containerRef}
        className="flex gap-6 px-2"
        style={{ x: baseX }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
}
