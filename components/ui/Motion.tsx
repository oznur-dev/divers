"use client";

import * as React from "react";
import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FadeInProps {
  children: React.ReactNode;
  /** Animation delay in seconds. */
  delay?: number;
  /** Initial Y offset (px). */
  y?: number;
  /** Optional className for the wrapping div. */
  className?: string;
  /** Render as a different element. */
  as?: "div" | "section" | "article" | "li" | "header";
  /** Run once on enter (default true). */
  once?: boolean;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

/**
 * Lightweight scroll-triggered fade-in.
 * Honors `prefers-reduced-motion` via the global CSS rule in `globals.css`.
 */
export function FadeIn({
  children,
  delay = 0,
  y = 16,
  className,
  as = "div",
  once = true,
}: FadeInProps) {
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y },
        visible: {
          ...variants.visible,
          transition: {
            ...(variants.visible as { transition: object }).transition,
            delay,
          },
        },
      }}
    >
      {children}
    </MotionTag>
  );
}

/* ---------- Stagger container / item ---------- */

export interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  /** Delay between children, seconds. */
  stagger?: number;
}

export function Stagger({ children, className, stagger = 0.08 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 18 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
