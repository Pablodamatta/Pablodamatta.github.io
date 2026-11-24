"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#impacto", label: "Impacto" },
  { href: "#conquistas", label: "Conquistas" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#projetos", label: "Projetos" },
];

export function Nav() {
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <motion.div
        className="fixed inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-series-1 via-accent to-accent-2"
        style={{ scaleX: progress }}
        aria-hidden
      />
      <nav
        aria-label="Principal"
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-500 md:px-4 ${
          scrolled
            ? "border-line bg-bg/70 shadow-[0_8px_40px_-12px_rgb(0_0_0/0.6)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <a href="#topo" className="group flex items-center gap-2.5" aria-label="Pablo da Matta, início">
          <span className="relative grid size-9 place-items-center overflow-hidden rounded-xl bg-gradient-to-br from-series-1 to-series-2 font-mono text-sm font-semibold text-white">
            PM
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </span>
          <span className="hidden text-sm font-medium text-ink sm:block">Pablo da Matta</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-lg px-3.5 py-2 text-sm transition-colors ${
                  active === l.href ? "text-ink" : "text-ink-2 hover:text-ink"
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/[0.07]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contato"
            className="hidden rounded-xl bg-ink px-4 py-2 text-sm font-medium text-bg transition hover:bg-white sm:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-xl border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mx-auto mt-2 max-w-6xl rounded-2xl border border-line bg-surface/95 p-2 backdrop-blur-xl md:hidden"
          >
            {[...links, { href: "#contato", label: "Contato" }].map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-ink-2 hover:bg-white/5 hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
