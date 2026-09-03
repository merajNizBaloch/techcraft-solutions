import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Compass,
  Palette,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Our Team | TechCraft Solutions",
  description:
    "Meet the people behind TechCraft Solutions — design, engineering, AI and digital product craft from Balochistan.",
};

// Replace these dummy members tomorrow. The layout only depends on this data shape.
const team = [
  {
    name: "Alex Khan",
    role: "Founder & Product Designer",
    initials: "AK",
    accent: "blue",
    bio: "Shapes product direction, experience strategy and the visual systems that turn complicated ideas into clear products.",
    focus: ["Product strategy", "UX / UI", "Design systems"],
    linkedin: "#",
  },
  {
    name: "Sara Ahmed",
    role: "Software Engineer",
    initials: "SA",
    accent: "green",
    bio: "Turns interfaces into dependable software with a focus on architecture, performance and production-ready implementation.",
    focus: ["Web engineering", "APIs", "Architecture"],
    linkedin: "#",
  },
  {
    name: "Hamza Baloch",
    role: "AI & Automation Engineer",
    initials: "HB",
    accent: "purple",
    bio: "Builds practical AI workflows and intelligent integrations that solve real operational problems instead of adding noise.",
    focus: ["AI integrations", "Automation", "Computer vision"],
    linkedin: "#",
  },
  {
    name: "Mariam Raza",
    role: "Visual & Brand Designer",
    initials: "MR",
    accent: "gold",
    bio: "Brings identity, motion and visual detail together so every product feels distinctive before the first click.",
    focus: ["Brand identity", "Art direction", "Motion"],
    linkedin: "#",
  },
] as const;

const disciplines = [
  [Palette, "Design", "Strategy, UX, UI and visual systems."],
  [Code2, "Engineering", "Interfaces, platforms and production software."],
  [BrainCircuit, "Intelligence", "AI, APIs and useful automation."],
  [Compass, "Direction", "Product thinking rooted in real constraints."],
] as const;

const principles = [
  ["01", "Work close", "Designers and engineers stay close to the problem instead of handing work across silos."],
  ["02", "Stay curious", "We keep testing ideas, tools and assumptions until the better answer becomes obvious."],
  ["03", "Care deeply", "The small details matter because they are usually the difference between functional and memorable."],
] as const;

