import { nasaFunnel, sprintCompletion, traceability, trainingHours } from "@/lib/data";
import { ChartCard, Donut, Funnel, HBarChart } from "./charts/Charts";
import { Reveal, SectionHeader } from "./motion";

const totalHours = trainingHours.reduce((s, d) => s + d.value, 0);

export function Impact() {
  return (
    <section id="impacto" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <SectionHeader
          eyebrow="Impacto em dados"
          title={
            <>
              Decisões de produto <span className="font-serif font-normal italic">guiadas por evidência</span>
            </>
          }
          subtitle="Números reais da minha atuação como PO, da pesquisa que publiquei sobre a Residência BFD25 e do NASA Space Apps Recife 2026."
        />

        <div className="grid gap-5 md:grid-cols-2">
          <Reveal>
            <ChartCard
              title="Cadência de sprint × conclusão de tarefas"
              kicker={
                <>
                  Ciclos quinzenais entregaram <span className="text-ink">+7 p.p.</span> de conclusão
                </>
              }
              source="Artigo BFD25, registros do ClickUp (mai–jun 2026)"
              table={{
                head: ["Projeto", "Concluídas"],
                rows: sprintCompletion.map((d) => [`${d.label} (${d.note})`, `${d.value}%`]),
              }}
              className="h-full"
            >
              <div className="pt-4">
                <HBarChart data={sprintCompletion} max={100} unit="%" />
                <div className="mt-6 flex justify-between font-mono text-[10px] text-ink-3" aria-hidden>
                  <span>0%</span>
                  <span>50%</span>
                  <span>100%</span>
                </div>
                <p className="mt-6 text-sm leading-relaxed text-ink-2">
                  Sprints curtas e frentes por especialidade mantêm o feedback vivo. Esse achado virou recomendação para
                  programas remotos.
                </p>
              </div>
            </ChartCard>
          </Reveal>

          <Reveal delay={0.1}>
            <ChartCard
              title="Rastreabilidade do backlog"
              kicker="Tarefa sem dono é ponto cego de gestão"
              source="Artigo BFD25, painel de produtividade do ClickUp"
              table={{ head: ["Tarefas", "Participação"], rows: traceability.map((d) => [d.label, `${d.value}%`]) }}
              className="h-full"
            >
              <Donut data={[traceability[0], traceability[1]]} />
              <p className="mt-6 text-sm leading-relaxed text-ink-2">
                Identifiquei que <span className="text-ink">22% das tarefas</span> não tinham responsável. Em times
                remotos, a ferramenta de gestão vira a principal superfície de visibilidade do trabalho.
              </p>
            </ChartCard>
          </Reveal>

          <Reveal>
            <ChartCard
              title="NASA Space Apps Challenge · Recife 2026"
              kicker="Do inscrito ao projeto submetido"
              source="Relatório final do evento (14–15 nov 2026)"
              table={{ head: ["Etapa", "Total"], rows: nasaFunnel.map((d) => [d.label, String(d.value)]) }}
              className="h-full"
            >
              <Funnel data={nasaFunnel} />
            </ChartCard>
          </Reveal>

          <Reveal delay={0.1}>
            <ChartCard
              title="Formação técnica complementar"
              kicker={
                <>
                  <span className="font-mono text-ink">{totalHours}h</span> certificadas em qualidade, TI e inovação
                </>
              }
              source="Certificados emitidos pelas instituições"
              table={{
                head: ["Formação", "Horas"],
                rows: trainingHours.map((d) => [`${d.label} (${d.org})`, `${d.value}h`]),
              }}
              className="h-full"
            >
              <div className="pt-2">
                <HBarChart data={trainingHours} unit="h" color="var(--series-2)" />
              </div>
            </ChartCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
