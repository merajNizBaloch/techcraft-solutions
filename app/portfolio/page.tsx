import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Compass,
  Layers3,
  MapPin,
  MoveUpRight,
  Ruler,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Portfolio — TechCraft Solutions",
  description:
    "Selected client work and digital experiences created by TechCraft Solutions.",
};

type WorkPoint = {
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

const rehaanPoints: WorkPoint[] = [
  {
    number: "01",
    title: "Brand-led interface",
    description:
      "A digital identity and interface system shaped around engineering, architecture and a contemporary professional presence.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Project storytelling",
    description:
      "Structured presentation of projects, services and expertise so technical work becomes easier to understand online.",
    icon: Layers3,
  },
  {
    number: "03",
    title: "Built around place",
    description:
      "Visual language carries subtle Balochistan cues while keeping the overall experience restrained, modern and architectural.",
    icon: MapPin,
  },
  {
    number: "04",
    title: "Responsive experience",
    description:
      "A responsive system designed to preserve the firm's visual character across desktop, tablet and mobile screens.",
    icon: Compass,
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="portfolio-hero relative px-[7vw] pb-20 pt-36">
        <div className="portfolio-grid" />
        <div className="portfolio-glow portfolio-glow-a" />
        <div className="portfolio-glow portfolio-glow-b" />
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / PORTFOLIO</p>
            <h1 className="portfolio-title mt-7 max-w-[920px] text-[clamp(68px,10.5vw,150px)] font-medium leading-[.8] tracking-[-.1em]">
              Work that<br />
              <span className="text-[#2563ff]">gets built.</span>
            </h1>
            <p className="mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/50">
              Selected client work where strategy, interface design and engineering come together to create a useful digital presence.
            </p>
            <a href="#rehaan" className="techcraft-button techcraft-button-primary mt-9">
              View featured work <ArrowRight size={16} />
            </a>
          </div>

          <div className="portfolio-hero-structure" aria-hidden="true">
            <div className="portfolio-structure-grid" />
            <div className="portfolio-structure-frame frame-a" />
            <div className="portfolio-structure-frame frame-b" />
            <div className="portfolio-structure-axis axis-a" />
            <div className="portfolio-structure-axis axis-b" />
            <div className="portfolio-building building-a"><i /><i /><i /><i /><i /></div>
            <div className="portfolio-building building-b"><i /><i /><i /><i /></div>
            <div className="portfolio-structure-label label-top">CLIENT WORK / SELECTED 01</div>
            <div className="portfolio-structure-label label-bottom">ARCHITECTURE · ENGINEERING · DIGITAL</div>
            <div className="portfolio-structure-node"><Building2 size={18} /><span>REHAAN &amp; ASSOCIATES</span><small>DIGITAL EXPERIENCE</small></div>
            <span className="portfolio-structure-point point-a" /><span className="portfolio-structure-point point-b" /><span className="portfolio-structure-point point-c" />
          </div>
        </div>
      </section>

      <section id="rehaan" className="portfolio-feature border-t border-black/10 bg-white/65 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / FEATURED CLIENT WORK</p>
            <h2 className="mt-6 text-[clamp(52px,7vw,96px)] font-medium leading-[.84] tracking-[-.08em]">Rehaan <span className="text-[#2563ff]">&amp; Associates.</span></h2>
            <p className="mt-7 max-w-[680px] text-sm leading-7 text-black/45">
              A website created for a civil engineering firm in Balochistan, combining an architectural visual language with a clear digital presentation of the firm's work and capabilities.
            </p>
          </div>
          <div className="portfolio-client-meta">
            <span>CLIENT</span>
            <strong>CIVIL ENGINEERING</strong>
            <small>BALOCHISTAN / PAKISTAN</small>
          </div>
        </div>

        <div className="portfolio-project-shell">
          <div className="portfolio-project-visual">
            <div className="portfolio-blueprint-lines" />
            <div className="portfolio-site-marker"><span>R&amp;A</span><small>PROJECT / 001</small></div>
            <div className="portfolio-project-building main-building">
              <div className="tower-core" />
              <div className="tower-wing wing-left" />
              <div className="tower-wing wing-right" />
              <div className="tower-base" />
              <div className="tower-window-grid" />
            </div>
            <div className="portfolio-dimension dim-one"><span>24.8 M</span></div>
            <div className="portfolio-dimension dim-two"><span>18.2 M</span></div>
            <div className="portfolio-project-tag tag-one"><Ruler size={13} /> STRUCTURE / FORM</div>
            <div className="portfolio-project-tag tag-two"><Compass size={13} /> SITE / CONTEXT</div>
            <div className="portfolio-project-scan" />
          </div>

          <div className="portfolio-project-copy">
            <div className="portfolio-project-index"><span>CLIENT WEBSITE</span><span>01 / 01</span></div>
            <h3>Engineering with a stronger digital presence.</h3>
            <p>
              The experience translates Rehaan &amp; Associates' engineering expertise into a distinctive online system—using architectural composition, technical details and restrained motion to communicate trust and capability.
            </p>

            <div className="portfolio-project-stats">
              <div><span>DISCIPLINE</span><strong>WEB DESIGN + DEVELOPMENT</strong></div>
              <div><span>VISUAL LANGUAGE</span><strong>ARCHITECTURAL / TECHNICAL</strong></div>
              <div><span>FOCUS</span><strong>BRAND + PROJECT STORYTELLING</strong></div>
              <div><span>PLATFORM</span><strong>RESPONSIVE WEB EXPERIENCE</strong></div>
            </div>

            <div className="portfolio-project-actions">
              <a href="#contact" className="techcraft-button techcraft-button-primary">Start a project <ArrowRight size={16} /></a>
              <a href="/contact" className="techcraft-button">Talk to TechCraft <ArrowUpRight size={16} /></a>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio-details border-t border-black/10 px-[7vw] py-24">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">03 / WHAT WE DID</p>
            <h2 className="mt-6 text-[clamp(48px,6vw,84px)] font-medium leading-[.86] tracking-[-.08em]">Design the<br /><span className="text-[#2563ff]">whole experience.</span></h2>
          </div>
          <div className="grid border-t border-black/10 sm:grid-cols-2">
            {rehaanPoints.map((point) => {
              const Icon = point.icon;
              return (
                <article key={point.number} className="portfolio-detail-card">
                  <div className="flex items-center justify-between"><span>{point.number}</span><Icon size={17} /></div>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="portfolio-cta border-t border-black/10 bg-[#111318] px-[7vw] py-24 text-white">
        <div className="portfolio-cta-grid" />
        <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">04 / YOUR PROJECT</p>
            <h2 className="mt-6 max-w-[900px] text-[clamp(50px,6vw,88px)] font-medium leading-[.86] tracking-[-.08em]">Your next project could be the <span className="text-[#70a7ff]">next case study.</span></h2>
          </div>
          <a href="/contact" className="techcraft-button techcraft-button-primary">Work with TechCraft <MoveUpRight size={16} /></a>
        </div>
      </section>
    </main>
  );
}