export default function TeamPage() {
  return (
    <main className="team-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#2563ff]" />

      <section className="team-hero relative flex min-h-[78vh] items-center overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="team-hero-grid absolute inset-0" aria-hidden="true" />
        <div className="team-hero-glow team-hero-glow-a" aria-hidden="true" />
        <div className="team-hero-glow team-hero-glow-b" aria-hidden="true" />
        <div className="relative z-10 max-w-[860px]">
          <div className="team-reveal font-mono text-[8px] tracking-[.18em] text-[#2563ff]">
            01 / OUR TEAM
          </div>
          <div className="mt-7 overflow-hidden">
            <h1 className="team-title team-reveal text-[clamp(64px,10vw,154px)] font-medium leading-[.8] tracking-[-.09em]">
              People behind
              <br />
              <span className="text-[#2563ff]">the craft.</span>
            </h1>
          </div>
          <p className="team-reveal team-delay-2 mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/55">
            TechCraft is built by a small, multidisciplinary team that likes to stay close to the work. We bring product thinking, design, engineering and intelligence into the same room — and keep the conversation moving until the product makes sense.
          </p>
          <div className="team-reveal team-delay-3 mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[8px] tracking-[.14em] text-black/38">
            <span>DESIGN</span>
            <span className="text-[#2563ff]">●</span>
            <span>ENGINEERING</span>
            <span className="text-[#7a58c6]">●</span>
            <span>AI</span>
            <span className="text-[#d7a52a]">●</span>
            <span>PRODUCT</span>
          </div>
        </div>

        <div className="team-hero-mark hidden md:block" aria-hidden="true">
          <div className="team-hero-ring team-ring-a" />
          <div className="team-hero-ring team-ring-b" />
          <div className="team-hero-ring team-ring-c" />
          <div className="team-hero-core">
            <Sparkles size={19} />
            <span>TC</span>
            <small>PEOPLE / CRAFT / BUILD</small>
          </div>
          <span className="team-hero-label team-hero-label-a">IDEA → TEAM</span>
          <span className="team-hero-label team-hero-label-b">TEAM → PRODUCT</span>
        </div>
      </section>

      <section className="border-y border-black/10 bg-[#f8f9fb] px-[7vw] py-20">
        <div className="mx-auto grid max-w-[1420px] gap-8 md:grid-cols-2 xl:grid-cols-4">
          {disciplines.map(([Icon, title, description], index) => (
            <div key={title} className="team-discipline group border-l border-black/10 pl-5">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[8px] text-black/30">0{index + 1}</span>
                <Icon size={17} className="text-[#2563ff] transition duration-300 group-hover:scale-110" strokeWidth={1.4} />
              </div>
              <h2 className="mt-8 text-[24px] font-medium tracking-[-.05em]">{title}</h2>
              <p className="mt-2 max-w-[260px] text-xs leading-6 text-black/45">{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-[7vw] py-28">
        <div className="mx-auto max-w-[1420px]">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / PEOPLE</div>
              <h2 className="mt-6 text-[clamp(48px,6vw,94px)] font-medium leading-[.87] tracking-[-.08em]">
                A small team.
                <br />
                <span className="text-[#2563ff]">Big range.</span>
              </h2>
            </div>
            <p className="max-w-[360px] text-xs leading-7 text-black/42">
              Dummy profiles are intentionally easy to replace. Tomorrow you can update the team data at the top of this page without rebuilding the structure.
            </p>
          </div>

          <div className="grid gap-px border border-black/10 bg-black/10 md:grid-cols-2">
            {team.map((member, index) => (
              <article key={member.name} className={`team-member-card team-member-${member.accent}`}>
                <div className="team-member-top">
                  <span className="font-mono text-[8px] tracking-[.16em] text-black/32">0{index + 1} / TEAM</span>
                  <Link href={member.linkedin} aria-label={`${member.name} social profile`} className="team-member-link">
                    <span className="font-mono text-[7px] tracking-[.08em]">PROFILE</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>

                <div className="team-member-body">
                  <div className="team-avatar" aria-hidden="true">
                    <span>{member.initials}</span>
                    <i />
                  </div>
                  <div className="min-w-0">
                    <h3>{member.name}</h3>
                    <div className="team-role">{member.role}</div>
                    <p>{member.bio}</p>
                  </div>
                </div>

                <div className="team-focus">
                  <span>FOCUS</span>
                  <div>
                    {member.focus.map((item) => (
                      <b key={item}>{item}</b>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="team-code-grid absolute inset-0" aria-hidden="true" />
        <div className="relative z-10 mx-auto grid max-w-[1420px] gap-14 lg:grid-cols-[.85fr_1.15fr] lg:gap-[10vw]">
          <div>
            <div className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">03 / HOW WE COLLABORATE</div>
            <h2 className="mt-7 text-[clamp(50px,6vw,92px)] font-medium leading-[.87] tracking-[-.08em]">
              One room.
              <br />
              <span className="text-[#70a7ff]">Many disciplines.</span>
            </h2>
            <p className="mt-8 max-w-[470px] text-sm leading-[1.9] text-white/45">
              We keep the team intentionally close. That means the person shaping the interface can speak directly with the person building it, and the person integrating the technology can challenge both when the product needs a simpler answer.
            </p>
          </div>

          <div className="border-t border-white/10">
            {principles.map(([number, title, description]) => (
              <div key={number} className="team-principle grid gap-5 border-b border-white/10 py-7 sm:grid-cols-[52px_1fr]">
                <span className="font-mono text-[8px] text-[#70a7ff]">{number}</span>
                <div>
                  <h3 className="text-[26px] font-medium tracking-[-.05em]">{title}</h3>
                  <p className="mt-2 max-w-[560px] text-xs leading-7 text-white/40">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-[7vw] py-28">
        <div className="mx-auto grid max-w-[1420px] gap-12 border-t border-black/10 pt-10 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="font-mono text-[8px] tracking-[.16em] text-[#2563ff]">04 / WORK WITH US</div>
            <h2 className="mt-6 max-w-[900px] text-[clamp(48px,7vw,104px)] font-medium leading-[.86] tracking-[-.08em]">
              The right work needs
              <br />
              the <span className="text-[#2563ff]">right people.</span>
            </h2>
          </div>
          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 border border-[#111318] bg-[#111318] px-5 py-3.5 font-mono text-[9px] tracking-[.08em] text-white transition hover:-translate-y-1 hover:bg-[#2563ff] hover:border-[#2563ff]"
          >
            START A CONVERSATION <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
