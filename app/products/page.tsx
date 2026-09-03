import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronUp,
  CircleDashed,
  ClipboardList,
  GraduationCap,
  LayoutDashboard,
  MapPin,
  PackageSearch,
  Pill,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  UsersRound,
  WalletCards,
  UtensilsCrossed,
} from "lucide-react";

export const metadata = {
  title: "Products — TechCraft Solutions",
  description:
    "Products built by TechCraft Solutions, including Academiq and Estara, plus upcoming management systems.",
};

const products = [
  {
    number: "01",
    name: "Academiq",
    eyebrow: "EDTECH / SCHOOL MANAGEMENT SYSTEM",
    status: "LIVE PRODUCT",
    description:
      "A complete school management system designed to bring administration, students, teachers, attendance, fees, exams and reporting into one connected workspace.",
    icon: GraduationCap,
    stats: [
      ["Students", "Central student records"],
      ["Attendance", "Daily tracking"],
      ["Fees", "Payment management"],
      ["Exams", "Results & grading"],
    ],
    href: "https://academiq.techcraftsolution.com",
  },
  {
    number: "02",
    name: "Estara",
    eyebrow: "REAL ESTATE / PROPERTY MANAGEMENT",
    status: "LIVE PRODUCT",
    description:
      "A real-estate management platform built around properties, listings, leads, clients, agents and transactions — giving property businesses one operational view.",
    icon: Building2,
    stats: [
      ["Properties", "Portfolio management"],
      ["Listings", "Inventory & status"],
      ["Leads", "Client pipeline"],
      ["Transactions", "Deal workflow"],
    ],
    href: "https://estara.techcraftsolution.com",
  },
] as const;

const upcomingProducts: {
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  modules: string[];
  accent: string;
}[] = [
  {
    number: "03",
    name: "DineCore",
    eyebrow: "RESTAURANT / MANAGEMENT SYSTEM",
    description:
      "A restaurant operations system for menus, tables, orders, kitchen workflow, billing, inventory and day-to-day performance.",
    icon: UtensilsCrossed,
    modules: ["Table & order management", "Kitchen workflow", "Billing & receipts", "Inventory & menu control"],
    accent: "blue",
  },
  {
    number: "04",
    name: "PharmaOS",
    eyebrow: "PHARMACY / MANAGEMENT SYSTEM",
    description:
      "A pharmacy management platform focused on stock, medicines, suppliers, sales, expiry tracking and operational visibility.",
    icon: Pill,
    modules: ["Medicine inventory", "Expiry & batch tracking", "Sales & purchases", "Supplier management"],
    accent: "red",
  },
  {
    number: "05",
    name: "Dentora",
    eyebrow: "DENTAL / CLINIC MANAGEMENT SYSTEM",
    description:
      "A dental practice system bringing patients, appointments, treatment plans, billing and clinical records into one structured workspace.",
    icon: Stethoscope,
    modules: ["Patient records", "Appointments & schedule", "Treatment plans", "Billing & follow-up"],
    accent: "gold",
  },
  {
    number: "06",
    name: "LogiCore",
    eyebrow: "LOGISTICS / OPERATIONS MANAGEMENT",
    description:
      "A logistics operations system for shipments, dispatches, fleet activity, delivery status and the information teams need to keep moving.",
    icon: PackageSearch,
    modules: ["Shipment tracking", "Dispatch management", "Fleet operations", "Delivery visibility"],
    accent: "blue",
  },
];

