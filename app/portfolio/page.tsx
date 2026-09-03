import type { LucideIcon } from "lucide-react";
import { ArrowUpRight, Compass, Layers3, MapPin, Sparkles } from "lucide-react";

export const metadata = {
  title: "Portfolio — TechCraft Solutions",
  description:
    "Selected client work and digital experiences crafted by TechCraft Solutions.",
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

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <p className="font-mono text-[9px] tracking-[.2em] text-black/38">OUR APPROACH</p>
            <h1 className="portfolio-title mt-7 max-w-[920px] text-[clamp(68px,10.5vw,150px)] font-medium leading-[.8] tracking-[-.1em]">
              Work that<br />
              <span className="text-[#2563ff]">gets built.</span>
            </h1>
            <p className="mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/50">
              Selected client work where strategy, interface design and engineering come together to create a useful digital presence.
            </p>
            <div className="portfolio-hero-index mt-9">
              <span>CRAFT</span>
              <span>DESIGN</span>
              <span>DEVELOPMENT</span>
              <span>CULTURE</span>
            </div>
          </div>

          <div className="portfolio-vision" aria-label="TechCraft vision: craft, design, development and culture">
            <div className="vision-orbit vision-orbit-a" />
            <div className="vision-orbit vision-orbit-b" />
            <div className="vision-orbit vision-orbit-c" />
            <div className="vision-thread thread-a" />
            <div className="vision-thread thread-b" />
            <div className="vision-thread thread-c" />
            <div className="vision-core">
              <div className="vision-core-mark">TC</div>
              <span>TECHCRAFT</span>
              <small>CRAFTING DIGITAL EXPERIENCES</small>
            </div>
            <div className="vision-node node-craft"><strong>CRAFT</strong><small>DETAIL</small></div>
            <div className="vision-node node-design"><strong>DESIGN</strong><small>FORM</small></div>
            <div className="vision-node node-development"><strong>DEVELOPMENT</strong><small>BUILD</small></div>
            <div className="vision-node node-culture"><strong>CULTURE</strong><small>CONTEXT</small></div>
            <span className="vision-particle particle-a" />
            <span className="vision-particle particle-b" />
            <span className="vision-particle particle-c" />
            <span className="vision-particle particle-d" />
            <div className="vision-caption">IDEA → FORM → CODE → CONTEXT</div>
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
          <div className="portfolio-project-visual portfolio-website-preview">
            <iframe
              src="https://rehanconsultants.com/"
              title="Rehaan & Associates website preview"
              loading="lazy"
              className="portfolio-website-frame"
            />
            <div className="portfolio-website-overlay">
              <span>LIVE CLIENT WEBSITE</span>
              <a href="https://rehanconsultants.com/" target="_blank" rel="noreferrer" aria-label="Open Rehaan and Associates website">
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="portfolio-project-copy">
            <div className="portfolio-project-index"><span>CLIENT WEBSITE</span><span>01 / 02</span></div>
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

      <section id="hopline" className="portfolio-feature portfolio-feature-secondary border-t border-black/10 bg-white/40 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">SELECTED DIGITAL WORK</p>
            <h2 className="mt-6 text-[clamp(52px,7vw,96px)] font-medium leading-[.84] tracking-[-.08em]">Hopline <span className="text-[#2563ff]">platform.</span></h2>
            <p className="mt-7 max-w-[680px] text-sm leading-7 text-black/45">
              A TechCraft-built digital product focused on creating a fast, modern and connected web experience.
            </p>
          </div>
          <div className="portfolio-client-meta">
            <span>PROJECT</span>
            <strong>DIGITAL PLATFORM</strong>
            <small>TECHCRAFT / WEB EXPERIENCE</small>
            <a href="https://hopline.techcraftsolution.com/" target="_blank" rel="noreferrer" className="portfolio-site-link">
              hopline.techcraftsolution.com <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="portfolio-project-shell portfolio-hopline-shell">
          <div className="portfolio-project-visual portfolio-website-preview">
            <iframe
              src="https://hopline.techcraftsolution.com/"
              title="Hopline website preview"
              loading="lazy"
              className="portfolio-website-frame"
            />
            <div className="portfolio-website-overlay">
              <span>LIVE PROJECT</span>
              <a href="https://hopline.techcraftsolution.com/" target="_blank" rel="noreferrer" aria-label="Open Hopline website">
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="portfolio-project-copy">
            <div className="portfolio-project-index"><span>DIGITAL PLATFORM</span><span>02 / 02</span></div>
            <h3>A product experience shaped for the web.</h3>
            <p>
              Hopline extends TechCraft's approach from concept to working interface—combining product thinking, interface design and development into a live digital experience.
            </p>

            <div className="portfolio-project-stats">
              <div><span>DISCIPLINE</span><strong>PRODUCT DESIGN + DEVELOPMENT</strong></div>
              <div><span>FOCUS</span><strong>INTERFACE + INTERACTION</strong></div>
              <div><span>STATUS</span><strong>LIVE DIGITAL PRODUCT</strong></div>
              <div><span>URL</span><strong>HOPLINE.TECHCRAFTSOLUTION.COM</strong></div>
            </div>

            <a href="https://hopline.techcraftsolution.com/" target="_blank" rel="noreferrer" className="portfolio-live-link">
              <span>Visit hopline.techcraftsolution.com</span>
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
