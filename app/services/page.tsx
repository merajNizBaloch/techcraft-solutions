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
  Monitor,
  Palette,
  RefreshCw,
  Server,
  ShieldCheck,
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
    id: "development",
    label: "Custom development",
    summary: "Build the system you need from the ground up.",
    services: [
      {
        code: "01",
        id: "custom-php-laravel",
        title: "Custom PHP & Laravel Development",
        fromLabel: "Business requirement",
        toLabel: "Production system",
        description:
          "Custom web applications, dashboards, admin panels and APIs engineered around your actual workflow instead of forcing your business into a template.",
        results: ["Web applications", "APIs & admin panels", "Maintenance-ready code"],
        icon: Code2,
      },
    ],
  },
  {
    id: "modernization",
    label: "Modernization",
    summary: "Upgrade older products without throwing away what already works.",
    services: [
      {
        code: "02",
        id: "legacy-php-upgrade",
        title: "Legacy PHP Upgrade",
        fromLabel: "PHP 5.x / 7.x",
        toLabel: "Modern PHP",
        description:
          "Upgrade aging PHP applications to supported versions, clean up fragile code and improve security, compatibility and performance.",
        results: ["Version upgrades", "Code refactoring", "Performance review"],
        icon: RefreshCw,
      },
      {
        code: "03",
        id: "php-laravel-migration",
        title: "PHP to Laravel Migration",
        fromLabel: "Legacy PHP",
        toLabel: "Modern Laravel",
        description:
          "Move custom PHP, CodeIgniter or Yii systems into a cleaner Laravel architecture while preserving the business logic that matters.",
        results: ["Architecture migration", "Feature preservation", "Safer maintenance"],
        icon: Code2,
      },
      {
        code: "04",
        id: "wordpress-nextjs",
        title: "WordPress to Next.js",
        fromLabel: "WordPress",
        toLabel: "Modern Next.js",
        description:
          "Rebuild an aging WordPress experience as a fast, modern Next.js website with a cleaner frontend, stronger performance and flexible integrations.",
        results: ["Modern frontend", "Performance focus", "SEO-ready structure"],
        icon: Globe2,
      },
      {
        code: "05",
        id: "responsive-redesign",
        title: "Old Website to Responsive Redesign",
        fromLabel: "Outdated website",
        toLabel: "Responsive experience",
        description:
          "Refresh dated websites with a modern interface, clearer content hierarchy and layouts that work properly across desktop, tablet and mobile.",
        results: ["Modern UI", "Responsive layouts", "UX cleanup"],
        icon: Monitor,
      },
      {
        code: "06",
        id: "react-nextjs-upgrade",
        title: "React / Next.js Upgrade",
        fromLabel: "Older codebase",
        toLabel: "Current stack",
        description:
          "Modernize React and Next.js projects by updating dependencies, routing, patterns and performance without redesigning the product unless needed.",
        results: ["Dependency upgrades", "Code cleanup", "Build modernization"],
        icon: RefreshCw,
      },
      {
        code: "07",
        id: "saas-ui-modernization",
        title: "Old UI to Modern SaaS Dashboard",
        fromLabel: "Legacy interface",
        toLabel: "Modern SaaS UI",
        description:
          "Keep the existing system logic while redesigning the interface, navigation and workflows into a clearer modern dashboard experience.",
        results: ["Dashboard redesign", "Workflow improvement", "Responsive UI"],
        icon: Palette,
      },
    ],
  },
  {
    id: "digitization",
    label: "Digitization",
    summary: "Replace manual work with practical systems people can actually use.",
    services: [
      {
        code: "08",
        id: "excel-web-system",
        title: "Excel / Registers to Web Management System",
        fromLabel: "Sheets & registers",
        toLabel: "Web dashboard",
        description:
          "Convert scattered spreadsheets and paper registers into a searchable multi-user system with records, reports, permissions and backups.",
        results: ["Central records", "Reports & search", "Role-based access"],
        icon: FileSpreadsheet,
      },
      {
        code: "09",
        id: "static-admin-site",
        title: "Static Website to Admin-Controlled Website",
        fromLabel: "Developer-only updates",
        toLabel: "Admin control",
        description:
          "Give your team a simple admin area to update projects, products, notices, galleries and other website content without editing code.",
        results: ["Content dashboard", "Media management", "Controlled publishing"],
        icon: Layers3,
      },
      {
        code: "10",
        id: "manual-digital-system",
        title: "Manual Business to Digital Management System",
        fromLabel: "Manual operations",
        toLabel: "Connected workflow",
        description:
          "Digitize everyday business processes such as customers, billing, inventory, attendance, tasks and reporting in one tailored system.",
        results: ["Workflow automation", "Live records", "Business reporting"],
        icon: Sparkles,
      },
      {
        code: "11",
        id: "website-pwa",
        title: "Website to Installable Web App",
        fromLabel: "Browser-only site",
        toLabel: "Installable PWA",
        description:
          "Add app-like navigation, installability and selected offline capabilities so a compatible website can work more naturally on phones and desktops.",
        results: ["Installable experience", "App-like navigation", "Offline options"],
        icon: Smartphone,
      },
      {
        code: "12",
        id: "website-android",
        title: "Website to Android App",
        fromLabel: "Web product",
        toLabel: "Android experience",
        description:
          "Extend an existing web product to Android using the approach that fits the product, from installable web technology to a dedicated mobile build.",
        results: ["Mobile UX", "API integration", "Android delivery path"],
        icon: Smartphone,
      },
    ],
  },
  {
    id: "cloud-data",
    label: "Cloud & data",
    summary: "Move systems and data beyond a single machine.",
    services: [
      {
        code: "13",
        id: "desktop-cloud-app",
        title: "Desktop Software to Cloud Web App",
        fromLabel: "Single-device software",
        toLabel: "Cloud web app",
        description:
          "Rebuild desktop-bound workflows as secure browser-based systems that authorized users can access across locations and devices.",
        results: ["Remote access", "Central updates", "Multi-device workflows"],
        icon: Cloud,
      },
      {
        code: "14",
        id: "firebase-supabase",
        title: "Firebase to Supabase Migration",
        fromLabel: "Firebase backend",
        toLabel: "Supabase backend",
        description:
          "Plan and move authentication, database and storage workloads to Supabase with careful mapping of data, access rules and application integrations.",
        results: ["Auth migration", "Database migration", "Storage migration"],
        icon: Database,
      },
      {
        code: "15",
        id: "local-cloud-database",
        title: "Local Database to Cloud Database",
        fromLabel: "Local database",
        toLabel: "Managed cloud data",
        description:
          "Move data from local or single-server databases into a managed cloud setup with controlled access, backups and a path for future growth.",
        results: ["Data migration", "Backups", "Secure remote access"],
        icon: Server,
      },
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
    "Digital product design, software engineering, modernization, migration, mobile, AI, cloud and brand experience from TechCraft Solutions.",
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
              Design.<br />Build.<br /><span className="text-[#087e9b]">Evolve.</span>
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

      <section id="service-list" className="bg-white/60 px-[7vw] py-28">
        <div className="grid gap-12 lg:grid-cols-[130px_1fr] lg:gap-14">
          <div className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / WHAT WE DO</div>
          <div>
            <div className="mb-14 max-w-[800px]">
              <h2 className="text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">
                One studio.<br /><span className="text-[#087e9b]">Six capabilities.</span>
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

      <section id="modernization" className="relative scroll-mt-28 overflow-hidden bg-[#f7f8fa] px-[7vw] py-28">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(0,155,190,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,155,190,.04)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10">
          <div className="grid gap-10 lg:grid-cols-[130px_1fr] lg:gap-14">
            <div className="font-mono text-[8px] tracking-[.16em] text-[var(--brand-muted)]">03 / MODERNIZE & MIGRATE</div>
            <div>
              <div className="max-w-[900px]">
                <h2 className="text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em] text-[var(--brand-ink)]">
                  Keep the business.<br /><span>Upgrade the technology.</span>
                </h2>
                <p className="mt-7 max-w-[680px] text-sm leading-7 text-[var(--brand-muted)]">
                  TechCraft can modernize an existing website, application, workflow or database without making the new experience feel disconnected from the rest of your business.
                </p>
              </div>

              <nav className="mt-9 flex flex-wrap gap-2" aria-label="Modernization service categories">
                {modernizationGroups.map((group) => (
                  <a
                    key={group.id}
                    href={`#${group.id}`}
                    className="rounded-full border border-[var(--brand-line)] bg-[var(--brand-surface)] px-4 py-2 font-mono text-[9px] tracking-[.08em] text-[var(--brand-muted)] transition hover:-translate-y-0.5 hover:border-[var(--brand-accent)] hover:text-[var(--brand-accent)]"
                  >
                    {group.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          <div className="mt-16 space-y-20">
            {modernizationGroups.map((group) => (
              <div key={group.id} id={group.id} className="scroll-mt-32">
                <div className="mb-8 grid gap-4 border-b border-[var(--brand-line)] pb-6 md:grid-cols-[1fr_1fr] md:items-end">
                  <h3 className="text-[clamp(30px,4vw,52px)] font-medium tracking-[-.06em] text-[var(--brand-ink)]">{group.label}</h3>
                  <p className="max-w-[540px] text-xs leading-6 text-[var(--brand-muted)] md:justify-self-end md:text-right">{group.summary}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                  {group.services.map(({ code, id, title, fromLabel, toLabel, description, results, icon: Icon }) => (
                    <article
                      key={id}
                      id={id}
                      className="service-detail-card group scroll-mt-32 p-7 transition duration-300 hover:-translate-y-1"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[8px] tracking-[.12em] text-[var(--brand-accent)]">M/{code}</span>
                        <Icon size={19} strokeWidth={1.45} className="text-[var(--brand-accent)]" />
                      </div>

                      <div className="mt-7 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.1em] text-[var(--brand-muted)]">
                        <span>{fromLabel}</span>
                        <ArrowRight size={12} className="shrink-0 text-[var(--brand-accent)]" />
                        <span>{toLabel}</span>
                      </div>

                      <h4 className="mt-5 text-[28px] font-medium leading-[1] tracking-[-.055em] text-[var(--brand-ink)]">{title}</h4>
                      <p className="mt-4 text-xs leading-6 text-[var(--brand-muted)]">{description}</p>

                      <div className="mt-6 space-y-2 border-t border-[var(--brand-line)] pt-5">
                        {results.map((result) => (
                          <div key={result} className="flex items-center gap-2 text-[10px] text-[var(--brand-muted)]">
                            <ShieldCheck size={13} className="shrink-0 text-[var(--brand-accent)]" />
                            <span>{result}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href="/contact"
                        className="mt-7 inline-flex items-center gap-2 text-[11px] font-medium text-[var(--brand-accent)] transition group-hover:gap-3"
                        aria-label={`Discuss ${title} with TechCraft`}
                      >
                        Discuss this service <ArrowUpRight size={14} />
                      </Link>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(101,217,238,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(101,217,238,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-[10vw]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#65d9ee]">04 / OUR PROCESS</p>
            <h2 className="mt-7 max-w-[600px] text-[clamp(50px,6vw,90px)] font-medium leading-[.87] tracking-[-.08em]">Built to keep <span className="text-[#65d9ee]">momentum.</span></h2>
            <p className="mt-8 max-w-[420px] text-sm leading-7 text-white/45">
              We keep decisions close to the work. That means fewer hand-offs, faster feedback and a clearer line between what we imagine and what actually ships.
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
            Have a problem<br />worth <span className="text-[#087e9b]">building for?</span>
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
