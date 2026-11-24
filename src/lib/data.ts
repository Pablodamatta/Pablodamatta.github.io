// Fonte única de conteúdo do portfólio.
// Todos os números vêm de documentos reais: currículo, artigo BFD25,
// relatório e ranking do NASA Space Apps Recife 2026 e certificados.

export const profile = {
  name: "Pablo da Matta",
  fullName: "Pablo Almeida da Matta",
  role: "AI Product Owner",
  location: "Recife, PE · Híbrido / Remoto",
  email: "pablodamatta34@gmail.com",
  linkedin: "https://www.linkedin.com/in/pablo-damatta/",
  github: "https://github.com/Pablodamatta",
  site: "https://pablodamatta.github.io",
  rotating: [
    "AI Product Owner",
    "Product Manager",
    "Facilitador Ágil",
    "QA Engineer",
  ],
};

export const heroStats = [
  { value: 18, suffix: "", label: "residentes liderados", detail: "2 squads simultâneas na Aponti" },
  { value: 597, suffix: "h", label: "de formação técnica", detail: "QA, testes, TI e design thinking" },
  { value: 27, suffix: "", label: "projetos ranqueados", detail: "NASA Space Apps Recife 2026" },
  { value: 1, suffix: "", label: "artigo científico", detail: "autor principal · Residência BFD25" },
];

export const trustedBy = [
  "Aponti",
  "Softex PE",
  "CESAR School",
  "NASA Space Apps",
  "SCRUMstudy",
  "Google.org · Tech.Já",
  "FUNDAJ",
  "REC'n'Play",
  "Campus Party",
  "Porto Digital",
];

export const pillars = [
  {
    key: "negocio",
    title: "Visão de Negócio",
    sub: "Bacharel em Administração",
    text: "Viabilidade, ROI, mapeamento de processos e gestão de stakeholders. Começo pelo problema e pelo valor, nunca pela feature.",
  },
  {
    key: "produto",
    title: "Liderança de Produto",
    sub: "Product Owner na prática",
    text: "Discovery contínuo, MVPs enxutos, PRDs e critérios de aceite em BDD. Priorização MoSCoW/RICE com squads multidisciplinares.",
  },
  {
    key: "ia",
    title: "IA Aplicada",
    sub: "AI-First delivery",
    text: "IA generativa no ciclo de produto: documentação, sumarização de feedbacks, prototipação rápida e agentes com LLMs locais.",
  },
  {
    key: "qualidade",
    title: "Cultura de Qualidade",
    sub: "QA · CESAR School & Softex",
    text: "Qualidade shift-left: o critério de aceite nasce antes do código. E2E com Cypress e Selenium, APIs com Postman.",
  },
];

export const achievements = [
  {
    tag: "Hackathon global",
    date: "nov 2026",
    title: "NASA Space Apps Challenge — Recife",
    badge: "Galactic Team Member",
    points: [
      "Edição com 271 inscritos, 161 participantes, 53 equipes e 36 projetos submetidos.",
      "Auditoria técnica do servidor Discord: permissões, anti-phishing, cargos e checklist oficial.",
      "Consolidação do ranking final de 27 projetos em 5 critérios de mesmo peso.",
    ],
  },
  {
    tag: "Publicação",
    date: "2026",
    title: "Artigo científico — Residência BFD25",
    badge: "Autor principal",
    points: [
      "Mediação de equipes distribuídas por Product Owner presencial: desafios e contribuições formativas.",
      "Estudo de caso com dados reais do ClickUp: 2 projetos e 18 residentes do Bolsa Futuro Digital (MCTI).",
      "Achados acionáveis sobre rastreabilidade e cadência de sprints para programas remotos.",
    ],
  },
  {
    tag: "Liderança",
    date: "mai 2026 → hoje",
    title: "Product Owner de 2 squads",
    badge: "Aponti · BFD25",
    points: [
      "Aponti Talentos (11 devs) e Plataforma Empreendedora Sol (7 devs) em paralelo.",
      "Discovery, roadmap, PRDs e histórias com critérios de aceite em BDD/Gherkin.",
      "Fluxos assistidos por IA que encurtaram o handoff de requisitos para a engenharia.",
    ],
  },
  {
    tag: "Certificação",
    date: "ago 2026",
    title: "Scrum Fundamentals Certified",
    badge: "SFC™ · SCRUMstudy",
    points: [
      "Fundamentos de Scrum, papéis, eventos e artefatos validados por certificação internacional.",
      "Somada a 240h de Teste de Software e 80h de Qualidade na CESAR School.",
      "Próximos passos: PSPO I e ISTQB CTFL.",
    ],
  },
];

// Artigo BFD25 — seção 4.3 e 4.2
export const sprintCompletion = [
  { label: "Aponti Talentos", note: "4 sprints quinzenais · 11 residentes", value: 61 },
  { label: "Plataforma Sol", note: "3 sprints em 12 semanas · 7 residentes", value: 54 },
];

export const traceability = [
  { label: "Com responsável", value: 78 },
  { label: "Sem responsável", value: 22 },
];

// Relatório final NASA Space Apps Recife 2026
export const nasaFunnel = [
  { label: "Inscritos", value: 271 },
  { label: "Participantes", value: 161 },
  { label: "Equipes", value: 53 },
  { label: "Projetos submetidos", value: 36 },
];

// Carga horária dos certificados
export const trainingHours = [
  { label: "Teste de Software", org: "Aponti / Softex", value: 240 },
  { label: "Suporte em TI", org: "Tech.Já · Google.org", value: 200 },
  { label: "Qualidade de Software", org: "CESAR School", value: 80 },
  { label: "FAP Complementar", org: "Softex", value: 56 },
  { label: "Design Thinking", org: "FUNDAJ", value: 21 },
];

