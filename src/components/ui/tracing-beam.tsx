"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setSvgHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y1 = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]),
    { stiffness: 500, damping: 90 }
  );

  const y2 = useSpring(
    useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]),
    { stiffness: 500, damping: 90 }
  );

  return (
    <motion.div
      ref={ref}
      className={cn("relative w-full max-w-5xl mx-auto", className)}
    >
      <div className="absolute -left-4 md:-left-10 top-3">
        <motion.div
          transition={{ duration: 0.2, delay: 0.5 }}
          animate={{
            boxShadow: scrollYProgress.get() > 0
              ? "none"
              : "rgba(30, 64, 175, 0.35) 0px 3px 8px",
          }}
          className="border border-border/50 w-3 h-3 rounded-full bg-primary flex items-center justify-center shadow-sm"
        >
          <motion.div
            transition={{ duration: 0.2, delay: 0.5 }}
            animate={{
              backgroundColor: "#1e40af",
              borderColor: "#1e40af",
            }}
            className="h-1.5 w-1.5 rounded-full border border-primary bg-primary"
          />
        </motion.div>
        <svg
          viewBox={`0 0 20 ${svgHeight}`}
          width="20"
          height={svgHeight}
          className="ml-1 block"
          aria-hidden="true"
        >
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="#1e3a5f"
            strokeOpacity="0.16"
            transition={{ duration: 10 }}
          />
          <motion.path
            d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`}
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="1.25"
            className="motion-reduce:hidden"
            transition={{ duration: 10 }}
          />
          <defs>
            <motion.linearGradient
              id="gradient"
              gradientUnits="userSpaceOnUse"
              x1="0"
              x2="0"
              y1={y1}
              y2={y2}
            >
              <stop stopColor="#1e40af" stopOpacity="0" />
              <stop stopColor="#1e40af" />
              <stop offset="0.325" stopColor="#3b82f6" />
              <stop offset="1" stopColor="#60a5fa" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
