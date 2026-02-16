"use client";
import React, { useRef, useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  glow?: boolean;
  variant?: "default" | "white";
  movementDuration?: number;
  borderWidth?: number;
  disabled?: boolean;
  className?: string;
}

const GlowingEffect: React.FC<GlowingEffectProps> = ({
  blur = 0,
  proximity = 64,
  spread = 20,
  glow = false,
  borderWidth = 1,
  disabled = false,
  movementDuration = 2,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const targetAngleRef = useRef(0);
  const currentAngleRef = useRef(0);
  const animFrameRef = useRef<number>();
  const [angle, setAngle] = useState(0);
  const [isActive, setIsActive] = useState(glow);

  // Smooth angle interpolation for slow following effect
  useEffect(() => {
    if (disabled) return;
    const speed = 0.03; // Lower = slower following
    const animate = () => {
      const diff = targetAngleRef.current - currentAngleRef.current;
      // Handle wrapping
      let delta = ((diff + 180) % 360) - 180;
      if (delta < -180) delta += 360;
      currentAngleRef.current += delta * speed;
      setAngle(currentAngleRef.current);
      animFrameRef.current = requestAnimationFrame(animate);
    };
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [disabled]);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (disabled || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();

      const isNear =
        e.clientX >= rect.left - proximity &&
        e.clientX <= rect.right + proximity &&
        e.clientY >= rect.top - proximity &&
        e.clientY <= rect.bottom + proximity;

      setIsActive(isNear || glow);

      if (isNear) {
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const newAngle = Math.atan2(e.clientY - cy, e.clientX - cx) * (180 / Math.PI) + 90;
        targetAngleRef.current = newAngle;
      }
    },
    [disabled, proximity, glow]
  );

  useEffect(() => {
    if (disabled) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove, disabled]);

  if (disabled) return null;

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-700",
        isActive ? "opacity-100" : "opacity-0",
        className
      )}
      style={{ zIndex: 0 }}
    >
      <div
        className="absolute rounded-[inherit]"
        style={{
          inset: `-${borderWidth}px`,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
          WebkitMask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: `${borderWidth + 1}px`,
          background: `conic-gradient(from ${angle}deg, 
            transparent 0%, 
            hsl(217 91% 60% / 0.5) 6%, 
            hsl(210 100% 70% / 0.7) 10%, 
            hsl(217 91% 60% / 0.5) 14%, 
            transparent 20%, 
            transparent 100%
          )`,
        }}
      />
    </div>
  );
};

export { GlowingEffect };