export const timeline = [
  {
    period: "2026 → hoje",
    role: "Product Owner Residente & Facilitador Ágil",
    org: "Aponti",
    current: true,
    text: "Discovery com stakeholders, backlog e roadmap de 2 produtos, PRDs, BDD e cerimônias Scrum com Jira e ClickUp. Documentação e validação de requisitos assistidas por IA.",
    tags: ["Discovery", "PRD", "BDD", "ClickUp", "IA Generativa"],
  },
  {
    period: "nov 2026",
    role: "Galactic Team Member",
    org: "NASA Space Apps Challenge Recife",
    text: "Auditoria técnica do servidor Discord do evento e consolidação do ranking final por critério.",
    tags: ["Comunidade", "Segurança", "Dados"],
  },
  {
    period: "2024 – 2025",
    role: "Residente em Engenharia de Qualidade (QA)",
    org: "Softex / Aponti",
    text: "Cenários E2E do sistema AutoCenter com Cypress e Page Object Model. Contratos de API RESTful validados no Postman e bugs críticos rastreados no Jira.",
    tags: ["Cypress", "POM", "Postman", "Jira"],
  },
  {
    period: "2024",
    role: "Residente em Desenvolvimento Back-End",
    org: "Softex Pernambuco",
    text: "Microsserviços e APIs RESTful em Node.js com PostgreSQL, modelagem relacional e code review em squads ágeis.",
    tags: ["Node.js", "PostgreSQL", "REST", "Git"],
  },
  {
    period: "2023 · 2024",
    role: "Voluntário",
    org: "REC'n'Play",
    text: "Festival de tecnologia e inovação do Nordeste, no Bairro do Recife.",
    tags: ["Comunidade", "Eventos"],
  },
  {
    period: "2022 – 2023",
    role: "Estágio em Gestão e Processos",
    org: "PIV — Posto de Inspeção Veicular",
    text: "Mapeamento e otimização de fluxos de atendimento e controle documental, com relatórios gerenciais mais precisos.",
    tags: ["Processos", "Operações"],
  },
];

export const process = [
  { step: "01", title: "Descobrir", text: "Entrevistas, mapeamento de jornada e Lean Canvas para achar o problema certo." },
  { step: "02", title: "Definir", text: "MVP, PRD e histórias com critérios de aceite em Dado / Quando / Então." },
  { step: "03", title: "Priorizar", text: "MoSCoW e RICE equilibrando valor de negócio e esforço técnico." },
  { step: "04", title: "Entregar", text: "Sprints curtas, cerimônias objetivas e incremento utilizável a cada ciclo." },
  { step: "05", title: "Garantir", text: "QA shift-left, testes E2E e métricas para aprender e iterar." },
];

export const projects = [
  {
    title: "Radar de Carreira",
    kind: "Agente local · Python",
    text: "Agente 100% local que monitora vagas de PO/PM e QA, pós-graduações e bootcamps. Deduplica em SQLite e grava notas para o Obsidian Dataview, com dashboard neo-brutalista.",
    stack: ["Python 3.12", "SQLite", "BeautifulSoup", "Obsidian"],
    href: "https://github.com/Pablodamatta/radar-carreira",
  },
  {
    title: "Automação de Testes — LUMA",
    kind: "Framework E2E · BDD",
    text: "Suíte E2E para fluxos críticos de e-commerce (cadastro, busca, carrinho, checkout) com cenários em linguagem natural para devs e negócio.",
    stack: ["Python", "Selenium", "Behave", "Page Object"],
    href: "https://github.com/Pablodamatta/automacao-testes-luma",
  },
  {
    title: "Auditoria Discord — NASA Space Apps",
    kind: "Segurança · Comunidade",
    text: "Script e relatório técnico de permissões, riscos de phishing, duplicidades e cargos de um servidor com 32 canais, cruzados com o checklist oficial do evento.",
    stack: ["Python", "Discord API", "Relatório técnico"],
    href: undefined,
  },
  {
    title: "Este portfólio",
    kind: "Next.js · Design system",
    text: "Landing page com export estático, gráficos SVG próprios, animações com Motion e acessibilidade por padrão. Deploy contínuo via GitHub Actions.",
    stack: ["Next.js 16", "React 19", "Tailwind 4", "Motion"],
    href: "https://github.com/Pablodamatta/Pablodamatta.github.io",
  },
];

export const stack = [
  { group: "Produto & Agilidade", items: ["Scrum", "Kanban", "Lean Inception", "Jira", "ClickUp", "Notion", "Figma", "Trello"] },
  { group: "IA Generativa", items: ["Claude", "Ollama", "LLMs locais", "Engenharia de prompt", "Agentes de IA"] },
  { group: "Qualidade", items: ["Cypress", "Selenium", "Behave", "Postman", "BDD / Gherkin", "Page Object Model"] },
  { group: "Desenvolvimento", items: ["JavaScript", "Node.js", "Python", "PostgreSQL", "SQLite", "Git"] },
];

export const certifications = [
  { title: "Scrum Fundamentals Certified (SFC™)", org: "SCRUMstudy", year: "2026" },
  { title: "Qualidade de Software / Techdesign · 80h", org: "CESAR School", year: "" },
  { title: "Formação Acelerada em Teste de Software · 240h", org: "Aponti / Softex", year: "" },
  { title: "Suporte em TI · 200h", org: "Tech.Já · JA Brasil · Google.org", year: "" },
  { title: "Design Thinking e Inovação · 21h", org: "FUNDAJ", year: "" },
  { title: "Bacharelado em Administração", org: "FOCCA", year: "2025" },
  { title: "Análise e Desenvolvimento de Sistemas", org: "Descomplica · previsão 2027", year: "" },
];
