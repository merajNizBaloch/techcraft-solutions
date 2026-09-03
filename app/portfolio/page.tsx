import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  Building2,
  Compass,
  Layers3,
  MapPin,
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

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <p className="font-mono text-[9px] tracking-[.18em] text-black/38">SELECTED CLIENT WORK</p>
            <h1 className="portfolio-title mt-7 max-w-[920px] text-[clamp(68px,10.5vw,150px)] font-medium leading-[.8] tracking-[-.1em]">
              Work that<br />
              <span className="text-[#2563ff]">gets built.</span>
            </h1>
            <p className="mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/50">
              Selected client work where strategy, interface design and engineering come together to create a useful digital presence.
            </p>
            <div className="portfolio-hero-index mt-9">
              <span>CLIENT PROJECT / 001</span>
              <span>WEB DESIGN + DEVELOPMENT</span>
            </div>
          </div>

          <div className="portfolio-hero-orbit" aria-hidden="true">
            <div className="portfolio-orbit-field" />
            <div className="portfolio-orbit-ring orbit-ring-a" />
            <div className="portfolio-orbit-ring orbit-ring-b" />
            <div className="portfolio-orbit-ring orbit-ring-c" />
            <div className="portfolio-orbit-path path-a" />
            <div className="portfolio-orbit-path path-b" />
            <div className="portfolio-orbit-path path-c" />

            <div className="portfolio-hero-project">
              <div className="hero-project-topline">
                <span>R&amp;A / CIVIL ENGINEERING</span>
                <i />
              </div>
              <div className="hero-project-mast">
                <div className="mast-core" />
                <div className="mast-wing wing-left" />
                <div className="mast-wing wing-right" />
                <div className="mast-deck" />
                <div className="mast-windows" />
              </div>
              <div className="hero-project-ground" />
              <div className="hero-project-readout">DIGITAL PRESENCE / ACTIVE</div>
            </div>

            <span className="portfolio-data-point data-a" />
            <span className="portfolio-data-point data-b" />
            <span className="portfolio-data-point data-c" />
            <span className="portfolio-data-point data-d" />
            <span className="portfolio-data-packet packet-a" />
            <span className="portfolio-data-packet packet-b" />
            <div className="portfolio-hero-label label-a"><span>01</span> STRUCTURE</div>
            <div className="portfolio-hero-label label-b"><span>02</span> SYSTEM</div>
            <div className="portfolio-hero-label label-c"><span>03</span> EXPERIENCE</div>
            <div className="portfolio-hero-pulse"><i /> LIVE PROJECT / REHAAN &amp; ASSOCIATES</div>
          </div>
        </div>
      </section>

      <section id="rehaan" className="portfolio-feature border-t border-black/10 bg-white/65 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">FEATURED CLIENT WORK</p>
            <h2 className="mt-6 text-[clamp(52px,7vw,96px)] font-medium leading-[.84] tracking-[-.08em]">Rehaan <span className="text-[#2563ff]">&amp; Associates.</span></h2>
            <p className="mt-7 max-w-[680px] text-sm leading-7 text-black/45">
              A website created for a civil engineering firm in Balochistan, combining an architectural visual language with a clear digital presentation of the firm's work and capabilities.
            </p>
          </div>
          <div className="portfolio-client-meta">
            <span>CLIENT</span>
            <strong>CIVIL ENGINEERING</strong>
            <small>BALOCHISTAN / PAKISTAN</small>
            <a href="https://rehanconsultants.com/" target="_blank" rel="noreferrer" className="portfolio-site-link">
              rehanconsultants.com <ArrowUpRight size={13} />
            </a>
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

            <a href="https://rehanconsultants.com/" target="_blank" rel="noreferrer" className="portfolio-live-link">
              <span>Visit rehanconsultants.com</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="portfolio-details border-t border-black/10 px-[7vw] py-24">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">WHAT WE DID</p>
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
    </main>
  );
}
