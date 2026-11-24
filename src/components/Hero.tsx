"use client";

import { AnimatePresence, motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import { ArrowDownRight, ArrowUpRight, Check, MapPin, Sparkles } from "lucide-react";
import { useEffect, useState, type PointerEvent } from "react";
import { heroStats, profile } from "@/lib/data";
import { Counter, ease } from "./motion";

function RotatingRole() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % profile.rotating.length), 2600);
    return () => clearInterval(t);
  }, []);
  return (
    <span className="relative inline-block h-[1.625em] overflow-hidden align-top" aria-live="polite">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={profile.rotating[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease }}
          className="text-gradient block whitespace-nowrap font-medium"
        >
          {profile.rotating[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const steps = [
  { label: "Discovery com stakeholders", done: true },
  { label: "PRD + histórias em BDD", done: true },
  { label: "Refinamento assistido por IA", done: true },
  { label: "Sprint review", done: false },
];

function ProductCockpit() {
  const pct = 61;
  const r = 34;
  const c = 2 * Math.PI * r;
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 1, delay: 0.6, ease }}
      className="card w-[300px] bg-surface/80 p-5 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.8)] backdrop-blur-xl sm:w-[320px]"
    >
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-3">Squad · BFD25</p>
          <p className="text-sm font-medium text-ink">Aponti Talentos</p>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full border border-good/30 bg-good/10 px-2 py-0.5 text-[11px] text-good">
          <span className="size-1.5 animate-pulse rounded-full bg-good" />
          em sprint
        </span>
      </div>

      <div className="flex items-center gap-4">
        <svg width="84" height="84" viewBox="0 0 84 84" role="img" aria-label={`${pct}% das tarefas concluídas`}>
          <circle cx="42" cy="42" r={r} fill="none" stroke="rgb(255 255 255 / 0.08)" strokeWidth="7" />
          <motion.circle
            cx="42"
            cy="42"
            r={r}
            fill="none"
            stroke="url(#ring)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeDasharray={c}
            initial={{ strokeDashoffset: c }}
            animate={{ strokeDashoffset: c * (1 - pct / 100) }}
            transition={{ duration: 1.8, delay: 1, ease }}
            transform="rotate(-90 42 42)"
          />
          <defs>
            <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#818cf8" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <text x="42" y="47" textAnchor="middle" className="fill-ink font-mono text-[15px] font-semibold">
            {pct}%
          </text>
        </svg>
        <div className="space-y-1 text-xs text-ink-2">
          <p><span className="font-semibold text-ink">11</span> residentes</p>
          <p><span className="font-semibold text-ink">4</span> sprints quinzenais</p>
          <p>tarefas concluídas</p>
        </div>
      </div>

      <ul className="mt-5 space-y-2">
        {steps.map((s, i) => (
          <motion.li
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.15, duration: 0.5, ease }}
            className="flex items-center gap-2.5 text-xs"
          >
            <span
              className={`grid size-4 shrink-0 place-items-center rounded-full ${
                s.done ? "bg-series-1 text-white" : "border border-dashed border-ink-3"
              }`}
            >
              {s.done && <Check size={10} strokeWidth={3} />}
            </span>
            <span className={s.done ? "text-ink-2" : "text-ink-3"}>{s.label}</span>
          </motion.li>
        ))}
      </ul>

      <div className="mt-5 rounded-xl border border-line bg-bg/60 px-3 py-2.5 font-mono text-[11px] text-ink-3">
        <span className="text-accent-2">›</span> gerando critérios de aceite
        <motion.span
          className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-accent-2"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const glow = useMotionTemplate`radial-gradient(600px circle at ${sx}px ${sy}px, rgb(99 102 241 / 0.14), transparent 60%)`;

  const onMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  };

  return (
    <section
      id="topo"
      onPointerMove={onMove}
      className="relative isolate overflow-hidden pb-20 pt-32 md:pb-28 md:pt-40"
    >
      {/* Fundo */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="bg-grid absolute inset-0" />
        <div className="aurora absolute -left-40 -top-40 size-[640px] rounded-full bg-series-1/30" />
        <div className="aurora absolute -right-40 top-20 size-[520px] rounded-full bg-series-2/25 [animation-delay:-8s]" />
        <motion.div className="absolute inset-0" style={{ background: glow }} />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-bg" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 md:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.a
            href="#conquistas"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="group mb-8 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] py-1 pl-1 pr-3 text-xs text-ink-2 backdrop-blur transition hover:border-line-strong hover:text-ink"
          >
            <span className="rounded-full bg-gradient-to-r from-series-1 to-series-2 px-2 py-0.5 font-medium text-white">
              Novo
            </span>
            NASA Space Apps Recife 2026 & artigo publicado
            <ArrowUpRight size={14} className="transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </motion.a>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            className="text-balance text-[2.6rem] font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Produtos que resolvem o{" "}
            <span className="font-serif font-normal italic text-ink">problema certo</span>, entregues com
            qualidade.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease }}
            className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-ink-2"
          >
            Sou <strong className="font-medium text-ink">Pablo da Matta</strong>,{" "}
            <RotatingRole /> <br className="hidden sm:block" />
            Uno visão de negócio, engenharia de qualidade e IA generativa para transformar dores reais em MVPs
            claros e entregas previsíveis.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#impacto"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-ink px-5 py-3 text-sm font-medium text-bg transition hover:bg-white"
            >
              Ver impacto em dados
              <ArrowDownRight size={16} className="transition group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-line-strong bg-white/[0.03] px-5 py-3 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/60 hover:bg-white/[0.06]"
            >
              LinkedIn
              <ArrowUpRight size={16} />
            </a>
            <span className="ml-1 inline-flex items-center gap-1.5 text-sm text-ink-3">
              <MapPin size={14} /> {profile.location}
            </span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto h-[600px] w-full max-w-[420px] sm:h-[520px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.2, ease }}
            className="absolute right-0 top-0 h-[300px] w-[240px] overflow-hidden rounded-[28px] border border-line-strong sm:h-[380px] sm:w-[300px]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/pablo.jpg"
              alt="Retrato de Pablo da Matta"
              width={800}
              height={800}
              className="size-full object-cover object-[50%_20%] grayscale-[15%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-series-1/10" />
            <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-bg/60 px-3 py-1 text-xs text-ink backdrop-blur">
              <Sparkles size={12} className="text-accent-2" /> AI-First Product Owner
            </div>
          </motion.div>
          <div className="absolute bottom-0 left-0">
            <ProductCockpit />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-20 max-w-6xl px-4 md:px-6">
        <motion.dl
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } } }}
          className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4 [&>*]:bg-bg"
          style={{ gap: "1px" }}
        >
          {heroStats.map((s) => (
            <motion.div
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } } }}
              className="p-5 md:p-7"
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <p className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-2 text-sm font-medium text-ink">{s.label}</p>
                <p className="mt-0.5 text-xs text-ink-3">{s.detail}</p>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
