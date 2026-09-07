"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollReveal<T extends HTMLElement = HTMLElement>(options?: {
  threshold?: number;
}) {
  const { threshold = 0 } = options || {};
  const ref = useRef<T | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => setIsVisible(true);

    const inView = () => {
      const rect = el.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom > 0;
    };

    // If the element is already in (or above) the viewport on mount — which is
    // always the case for above-the-fold content once the page is server
    // rendered — reveal it right away instead of waiting for a scroll event.
    if (inView()) {
      reveal();
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      reveal();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) reveal();
        });
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(el);

    // Fallback for contexts where IntersectionObserver never fires (some
    // embedded/webview/automation environments): reveal on scroll, and
    // guarantee the content is never left permanently hidden.
    const onScroll = () => {
      if (inView()) reveal();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    const failSafe = window.setTimeout(reveal, 2500);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(failSafe);
    };
  }, [threshold]);

  return { ref, isVisible } as const;
}