function AcademiqVisual() {
  return (
    <div className="product-visual product-visual-academiq">
      <div className="product-visual-grid" />
      <div className="academiq-orbit orbit-one" />
      <div className="academiq-orbit orbit-two" />
      <div className="academiq-dashboard">
        <div className="academiq-windowbar">
          <div className="flex gap-1.5"><span /><span /><span /></div>
          <span>ACADEMIQ / ADMIN</span>
          <span className="text-[#2563ff]">● LIVE</span>
        </div>
        <div className="academiq-layout">
          <aside className="academiq-sidebar">
            <div className="academiq-brandmark">A</div>
            <LayoutDashboard size={15} />
            <UsersRound size={15} />
            <CalendarDays size={15} />
            <WalletCards size={15} />
            <BarChart3 size={15} />
          </aside>
          <div className="academiq-main">
            <div className="academiq-topline">
              <div><span>OVERVIEW</span><strong>School Management</strong></div>
              <div className="academiq-online">SYSTEM ONLINE</div>
            </div>
            <div className="academiq-kpis">
              <div><span>STUDENTS</span><strong>1,248</strong><small><ChevronUp size={10} /> 8.4%</small></div>
              <div><span>ATTENDANCE</span><strong>94.6%</strong><small><ChevronUp size={10} /> 2.1%</small></div>
              <div><span>FEES</span><strong>82%</strong><small><ChevronUp size={10} /> 5.7%</small></div>
            </div>
            <div className="academiq-panels">
              <div className="academiq-chart">
                <div className="panel-head"><span>ATTENDANCE / WEEK</span><span>MON—FRI</span></div>
                <div className="chart-bars">{[56, 72, 63, 82, 77, 92, 69].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
              </div>
              <div className="academiq-classes">
                <div className="panel-head"><span>ACTIVE CLASSES</span><span>06</span></div>
                {[['Grade 10-A', '38 students'], ['Grade 09-B', '35 students'], ['Grade 08-A', '41 students']].map(([title, count]) => <div key={title} className="class-row"><span>{title}</span><small>{count}</small></div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-floating-tag academiq-tag-a">ATTENDANCE TRACKING</div>
      <div className="product-floating-tag academiq-tag-b">FEES / EXAMS / REPORTS</div>
      <div className="product-status-dot" />
    </div>
  );
}

function EstaraVisual() {
  return (
    <div className="product-visual product-visual-estara">
      <div className="product-visual-grid" />
      <div className="estara-map-grid" />
      <div className="estara-ring ring-one" />
      <div className="estara-ring ring-two" />
      <div className="estara-dashboard">
        <div className="estara-header">
          <div className="flex items-center gap-2"><span className="estara-logo">E</span><strong>ESTARA</strong></div>
          <span>PROPERTY OS / 01</span>
        </div>
        <div className="estara-toolbar">
          <div><span>PORTFOLIO</span><strong>24 Properties</strong></div>
          <div><span>ACTIVE LEADS</span><strong>86</strong></div>
          <div><span>DEALS</span><strong>12</strong></div>
        </div>
        <div className="estara-content">
          <div className="estara-listing-card featured">
            <div className="property-image property-image-main"><div className="building-slab slab-one" /><div className="building-slab slab-two" /><div className="building-slab slab-three" /><div className="building-ground" /></div>
            <div className="property-copy"><span>FEATURED PROPERTY</span><strong>Gulberg Residence</strong><small><MapPin size={11} /> Lahore · 5 Beds · 4 Baths</small><b>PKR 48.5M</b></div>
          </div>
          <div className="estara-side-panel">
            <span>DEAL PIPELINE</span>
            {["New lead", "Viewing", "Negotiation", "Closed"].map((stage, index) => <div key={stage} className="pipeline-row"><i className={index === 3 ? "active" : ""} /><span>{stage}</span><small>{[24, 15, 7, 12][index]}</small></div>)}
          </div>
        </div>
      </div>
      <div className="product-floating-tag estara-tag-a">PROPERTY / LIVE INVENTORY</div>
      <div className="product-floating-tag estara-tag-b">LEADS → DEALS → CLOSED</div>
      <div className="product-status-dot product-status-gold" />
    </div>
  );
}

function ProductVisual({ type }: { type: "academiq" | "estara" }) {
  return type === "academiq" ? <AcademiqVisual /> : <EstaraVisual />;
}

export default function ProductsPage() {
  return (
    <main className="products-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="products-hero relative flex min-h-[92vh] items-center overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="products-hero-grid absolute inset-0" />
        <div className="products-hero-glow products-hero-glow-a" />
        <div className="products-hero-glow products-hero-glow-b" />
        <div className="relative z-10 grid w-full items-center gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-[5vw]">
          <div className="max-w-[820px]">
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / PRODUCTS</p>
            <h1 className="products-hero-title mt-7 text-[clamp(64px,10.5vw,150px)] font-medium leading-[.8] tracking-[-.09em]">We build<br />for <span className="text-[#2563ff]">real life.</span></h1>
            <p className="mt-10 max-w-[640px] text-[15px] leading-[1.9] text-black/50">TechCraft creates focused software for problems we understand closely. Academiq organizes the work of schools. Estara organizes the work of property businesses.</p>
            <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
              <a href="#product-list" className="techcraft-button techcraft-button-primary">Explore products <ArrowRight size={16} /></a>
              <Link href="/services" className="techcraft-button">See our capabilities <ArrowUpRight size={16} /></Link>
            </div>
          </div>

          <div className="products-hero-system relative mx-auto hidden aspect-square w-full max-w-[650px] lg:block" aria-hidden="true">
            <div className="hero-system-ring ring-a" />
            <div className="hero-system-ring ring-b" />
            <div className="hero-system-ring ring-c" />
            <div className="hero-system-path path-a" />
            <div className="hero-system-path path-b" />
            <div className="hero-system-path path-c" />
            <div className="hero-system-core"><span>TC / OS</span><strong>PRODUCT<br />SYSTEMS</strong><small>DESIGNED · ENGINEERED · EVOLVED</small></div>
            <div className="hero-system-node node-school"><GraduationCap size={18} /><span>ACADEMIQ</span><small>SCHOOL OS</small></div>
            <div className="hero-system-node node-estate"><Building2 size={18} /><span>ESTARA</span><small>PROPERTY OS</small></div>
            <div className="hero-system-signal signal-a">DATA FLOW / ACTIVE</div>
            <div className="hero-system-signal signal-b">2 LIVE PRODUCTS / 4 IN LAB</div>
            <span className="hero-system-pulse pulse-a" /><span className="hero-system-pulse pulse-b" /><span className="hero-system-pulse pulse-c" />
          </div>
        </div>
      </section>

      <section id="product-list" className="products-list-section border-t border-black/10 bg-white/55 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / LIVE PRODUCTS</p>
            <h2 className="mt-6 text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">Software for <span className="text-[#2563ff]">specific worlds.</span></h2>
          </div>
          <p className="max-w-[360px] text-xs leading-7 text-black/40">These products are developed systems, not concept projects. Visit the live product environments directly.</p>
        </div>

        <div className="grid gap-10">
          {products.map((product) => {
            const ProductIcon = product.icon;
            return (
              <article key={product.name} className="product-showcase overflow-hidden border border-black/10 bg-[#f8fafc]">
                <div className="grid lg:grid-cols-[1.08fr_.92fr]">
                  <ProductVisual type={product.name.toLowerCase() as "academiq" | "estara"} />
                  <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-14">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-[8px] text-[#2563ff]">{product.number}</span>
                        <span className="font-mono text-[8px] tracking-[.14em] text-black/30">{product.eyebrow}</span>
                      </div>
                      <div className="mt-10 flex items-center gap-2 font-mono text-[8px] tracking-[.12em] text-[#2563ff]"><CheckCircle2 size={14} /> {product.status}</div>
                      <h3 className="mt-5 text-[clamp(52px,7vw,92px)] font-medium leading-[.84] tracking-[-.08em]">{product.name}</h3>
                      <p className="mt-7 max-w-[560px] text-sm leading-7 text-black/45">{product.description}</p>
                    </div>
                    <div className="mt-12">
                      <div className="grid border-y border-black/10 sm:grid-cols-2">
                        {product.stats.map(([label, value]) => <div key={label} className="border-b border-black/10 py-4 text-[10px] last:border-0 sm:even:border-l"><strong className="mr-2 text-[#2563ff]">{label}</strong><span className="text-black/40">{value}</span></div>)}
                      </div>
                      <a href={product.href} target="_blank" rel="noreferrer" className="techcraft-button techcraft-button-primary mt-8">Visit {product.name} <ArrowUpRight size={16} /></a>
                      <div className="mt-5 flex items-center gap-2 font-mono text-[8px] tracking-[.12em] text-black/30"><ProductIcon size={14} /> OPEN PRODUCT ENVIRONMENT</div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-lab-section relative overflow-hidden border-t border-black/10 px-[7vw] py-24">
        <div className="product-lab-grid absolute inset-0" />
        <div className="relative z-10 mb-14 max-w-[900px]">
          <p className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">03 / PRODUCT LAB</p>
          <h2 className="mt-6 text-[clamp(48px,6vw,90px)] font-medium leading-[.88] tracking-[-.08em]">Next in the <span className="text-[#2563ff]">pipeline.</span></h2>
          <p className="mt-7 max-w-[650px] text-sm leading-7 text-black/45">Four management systems are under development, each focused on a specific operational world. They will move from workflow research to product releases through the same TechCraft design and engineering process.</p>
        </div>

        <div className="relative z-10 grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
          {upcomingProducts.map((product) => {
            const Icon = product.icon;
            return (
              <article key={product.name} className={`product-lab-card product-lab-card-${product.accent} group bg-[#f8fafc] p-7 sm:p-9`}>
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono text-[8px] text-black/35">{product.number}</span>
                  <div className="product-lab-status"><CircleDashed size={13} /> IN DEVELOPMENT</div>
                </div>
                <div className="product-lab-icon mt-12"><Icon size={23} strokeWidth={1.35} /></div>
                <p className="mt-8 font-mono text-[8px] tracking-[.14em] text-black/35">{product.eyebrow}</p>
                <h3 className="mt-3 text-[34px] font-medium tracking-[-.06em]">{product.name}</h3>
                <p className="mt-4 max-w-[500px] text-xs leading-7 text-black/45">{product.description}</p>
                <div className="mt-7 grid gap-2 border-t border-black/10 pt-6">{product.modules.map((module) => <div key={module} className="flex items-center gap-2 text-[10px] text-black/50"><span className="h-1.5 w-1.5 border border-[#2563ff]" />{module}</div>)}</div>
                <div className="mt-8 flex items-center gap-2 font-mono text-[8px] tracking-[.12em] text-black/30"><ShieldCheck size={14} /> ROADMAP / DISCOVERY → BUILD → RELEASE</div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(112,167,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 max-w-[950px]">
          <p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">04 / BUILD WITH US</p>
          <h2 className="mt-7 text-[clamp(52px,7vw,100px)] font-medium leading-[.85] tracking-[-.08em]">Have a workflow<br /><span className="text-[#70a7ff]">worth building?</span></h2>
          <p className="mt-9 max-w-[620px] text-sm leading-7 text-white/45">From a software idea to a management system for a specific industry, tell us what the real workflow looks like.</p>
          <Link href="/#contact" className="techcraft-button mt-9 inline-flex border-white/15 bg-white/10 text-white">Talk to TechCraft <ArrowUpRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
