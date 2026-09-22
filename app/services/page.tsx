import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Cloud,
  Code2,
  Database,
  FileSpreadsheet,
  Globe2,
  Layers3,
  RefreshCw,
  Server,
  Palette,
  Smartphone,
  Sparkles,
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


const modernizationGroups = [
  {
    id: "code-framework",
    number: "A",
    title: "Code & framework",
    description: "Upgrade aging codebases without losing the business logic that already works.",
  },
  {
    id: "business-experience",
    number: "B",
    title: "Business & experience",
    description: "Replace manual workflows and dated interfaces with usable digital systems.",
  },
  {
    id: "cloud-app-delivery",
    number: "C",
    title: "Cloud & app delivery",
    description: "Move data and products into modern, accessible and scalable environments.",
  },
] as const;

const modernizationServices = [
  {
    group: "code-framework",
    title: "Custom PHP & Laravel Development",
    from: "Business requirements",
    to: "Production web system",
    description: "Custom web applications, dashboards, admin panels and APIs built around the way your business actually works.",
    icon: Code2,
    outcomes: ["Custom workflows", "APIs & dashboards", "Maintainable architecture"],
  },
  {
    group: "code-framework",
    title: "Legacy PHP Upgrade",
    from: "PHP 5.x / 7.x",
    to: "PHP 8+",
    description: "Modernize older PHP applications for stronger security, better performance and a longer usable life.",
    icon: RefreshCw,
    outcomes: ["Version upgrade", "Code refactoring", "Performance improvements"],
  },
  {
    group: "code-framework",
    title: "PHP to Laravel Migration",
    from: "Legacy PHP",
    to: "Modern Laravel",
    description: "Move custom PHP, CodeIgniter or Yii systems into a cleaner Laravel architecture while preserving core workflows.",
    icon: Layers3,
    outcomes: ["Structured migration", "Safer codebase", "Future-ready foundation"],
  },
  {
    group: "code-framework",
    title: "WordPress to Next.js",
    from: "WordPress",
    to: "Modern Next.js",
    description: "Rebuild suitable WordPress websites with a modern frontend focused on speed, maintainability and a cleaner user experience.",
    icon: Globe2,
    outcomes: ["Modern frontend", "Performance focus", "SEO-ready structure"],
  },
  {
    group: "code-framework",
    title: "React / Next.js Upgrade",
    from: "Older React / Next.js",
    to: "Latest supported stack",
    description: "Refresh aging React and Next.js projects, dependencies, routing and architecture without throwing away the whole product.",
    icon: RefreshCw,
    outcomes: ["Dependency updates", "Architecture cleanup", "Deployment readiness"],
  },
  {
    group: "business-experience",
    title: "Old Website Redesign",
    from: "Dated website",
    to: "Modern responsive website",
    description: "Keep the business and content, then rebuild the experience for current desktop, tablet and mobile expectations.",
    icon: Globe2,
    outcomes: ["Responsive layout", "Modern UI", "Clearer navigation"],
  },
  {
    group: "business-experience",
    title: "Excel / Registers to Web System",
    from: "Sheets & registers",
    to: "Web management system",
    description: "Turn scattered spreadsheets and paper records into one searchable system with dashboards, reports and controlled access.",
    icon: FileSpreadsheet,
    outcomes: ["Central records", "Reports & search", "Role-based access"],
  },
  {
    group: "business-experience",
    title: "Desktop Software to Cloud",
    from: "Local desktop software",
    to: "Cloud web app",
    description: "Move suitable desktop workflows to a browser-based system that can be accessed securely from multiple devices and locations.",
    icon: Cloud,
    outcomes: ["Remote access", "Central updates", "Scalable deployment"],
  },
  {
    group: "business-experience",
    title: "Static to Admin-Controlled Website",
    from: "Hard-coded website",
    to: "Editable website",
    description: "Add a practical admin experience so your team can manage pages, projects, products, notices, media or other recurring content.",
    icon: Server,
    outcomes: ["Admin dashboard", "Content control", "Faster updates"],
  },
  {
    group: "business-experience",
    title: "Manual Business to Digital System",
    from: "Manual operations",
    to: "Digital workflow",
    description: "Digitize repetitive business processes such as billing, inventory, attendance, customer records and reporting.",
    icon: Layers3,
    outcomes: ["Process automation", "Connected records", "Operational visibility"],
  },
  {
    group: "business-experience",
    title: "Old UI to SaaS Dashboard",
    from: "Dated interface",
    to: "Modern SaaS experience",
    description: "Redesign an existing system around clearer navigation, responsive layouts and more efficient day-to-day workflows.",
    icon: Palette,
    outcomes: ["UX modernization", "Responsive dashboard", "Consistent design system"],
  },
  {
    group: "cloud-app-delivery",
    title: "Firebase to Supabase Migration",
    from: "Firebase",
    to: "Supabase",
    description: "Migrate suitable authentication, database and storage workflows to Supabase with a planned transition and validation.",
    icon: Database,
    outcomes: ["Auth migration", "Database migration", "Storage transition"],
  },
  {
    group: "cloud-app-delivery",
    title: "Local Database to Cloud Database",
    from: "Local data",
    to: "Managed cloud database",
    description: "Move suitable local data into a managed cloud database with controlled access, backup planning and application integration.",
    icon: Database,
    outcomes: ["Central access", "Backup strategy", "App integration"],
  },
  {
    group: "cloud-app-delivery",
    title: "Website to Installable Web App",
    from: "Website",
    to: "PWA / installable web app",
    description: "Add app-like installation and supported offline capabilities so a web product feels more native without a separate app store build.",
    icon: Smartphone,
    outcomes: ["Installable experience", "App-like navigation", "Offline support where suitable"],
  },
  {
    group: "cloud-app-delivery",
    title: "Website to Android App",
    from: "Existing web product",
    to: "Android experience",
    description: "Adapt an existing web product for Android with an approach chosen around the product, performance needs and required device features.",
    icon: Smartphone,
    outcomes: ["Mobile-first UX", "Android packaging or rebuild", "API integration"],
  },
] as const;

