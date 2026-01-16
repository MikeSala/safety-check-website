"use client";

import { ReactNode, useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const wrapper = document.getElementById("app");

    if (!wrapper) return;

    const lenis = new Lenis({
      wrapper: wrapper,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
      autoResize: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Nasłuchuj na zmiany rozmiaru
    const resizeObserver = new ResizeObserver(() => {
      lenis.resize();
    });
    resizeObserver.observe(wrapper);

    return () => {
      resizeObserver.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
};
