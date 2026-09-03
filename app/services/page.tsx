import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Layers3,
  Palette,
  Smartphone,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Product Design",
    short: "Make the product obvious.",
    description:
      "We turn rough ideas into clear product experiences through research, UX strategy, interface design and scalable design systems.",
    icon: Palette,
    details: [
      "UX research & product strategy",
      "Information architecture & user flows",
      "UI design & design systems",
      "Prototyping & usability refinement",
    ],
  },
  {
    number: "02",
    title: "Web & Software",
    short: "Turn designs into real systems.",
    description:
      "Production-ready web applications, internal tools, APIs and platforms built around performance, maintainability and growth.",
    icon: Code2,
    details: [
      "Next.js / React applications",
      "APIs & backend integrations",
      "Dashboards & business platforms",
      "Performance, testing & deployment",
    ],
  },
  {
    number: "03",
    title: "Mobile Products",
    short: "Design for life beyond the browser.",
    description:
      "Mobile experiences shaped around real-world behavior, fast interaction and a consistent product language across devices.",
    icon: Smartphone,
    details: [
      "Mobile UX & interface systems",
      "Cross-platform product experiences",
      "API & service integration",
      "Launch-ready product flows",
    ],
  },
  {
    number: "04",
    title: "AI & Automation",
    short: "Make software think and act.",
    description:
      "Practical AI integrations and intelligent workflows that reduce repetitive work, improve decisions and create new product capabilities.",
    icon: BrainCircuit,
    details: [
      "AI API integration",
      "Intelligent assistants & workflows",
      "Document & data automation",
      "Custom AI-powered product features",
    ],
  },
  {
    number: "05",
    title: "Cloud & Digital Systems",
    short: "Build the foundation underneath.",
    description:
      "Cloud infrastructure, data flows and reusable digital foundations that keep products stable, secure and ready to scale.",
    icon: Cloud,
    details: [
      "Cloud architecture & deployment",
      "Database & service integration",
      "Environment & release setup",
      "Scalable digital foundations",
    ],
  },
  {
    number: "06",
    title: "Brand Experience",
    short: "Make every touchpoint feel intentional.",
    description:
      "Visual systems that connect brand, product and technology so the experience feels like one coherent identity.",
    icon: Sparkles,
    details: [
      "Digital brand direction",
      "Visual language & UI identity",
      "Marketing / product touchpoints",
      "Motion & interaction direction",
    ],
  },
] as const;

const process = [
  ["01", "Discover", "Understand the problem, users, constraints and desired outcome."],
  ["02", "Shape", "Define the experience, system and technical direction before overbuilding."],
  ["03", "Build", "Design and engineering move together through implementation and refinement."],
  ["04", "Evolve", "Launch, measure, learn and improve the system as the product grows."],
] as const;

const principles = [
  ["Design + engineering", "One connected team instead of a hand-off between disciplines."],
  ["Useful technology", "We choose tools for the result they create, not for the buzz around them."],
  ["Built for reality", "Interfaces and systems shaped around real people, devices and constraints."],
] as const;

