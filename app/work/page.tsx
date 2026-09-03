import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "DIGITAL EXPERIENCE",
    title: "Rehaan & Associates",
    description:
      "A distinctive digital experience connecting architecture, engineering and modern interaction.",
    mode: "blue",
    href: "/work/rehaan-associates",
  },
  {
    number: "02",
    category: "PRODUCT DESIGN",
    title: "Field Systems",
    description:
      "Human-centered interfaces for workflows that happen outside the office.",
    mode: "light",
    href: "/work/field-systems",
  },
  {
    number: "03",
    category: "AI / SOFTWARE",
    title: "Intelligent Products",
    description:
      "Software experiences where automation and intelligence become part of the product.",
    mode: "dark",
    href: "/work/intelligent-products",
  },
];

export default function WorkPage() {
  return (
    <main className="work-page">
      <header className="work-header">
        <Link href="/" className="brand">
          <span className="brand-symbol" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span>TECH<span>CRAFT</span></span>
        </Link>
        <Link href="/" className="back-link">Back to studio</Link>
      </header>

      <section className="work-intro">
        <span>05 / SELECTED WORK</span>
        <h1>Selected <em>work.</em></h1>
        <p>Digital products, experiences and systems built with design, engineering and emerging technology working together.</p>
      </section>

      <section className="project-grid" aria-label="Selected work">
        {projects.map((project) => (
          <article className={`project-card ${project.mode}`} key={project.number}>
            <span className="project-number">{project.number}</span>
            <div className="project-art"><span>TC</span></div>
            <div className="project-copy">
              <span>{project.category}</span>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <Link href={project.href}>View project <ArrowUpRight size={15} /></Link>
            </div>
          </article>
        ))}
      </section>

      <footer><span>LOCAL PERSPECTIVE</span><span>GLOBAL STANDARD</span><span>BALOCHISTAN / PAKISTAN</span></footer>

      <style>{`
        *{box-sizing:border-box} body{margin:0;background:#f4f6f8;color:#111318;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif}.work-page{min-height:100vh;padding:24px 5vw;background:radial-gradient(circle at 80% 5%,rgba(37,99,255,.07),transparent 28%),#f4f6f8}.work-header{max-width:1220px;margin:auto;height:64px;display:flex;align-items:center;justify-content:space-between;padding:8px 16px;border:1px solid rgba(255,255,255,.8);border-radius:21px;background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,255,255,.38));backdrop-filter:blur(30px) saturate(180%);box-shadow:0 15px 55px rgba(17,24,39,.08)}.brand{display:flex;align-items:center;gap:10px;color:#111318;text-decoration:none;font-size:13px;font-weight:800;letter-spacing:-.05em}.brand>span:last-child span{color:#2563ff}.brand-symbol{position:relative;width:25px;height:25px;border:1px solid #111318;transform:rotate(45deg);display:block}.brand-symbol i{position:absolute;inset:4px;border:1px solid #2563ff}.brand-symbol i:nth-child(2){inset:8px}.brand-symbol i:nth-child(3){inset:11px;border:0;background:#c83a32}.back-link{font-size:11px;color:rgba(17,19,24,.55);text-decoration:none}.back-link:hover{color:#2563ff}.work-intro{max-width:1220px;margin:130px auto 75px}.work-intro>span{font:9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.14em;color:rgba(17,19,24,.42)}h1{font-size:clamp(60px,9vw,130px);line-height:.85;letter-spacing:-.08em;font-weight:500;margin:18px 0 30px}h1 em{font-style:normal;color:#2563ff}.work-intro p{max-width:600px;color:rgba(17,19,24,.55);font-size:15px;line-height:1.8}.project-grid{max-width:1220px;margin:auto;display:grid;gap:28px}.project-card{position:relative;display:grid;grid-template-columns:42% 58%;min-height:480px;overflow:hidden;border:1px solid rgba(17,19,24,.08)}.project-card.blue{background:#2563ff;color:#fff}.project-card.light{background:#fff}.project-card.dark{background:#111318;color:#fff}.project-number{position:absolute;top:24px;left:26px;font:9px ui-monospace,SFMono-Regular,monospace;opacity:.55}.project-art{margin:55px 25px 25px;display:grid;place-items:center;min-height:350px;border:1px solid currentColor;opacity:.92}.project-art span{font-size:80px;font-weight:700;letter-spacing:-.08em;transform:rotate(-8deg)}.project-copy{align-self:end;padding:45px 55px 55px}.project-copy>span{font:9px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em;opacity:.55}.project-copy h2{font-size:clamp(38px,5vw,72px);line-height:.9;letter-spacing:-.06em;font-weight:500;margin:18px 0}.project-copy p{max-width:470px;line-height:1.7;opacity:.62}.project-copy a{display:inline-flex;align-items:center;gap:8px;margin-top:22px;color:inherit;text-decoration:none;font-size:11px;border-bottom:1px solid currentColor;padding-bottom:6px}.project-copy a:hover{color:#d7a52a}.project-card.light .project-art{background:linear-gradient(135deg,#f4f6f8,#fff)}footer{max-width:1220px;margin:90px auto 20px;padding-top:22px;border-top:1px solid rgba(17,19,24,.1);display:flex;justify-content:space-between;font:8px ui-monospace,SFMono-Regular,monospace;letter-spacing:.12em;color:rgba(17,19,24,.4)}@media(max-width:760px){.work-page{padding:15px}.work-intro{margin:90px auto 55px}.project-card{grid-template-columns:1fr}.project-art{min-height:260px;margin:50px 18px 10px}.project-copy{padding:28px}.project-copy h2{font-size:44px}footer{flex-direction:column;gap:10px}.work-header{height:58px}}
      `}</style>
    </main>
  );
}
