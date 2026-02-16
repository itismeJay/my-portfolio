import React, { ReactNode } from "react";
import ScrollReveal from "@/components/ScrollReveal";

interface StaggeredRevealProps {
  children: ReactNode;
  baseDelay?: number;
  step?: number;
  // multiplier applied to computed delay (e.g., 1.2 = +20%)
  multiplier?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
}

export default function StaggeredReveal({
  children,
  baseDelay = 0,
  step = 120,
  multiplier = 1.2,
  direction = "up",
  duration = 600,
  className = "",
}: StaggeredRevealProps) {
  const items = React.Children.toArray(children);

  return (
    <>
      {items.map((child, i) => (
        <ScrollReveal
          key={i}
          delay={Math.round((baseDelay + i * step) * multiplier)}
          direction={direction}
          duration={duration}
          className={className}
        >
          {child}
        </ScrollReveal>
      ))}
    </>
  );
}
