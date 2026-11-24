"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState, type ReactNode } from "react";
import { ease } from "../motion";

type Datum = { label: string; value: number; note?: string; org?: string };

/** Moldura padrão de gráfico: título, número herói, figura e tabela acessível. */
export function ChartCard({
  title,
  kicker,
  source,
  children,
  table,
  className = "",
}: {
  title: string;
  kicker?: ReactNode;
  source: string;
  children: ReactNode;
  table: { head: [string, string]; rows: [string, string][] };
  className?: string;
}) {
  const [showTable, setShowTable] = useState(false);
  return (
    <figure className={`card flex flex-col p-6 md:p-7 ${className}`}>
      <div className="mb-6 flex items-start justify-between gap-4">
        <div>
          <figcaption className="text-sm font-medium text-ink">{title}</figcaption>
          {kicker && <div className="mt-1 text-xs text-ink-3">{kicker}</div>}
        </div>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          className="shrink-0 rounded-lg border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-ink-3 transition hover:border-line-strong hover:text-ink"
          aria-pressed={showTable}
        >
          {showTable ? "Gráfico" : "Tabela"}
        </button>
      </div>
      <div className="flex-1">
        {showTable ? (
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-line text-xs text-ink-3">
                <th className="py-2 font-normal">{table.head[0]}</th>
                <th className="py-2 text-right font-normal">{table.head[1]}</th>
              </tr>
            </thead>
            <tbody>
              {table.rows.map(([a, b]) => (
                <tr key={a} className="border-b border-line/60">
                  <td className="py-2 text-ink-2">{a}</td>
                  <td className="py-2 text-right font-mono tabular-nums text-ink">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          children
        )}
      </div>
      <p className="mt-6 border-t border-line pt-3 text-[11px] text-ink-3">Fonte: {source}</p>
    </figure>
  );
}

/** Barras horizontais, série única, com rótulo direto e tooltip por barra. */
export function HBarChart({
  data,
  max,
  unit = "",
  color = "var(--series-1)",
}: {
  data: Datum[];
  max?: number;
  unit?: string;
  color?: string;
}) {
  const format = (v: number) => `${v}${unit}`;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hover, setHover] = useState<number | null>(null);
  const top = max ?? Math.max(...data.map((d) => d.value));

  return (
    <div ref={ref} className="space-y-4" role="list">
      {data.map((d, i) => {
        const pct = (d.value / top) * 100;
        const sub = d.note ?? d.org;
        return (
          <div
            key={d.label}
            role="listitem"
            aria-label={`${d.label}: ${format(d.value)}`}
            className="group relative"
            onPointerEnter={() => setHover(i)}
            onPointerLeave={() => setHover(null)}
          >
            <div className="mb-1.5 flex items-baseline justify-between gap-3 text-xs">
              <span className="truncate text-ink-2">
                {d.label}
                {sub && <span className="ml-1.5 hidden text-ink-3 sm:inline">· {sub}</span>}
              </span>
              <span className="font-mono tabular-nums text-ink">{format(d.value)}</span>
            </div>
            <div className="relative h-3 rounded-[4px] bg-white/[0.05]">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-[4px]"
                style={{
                  background: color,
                  opacity: hover === null || hover === i ? 1 : 0.45,
                  transition: "opacity .2s",
                }}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${pct}%` : 0 }}
                transition={{ duration: 1.2, delay: 0.1 + i * 0.12, ease }}
              />
            </div>
            <AnimatePresence>
              {hover === i && sub && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.15 }}
                  className="pointer-events-none absolute -top-9 right-0 z-10 whitespace-nowrap rounded-lg border border-line-strong bg-surface-2 px-2.5 py-1.5 text-[11px] text-ink-2 shadow-xl"
                >
                  <span className="font-medium text-ink">{format(d.value)}</span> · {sub}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/** Donut de duas categorias com legenda e rótulos diretos. */
export function Donut({ data }: { data: [Datum, Datum] }) {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hover, setHover] = useState<number | null>(null);
  const colors = ["var(--series-1)", "var(--series-2)"];
  const size = 180;
  const stroke = 22;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const total = data[0].value + data[1].value;
  const gap = 4; // gap de superfície entre segmentos
  const seg0 = (data[0].value / total) * c;
  const seg1 = (data[1].value / total) * c;
  const focus = hover ?? 1;

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
      <div className="relative">
        <svg ref={ref} width={size} height={size} viewBox={`0 0 ${size} ${size}`} role="img" aria-label={data.map((d) => `${d.label} ${d.value}%`).join(", ")}>
          <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
            {[seg0, seg1].map((len, i) => (
              <motion.circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={r}
                fill="none"
                stroke={colors[i]}
                strokeWidth={hover === i ? stroke + 4 : stroke}
                strokeDashoffset={i === 0 ? 0 : -seg0}
                initial={{ strokeDasharray: `0 ${c}`, opacity: 0 }}
                animate={
                  inView
                    ? { strokeDasharray: `${Math.max(len - gap, 0)} ${c}`, opacity: hover === null || hover === i ? 1 : 0.4 }
                    : {}
                }
                transition={{ duration: 1.1, delay: 0.2 + i * 0.5, ease }}
                onPointerEnter={() => setHover(i)}
                onPointerLeave={() => setHover(null)}
                style={{ cursor: "pointer", transition: "stroke-width .2s" }}
              />
            ))}
          </g>
        </svg>
        <div className="pointer-events-none absolute inset-0 grid place-items-center text-center">
          <div>
            <p className="font-mono text-3xl font-semibold tabular-nums text-ink">{data[focus].value}%</p>
            <p className="mt-0.5 max-w-[90px] text-[11px] leading-tight text-ink-3">{data[focus].label.toLowerCase()}</p>
          </div>
        </div>
      </div>
      <ul className="w-full space-y-3 sm:max-w-[200px]">
        {data.map((d, i) => (
          <li
            key={d.label}
            onPointerEnter={() => setHover(i)}
            onPointerLeave={() => setHover(null)}
            className="flex cursor-default items-center justify-between gap-3 rounded-lg border border-line px-3 py-2 text-xs transition hover:border-line-strong"
          >
            <span className="flex items-center gap-2 text-ink-2">
              <span className="size-2.5 rounded-sm" style={{ background: colors[i] }} />
              {d.label}
            </span>
            <span className="font-mono tabular-nums text-ink">{d.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Funil: barras centradas, série única, com taxa de passagem entre etapas. */
export function Funnel({ data }: { data: Datum[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const top = data[0].value;
  return (
    <div ref={ref} className="space-y-2">
      {data.map((d, i) => {
        const pct = (d.value / top) * 100;
        const conv = i > 0 ? Math.round((d.value / data[i - 1].value) * 100) : null;
        return (
          <div key={d.label}>
            {conv !== null && (
              <p className="py-1 text-center font-mono text-[10px] text-ink-3">→ {conv}%</p>
            )}
            <div className="relative flex h-10 items-center justify-center">
              <motion.div
                className="absolute inset-y-0 rounded-[6px] bg-series-1"
                style={{ opacity: 1 - i * 0.16 }}
                initial={{ width: 0 }}
                animate={{ width: inView ? `${pct}%` : 0 }}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.15, ease }}
              />
              <span className="relative flex items-baseline gap-2 text-xs">
                <span className="font-mono text-sm font-semibold tabular-nums text-white">{d.value}</span>
                <span className="text-white/80">{d.label}</span>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
