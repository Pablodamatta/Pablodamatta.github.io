import { Hero } from "@/components/Hero";
import { Impact } from "@/components/Impact";
import { MotionRoot } from "@/components/MotionRoot";
import { Nav } from "@/components/Nav";
import {
  About,
  Achievements,
  Contact,
  Footer,
  Marquee,
  Process,
  Projects,
  Skills,
  Timeline,
} from "@/components/Sections";

export default function Home() {
  return (
    <MotionRoot>
      <a
        href="#sobre"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-bg"
      >
        Pular para o conteúdo
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Impact />
        <Achievements />
        <Timeline />
        <Process />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </MotionRoot>
  );
}
