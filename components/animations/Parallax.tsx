"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ParallaxProps {
  children: ReactNode;
  speed?: number; // -1 do 1, gdzie 0 = brak efektu, ujemne = wolniej, dodatnie = szybciej
  className?: string;
}

export const Parallax = ({
  children,
  speed = 0.5,
  className = "",
}: ParallaxProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
    // Użyj kontenera #app jako scroll container
    container: { current: document.getElementById("app") } as React.RefObject<HTMLElement>,
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

// Parallax specjalnie dla obrazów - z efektem scale dla lepszego wypełnienia
interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  imgClassName?: string;
}

export const ParallaxImage = ({
  src,
  alt,
  speed = 0.3,
  className = "",
  imgClassName = "",
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, speed * -100]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`scale-110 ${imgClassName}`}
      />
    </div>
  );
};