export const metadata = {
  title: "Services — TechCraft Solutions",
  description:
    "Digital product design, software engineering, mobile, AI, cloud and brand experience from TechCraft Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="services-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#2563ff]" />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(37,99,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,255,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid w-full gap-16 lg:grid-cols-[1fr_.72fr] lg:items-end lg:gap-[8vw]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / SERVICES</p>
            <h1 className="mt-7 max-w-[920px] text-[clamp(62px,10.5vw,154px)] font-medium leading-[.8] tracking-[-.09em]">
              Design.<br />Build.<br /><span className="text-[#2563ff]">Evolve.</span>
            </h1>
            <p className="mt-10 max-w-[640px] text-[15px] leading-[1.9] text-black/50">
              TechCraft brings product design, software engineering and intelligent technology together under one roof. From first idea to production system, we build digital experiences that are clear, useful and built to last.
            </p>
            <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
              <Link href="/#contact" className="techcraft-button techcraft-button-primary">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <a href="#service-list" className="techcraft-button">
                Explore services <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[360px] lg:block">
            <div className="absolute right-[8%] top-[4%] h-64 w-64 rounded-full border border-[#2563ff]/20" />
            <div className="absolute right-[19%] top-[15%] h-48 w-48 rotate-45 border border-[#2563ff]/20" />
            <div className="absolute right-[29%] top-[28%] h-28 w-28 rounded-full border border-[#2563ff]/30 bg-white/40 backdrop-blur-sm" />
            <div className="absolute right-[24%] top-[36%] grid h-16 w-16 place-items-center bg-[#111318] text-white shadow-[0_20px_60px_rgba(17,24,39,.18)]">
              <Zap size={20} className="text-[#70a7ff]" />
            </div>
            <div className="absolute bottom-4 right-0 max-w-[240px] border-l border-black/10 pl-5 font-mono text-[8px] leading-5 tracking-[.12em] text-black/35">
              PRODUCT / SOFTWARE / AI / CLOUD
            </div>
          </div>
        </div>
      </section>

      <section id="service-list" className="bg-white/60 px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / WHAT WE DO</div>
          <div>
            <div className="mb-14 max-w-[800px]">
              <h2 className="text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">
                One studio.<br /><span className="text-[#2563ff]">Six capabilities.</span>
              </h2>
              <p className="mt-7 max-w-[590px] text-sm leading-7 text-black/45">
                Choose one discipline or bring us in across the full product lifecycle. The advantage is that strategy, design and implementation stay connected.
              </p>
            </div>

            <div className="grid border-l border-t border-black/10 md:grid-cols-2">
              {services.map(({ number, title, short, description, icon: Icon, details }, index) => (
                <article
                  key={title}
                  className={`service-card service-detail-card group relative min-h-[390px] overflow-hidden border-b border-r border-black/10 bg-[#f8fafc] p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_70px_rgba(17,24,39,.08)] ${index % 3 === 1 ? "service-detail-offset" : ""}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#2563ff] transition duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#2563ff]">{number}</span>
                    <Icon size={20} strokeWidth={1.35} className="text-black/25 transition duration-500 group-hover:rotate-6 group-hover:text-[#2563ff]" />
                  </div>
                  <h3 className="mt-12 max-w-[420px] text-[34px] font-medium leading-[.95] tracking-[-.06em]">{title}</h3>
                  <p className="mt-3 text-xs font-medium text-black/60">{short}</p>
                  <p className="mt-5 max-w-[470px] text-xs leading-7 text-black/45">{description}</p>
                  <div className="mt-7 grid gap-2">
                    {details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-[10px] text-black/50">
                        <Check size={13} className="mt-0.5 shrink-0 text-[#2563ff]" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(112,167,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-[10vw]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">03 / OUR PROCESS</p>
            <h2 className="mt-7 max-w-[600px] text-[clamp(50px,6vw,90px)] font-medium leading-[.87] tracking-[-.08em]">Built to keep <span className="text-[#70a7ff]">momentum.</span></h2>
            <p className="mt-8 max-w-[420px] text-sm leading-7 text-white/45">
              We keep decisions close to the work. That means fewer hand-offs, faster feedback and a clearer line between what we imagine and what actually ships.
            </p>
          </div>
          <div className="border-t border-white/10">
            {process.map(([number, title, text]) => (
              <div key={number} className="service-process group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[48px_1fr_24px] sm:items-start">
                <span className="font-mono text-[8px] text-[#70a7ff]">{number}</span>
                <div>
                  <h3 className="text-[28px] font-medium tracking-[-.05em] transition group-hover:text-[#70a7ff]">{title}</h3>
                  <p className="mt-2 max-w-[520px] text-xs leading-7 text-white/40">{text}</p>
                </div>
                <span className="mt-2 h-2 w-2 rounded-full border border-[#70a7ff]/50 transition duration-500 group-hover:scale-150 group-hover:bg-[#70a7ff]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">04 / WHY TECHCRAFT</div>
          <div>
            <div className="mb-12 max-w-[760px]">
              <h2 className="text-[clamp(48px,6vw,84px)] font-medium leading-[.9] tracking-[-.08em]">Different disciplines.<br /><span className="text-[#2563ff]">One point of view.</span></h2>
            </div>
            <div className="grid border-y border-black/10 md:grid-cols-3">
              {principles.map(([title, description]) => (
                <article key={title} className="border-b border-black/10 p-7 md:border-b-0 md:border-r last:border-r-0">
                  <Layers3 size={18} className="text-[#2563ff]" strokeWidth={1.35} />
                  <h3 className="mt-8 text-[22px] font-medium tracking-[-.05em]">{title}</h3>
                  <p className="mt-3 text-xs leading-7 text-black/45">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fa] px-[7vw] py-28">
        <div className="absolute right-[8%] top-[15%] h-64 w-64 rounded-full border border-[#2563ff]/10" />
        <div className="relative z-10 max-w-[900px]">
          <p className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">05 / START SOMETHING</p>
          <h2 className="mt-7 text-[clamp(56px,8vw,120px)] font-medium leading-[.84] tracking-[-.09em]">
            Have a problem<br />worth <span className="text-[#2563ff]">building for?</span>
          </h2>
          <p className="mt-9 max-w-[560px] text-sm leading-7 text-black/45">
            Tell us what you are trying to make, fix or improve. We can figure out the shape of the solution together.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/#contact" className="techcraft-button techcraft-button-primary">
              Let's build <ArrowUpRight size={16} />
            </Link>
            <Link href="/about" className="techcraft-button">
              Meet TechCraft <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
