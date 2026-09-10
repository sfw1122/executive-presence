import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";

export const profile = {
  name: "SAFWAN KT",
  title: "Cloud AI Engineer",
  statement:
    "I build meaningful solutions, create measurable impact, and turn ambitious ideas into reality.",
  email: "sfwkt10@gmail.com",
  linkedin: "[YOUR LINKEDIN]",
  github: "[YOUR GITHUB]",
  location: "KERALA, INDIA",
  tagline: "Strategy, leadership and technology — executed with precision.",
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "0", label: "Years of Experience" },
  { value: "0", label: "Projects Completed" },
  { value: "0", label: "Clients & Organizations" },
  { value: "0", label: "Certifications & Awards" },
];

export const expertise = [
  {
    icon: "compass" as const,
    title: "Leadership",
    description:
      "Building and mentoring specialized AI and MLOps teams that consistently deploy production--grade models while maintaining high alignment, technical rigor, and adaptability in a fast--evolving tech landscape.",
  },
  {
    icon: "target" as const,
    title: "Strategy",
    description:
      "Translating AI capabilities into scalable business solutions, designing clear long--term architectures, and establishing MLOps roadmaps that deliver rapid value under tight timelines.",
  },
  {
    icon: "layers" as const,
    title: "Technology",
    description:
      "Architecting resilient, secure, and cost--optimized cloud AI infrastructure, automating CI/CD pipelines for machine learning, and designing scalable API frameworks.",
  },
  {
    icon: "trending" as const,
    title: "Business Development",
    description:
      "Bridging the gap between technical AI potential and executive buy--in, pitching high--ROI cloud architectures, and aligning cross-functional stakeholders on strategic AI investments.",
  },
  {
    icon: "clipboard" as const,
    title: "Program Management",
    description:
      "Orchestrating complex, cross-functional AI lifecycles--from initial data ingestion to cloud deployment--ensuring projects stay on schedule, within compute budgets, and deliver transparent metrics.\n\n\n",
  },
  {
    icon: "spark" as const,
    title: "Innovation",
    description:
      "Transforming cutting-edge Generative AI and LLM research into stable, enterprise-grade applications through rigorous, data-driven vlidation and agile proof of concepts.",
  },
];

export const experience = [
  {
    role: "[YOUR JOB TITLE]",
    company: "[COMPANY NAME]",
    location: "[LOCATION]",
    period: "— PRESENT",
    achievements: [
      "Led a cross-functional organisation of [NUMBER] people across product, engineering and operations.",
      "Delivered a multi-year transformation program that reduced operating cost by [X]%.",
      "Established the governance model now used across every business unit.",
    ],
  },
  {
    role: "[PREVIOUS JOB TITLE]",
    company: "[PREVIOUS COMPANY]",
    location: "[LOCATION]",
    period: "DATE",
    achievements: [
      "Owned a [AMOUNT] portfolio and grew it by [X]% over three years.",
      "Rebuilt the delivery process, cutting time-to-launch from months to weeks.",
      "Hired and developed [NUMBER] senior leaders, two of whom now run their own divisions.",
    ],
  },
  {
    role: "[EARLIER JOB TITLE]",
    company: "[EARLIER COMPANY]",
    location: "[LOCATION]",
    period: "DATE",
    achievements: [
      "Launched the flagship platform that became the company's primary revenue channel.",
      "Introduced measurement and reporting standards adopted company-wide.",
    ],
  },
];

export const projects = [
  {
    image: project1,
    name: "Enterprise Transformation Program",
    description:
      "A company-wide operating model redesign covering governance, delivery practice and executive reporting.",
    role: "Program Lead & Executive Sponsor",
    tools: ["Operating Model", "Change Management", "OKRs"],
    result: "32% faster delivery cycle across 9 business units",
  },
  {
    image: project2,
    name: "Unified Data Platform",
    description:
      "Consolidated fragmented reporting into a single governed platform serving finance, sales and operations.",
    role: "Technology Strategy Lead",
    tools: ["Cloud Architecture", "Data Governance", "Analytics"],
    result: "Single source of truth for 400+ internal users",
  },
  {
    image: project3,
    name: "International Market Expansion",
    description:
      "Market entry strategy, partner selection and local operating setup for three new regions.",
    role: "Business Development Director",
    tools: ["Market Entry", "Partnerships", "Commercial Modelling"],
    result: "3 new regions launched within 14 months",
  },
  {
    image: project4,
    name: "Innovation Lab",
    description:
      "An internal venture practice that validates new product bets with small teams and short cycles.",
    role: "Founder & Practice Lead",
    tools: ["Product Discovery", "Prototyping", "Venture Governance"],
    result: "4 concepts moved from idea to funded product",
  },
];

export const testimonials = [
  {
    quote:
      "Rare combination of commercial judgement and technical depth. Decisions were made quickly and they held up.",
    name: "[CLIENT NAME]",
    role: "[CLIENT JOB TITLE]",
    company: "[CLIENT COMPANY]",
  },
  {
    quote:
      "Brought calm and structure to a program everyone else had written off. The team's confidence changed within weeks.",
    name: "[COLLEAGUE NAME]",
    role: "[COLLEAGUE JOB TITLE]",
    company: "[COLLEAGUE COMPANY]",
  },
  {
    quote:
      "A genuine partner at board level — direct, prepared, and focused on outcomes rather than activity.",
    name: "[PARTNER NAME]",
    role: "[PARTNER JOB TITLE]",
    company: "[PARTNER COMPANY]",
  },
];
