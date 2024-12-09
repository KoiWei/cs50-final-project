"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

/* Props definition for the RevealContent component */
type RevealProps = {
  children: ReactNode; // The content to be revealed
  style?: string; // Optional additional styling classes for the container
};

/* RevealContent component: Adds a smooth scroll-based reveal animation to its child content */
function RevealContent({ children, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null); // Reference to the motion div
  const { scrollYProgress } = useScroll({
    target: ref, // Tracks the scroll progress of the referenced element
    offset: ["0 1", "1.33 1"], // Specifies when the scroll effect begins and ends
  });

  /* Define transformations for scale and opacity based on scroll progress */
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress, // Dynamically adjusts the scale based on scroll
        opacity: opacityProgress, // Dynamically adjusts the opacity based on scroll
      }}
      className={style} // Applies optional additional styles
    >
      {children} {/* Render the child content within the animated container */}
    </motion.div>
  );
}

export default RevealContent;
