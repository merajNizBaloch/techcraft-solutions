import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  HeartHandshake,
  MapPin,
  Mountain,
  Palette,
  Sparkles,
} from "lucide-react";

const values = [
  ["01 / USEFUL", "People before features", "We design products to remove friction, make work easier and create outcomes that matter outside the screen."],
  ["02 / ROOTED", "Balochistan in the language", "Mountain lines, embroidery geometry and regional craft inform our visual rhythm without turning culture into decoration."],
  ["03 / BUILT", "Design that survives code", "The story continues through engineering, where interactions, systems and details become reliable working products."],
] as const;

function StageGrid() {
  return <div className="dc-stage-grid" aria-hidden="true" />;
}

export default function AboutPage() {
  return (
    <main className="dev-canvas">
      <div className="fixed inset-x-0 top-0 z-50 h-0.5 bg-[#087e9b]" />
      <div className="dc-thread" aria-hidden="true"><div className="dc-thread-dot" /></div>

      <section className="dc-section dc-hero">
        <div className="dc-grid" />
        <div className="dc-hero-inner">
          <div className="dc-hero-copy">
            <div className="dc-kicker">DEV CANVAS / ABOUT TECHCRAFT</div>
            <h1 className="dc-title">Built from <span className="dc-gradient">where we come from.</span></h1>
            <p className="dc-copy">
              TechCraft is a product studio from Balochistan. We design digital products that help people, and we bring the place we come from into the way those products feel — through rhythm, geometry, landscape and craft.
            </p>
            <div className="dc-actions">
              <Link href="/#contact" className="dc-button dc-button-primary">Build something useful <ArrowUpRight size={16} /></Link>
              <Link href="/#work" className="dc-button">See the work <ArrowRight size={15} /></Link>
            </div>
          </div>

          <div className="dc-origin-board" aria-hidden="true">
            <div className="dc-embroidery" />
            <span className="dc-stitch s1" /><span className="dc-stitch s2" /><span className="dc-stitch s3" />
            <div className="dc-origin-chip c1"><MapPin size={11} /><i /> BALOCHISTAN / ORIGIN</div>
            <div className="dc-origin-chip c2"><Palette size={11} /><i /> CRAFT / PATTERN</div>
            <div className="dc-origin-chip c3"><Code2 size={11} /><i /> PRODUCT / SYSTEM</div>
            <div className="dc-mountain">
              <svg viewBox="0 0 700 280" preserveAspectRatio="none">
                <path d="M0 228 L60 204 L112 178 L158 192 L220 126 L272 157 L336 92 L395 138 L449 105 L506 151 L572 86 L634 142 L700 111" />
                <path d="M0 247 L67 225 L124 209 L183 219 L239 176 L294 198 L351 147 L414 181 L469 159 L528 194 L590 145 L648 184 L700 169" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      <section className="dc-section dc-story">
        <div className="dc-grid" />

        <article className="dc-story-row">
          <div className="dc-story-copy">
            <div className="dc-index">01 / ROOTS</div>
            <h2>Culture is not a theme. It is a <span className="dc-gradient">design instinct.</span></h2>
            <p>
              Balochi embroidery is built from patience, repetition, symmetry and detail. Our mountains are made of strong silhouettes, layered horizons and contrast. Those qualities become part of our product language: structured grids, intentional spacing, sharp geometry and visual rhythm.
            </p>
            <div className="dc-note">CRAFT → RHYTHM → DIGITAL LANGUAGE</div>
          </div>
          <div className="dc-stage" aria-hidden="true">
            <StageGrid />
            <div className="dc-pattern-panel">
              {Array.from({ length: 28 }).map((_, index) => <span key={index} />)}
            </div>
            <div className="dc-stage-caption">SOURCE MATERIAL / EMBROIDERY GEOMETRY / REINTERPRETED</div>
          </div>
        </article>

        <article className="dc-story-row">
          <div className="dc-story-copy">
            <div className="dc-index">02 / SHAPE</div>
            <h2>We turn that character into <span className="dc-gradient">product structure.</span></h2>
            <p>
              A product starts as questions, flows and rough structure. We reduce complexity, map the journey and make the interface understandable before visual polish takes over. The cultural influence remains underneath — in proportion, pattern, hierarchy and movement.
            </p>
            <div className="dc-note">PROBLEM → FLOW → WIREFRAME</div>
          </div>
          <div className="dc-stage" aria-hidden="true">
            <StageGrid />
            <div className="dc-wireframe">
              <div className="nav" /><div className="side" /><div className="canvas" />
            </div>
            <div className="dc-stage-caption">PRODUCT MAP / INFORMATION ARCHITECTURE / WIREFRAME</div>
          </div>
        </article>

        <article className="dc-story-row">
          <div className="dc-story-copy">
            <div className="dc-index">03 / DESIGN</div>
            <h2>The system becomes something people can <span className="dc-gradient">see and use.</span></h2>
            <p>
              We design interfaces with clarity first: readable information, strong hierarchy, useful interaction and a distinct visual identity. The goal is not to make software look decorated. The goal is to make it feel considered, local in character and universal in usability.
            </p>
            <div className="dc-note">WIREFRAME → INTERFACE → EXPERIENCE</div>
          </div>
          <div className="dc-stage" aria-hidden="true">
            <StageGrid />
            <div className="dc-ui-card u1"><div className="bar" /><div className="line" /><div className="line short" /><div className="mini"><i /><i /><i /></div></div>
            <div className="dc-ui-card u2"><div className="bar" /><div className="line short" /><div className="line" /><div className="mini"><i /><i /><i /></div></div>
            <div className="dc-stage-caption">UI SYSTEM / PRODUCT LANGUAGE / INTERACTION</div>
          </div>
        </article>

        <article className="dc-story-row">
          <div className="dc-story-copy">
            <div className="dc-index">04 / DEVELOPMENT</div>
            <h2>Then design has to survive <span className="dc-gradient">real engineering.</span></h2>
            <p>
              We carry the same intent into code. Components become reusable systems, data becomes product behavior, and motion becomes interaction instead of decoration. Design and development stay connected so the final product does not lose the thinking that shaped it.
            </p>
            <div className="dc-note">INTERFACE → COMPONENTS → WORKING PRODUCT</div>
          </div>
          <div className="dc-stage" aria-hidden="true">
            <StageGrid />
            <div className="dc-code-window">
              <div className="dc-code-top"><i /><i /><i /></div>
              <div className="dc-code-lines">
                <div>const product = createExperience({'{'}</div>
                <div>&nbsp;&nbsp;origin: "Balochistan",</div>
                <div>&nbsp;&nbsp;principle: "useful",</div>
                <div>&nbsp;&nbsp;craft: "intentional",</div>
                <div>&nbsp;&nbsp;impact: "people"</div>
                <div>{'}'});</div>
              </div>
            </div>
            <span className="dc-code-node n1" /><span className="dc-code-node n2" />
            <div className="dc-stage-caption">ENGINEERING / COMPONENT SYSTEM / PRODUCT LOGIC</div>
          </div>
        </article>

        <article className="dc-story-row">
          <div className="dc-story-copy">
            <div className="dc-index">05 / CAUSE</div>
            <h2>What matters is what the product <span className="dc-gradient">does for people.</span></h2>
            <p>
              Our cause is simple: build technology that makes useful things more accessible. Better school tools. Better business systems. Better everyday utilities. Products that solve practical problems and prove that meaningful digital work can be designed and engineered from Balochistan for anyone, anywhere.
            </p>
            <div className="dc-note">PRODUCT → ACCESS → IMPACT</div>
          </div>
          <div className="dc-stage dc-impact-stage" aria-hidden="true">
            <StageGrid />
            <div className="dc-impact-orbit" />
            <div className="dc-impact-core"><HeartHandshake size={26} /> USEFUL<br />TECHNOLOGY</div>
            <div className="dc-impact-tag t1">EDUCATION</div><div className="dc-impact-tag t2">BUSINESS</div><div className="dc-impact-tag t3">EVERYDAY TOOLS</div><div className="dc-impact-tag t4">ACCESS</div>
          </div>
        </article>
      </section>

      <section className="dc-section dc-manifesto">
        <div className="dc-grid" />
        <div className="dc-manifesto-inner">
          <div className="dc-kicker">06 / THE TECHCRAFT CAUSE</div>
          <h2>Design with roots.<br />Build with rigor.<br /><span>Help people move forward.</span></h2>
          <p>
            We want TechCraft to show that world-class product thinking does not need to come from the usual places. Our roots give the work character. Our process gives it clarity. Engineering gives it permanence. The purpose is what makes it worth building.
          </p>

          <div className="dc-values">
            {values.map(([eyebrow, title, text]) => (
              <div className="dc-value" key={title}>
                <b>{eyebrow}</b>
                <strong>{title}</strong>
                <small>{text}</small>
              </div>
            ))}
          </div>

          <div className="dc-signoff">
            <div><span>FROM BALOCHISTAN / BUILT FOR PEOPLE</span><strong>TechCraft Solutions</strong></div>
            <Link href="/#contact" className="dc-button dc-button-primary">Start a project <Sparkles size={15} /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}
