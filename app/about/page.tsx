import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Compass,
  Layers3,
  Palette,
  Sparkles,
  Workflow,
} from "lucide-react";

const capabilities = [
  [Palette, "Product design", "Research, UX strategy, interface systems and digital experiences that feel deliberate from the first interaction."],
  [Code2, "Software engineering", "Modern web applications, APIs and production-ready platforms engineered for speed, stability and growth."],
  [BrainCircuit, "AI & intelligence", "Practical AI integrations, automation and intelligent workflows focused on useful outcomes rather than novelty."],
  [Layers3, "Digital systems", "Design systems, cloud foundations and scalable architecture that keep products coherent as they evolve."],
] as const;

const principles = [
  ["01", "Clarity", "We remove unnecessary complexity so the important thing is always easy to see, understand and act on."],
  ["02", "Craft", "We obsess over typography, spacing, interaction details and the invisible engineering behind a polished experience."],
  ["03", "Technology", "We choose modern technology because it creates a better result, not because a stack looks impressive on paper."],
  ["04", "Character", "We build with a point of view. Every product should feel intentional instead of interchangeable."],
] as const;

const process = [
  ["01", "Discover", "We clarify the problem, the audience, the constraints and what success actually needs to look like.", Compass],
  ["02", "Shape", "We turn strategy into flows, structure, visual language and a product direction that the whole team can rally around.", Palette],
  ["03", "Build", "Design and engineering move together through rapid implementation, testing and refinement.", Code2],
  ["04", "Evolve", "After launch, we keep learning, improving and extending the system instead of treating the first release as the finish line.", Workflow],
] as const;

