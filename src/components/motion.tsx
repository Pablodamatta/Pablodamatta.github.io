"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  type HTMLMotionProps,
} from "motion/react";
import { useEffect, useRef, useState, type ReactNode, type PointerEvent } from "react";

export const ease = [0.16, 1, 0.3, 1] as const;

/** Revela o conteúdo ao entrar na viewport. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  ...rest
}: { children: ReactNode; delay?: number; y?: number } & HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Número que conta até o valor final quando aparece. */
export function Counter({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const unsub = mv.on("change", (v) => setDisplay(Math.round(v)));
    const controls = animate(mv, to, { duration: reduce ? 0 : duration, ease });
    return () => {
      controls.stop();
      unsub();
    };
  }, [inView, reduce, to, duration, mv]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

/** Cartão com spotlight que acompanha o ponteiro. */
export function SpotlightCard({
  children,
  className = "",
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "li";
}) {
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  const Tag = as;
  return (
    <Tag onPointerMove={onMove} className={`card spotlight ${className}`}>
      {children}
    </Tag>
  );
}

/** Cabeçalho de seção padrão. */
export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  const center = align === "center";
  return (
    <Reveal className={`mb-12 md:mb-16 ${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent-2">
        <span className="h-px w-6 bg-accent-2/60" aria-hidden />
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-ink md:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-pretty text-base leading-relaxed text-ink-2 md:text-lg">{subtitle}</p>}
    </Reveal>
  );
}
