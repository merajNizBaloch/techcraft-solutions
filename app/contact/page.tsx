"use client";

import Link from "next/link";
import { ArrowUpRight, Check, Mail } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${form.get("name") || "TechCraft"}`);
    const body = encodeURIComponent(
      `Name: ${form.get("name")}\nEmail: ${form.get("email")}\nProject type: ${form.get("type")}\n\n${form.get("message")}`
    );
    window.location.href = `mailto:hello@techcraft.solutions?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <main className="contact-page">
      <header><Link href="/" className="brand"><span className="mark"><i/><i/><i/></span>TECH<span>CRAFT</span></Link><Link href="/">Back to studio</Link></header>
      <section className="intro"><span>06 / START A PROJECT</span><h1>Have an idea?<br/><em>Let&apos;s build it.</em></h1><p>Tell us what you&apos;re imagining, what isn&apos;t working, or what you want to build next.</p></section>
      <section className="contact-grid">
        <form onSubmit={submit}>
          <label>Name<input required name="name" placeholder="Your name" /></label>
          <label>Email<input required type="email" name="email" placeholder="you@company.com" /></label>
          <label>Project type<select name="type" defaultValue="Web / software"><option>Web / software</option><option>UI / UX</option><option>Mobile app</option><option>AI / automation</option><option>Cloud / digital systems</option><option>Other</option></select></label>
          <label>Tell us about it<textarea required name="message" rows={6} placeholder="A short description of your project..." /></label>
          <button type="submit">{sent ? <><Check size={16}/> Draft opened</> : <>Start the conversation <ArrowUpRight size={16}/></>}</button>
        </form>
        <aside><Mail size={19}/><span>Prefer email?</span><a href="mailto:hello@techcraft.solutions">hello@techcraft.solutions</a><small>BALOCHISTAN / PAKISTAN</small></aside>
      </section>
      <style>{`*{box-sizing:border-box}body{margin:0;background:#f4f6f8;color:#111318;font-family:Inter,ui-sans-serif,system-ui,sans-serif}.contact-page{min-height:100vh;padding:24px 5vw;background:radial-gradient(circle at 80% 5%,rgba(37,99,255,.07),transparent 28%),#f4f6f8}header{max-width:1220px;margin:auto;height:64px;padding:8px 16px;display:flex;align-items:center;justify-content:space-between;border:1px solid rgba(255,255,255,.8);border-radius:21px;background:linear-gradient(135deg,rgba(255,255,255,.78),rgba(255,255,255,.38));backdrop-filter:blur(30px) saturate(180%);box-shadow:0 15px 55px rgba(17,24,39,.08)}header a{font-size:11px;color:rgba(17,19,24,.55);text-decoration:none}.brand{display:flex;align-items:center;gap:10px;font-size:13px!important;font-weight:800;color:#111318!important;letter-spacing:-.05em}.brand>span:last-child{color:#2563ff}.mark{width:25px;height:25px;border:1px solid #111318;transform:rotate(45deg);position:relative}.mark i{position:absolute;inset:4px;border:1px solid #2563ff}.mark i:nth-child(2){inset:8px}.mark i:nth-child(3){inset:11px;border:0;background:#c83a32}.intro{max-width:1220px;margin:125px auto 70px}.intro>span{font:9px ui-monospace,monospace;letter-spacing:.14em;color:rgba(17,19,24,.42)}h1{font-size:clamp(58px,8.5vw,125px);line-height:.86;letter-spacing:-.08em;font-weight:500;margin:18px 0 28px}h1 em{font-style:normal;color:#2563ff}.intro p{max-width:560px;color:rgba(17,19,24,.55);line-height:1.8}.contact-grid{max-width:1220px;margin:auto;display:grid;grid-template-columns:1.4fr .6fr;gap:70px}form{padding:35px;border:1px solid rgba(17,19,24,.09);background:rgba(255,255,255,.45);backdrop-filter:blur(18px)}label{display:block;font:9px ui-monospace,monospace;letter-spacing:.1em;color:rgba(17,19,24,.45);margin-bottom:22px}input,select,textarea{display:block;width:100%;margin-top:9px;padding:14px;border:1px solid rgba(17,19,24,.1);background:rgba(255,255,255,.7);color:#111318;font:14px inherit;outline:none;border-radius:10px}input:focus,select:focus,textarea:focus{border-color:#2563ff;box-shadow:0 0 0 3px rgba(37,99,255,.08)}textarea{resize:vertical}form button{display:inline-flex;align-items:center;gap:9px;border:0;background:#111318;color:white;padding:14px 18px;font-size:11px;cursor:pointer}form button:hover{background:#2563ff}aside{align-self:start;padding-top:35px;display:flex;flex-direction:column;gap:12px}aside span{font-size:11px;color:rgba(17,19,24,.45)}aside a{font-size:15px;color:#2563ff;text-decoration:none}aside small{margin-top:45px;font:8px ui-monospace,monospace;letter-spacing:.12em;color:rgba(17,19,24,.4)}@media(max-width:760px){.contact-page{padding:15px}.intro{margin:90px auto 50px}.contact-grid{grid-template-columns:1fr;gap:30px}form{padding:22px}aside{padding:5px 5px 30px}}
`}</style>
    </main>
  );
}