const numbers = [
  ["01", "Design + code", "One team across both sides of the product."],
  ["02", "Built to scale", "Systems that can grow beyond the first release."],
  ["03", "Human first", "Technology shaped around real people and real constraints."],
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
    <main className="about-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#2563ff]" />

      <section className="about-hero relative flex min-h-[92vh] items-center overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="about-grid absolute inset-0" />
        <div className="about-scan absolute inset-x-0 top-0 h-px bg-[#2563ff]/30" />
        <div className="relative z-10 max-w-[820px]">
          <div className="about-reveal font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / ABOUT TECHCRAFT</div>
          <div className="mt-7 overflow-hidden">
            <h1 className="about-title about-reveal text-[clamp(64px,10vw,156px)] font-medium leading-[.81] tracking-[-.09em]">
              We build with<br />
              <span className="text-[#2563ff]">intent.</span>
            </h1>
          </div>
          <p className="about-reveal about-delay-2 mt-10 max-w-[610px] text-[15px] leading-[1.9] text-black/55">
            TechCraft is a technology studio from Balochistan focused on turning complicated ideas into clear, capable digital products. We combine product thinking, visual craft and serious engineering so the experience and the technology make sense together.
          </p>
          <div className="about-reveal about-delay-3 mt-9 flex flex-col gap-2.5 sm:flex-row">
            <Link href="/#contact" className="about-button about-button-dark inline-flex items-center justify-center gap-2 bg-[#111318] px-5 py-3.5 text-[10px] text-white">
              Start a project <ArrowUpRight size={17} />
            </Link>
            <Link href="/#work" className="about-button inline-flex items-center justify-center gap-2 border border-black/10 bg-white/45 px-5 py-3.5 text-[10px]">
              Explore our work <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="about-orbit absolute -right-28 top-[56%] hidden aspect-square w-[46vw] max-w-[690px] -translate-y-1/2 md:block" aria-hidden="true">
          <div className="about-orbit-ring about-orbit-ring-a absolute inset-[4%] rounded-full border border-[#2563ff]/15" />
          <div className="about-orbit-ring about-orbit-ring-b absolute inset-[15%] rotate-45 rounded-[38%] border border-[#2563ff]/20" />
          <div className="about-orbit-ring about-orbit-ring-c absolute inset-[28%] rounded-full border border-[#2563ff]/25" />
          <div className="about-orbit-core absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center border border-[#2563ff] bg-white/60 font-mono text-xs shadow-[0_20px_70px_rgba(37,99,255,.14)] backdrop-blur-sm">
            <span className="animate-pulse">TC</span>
          </div>
          <span className="about-orbit-dot absolute left-[21%] top-[26%] h-2 w-2 rounded-full bg-[#2563ff]" />
          <span className="about-orbit-dot absolute right-[13%] top-[47%] h-2 w-2 rounded-full bg-[#c83a32] [animation-delay:1s]" />
          <span className="about-orbit-dot absolute bottom-[11%] left-[47%] h-2 w-2 rounded-full bg-[#d7a52a] [animation-delay:2s]" />
          <span className="absolute left-[8%] top-1/2 font-mono text-[7px] tracking-[.18em] text-black/25">SYSTEM / 01</span>
          <span className="absolute bottom-[8%] right-[4%] font-mono text-[7px] tracking-[.18em] text-black/25">DESIGN / ENGINEERING</span>
        </div>
      </section>

      <section className="grid gap-12 bg-[#f7f8fa] px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-black/35">02 / OUR STORY</div>
        <div className="grid gap-16 lg:grid-cols-[1.2fr_.8fr] lg:gap-[9vw]">
          <div>
            <h2 className="about-reveal text-[clamp(48px,6vw,91px)] font-medium leading-[.88] tracking-[-.08em]">
              Technology is only useful when it <span className="text-[#2563ff]">moves people forward.</span>
            </h2>
            <div className="about-copy-reveal mt-10 max-w-[660px] space-y-5 text-sm leading-[1.9] text-black/50">
              <p>We started from a simple belief: great digital products do not come from choosing design or engineering. They come from making the two disciplines understand each other.</p>
              <p>That belief shapes how we work today. We ask better questions before we draw screens. We prototype before we overbuild. We sweat the details, then we make sure those details survive contact with real software.</p>
              <p>Our roots are in Balochistan, but our ambition is not limited by geography. We want to prove that thoughtful product work can be created from here and compete anywhere.</p>
            </div>
          </div>
          <div className="self-end">
            <div className="about-side-card border border-black/10 bg-white/55 p-7 shadow-[0_25px_70px_rgba(17,24,39,.06)] backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">TC / 001</span>
                <Sparkles size={17} className="text-[#d7a52a]" />
              </div>
              <div className="mt-12 h-px w-16 bg-[#2563ff]" />
              <p className="mt-5 text-[27px] font-medium leading-[1.05] tracking-[-.05em]">Small enough to care. Ambitious enough to build properly.</p>
              <div className="mt-10 grid grid-cols-2 gap-6 border-t border-black/10 pt-6">
                <div>
                  <span className="font-mono text-[8px] text-black/35">MINDSET</span>
                  <p className="mt-2 text-xs text-black/60">Curious</p>
                </div>
                <div>
                  <span className="font-mono text-[8px] text-black/35">MODE</span>
                  <p className="mt-2 text-xs text-black/60">Focused</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-[7vw] py-24">
        <div className="grid gap-6 border-y border-black/10 py-8 md:grid-cols-3 md:gap-10">
          {numbers.map(([number, title, description], index) => (
            <div key={number} className={`about-stat about-stagger-${index + 1} flex gap-5`}>
              <span className="font-mono text-[8px] text-[#2563ff]">{number}</span>
              <div>
                <h3 className="text-[18px] font-medium tracking-[-.04em]">{title}</h3>
                <p className="mt-1 max-w-[250px] text-xs leading-6 text-black/40">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-10 px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-black/35">03 / CAPABILITIES</div>
        <div>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="about-reveal max-w-[780px] text-[clamp(48px,6vw,90px)] font-medium leading-[.88] tracking-[-.08em]">From first thought to <span className="text-[#2563ff]">working system.</span></h2>
            <p className="about-reveal about-delay-1 max-w-[310px] text-xs leading-7 text-black/40">A connected set of capabilities, designed to work together instead of becoming disconnected hand-offs.</p>
          </div>
          <div className="grid border-l border-t border-black/10 sm:grid-cols-2">
            {capabilities.map(([Icon, title, description], index) => (
              <article key={title} className={`about-capability about-stagger-${index + 1} group relative min-h-[285px] overflow-hidden border-b border-r border-black/10 bg-white/20 p-7 transition-all duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_24px_60px_rgba(17,24,39,.07)]`}>
                <div className="absolute right-0 top-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-[#2563ff]/[.05] transition duration-500 group-hover:scale-150" />
                <div className="relative flex items-center justify-between">
                  <span className="font-mono text-[8px] text-[#2563ff]">0{index + 1}</span>
                  <ArrowUpRight className="text-black/20 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#2563ff]" size={18} />
                </div>
                <div className="relative mt-10 grid h-12 w-12 place-items-center border border-black/10 bg-white/55 text-[#2563ff] transition duration-500 group-hover:rotate-45 group-hover:border-[#2563ff] group-hover:bg-[#2563ff] group-hover:text-white">
                  <Icon size={20} strokeWidth={1.4} className="transition duration-500 group-hover:-rotate-45" />
                </div>
                <h3 className="relative mt-7 text-[28px] font-medium tracking-[-.05em]">{title}</h3>
                <p className="relative mt-3 max-w-[380px] text-xs leading-7 text-black/45">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-32 text-white">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(112,167,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:gap-[10vw]">
          <div>
            <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">04 / HOW WE WORK</div>
            <h2 className="about-reveal mt-7 text-[clamp(52px,6vw,92px)] font-medium leading-[.86] tracking-[-.08em]">A process built for <span className="text-[#70a7ff]">momentum.</span></h2>
            <p className="about-reveal about-delay-2 mt-8 max-w-[450px] text-sm leading-[1.9] text-white/45">No theatre. No long hand-off chains. We keep strategy, design and implementation close enough that decisions can happen quickly and quality does not get lost between disciplines.</p>
          </div>
          <div className="border-t border-white/10">
            {process.map(([number, title, description, Icon], index) => (
              <div key={number} className={`about-process about-stagger-${index + 1} group grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[48px_1fr_42px] sm:items-start`}>
                <span className="font-mono text-[8px] text-[#70a7ff]">{number}</span>
                <div>
                  <h3 className="text-[25px] font-medium tracking-[-.05em] transition group-hover:text-[#70a7ff]">{title}</h3>
                  <p className="mt-2 max-w-[470px] text-xs leading-7 text-white/40">{description}</p>
                </div>
                <div className="mt-1 grid h-9 w-9 place-items-center border border-white/10 text-white/45 transition duration-500 group-hover:rotate-45 group-hover:border-[#70a7ff]/50 group-hover:text-[#70a7ff]">
                  <Icon size={16} strokeWidth={1.4} className="transition duration-500 group-hover:-rotate-45" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 bg-[#e9edf2] px-[7vw] py-28 lg:grid-cols-[130px_1fr] lg:gap-14">
        <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-black/35">05 / PRINCIPLES</div>
        <div>
          <div className="max-w-[760px]">
            <h2 className="about-reveal text-[clamp(52px,6vw,92px)] font-medium leading-[.86] tracking-[-.08em]">The standard behind every <span className="text-[#2563ff]">decision.</span></h2>
          </div>
          <div className="mt-14 border-t border-black/10">
            {principles.map(([number, title, description], index) => (
              <div key={number} className={`about-principle about-stagger-${index + 1} group grid min-h-[145px] items-center gap-6 border-b border-black/10 py-7 sm:grid-cols-[55px_1fr_1.3fr]`}>
                <span className="font-mono text-[8px] text-[#2563ff]">{number}</span>
                <h3 className="text-[28px] font-medium tracking-[-.05em] transition-transform duration-500 group-hover:translate-x-2">{title}</h3>
                <p className="text-xs leading-7 text-black/45">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fa] px-[7vw] py-28">
        <div className="absolute -right-24 top-1/2 h-[340px] w-[340px] -translate-y-1/2 rounded-full border border-[#2563ff]/10" />
        <div className="absolute -right-5 top-1/2 h-[200px] w-[200px] -translate-y-1/2 rounded-full border border-[#c83a32]/10" />
        <div className="relative z-10 grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-[#2563ff]">06 / PERSPECTIVE</div>
            <h2 className="about-reveal mt-7 max-w-[900px] text-[clamp(54px,7.2vw,112px)] font-medium leading-[.84] tracking-[-.085em]">Local perspective.<br /><span className="text-[#2563ff]">Global standard.</span></h2>
            <p className="about-reveal about-delay-2 mt-8 max-w-[650px] text-sm leading-[1.9] text-black/45">There is a particular kind of clarity that comes from building where constraints are real. Our visual language takes cues from the geometry, restraint and patience of Balochi craft, while our ambitions are thoroughly contemporary.</p>
          </div>
          <div className="about-location-card border border-black/10 bg-white/70 p-6 backdrop-blur-sm">
            <div className="font-mono text-[8px] tracking-[.16em] text-black/35">ORIGIN</div>
            <div className="mt-3 text-[22px] font-medium tracking-[-.04em]">Balochistan / Pakistan</div>
            <div className="mt-5 flex items-center gap-2 text-[9px] text-black/40"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#2563ff]" /> Building beyond borders</div>
          </div>
        </div>
      </section>

      <section className="about-cta flex min-h-[540px] flex-col justify-between overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white md:flex-row md:items-end">
        <div className="relative z-10">
          <div className="about-reveal font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">07 / NEXT</div>
          <h2 className="about-reveal mt-7 max-w-[880px] text-[clamp(58px,8vw,122px)] font-medium leading-[.82] tracking-[-.09em]">Have something worth<br /><span className="text-[#70a7ff]">building?</span></h2>
          <p className="about-reveal about-delay-2 mt-8 max-w-[440px] text-sm leading-[1.85] text-white/40">Tell us what you are trying to make. We will help turn the rough idea into a clear next move.</p>
        </div>
        <Link href="/#contact" className="about-cta-button mt-12 grid h-[154px] w-[154px] shrink-0 place-items-center rounded-full border border-[#70a7ff]/60 bg-[#2563ff] text-center text-[10px] shadow-[0_20px_60px_rgba(37,99,255,.22)] transition md:mt-0">
          <span className="flex items-center gap-2">Let's talk <ArrowUpRight size={18} /></span>
        </Link>
      </section>

      <footer className="flex flex-col gap-4 border-t border-white/10 bg-[#07182f] px-[7vw] py-6 font-mono text-[7px] tracking-[.16em] text-white/30 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="flex items-center gap-3 text-white"><BrandMark /><span>TECH<span className="text-[#70a7ff]">CRAFT</span></span></Link>
        <div className="flex items-center gap-5"><span>BALOCHISTAN / PAKISTAN</span><span className="hidden sm:inline-flex items-center gap-1"><Check size={10} /> DIGITAL STUDIO</span></div>
      </footer>
    </main>
  );
}
