"use client";
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full" ref={containerRef}>
      <div ref={ref} className="relative pb-10">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start gap-4 md:gap-6 pb-6">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start">
              <div className="h-3 w-3 rounded-full bg-secondary border border-border flex items-center justify-center flex-shrink-0">
                <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-2 mb-0.5">
                <h3 className="text-sm font-medium text-foreground">{item.title}</h3>
              </div>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute left-[5px] top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-full bg-gradient-to-t from-primary via-primary/60 to-transparent rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
