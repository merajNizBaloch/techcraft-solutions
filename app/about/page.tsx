import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Cpu,
  Layers3,
  Menu,
  Palette,
  X,
} from "lucide-react";
import { AboutMobileNav } from "./about-mobile-nav";

const principles = [
  ["01", "Clarity", "We simplify complex ideas into products people can understand and use."],
  ["02", "Craft", "We care about the interaction details, visual language and quality behind the interface."],
  ["03", "Technology", "We use modern engineering and emerging technology when it creates a better outcome."],
  ["04", "Character", "We build with a point of view rather than producing another interchangeable digital product."],
] as const;

const capabilities = [
  [Palette, "Product design", "Research, UX strategy, interface systems and digital experiences."],
  [Code2, "Software engineering", "Modern web applications, APIs and production-ready platforms."],
  [Cpu, "AI & intelligence", "Useful AI integrations, automation and intelligent workflows."],
  [Layers3, "Digital systems", "Design systems, cloud foundations and scalable infrastructure."],
] as const;

function BrandMark() {
  return (
    <span className="about-brand-symbol" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="about-page">
      <div className="about-progress" />

      <header className="glass-header about-header">
        <div className="glass-nav">
          <Link className="brand" href="/" aria-label="TechCraft home">
            <BrandMark />
            <span className="brand-name">
              TECH<span>CRAFT</span>
            </span>
          </Link>

          <nav className="about-nav" aria-label="Primary navigation">
            <a href="/#services">Services</a>
            <a href="/#work">Work</a>
            <Link className="active" href="/about">About</Link>
            <a href="/#contact">Contact</a>
          </nav>

          <div className="header-actions">
            <a className="header-cta" href="/#contact">
              Let's talk
              <ArrowUpRight size={14} />
            </a>
            <AboutMobileNav />
          </div>
        </div>
      </header>

      <section className="about-hero">
        <div className="about-grid-pattern" aria-hidden="true" />
        <div className="about-hero-inner">
          <div className="about-kicker">01 / ABOUT TECHCRAFT</div>
          <h1>
            We build with
            <br />
            <span>intent.</span>
          </h1>
          <p>
            TechCraft is a software house where product design, engineering
            and emerging technology come together to create digital products
            with clarity, character and purpose.
          </p>
          <div className="about-hero-actions">
            <a className="about-primary" href="/#contact">
              Start a project
              <ArrowUpRight size={17} />
            </a>
            <a className="about-secondary" href="/#work">
              Explore our work
              <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className="about-orbit" aria-hidden="true">
          <div className="about-orbit-ring ring-a" />
          <div className="about-orbit-ring ring-b" />
          <div className="about-orbit-ring ring-c" />
          <div className="about-orbit-core">TC</div>
          <span className="about-orbit-dot dot-a" />
          <span className="about-orbit-dot dot-b" />
          <span className="about-orbit-dot dot-c" />
        </div>
      </section>

      <section className="about-story about-section">
        <div className="about-section-label">02 / OUR APPROACH</div>
        <div className="about-story-copy">
          <h2>
            Design and engineering
            <br />
            should <span>move together.</span>
          </h2>
          <div className="about-story-text">
            <div className="about-line" />
            <p>
              We start with the problem, not the technology. We shape the
              experience first, then engineer the system that makes it real.
            </p>
            <p>
              That means thoughtful interfaces, deliberate interactions,
              robust software and a clear path from first idea to working
              product.
            </p>
          </div>
        </div>
      </section>

      <section className="about-capabilities about-section">
        <div className="about-section-label">03 / CAPABILITIES</div>
        <div className="capability-grid">
          {capabilities.map(([Icon, title, description], index) => (
            <article className="capability-card" key={title}>
              <div className="capability-index">0{index + 1}</div>
              <div className="capability-icon"><Icon size={19} strokeWidth={1.4} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <ArrowUpRight className="capability-arrow" size={18} />
            </article>
          ))}
        </div>
      </section>

      <section className="about-culture">
        <div className="about-culture-graphic" aria-hidden="true">
          <div className="culture-square square-one" />
          <div className="culture-square square-two" />
          <div className="culture-square square-three" />
          <div className="culture-diamond" />
        </div>
        <div className="about-culture-copy">
          <div className="about-kicker">04 / PERSPECTIVE</div>
          <h2>
            Local perspective.
            <br />
            <span>Global standard.</span>
          </h2>
          <p>
            Our visual language is shaped by the geometry, restraint and
            patience found in Balochi craftsmanship. We carry that spirit
            into digital work designed to stand confidently anywhere.
          </p>
        </div>
      </section>

      <section className="about-principles about-section">
        <div className="about-section-label">05 / PRINCIPLES</div>
        <div className="principle-list">
          {principles.map(([number, title, description]) => (
            <div className="principle-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <div>
          <div className="about-kicker">06 / NEXT</div>
          <h2>
            Have something worth
            <br />
            <span>building?</span>
          </h2>
        </div>
        <a className="about-contact-circle" href="/#contact">
          <span>Let's talk</span>
          <ArrowUpRight size={20} />
        </a>
      </section>

      <footer className="about-footer">
        <Link href="/">
          <BrandMark />
          <span>TECH<span>CRAFT</span></span>
        </Link>
        <span>BALOCHISTAN / PAKISTAN</span>
      </footer>

      <style jsx global>{`
        .about-page {
          --tc-bg: #f4f6f8;
          --tc-ink: #111318;
          --tc-blue: #2563ff;
          --tc-red: #c83a32;
          --tc-gold: #d7a52a;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at 78% 8%, rgba(37,99,255,.075), transparent 25%),
            var(--tc-bg);
          color: var(--tc-ink);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        }

        .about-page * { box-sizing: border-box; }
        .about-page a { color: inherit; text-decoration: none; }
        .about-page .glass-header { padding: 15px 18px; }
        .about-page .glass-nav {
          position: relative;
          width: min(1220px, 100%);
          height: 64px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 7px 8px 7px 16px;
          background: linear-gradient(135deg, rgba(255,255,255,.78), rgba(255,255,255,.38));
          border: 1px solid rgba(255,255,255,.78);
          border-radius: 21px;
          backdrop-filter: blur(30px) saturate(180%);
          -webkit-backdrop-filter: blur(30px) saturate(180%);
          box-shadow: 0 15px 55px rgba(17,24,39,.09), inset 0 1px 0 rgba(255,255,255,.95), inset 0 -1px 0 rgba(255,255,255,.28);
          overflow: hidden;
        }
        .about-page .glass-nav::before {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          background: radial-gradient(circle at 18% 0%, rgba(255,255,255,.95), transparent 28%), radial-gradient(circle at 88% 100%, rgba(37,99,255,.11), transparent 33%);
        }
        .about-page .brand {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 7px 9px;
        }
        .about-page .brand-name {
          font-size: 13px;
          font-weight: 800;
          letter-spacing: -.05em;
        }
        .about-page .brand-name span { color: var(--tc-blue); }
        .about-brand-symbol {
          position: relative;
          width: 25px;
          height: 25px;
          border: 1px solid var(--tc-ink);
          transform: rotate(45deg);
          flex: 0 0 auto;
        }
        .about-brand-symbol span { position: absolute; inset: 4px; border: 1px solid var(--tc-blue); }
        .about-brand-symbol span:nth-child(2) { inset: 8px; }
        .about-brand-symbol span:nth-child(3) { inset: 11px; border: 0; background: var(--tc-red); }
        .about-nav {
          position: relative;
          z-index: 2;
          display: flex;
          gap: 3px;
        }
        .about-nav a {
          position: relative;
          padding: 10px 17px;
          border-radius: 12px;
          color: rgba(17,19,24,.62);
          font-size: 13px;
          font-weight: 500;
          transition: .25s ease;
        }
        .about-nav a:hover,
        .about-nav a.active {
          color: var(--tc-ink);
          background: linear-gradient(135deg, rgba(255,255,255,.78), rgba(255,255,255,.34));
          box-shadow: inset 0 1px 0 rgba(255,255,255,.95), inset 0 -1px 0 rgba(37,99,255,.12), 0 5px 18px rgba(17,24,39,.06);
          transform: translateY(-1px);
        }
        .about-nav a.active::after {
          content: "";
          position: absolute;
          left: 14px;
          right: 14px;
          bottom: 5px;
          height: 1px;
          background: var(--tc-blue);
          opacity: .65;
        }
        .about-page .header-actions { position: relative; z-index: 2; display: flex; align-items: center; gap: 7px; }
        .about-page .header-cta,
        .about-primary,
        .about-secondary,
        .about-contact-circle {
          position: relative;
          overflow: hidden;
        }
        .about-page .header-cta {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 15px;
          border-radius: 13px;
          background: var(--tc-blue);
          color: #fff;
          font-size: 10px;
          box-shadow: 0 6px 20px rgba(37,99,255,.2), inset 0 1px 0 rgba(255,255,255,.3);
          transition: .25s ease;
        }
        .about-page .header-cta:hover { background: var(--tc-ink); transform: translateY(-1px); }

        .about-progress { position: fixed; inset: 0 0 auto; z-index: 1000; height: 2px; background: var(--tc-blue); }

        .about-hero {
          position: relative;
          min-height: 86vh;
          padding: 180px 7vw 110px;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: linear-gradient(180deg, rgba(255,255,255,.16), transparent 70%);
        }
        .about-hero-inner { position: relative; z-index: 3; width: min(760px, 100%); }
        .about-kicker {
          color: var(--tc-blue);
          font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
          font-size: 8px;
          letter-spacing: .16em;
        }
        .about-hero h1,
        .about-story h2,
        .about-culture h2,
        .about-cta h2 {
          margin: 28px 0 0;
          font-weight: 500;
          letter-spacing: -.085em;
          line-height: .83;
        }
        .about-hero h1 { font-size: clamp(76px, 10vw, 152px); }
        .about-hero h1 span,
        .about-story h2 span,
        .about-culture h2 span,
        .about-cta h2 span { color: var(--tc-blue); }
        .about-hero p {
          max-width: 560px;
          margin: 38px 0 0;
          color: rgba(17,19,24,.54);
          font-size: 15px;
          line-height: 1.85;
        }
        .about-hero-actions { display: flex; gap: 10px; margin-top: 30px; }
        .about-primary,
        .about-secondary {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 17px;
          font-size: 10px;
          transition: .25s ease;
        }
        .about-primary { background: var(--tc-ink); color: #fff; }
        .about-primary:hover { background: var(--tc-blue); transform: translateY(-2px); }
        .about-secondary { border: 1px solid rgba(17,19,24,.1); background: rgba(255,255,255,.38); }
        .about-secondary:hover { background: #fff; color: var(--tc-blue); }

        .about-grid-pattern {
          position: absolute;
          inset: 0;
          opacity: .6;
          background-image: linear-gradient(rgba(37,99,255,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,255,.045) 1px, transparent 1px);
          background-size: 75px 75px;
          mask-image: linear-gradient(90deg, rgba(0,0,0,.2), #000 45%, transparent 85%);
        }
        .about-orbit { position: absolute; right: 4vw; top: 50%; width: min(48vw, 640px); aspect-ratio: 1; transform: translateY(-42%); color: rgba(37,99,255,.24); }
        .about-orbit-ring,
        .about-orbit-core,
        .about-orbit-dot { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); }
        .about-orbit-ring { border: 1px solid currentColor; border-radius: 50%; }
        .ring-a { width: 92%; height: 92%; }
        .ring-b { width: 68%; height: 68%; transform: translate(-50%,-50%) rotate(45deg); border-radius: 0; }
        .ring-c { width: 44%; height: 44%; transform: translate(-50%,-50%) rotate(45deg); border-radius: 0; }
        .about-orbit-core { width: 110px; height: 110px; display: grid; place-items: center; border-radius: 50%; background: var(--tc-ink); color: #fff; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 12px; box-shadow: 0 30px 80px rgba(17,24,39,.2); }
        .about-orbit-core::after { content: ""; position: absolute; inset: 12px; border: 1px solid rgba(255,255,255,.18); border-radius: 50%; }
        .about-orbit-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--tc-blue); box-shadow: 0 0 0 8px rgba(37,99,255,.06); }
        .dot-a { transform: translate(-50%,-50%) translate(245px,-80px); }
        .dot-b { background: var(--tc-red); transform: translate(-50%,-50%) translate(-210px,110px); }
        .dot-c { background: var(--tc-gold); transform: translate(-50%,-50%) translate(155px,185px); }

        .about-section { padding: 135px 7vw; }
        .about-story { background: rgba(247,248,250,.75); }
        .about-section-label { color: rgba(17,19,24,.34); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 8px; letter-spacing: .15em; }
        .about-story-copy { margin-top: 70px; display: grid; grid-template-columns: 1.15fr .85fr; gap: 11vw; align-items: end; }
        .about-story h2 { margin: 0; font-size: clamp(55px, 7vw, 110px); }
        .about-story-text { max-width: 450px; }
        .about-line { width: 60px; height: 1px; margin-bottom: 30px; background: var(--tc-blue); }
        .about-story-text p { margin: 0 0 24px; color: rgba(17,19,24,.5); font-size: 14px; line-height: 1.85; }

        .about-capabilities { background: #eceff3; }
        .capability-grid { margin-top: 65px; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); }
        .capability-card { position: relative; min-height: 245px; padding: 28px 26px; border-top: 1px solid rgba(17,19,24,.1); border-left: 1px solid rgba(17,19,24,.1); transition: .3s ease; }
        .capability-card:nth-child(odd) { border-left: 0; }
        .capability-card:nth-child(3), .capability-card:nth-child(4) { border-bottom: 1px solid rgba(17,19,24,.1); }
        .capability-card:hover { background: rgba(255,255,255,.55); }
        .capability-index { color: var(--tc-blue); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 8px; }
        .capability-icon { width: 42px; height: 42px; display: grid; place-items: center; margin-top: 32px; color: var(--tc-blue); border: 1px solid rgba(17,19,24,.12); }
        .capability-card:hover .capability-icon { color: #fff; background: var(--tc-blue); transform: rotate(45deg); }
        .capability-card h3 { margin: 24px 0 10px; font-size: 27px; font-weight: 500; letter-spacing: -.045em; }
        .capability-card p { max-width: 390px; margin: 0; color: rgba(17,19,24,.46); font-size: 12px; line-height: 1.75; }
        .capability-arrow { position: absolute; top: 28px; right: 26px; color: rgba(17,19,24,.24); transition: .3s ease; }
        .capability-card:hover .capability-arrow { color: var(--tc-blue); transform: translate(3px,-3px); }

        .about-culture { position: relative; min-height: 680px; padding: 120px 7vw; display: flex; align-items: center; overflow: hidden; background: #07182f; color: #fff; }
        .about-culture-copy { position: relative; z-index: 3; width: min(720px, 100%); }
        .about-culture h2 { font-size: clamp(64px, 8vw, 120px); }
        .about-culture p { max-width: 500px; margin-top: 32px; color: rgba(255,255,255,.52); font-size: 14px; line-height: 1.85; }
        .about-culture-graphic { position: absolute; right: -120px; top: 50%; width: 650px; height: 650px; transform: translateY(-50%); color: rgba(112,167,255,.28); }
        .culture-square { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%) rotate(45deg); border: 1px solid currentColor; }
        .about-culture-graphic .square-one { width: 520px; height: 520px; }
        .about-culture-graphic .square-two { width: 390px; height: 390px; opacity: .7; }
        .about-culture-graphic .square-three { width: 260px; height: 260px; opacity: .5; }
        .culture-diamond { position: absolute; left: 50%; top: 50%; width: 190px; height: 190px; transform: translate(-50%,-50%) rotate(45deg); border: 2px solid currentColor; }

        .about-principles { background: #f4f6f8; }
        .principle-list { margin-top: 65px; border-top: 1px solid rgba(17,19,24,.1); }
        .principle-row { display: grid; grid-template-columns: 80px 1fr 1fr; gap: 28px; align-items: center; min-height: 130px; border-bottom: 1px solid rgba(17,19,24,.1); }
        .principle-row > span { color: var(--tc-blue); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 8px; }
        .principle-row h3 { margin: 0; font-size: 30px; font-weight: 500; letter-spacing: -.045em; }
        .principle-row p { max-width: 430px; margin: 0; color: rgba(17,19,24,.45); font-size: 12px; line-height: 1.75; }

        .about-cta { min-height: 610px; padding: 115px 7vw 90px; display: flex; align-items: flex-end; justify-content: space-between; gap: 70px; background: #07182f; color: #fff; }
        .about-cta h2 { font-size: clamp(64px, 8.5vw, 126px); }
        .about-contact-circle { width: 155px; height: 155px; flex: 0 0 auto; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 8px; border: 1px solid rgba(112,167,255,.55); border-radius: 50%; background: var(--tc-blue); color: #fff; font-size: 10px; transition: .4s ease; }
        .about-contact-circle:hover { transform: scale(1.06); background: #fff; color: var(--tc-ink); }

        .about-footer { display: flex; justify-content: space-between; align-items: center; padding: 18px 7vw 25px; border-top: 1px solid rgba(255,255,255,.1); background: #07182f; color: rgba(255,255,255,.36); font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 7px; letter-spacing: .15em; }
        .about-footer a { display: flex; align-items: center; gap: 10px; font-family: Inter, ui-sans-serif, system-ui, sans-serif; font-size: 12px; font-weight: 800; letter-spacing: -.04em; color: #fff; }
        .about-footer a > span > span { color: var(--tc-blue); }
        .about-footer .about-brand-symbol { width: 22px; height: 22px; border-color: #fff; }
        .about-footer .about-brand-symbol span { inset: 3px; }
        .about-footer .about-brand-symbol span:nth-child(2) { inset: 6px; }
        .about-footer .about-brand-symbol span:nth-child(3) { inset: 9px; }

        .about-mobile-toggle { display: none; width: 38px; height: 38px; align-items: center; justify-content: center; border: 1px solid rgba(17,19,24,.08); border-radius: 12px; background: rgba(255,255,255,.45); color: var(--tc-ink); }
        .about-mobile-menu { display: none; }
        @media (max-width: 760px) {
          .about-page .glass-header { padding: 10px; }
          .about-page .glass-nav { height: 58px; padding-left: 12px; }
          .about-nav { display: none; }
          .about-page .header-cta { display: none; }
          .about-mobile-toggle { display: flex; }
          .about-mobile-menu { position: fixed; left: 10px; right: 10px; top: 76px; z-index: 101; padding: 10px; display: flex; flex-direction: column; gap: 4px; opacity: 0; pointer-events: none; transform: translateY(-8px); transition: .25s ease; background: rgba(255,255,255,.86); border: 1px solid rgba(255,255,255,.9); border-radius: 18px; backdrop-filter: blur(25px); box-shadow: 0 20px 60px rgba(17,24,39,.12); }
          .about-mobile-menu.open { opacity: 1; pointer-events: auto; transform: translateY(0); }
          .about-mobile-menu a { padding: 14px; border-radius: 12px; font-size: 13px; }
          .about-mobile-menu a:hover { background: rgba(37,99,255,.08); }
          .about-hero { min-height: auto; padding: 135px 7vw 85px; }
          .about-hero h1 { font-size: clamp(58px, 18vw, 96px); }
          .about-hero p { font-size: 13px; }
          .about-hero-actions { flex-direction: column; align-items: stretch; max-width: 270px; }
          .about-orbit { width: 500px; right: -285px; top: auto; bottom: -90px; transform: none; opacity: .8; }
          .about-story-copy { grid-template-columns: 1fr; gap: 55px; }
          .about-story h2 { font-size: 56px; }
          .about-section { padding: 95px 7vw; }
          .capability-grid { grid-template-columns: 1fr; }
          .capability-card,
          .capability-card:nth-child(3),
          .capability-card:nth-child(4) { border-left: 0; border-bottom: 1px solid rgba(17,19,24,.1); }
          .capability-card:last-child { border-bottom: 0; }
          .about-culture { min-height: 700px; padding: 95px 7vw; }
          .about-culture h2 { font-size: 62px; }
          .about-culture-graphic { width: 500px; height: 500px; right: -285px; }
          .about-culture-graphic .square-one { width: 400px; height: 400px; }
          .about-culture-graphic .square-two { width: 300px; height: 300px; }
          .about-culture-graphic .square-three { width: 205px; height: 205px; }
          .culture-diamond { width: 150px; height: 150px; }
          .principle-row { grid-template-columns: 38px 1fr; min-height: 135px; }
          .principle-row p { grid-column: 2; }
          .about-cta { min-height: 700px; padding: 95px 7vw 40px; flex-direction: column; align-items: flex-start; justify-content: space-between; }
          .about-cta h2 { font-size: 62px; }
          .about-contact-circle { width: 120px; height: 120px; }
          .about-footer { padding: 18px 7vw; flex-direction: column; align-items: flex-start; gap: 12px; }
        }
      `}</style>
    </main>
  );
}