const process = [
  ["01", "Audit", "Understand the current system, workflows, dependencies, data and constraints before changing anything."],
  ["02", "Plan", "Define what stays, what changes, the migration path and how risk will be controlled."],
  ["03", "Build", "Modernize in clear stages with validation, testing and visible progress."],
  ["04", "Transition", "Launch the new system, move data where needed and keep the handover understandable."],
] as const;

const principles = [
  ["Design + engineering", "One connected team instead of a hand-off between disciplines."],
  ["Useful technology", "We choose tools for the result they create, not for the buzz around them."],
  ["Built for reality", "Interfaces and systems shaped around real people, devices and constraints."],
] as const;

export const metadata = {
  title: "Services & Software Modernization — TechCraft Solutions",
  description:
    "Digital product design, software engineering, legacy modernization, PHP and Laravel migration, cloud migration, web app conversion, mobile, AI and brand experience from TechCraft Solutions.",
};

export default function ServicesPage() {
  return (
    <main className="services-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#087e9b]" />

      <section className="relative flex min-h-[92vh] items-center overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(0,155,190,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(0,155,190,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid w-full gap-16 lg:grid-cols-[1fr_.88fr] lg:items-center lg:gap-[6vw]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#087e9b]">01 / SERVICES</p>
            <h1 className="mt-7 max-w-[920px] text-[clamp(62px,10.5vw,154px)] font-medium leading-[.8] tracking-[-.09em]">
              Design.<br />Build.<br /><span className="text-[#087e9b]">Modernize.</span>
            </h1>
            <p className="mt-10 max-w-[640px] text-[15px] leading-[1.9] text-black/50">
              TechCraft brings product design, software engineering and intelligent technology together under one roof. We build new digital products and modernize the systems businesses already depend on.
            </p>
            <div className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Link href="/contact" className="techcraft-button techcraft-button-primary">
                Start a project <ArrowUpRight size={16} />
              </Link>
              <a href="#service-list" className="techcraft-button">
                Core services <ArrowRight size={16} />
              </a>
              <a href="#modernization" className="techcraft-button">
                Modernization <RefreshCw size={15} />
              </a>
            </div>
          </div>

          <div className="relative mx-auto hidden aspect-square w-full max-w-[570px] lg:block">
            <div className="absolute inset-[7%] rounded-full border border-[#087e9b]/10" />
            <div className="absolute inset-[14%] rounded-full border border-dashed border-[#087e9b]/20 [animation:spin_30s_linear_infinite]" />
            <div className="absolute inset-[22%] rounded-full border border-[#111318]/10" />
            <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/70 shadow-[0_28px_90px_rgba(0,155,190,.12)] backdrop-blur-sm" />

            <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full overflow-visible">
              <defs>
                <linearGradient id="service-path" x1="0" x2="1">
                  <stop offset="0" stopColor="#087e9b" stopOpacity=".12" />
                  <stop offset=".5" stopColor="#087e9b" stopOpacity=".9" />
                  <stop offset="1" stopColor="#c83a32" stopOpacity=".25" />
                </linearGradient>
                <filter id="service-glow" x="-80%" y="-80%" width="260%" height="260%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <g fill="none" stroke="url(#service-path)" strokeWidth="1.15">
                <path id="p1" d="M300 300 L160 165" />
                <path id="p2" d="M300 300 L440 165" />
                <path id="p3" d="M300 300 L500 300" />
                <path id="p4" d="M300 300 L440 435" />
                <path id="p5" d="M300 300 L160 435" />
                <path id="p6" d="M300 300 L100 300" />
              </g>

              <g fill="#087e9b" filter="url(#service-glow)">
                <circle r="3"><animateMotion dur="2.8s" repeatCount="indefinite"><mpath href="#p1" /></animateMotion></circle>
                <circle r="3"><animateMotion begin=".45s" dur="3.1s" repeatCount="indefinite"><mpath href="#p2" /></animateMotion></circle>
                <circle r="3"><animateMotion begin=".8s" dur="2.6s" repeatCount="indefinite"><mpath href="#p3" /></animateMotion></circle>
                <circle r="3"><animateMotion begin=".25s" dur="3.3s" repeatCount="indefinite"><mpath href="#p4" /></animateMotion></circle>
                <circle r="3"><animateMotion begin=".9s" dur="2.9s" repeatCount="indefinite"><mpath href="#p5" /></animateMotion></circle>
                <circle r="3"><animateMotion begin=".6s" dur="2.7s" repeatCount="indefinite"><mpath href="#p6" /></animateMotion></circle>
              </g>

              <circle cx="300" cy="300" r="74" fill="#111318" />
              <circle cx="300" cy="300" r="76" fill="none" stroke="#087e9b" strokeOpacity=".35" strokeWidth="1" />
              <circle cx="300" cy="300" r="86" fill="none" stroke="#087e9b" strokeOpacity=".13" strokeDasharray="3 10" />
              <text x="300" y="294" textAnchor="middle" fill="#65d9ee" fontSize="9" fontFamily="monospace" letterSpacing="3">TECHCRAFT</text>
              <text x="300" y="314" textAnchor="middle" fill="white" fontSize="21" fontFamily="system-ui" fontWeight="600">SYSTEM</text>

              <g fontFamily="monospace" textAnchor="middle">
                <g transform="translate(160 165)">
                  <circle r="31" fill="#f4f6f8" stroke="#087e9b" strokeOpacity=".5" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#087e9b" letterSpacing="1">DESIGN</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">UX / UI</text>
                </g>
                <g transform="translate(440 165)">
                  <circle r="31" fill="#f4f6f8" stroke="#087e9b" strokeOpacity=".5" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#087e9b" letterSpacing="1">CODE</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">WEB</text>
                </g>
                <g transform="translate(500 300)">
                  <circle r="31" fill="#f4f6f8" stroke="#c83a32" strokeOpacity=".45" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#c83a32" letterSpacing="1">MOBILE</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">APPS</text>
                </g>
                <g transform="translate(440 435)">
                  <circle r="31" fill="#f4f6f8" stroke="#087e9b" strokeOpacity=".5" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#087e9b" letterSpacing="1">CLOUD</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">SYSTEMS</text>
                </g>
                <g transform="translate(160 435)">
                  <circle r="31" fill="#f4f6f8" stroke="#d7a52a" strokeOpacity=".55" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#b48609" letterSpacing="1">BRAND</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">IDENTITY</text>
                </g>
                <g transform="translate(100 300)">
                  <circle r="31" fill="#f4f6f8" stroke="#087e9b" strokeOpacity=".5" />
                  <circle r="24" fill="white" />
                  <text y="-4" fontSize="8" fill="#087e9b" letterSpacing="1">AI</text>
                  <text y="9" fontSize="7" fill="#111318" opacity=".45">AUTOMATION</text>
                </g>
              </g>
            </svg>

            <div className="absolute left-[2%] top-[11%] font-mono text-[7px] leading-4 tracking-[.14em] text-black/30">
              <div>ARCHITECTURE</div>
              <div>CONNECTED CAPABILITIES</div>
            </div>
            <div className="absolute bottom-[9%] right-[2%] border-l border-[#087e9b]/30 pl-4 font-mono text-[7px] leading-5 tracking-[.15em] text-black/35">
              <div className="text-[#087e9b]">SYSTEM STATUS / ONLINE</div>
              <div>06 ACTIVE DISCIPLINES</div>
              <div>ONE DIGITAL PRODUCT LANGUAGE</div>
            </div>
            <div className="absolute left-[11%] top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#c83a32] shadow-[0_0_0_5px_rgba(200,58,50,.08)]" />
          </div>
        </div>
      </section>

      <section id="service-list" className="scroll-mt-28 bg-white/60 px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / WHAT WE DO</div>
          <div>
            <div className="mb-14 max-w-[800px]">
              <h2 className="text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">
                One studio.<br /><span className="text-[#087e9b]">Six capabilities.</span>
              </h2>
              <p className="mt-7 max-w-[590px] text-sm leading-7 text-black/45">
                Choose one discipline or bring us in across the full product lifecycle. Strategy, design, engineering and modernization stay connected.
              </p>
            </div>

            <div className="grid border-l border-t border-black/10 md:grid-cols-2">
              {services.map(({ number, title, short, description, icon: Icon, details }, index) => (
                <article
                  key={title}
                  className={`service-card service-detail-card group relative min-h-[390px] overflow-hidden border-b border-r border-black/10 bg-[#f8fafc] p-8 transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_28px_70px_rgba(17,24,39,.08)] ${index % 3 === 1 ? "service-detail-offset" : ""}`}
                >
                  <div className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-[#087e9b] transition duration-500 group-hover:scale-x-100" />
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#087e9b]">{number}</span>
                    <Icon size={20} strokeWidth={1.35} className="text-black/25 transition duration-500 group-hover:rotate-6 group-hover:text-[#087e9b]" />
                  </div>
                  <h3 className="mt-12 max-w-[420px] text-[34px] font-medium leading-[.95] tracking-[-.06em]">{title}</h3>
                  <p className="mt-3 text-xs font-medium text-black/60">{short}</p>
                  <p className="mt-5 max-w-[470px] text-xs leading-7 text-black/45">{description}</p>
                  <div className="mt-7 grid gap-2">
                    {details.map((detail) => (
                      <div key={detail} className="flex items-start gap-2 text-[10px] text-black/50">
                        <Check size={13} className="mt-0.5 shrink-0 text-[#087e9b]" />
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


      <section id="modernization" className="scroll-mt-24 border-y border-black/10 bg-[#eef2f6] px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">03 / MODERNIZE</div>
          <div>
            <div className="grid gap-9 xl:grid-cols-[1fr_.55fr] xl:items-end">
              <div className="max-w-[850px]">
                <h2 className="text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">
                  Keep the value.<br /><span className="text-[#087e9b]">Replace the friction.</span>
                </h2>
                <p className="mt-7 max-w-[680px] text-sm leading-7 text-black/45">
                  Not every project needs to start from zero. We can upgrade, migrate or reshape existing software, websites and workflows while protecting what already works.
                </p>
              </div>

              <nav aria-label="Modernization service categories" className="flex flex-wrap gap-2 xl:justify-end">
                {modernizationGroups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="inline-flex min-h-10 items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 font-mono text-[8px] tracking-[.1em] text-black/55 transition hover:-translate-y-0.5 hover:border-[#087e9b]/40 hover:text-[#087e9b]"
                  >
                    <span className="text-[#087e9b]">{group.number}</span>
                    {group.title}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-16 space-y-20">
              {modernizationGroups.map((group) => (
                <section key={group.id} id={group.id} className="scroll-mt-28">
                  <div className="mb-8 flex flex-col gap-4 border-b border-black/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <div className="font-mono text-[8px] tracking-[.16em] text-[#087e9b]">{group.number} / MODERNIZATION</div>
                      <h3 className="mt-3 text-[clamp(32px,4vw,54px)] font-medium tracking-[-.06em]">{group.title}</h3>
                    </div>
                    <p className="max-w-[520px] text-xs leading-6 text-black/45 sm:text-right">{group.description}</p>
                  </div>

                  <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2 xl:grid-cols-3">
                    {modernizationServices
                      .filter((service) => service.group === group.id)
                      .map(({ title, from, to, description, icon: Icon, outcomes }) => (
                        <article
                          key={title}
                          className="group relative min-h-[360px] bg-[#f8fafc] p-7 transition duration-500 hover:z-10 hover:-translate-y-1 hover:bg-white hover:shadow-[0_24px_60px_rgba(17,24,39,.08)]"
                        >
                          <div className="flex items-start justify-between gap-5">
                            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#087e9b]/20 bg-[#087e9b]/5 text-[#087e9b] transition duration-500 group-hover:scale-105 group-hover:border-[#087e9b]/45">
                              <Icon size={18} strokeWidth={1.45} />
                            </div>
                            <ArrowUpRight size={16} className="text-black/20 transition duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#087e9b]" />
                          </div>

                          <h4 className="mt-8 text-[27px] font-medium leading-[1] tracking-[-.055em]">{title}</h4>

                          <div className="mt-6 grid grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-xl border border-black/10 bg-white/60 px-4 py-3">
                            <div>
                              <div className="font-mono text-[7px] tracking-[.12em] text-black/35">FROM</div>
                              <div className="mt-1 text-[10px] font-medium text-black/60">{from}</div>
                            </div>
                            <ArrowRight size={14} className="text-[#087e9b]" />
                            <div className="text-right">
                              <div className="font-mono text-[7px] tracking-[.12em] text-[#087e9b]">TO</div>
                              <div className="mt-1 text-[10px] font-medium text-black/70">{to}</div>
                            </div>
                          </div>

                          <p className="mt-6 text-xs leading-6 text-black/45">{description}</p>

                          <div className="mt-6 flex flex-wrap gap-2">
                            {outcomes.map((outcome) => (
                              <span
                                key={outcome}
                                className="rounded-full border border-black/10 px-3 py-1.5 text-[9px] text-black/50"
                              >
                                {outcome}
                              </span>
                            ))}
                          </div>
                        </article>
                      ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-16 flex flex-col gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="font-mono text-[8px] tracking-[.14em] text-[#087e9b]">NOT SURE WHICH PATH FITS?</div>
                <p className="mt-2 max-w-[620px] text-xs leading-6 text-black/45">
                  Tell us what you use today and what is slowing the business down. We will help define the practical modernization path.
                </p>
              </div>
              <Link href="/contact" className="techcraft-button techcraft-button-primary shrink-0">
                Discuss your system <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative scroll-mt-24 overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(101,217,238,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(101,217,238,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-[10vw]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#65d9ee]">04 / OUR PROCESS</p>
            <h2 className="mt-7 max-w-[600px] text-[clamp(50px,6vw,90px)] font-medium leading-[.87] tracking-[-.08em]">Modernize without <span className="text-[#65d9ee]">guesswork.</span></h2>
            <p className="mt-8 max-w-[420px] text-sm leading-7 text-white/45">
              Migration work succeeds when the old system is understood before the new one is built. We keep the path visible, staged and testable.
            </p>
          </div>
          <div className="border-t border-white/10">
            {process.map(([number, title, text]) => (
              <div key={number} className="service-process group grid gap-5 border-b border-white/10 py-8 sm:grid-cols-[48px_1fr_24px] sm:items-start">
                <span className="font-mono text-[8px] text-[#65d9ee]">{number}</span>
                <div>
                  <h3 className="text-[28px] font-medium tracking-[-.05em] transition group-hover:text-[#65d9ee]">{title}</h3>
                  <p className="mt-2 max-w-[520px] text-xs leading-7 text-white/40">{text}</p>
                </div>
                <span className="mt-2 h-2 w-2 rounded-full border border-[#65d9ee]/50 transition duration-500 group-hover:scale-150 group-hover:bg-[#65d9ee]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">05 / WHY TECHCRAFT</div>
          <div>
            <div className="mb-12 max-w-[760px]">
              <h2 className="text-[clamp(48px,6vw,84px)] font-medium leading-[.9] tracking-[-.08em]">Different disciplines.<br /><span className="text-[#087e9b]">One point of view.</span></h2>
            </div>
            <div className="grid border-y border-black/10 md:grid-cols-3">
              {principles.map(([title, description]) => (
                <article key={title} className="border-b border-black/10 p-7 md:border-b-0 md:border-r last:border-r-0">
                  <Layers3 size={18} className="text-[#087e9b]" strokeWidth={1.35} />
                  <h3 className="mt-8 text-[22px] font-medium tracking-[-.05em]">{title}</h3>
                  <p className="mt-3 text-xs leading-7 text-black/45">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fa] px-[7vw] py-28">
        <div className="absolute right-[8%] top-[15%] h-64 w-64 rounded-full border border-[#087e9b]/10" />
        <div className="relative z-10 max-w-[900px]">
          <p className="font-mono text-[8px] tracking-[.16em] text-[#087e9b]">06 / START SOMETHING</p>
          <h2 className="mt-7 text-[clamp(56px,8vw,120px)] font-medium leading-[.84] tracking-[-.09em]">
            Have a system<br />worth <span className="text-[#087e9b]">improving?</span>
          </h2>
          <p className="mt-9 max-w-[560px] text-sm leading-7 text-black/45">
            Show us what you use today, what is difficult and what you want the business to do next. We can map the practical route from there.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/contact" className="techcraft-button techcraft-button-primary">
              Let's modernize it <ArrowUpRight size={16} />
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
