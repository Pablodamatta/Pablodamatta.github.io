"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpenText,
  Bot,
  Briefcase,
  Check,
  Copy,
  FlaskConical,
  GraduationCap,
  Mail,
  Rocket,
  Target,
  Users,
} from "lucide-react";
import { useRef, useState } from "react";
import {
  achievements,
  certifications,
  pillars,
  process,
  profile,
  projects,
  stack,
  timeline,
  trustedBy,
} from "@/lib/data";
import { Reveal, SectionHeader, SpotlightCard, ease } from "./motion";

/* ---------------- Marquee ---------------- */
export function Marquee() {
  const items = [...trustedBy, ...trustedBy];
  return (
    <section aria-label="Instituições e programas" className="border-y border-line py-8">
      <p className="mb-6 text-center font-mono text-[11px] uppercase tracking-[0.25em] text-ink-3">
        Formação e atuação com
      </p>
      <div className="marquee overflow-hidden">
        <ul className="marquee-track flex w-max gap-14 pr-14">
          {items.map((t, i) => (
            <li
              key={`${t}-${i}`}
              aria-hidden={i >= trustedBy.length}
              className="whitespace-nowrap text-lg font-medium tracking-tight text-ink-3 transition hover:text-ink md:text-xl"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ---------------- Sobre ---------------- */
const pillarIcon = { negocio: BarChart3, produto: Target, ia: Bot, qualidade: FlaskConical } as const;

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Sobre"
              title={
                <>
                  O PO que fala a língua do <span className="font-serif font-normal italic">negócio</span>, do design e
                  do código
                </>
              }
              subtitle="Minha trajetória passou por administração, back-end, QA e produto. Cada etapa me deu uma lente: hoje consigo enxergar viabilidade, usabilidade e risco técnico na mesma conversa."
            />
            <Reveal delay={0.15}>
              <blockquote className="border-l-2 border-accent/60 pl-5 font-serif text-xl italic leading-snug text-ink-2">
                “Produto bom não é o que tem mais features. É o que resolve o problema certo, para as pessoas certas.”
              </blockquote>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pillars.map((p, i) => {
              const Icon = pillarIcon[p.key as keyof typeof pillarIcon];
              return (
                <Reveal key={p.key} delay={i * 0.08}>
                  <SpotlightCard className="h-full p-6">
                    <div className="mb-5 grid size-11 place-items-center rounded-xl border border-line bg-gradient-to-br from-series-1/20 to-series-2/10 text-accent">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-accent-2/80">{p.sub}</p>
                    <p className="mt-4 text-sm leading-relaxed text-ink-2">{p.text}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Conquistas ---------------- */
const achIcon = [Rocket, BookOpenText, Users, Award];

export function Achievements() {
  return (
    <section id="conquistas" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgb(99_102_241/0.08),transparent_65%)]" />
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Conquistas recentes"
          title={
            <>
              2026, o ano de <span className="font-serif font-normal italic">escalar</span> impacto
            </>
          }
          subtitle="Liderança de squads, pesquisa publicada, hackathon global e certificação internacional."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {achievements.map((a, i) => {
            const Icon = achIcon[i];
            return (
              <Reveal key={a.title} delay={(i % 2) * 0.1}>
                <SpotlightCard as="article" className="group h-full overflow-hidden p-7">
                  <div className="absolute -right-10 -top-10 size-40 rounded-full bg-series-1/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0" />
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-series-1 to-series-2 text-white shadow-[0_10px_30px_-10px_rgb(99_102_241/0.8)]">
                      <Icon size={22} />
                    </span>
                    <span className="font-mono text-xs text-ink-3">{a.date}</span>
                  </div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-2">{a.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink md:text-2xl">{a.title}</h3>
                  <span className="mt-3 inline-flex rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs text-accent">
                    {a.badge}
                  </span>
                  <ul className="mt-6 space-y-3">
                    {a.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-ink-2">
                        <Check size={16} className="mt-0.5 shrink-0 text-good" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Trajetória ---------------- */
export function Timeline() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="trajetoria" className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Trajetória"
          title={
            <>
              De processos a <span className="font-serif font-normal italic">produto</span>
            </>
          }
          subtitle="Uma carreira construída em camadas: gestão, desenvolvimento, qualidade e liderança de produto."
        />

        <ol ref={ref} className="relative ml-3 md:ml-0">
          <div className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px bg-line md:left-[11.5rem]" aria-hidden />
          <motion.div
            style={{ scaleY }}
            className="absolute left-0 top-2 h-[calc(100%-1rem)] w-px origin-top bg-gradient-to-b from-accent via-accent-2 to-series-1 md:left-[11.5rem]"
            aria-hidden
          />
          {timeline.map((t, i) => (
            <motion.li
              key={t.role + t.period}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: 0.05 * i, ease }}
              className="relative pb-12 pl-8 last:pb-0 md:grid md:grid-cols-[11.5rem_1fr] md:pl-0"
            >
              <span
                className={`absolute left-0 top-1.5 size-3 -translate-x-1/2 rounded-full border-2 md:left-[11.5rem] ${
                  t.current ? "border-accent-2 bg-accent-2 shadow-[0_0_0_6px_rgb(34_211_238/0.15)]" : "border-ink-3 bg-bg"
                }`}
                aria-hidden
              />
              <p className="mb-2 font-mono text-xs text-ink-3 md:mb-0 md:pr-8 md:pt-0.5 md:text-right">{t.period}</p>
              <div className="md:pl-10">
                <h3 className="text-lg font-semibold text-ink">
                  {t.role}
                  {t.current && (
                    <span className="ml-2 inline-flex translate-y-[-2px] items-center rounded-full bg-accent-2/10 px-2 py-0.5 align-middle text-[10px] font-medium uppercase tracking-wider text-accent-2">
                      Atual
                    </span>
                  )}
                </h3>
                <p className="mt-0.5 text-sm text-accent">{t.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-ink-2">{t.text}</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {t.tags.map((tag) => (
                    <li key={tag} className="rounded-md border border-line bg-white/[0.02] px-2 py-0.5 text-[11px] text-ink-3">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Processo ---------------- */
export function Process() {
  return (
    <section id="processo" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Como eu trabalho"
          title={
            <>
              Um ciclo simples, <span className="font-serif font-normal italic">repetível</span> e mensurável
            </>
          }
          align="center"
        />
        <ol className="relative grid gap-4 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-line-strong to-transparent md:block" aria-hidden />
          {process.map((p, i) => (
            <li key={p.step} className="relative h-full">
              <Reveal delay={i * 0.08}>
                <div className="relative z-10 mx-auto mb-5 grid size-14 place-items-center rounded-2xl border border-line-strong bg-surface font-mono text-sm text-accent-2">
                  {p.step}
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-2">{p.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Projetos ---------------- */
export function Projects() {
  return (
    <section id="projetos" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Projetos"
          title={
            <>
              Construo o que <span className="font-serif font-normal italic">especifico</span>
            </>
          }
          subtitle="Projetos autorais em automação, agentes e qualidade. Prova de que entendo o que peço para o time construir."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => {
            const Wrapper = p.href ? "a" : "div";
            return (
              <Reveal key={p.title} delay={(i % 2) * 0.1}>
                <Wrapper
                  {...(p.href ? { href: p.href, target: "_blank", rel: "noreferrer" } : {})}
                  className="group block h-full"
                >
                  <SpotlightCard className="flex h-full flex-col p-7 transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="mb-8 flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-3">{p.kind}</p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{p.title}</h3>
                      </div>
                      {p.href && (
                        <span className="grid size-10 shrink-0 place-items-center rounded-full border border-line text-ink-2 transition group-hover:border-accent/60 group-hover:bg-accent group-hover:text-white">
                          <ArrowUpRight size={18} />
                        </span>
                      )}
                    </div>
                    <p className="flex-1 text-sm leading-relaxed text-ink-2">{p.text}</p>
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li key={s} className="rounded-md bg-white/[0.05] px-2 py-1 font-mono text-[11px] text-ink-2">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stack & certificações ---------------- */
export function Skills() {
  return (
    <section id="competencias" className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader eyebrow="Stack" title="Ferramentas do dia a dia" />
            <div className="space-y-7">
              {stack.map((g, gi) => (
                <Reveal key={g.group} delay={gi * 0.06}>
                  <p className="mb-3 text-sm font-medium text-ink">{g.group}</p>
                  <ul className="flex flex-wrap gap-2">
                    {g.items.map((it) => (
                      <li
                        key={it}
                        className="rounded-lg border border-line bg-white/[0.02] px-3 py-1.5 text-sm text-ink-2 transition hover:-translate-y-0.5 hover:border-accent/50 hover:text-ink"
                      >
                        {it}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader eyebrow="Formação" title="Certificações & educação" />
            <Reveal>
              <ul className="card divide-y divide-line overflow-hidden">
                {certifications.map((c) => (
                  <li key={c.title} className="flex items-start gap-4 px-5 py-4 transition hover:bg-white/[0.02]">
                    <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-white/[0.04] text-accent">
                      {c.title.startsWith("Bacharel") || c.title.startsWith("Análise") ? (
                        <GraduationCap size={17} />
                      ) : (
                        <Award size={17} />
                      )}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-ink">{c.title}</p>
                      <p className="mt-0.5 text-xs text-ink-3">{c.org}</p>
                    </div>
                    {c.year && <span className="font-mono text-xs text-ink-3">{c.year}</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contato ---------------- */
export function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <section id="contato" className="px-4 py-24 md:px-6 md:py-32">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] border border-line-strong">
        <div className="absolute inset-0 -z-10 bg-surface" />
        <div className="aurora absolute -left-20 -top-32 -z-10 size-[420px] rounded-full bg-series-1/40" />
        <div className="aurora absolute -bottom-32 -right-10 -z-10 size-[380px] rounded-full bg-series-2/30 [animation-delay:-6s]" />
        <div className="bg-grid absolute inset-0 -z-10 opacity-60" />

        <div className="px-6 py-16 text-center md:px-16 md:py-24">
          <p className="inline-flex items-center gap-2 rounded-full border border-good/30 bg-good/10 px-3 py-1 text-xs text-good">
            <span className="size-1.5 animate-pulse rounded-full bg-good" /> Aberto a oportunidades de PO / PM / APM
          </p>
          <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold tracking-tight text-ink md:text-6xl">
            Seu próximo produto precisa de alguém que entende o negócio{" "}
            <span className="font-serif font-normal italic text-gradient">e o código.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-ink-2">
            Vamos conversar sobre produto, qualidade ou IA aplicada. Respondo rápido.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={copy}
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-ink px-5 py-3.5 text-sm font-medium text-bg transition hover:bg-white sm:w-auto"
            >
              <Mail size={16} />
              {profile.email}
              <span className="ml-1 border-l border-bg/20 pl-2.5">
                {copied ? <Check size={15} className="text-emerald-600" /> : <Copy size={15} />}
              </span>
              <span className="sr-only" aria-live="polite">
                {copied ? "E-mail copiado" : ""}
              </span>
            </button>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/60 sm:w-auto"
            >
              <Briefcase size={16} /> LinkedIn <ArrowUpRight size={15} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line-strong bg-white/[0.04] px-5 py-3.5 text-sm font-medium text-ink backdrop-blur transition hover:border-accent/60 sm:w-auto"
            >
              GitHub <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-xs text-ink-3 md:flex-row">
        <p>© 2026 {profile.fullName} · Recife, PE</p>
        <p>
          Feito com Next.js, React, Tailwind CSS e Motion ·{" "}
          <a href="https://github.com/Pablodamatta/Pablodamatta.github.io" className="text-ink-2 underline-offset-4 hover:text-ink hover:underline">
            código-fonte
          </a>
        </p>
      </div>
    </footer>
  );
}
