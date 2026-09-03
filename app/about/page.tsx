import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  Palette,
} from "lucide-react";

const capabilities = [
  [Palette, "Product design", "Research, UX strategy, interface systems and digital experiences."],
  [Code2, "Software engineering", "Modern web applications, APIs and production-ready platforms."],
  [Cpu, "AI & intelligence", "Useful AI integrations, automation and intelligent workflows."],
  [Layers3, "Digital systems", "Design systems, cloud foundations and scalable infrastructure."],
] as const;

const principles = [
  ["01", "Clarity", "We simplify complex ideas into products people can understand and use."],
  ["02", "Craft", "We care about interaction details, visual language and quality behind the interface."],
  ["03", "Technology", "We use modern engineering and emerging technology when it creates a better outcome."],
  ["04", "Character", "We build with a point of view rather than producing another interchangeable digital product."],
] as const;

function BrandMark() {
  return (
    <span className="relative grid h-6 w-6 shrink-0 rotate-45 place-items-center border border-[#111318]">
      <span className="absolute inset-[3px] border border-[#2563ff]" />
      <span className="absolute inset-[7px] border border-[#2563ff]" />
      <span className="absolute inset-[10px] bg-[#c83a32]" />
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#2563ff]" />

      <header className="fixed left-0 right-0 top-0 z-40 px-4 py-3 sm:px-[18px] sm:py-[15px]">
        <div className="mx-auto flex h-16 max-w-[1220px] items-center justify-between overflow-hidden rounded-[21px] border border-white/80 bg-white/45 px-2 pl-4 shadow-[0_15px_55px_rgba(17,24,39,.09)] backdrop-blur-[30px]">
          <Link href="/" className="relative z-10 flex items-center gap-3 px-2 py-2" aria-label="TechCraft home">
            <BrandMark />
            <span className="text-[13px] font-extrabold tracking-[-.05em]">TECH<span className="text-[#2563ff]">CRAFT</span></span>
          </Link>
          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
            <Link href="/#services" className="rounded-xl px-4 py-2.5 text-[13px] font-medium text-black/60 transition hover:bg-white/60 hover:text-[#111318]">Services</Link>
            <Link href="/#work" className="rounded-xl px-4 py-2.5 text-[13px] font-medium text-black/60 transition hover:bg-white/60 hover:text-[#111318]">Work</Link>
            <Link href="/about" className="rounded-xl bg-white/60 px-4 py-2.5 text-[13px] font-medium text-[#111318] shadow-[inset_0_-1px_0_rgba(37,99,255,.12)]">About</Link>
            <Link href="/#contact" className="rounded-xl px-4 py-2.5 text-[13px] font-medium text-black/60 transition hover:bg-white/60 hover:text-[#111318]">Contact</Link>
          </nav>
          <Link href="/#contact" className="hidden items-center gap-2 rounded-[13px] bg-[#2563ff] px-4 py-2.5 text-[10px] text-white shadow-[0_6px_20px_rgba(37,99,255,.2)] transition hover:-translate-y-0.5 hover:bg-[#111318] sm:flex">
            Let's talk <ArrowUpRight size={14} />
          </Link>
        </div>
      </header>

      <section className="relative flex min-h-[88vh] items-center overflow-hidden px-[7vw] pb-24 pt-40">
        <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(37,99,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,255,.045)_1px,transparent_1px)] [background-size:75px_75px]" />
        <div className="relative z-10 max-w-[760px]">
          <div className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">01 / ABOUT TECHCRAFT</div>
          <h1 className="mt-7 text-[clamp(64px,10vw,152px)] font-medium leading-[.83] tracking-[-.085em]">We build with<br /><span className="text-[#2563ff]">intent.</span></h1>
          <p className="mt-10 max-w-[560px] text-[15px] leading-[1.85] text-black/55">TechCraft is a software house where product design, engineering and emerging technology come together to create digital products with clarity, character and purpose.</p>
          <div className="mt-8 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/#contact" className="inline-flex items-center justify-center gap-2 bg-[#111318] px-4 py-3 text-[10px] text-white transition hover:-translate-y-0.5 hover:bg-[#2563ff]">Start a project <ArrowUpRight size={17} /></Link>
            <Link href="/#work" className="inline-flex items-center justify-center gap-2 border border-black/10 bg-white/40 px-4 py-3 text-[10px] transition hover:bg-white hover:text-[#2563ff]">Explore our work <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="absolute -right-20 top-1/2 hidden aspect-square w-[42vw] max-w-[620px] -translate-y-1/2 md:block">
          <div className="absolute inset-[4%] rounded-full border border-[#2563ff]/20" />
          <div className="absolute inset-[15%] rotate-45 rounded-[38%] border border-[#2563ff]/20" />
          <div className="absolute inset-[28%] rounded-full border border-[#2563ff]/25" />
          <div className="absolute left-1/2 top-1/2 grid h-24 w-24 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[#2563ff] bg-white/55 font-mono text-xs shadow-[0_20px_50px_rgba(37,99,255,.12)]">TC</div>
          <span className="absolute left-[22%] top-[27%] h-2 w-2 rounded-full bg-[#2563ff]" />
          <span className="absolute right-[13%] top-[47%] h-2 w-2 rounded-full bg-[#c83a32]" />
          <span className="absolute bottom-[11%] left-[47%] h-2 w-2 rounded-full bg-[#d7a52a]" />
        </div>
      </section>

      <section className="grid gap-12 bg-[#f7f8fa] px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / OUR APPROACH</div>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_.6fr] lg:gap-[10vw]">
          <h2 className="text-[clamp(52px,6.3vw,96px)] font-medium leading-[.87] tracking-[-.085em]">Design and engineering<br />should <span className="text-[#2563ff]">move together.</span></h2>
          <div className="self-end">
            <div className="mb-7 h-px w-[60px] bg-[#2563ff]" />
            <p className="mb-5 text-sm leading-[1.85] text-black/50">We start with the problem, not the technology. We shape the experience first, then engineer the system that makes it real.</p>
            <p className="text-sm leading-[1.85] text-black/50">That means thoughtful interfaces, deliberate interactions, robust software and a clear path from first idea to working product.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="font-mono text-[8px] tracking-[.16em] text-black/35">03 / CAPABILITIES</div>
        <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
          {capabilities.map(([Icon, title, description], index) => (
            <article key={title} className="group relative min-h-[250px] border-b border-r border-black/10 bg-white/20 p-6 transition hover:-translate-y-1 hover:bg-white">
              <div className="font-mono text-[8px] text-[#2563ff]">0{index + 1}</div>
              <div className="mt-9 grid h-11 w-11 place-items-center border border-black/10 text-[#2563ff] transition group-hover:rotate-45 group-hover:bg-[#2563ff] group-hover:text-white"><Icon size={19} strokeWidth={1.4} /></div>
              <h3 className="mt-6 text-[27px] font-medium tracking-[-.05em]">{title}</h3>
              <p className="mt-2 max-w-[350px] text-xs leading-7 text-black/45">{description}</p>
              <ArrowUpRight className="absolute right-6 top-6 text-black/20" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="relative flex min-h-[620px] items-center overflow-hidden bg-[#07182f] px-[7vw] text-white">
        <div className="relative z-10 max-w-[760px]">
          <div className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">04 / PERSPECTIVE</div>
          <h2 className="mt-7 text-[clamp(58px,8.5vw,120px)] font-medium leading-[.83] tracking-[-.085em]">Local perspective.<br /><span className="text-[#70a7ff]">Global standard.</span></h2>
          <p className="mt-8 max-w-[500px] text-sm leading-[1.9] text-white/50">Our visual language is shaped by the geometry, restraint and patience found in Balochi craftsmanship. We carry that spirit into digital work designed to stand confidently anywhere.</p>
        </div>
        <div className="absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rotate-45 border border-[#70a7ff]/20 sm:h-[620px] sm:w-[620px]">
          <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 border border-[#70a7ff]/20" />
          <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 border border-[#70a7ff]/20" />
          <div className="absolute left-1/2 top-1/2 h-[110px] w-[110px] -translate-x-1/2 -translate-y-1/2 border-2 border-[#70a7ff]/35" />
        </div>
      </section>

      <section className="grid gap-10 bg-[#e9edf2] px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="font-mono text-[8px] tracking-[.16em] text-black/35">05 / PRINCIPLES</div>
        <div className="border-t border-black/10">
          {principles.map(([number, title, description]) => (
            <div key={number} className="grid min-h-[115px] items-center gap-5 border-b border-black/10 sm:grid-cols-[55px_1fr_1.2fr]">
              <span className="font-mono text-[8px] text-[#2563ff]">{number}</span>
              <h3 className="text-[25px] font-medium tracking-[-.04em]">{title}</h3>
              <p className="text-xs leading-7 text-black/45">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex min-h-[500px] flex-col justify-between bg-[#07182f] px-[7vw] py-28 text-white md:flex-row md:items-end">
        <div>
          <div className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">06 / NEXT</div>
          <h2 className="mt-7 text-[clamp(58px,8vw,120px)] font-medium leading-[.83] tracking-[-.085em]">Have something worth<br /><span className="text-[#70a7ff]">building?</span></h2>
        </div>
        <Link href="/#contact" className="mt-12 grid h-[140px] w-[140px] place-items-center rounded-full border border-[#70a7ff]/60 bg-[#2563ff] text-center text-[10px] transition hover:scale-105 hover:bg-white hover:text-[#111318] md:mt-0">Let's talk<ArrowUpRight size={20} /></Link>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 bg-[#07182f] px-[7vw] py-6 font-mono text-[7px] tracking-[.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3 text-white"><BrandMark /><span>TECH<span className="text-[#70a7ff]">CRAFT</span></span></Link>
        <span>BALOCHISTAN / PAKISTAN</span>
      </footer>
    </main>
  );
}
