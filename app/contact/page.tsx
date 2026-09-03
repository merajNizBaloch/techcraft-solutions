"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  Mail,
  MessageCircle,
  MoveRight,
  Send,
} from "lucide-react";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "";
const whatsappHref = whatsappNumber
  ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}`
  : "https://wa.me/";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const text = [
      "Hello TechCraft Solutions,",
      "",
      `Name: ${String(form.get("name") ?? "").trim()}`,
      `Email: ${String(form.get("email") ?? "").trim()}`,
      `Project: ${String(form.get("project") ?? "").trim()}`,
      `Budget: ${String(form.get("budget") ?? "").trim() || "Not specified"}`,
      "",
      "Project brief:",
      String(form.get("message") ?? "").trim(),
    ].join("\n");
    const target = whatsappNumber
      ? `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(text)}`
      : `https://wa.me/?text=${encodeURIComponent(text)}`;
    setSent(true);
    window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="contact-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="contact-hero relative px-[7vw] pb-20 pt-36">
        <div className="contact-grid" />
        <div className="contact-glow contact-glow-a" />
        <div className="contact-glow contact-glow-b" />
        <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / CONTACT</p>
            <h1 className="contact-title mt-7 max-w-[900px] text-[clamp(68px,10.5vw,148px)] font-medium leading-[.8] tracking-[-.1em]">Let&apos;s build<br /><span className="text-[#2563ff]">something useful.</span></h1>
            <p className="mt-10 max-w-[620px] text-[15px] leading-[1.9] text-black/50">Tell us what you are trying to solve. We&apos;ll turn the first conversation into a clear direction, practical scope and a path to build it.</p>
          </div>

          <div className="contact-satellite-network">
            <div className="contact-network-grid" />
            <div className="contact-network-orbit orbit-one" />
            <div className="contact-network-orbit orbit-two" />
            <div className="contact-network-orbit orbit-three" />

            <div className="contact-network-node contact-network-client">
              <MessageCircle size={20} />
              <span>CLIENT</span>
              <small>IDEA / REQUEST</small>
            </div>

            <div className="contact-satellite-core">
              <div className="contact-satellite-aura" />
              <div className="contact-satellite-body">
                <span className="satellite-dish" />
                <span className="satellite-body-core" />
                <span className="satellite-arm satellite-arm-left" />
                <span className="satellite-arm satellite-arm-right" />
                <span className="satellite-panel satellite-panel-left" />
                <span className="satellite-panel satellite-panel-right" />
                <span className="satellite-antenna" />
              </div>
              <div className="contact-satellite-ring" />
              <strong>LINK ACTIVE</strong>
              <small>CLIENT ↔ TECHCRAFT</small>
            </div>

            <div className="contact-network-node contact-network-techcraft">
              <div className="contact-techcraft-mark">TC</div>
              <span>TECHCRAFT</span>
              <small>DESIGN / BUILD</small>
            </div>

            <div className="contact-satellite-path path-client" />
            <div className="contact-satellite-path path-techcraft" />
            <div className="contact-satellite-path path-top" />
            <span className="contact-satellite-packet packet-a" />
            <span className="contact-satellite-packet packet-b" />
            <span className="contact-satellite-packet packet-c" />
            <div className="contact-satellite-status status-top">COMMUNICATION / OPEN</div>
            <div className="contact-satellite-status status-bottom">SIGNAL → REQUEST → RESPONSE</div>
          </div>
        </div>
      </section>

      <section className="contact-workspace border-t border-black/10 bg-white/60 px-[7vw] py-24">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / START A CONVERSATION</p>
            <h2 className="mt-6 text-[clamp(50px,6vw,88px)] font-medium leading-[.86] tracking-[-.08em]">Give us the<br /><span className="text-[#2563ff]">starting point.</span></h2>
            <p className="mt-8 max-w-[460px] text-sm leading-7 text-black/45">No formal proposal is needed. A rough idea, a business problem or an existing product is enough to start.</p>
            <div className="contact-ways mt-12 border-t border-black/10">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-way"><span className="contact-way-icon contact-way-whatsapp"><MessageCircle size={18} /></span><span><strong>WhatsApp directly</strong><small>Fastest way to reach us</small></span><MoveRight size={18} /></a>
              <a href="mailto:hello@techcraftsolution.com" className="contact-way"><span className="contact-way-icon"><Mail size={18} /></span><span><strong>Email the team</strong><small>For detailed project discussions</small></span><MoveRight size={18} /></a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-head"><div><span>PROJECT INTAKE / 001</span><strong>Tell us about the work.</strong></div><span className="contact-form-live"><i /> OPEN</span></div>
            <div className="grid gap-6 sm:grid-cols-2"><label className="contact-field"><span>Your name</span><input name="name" required placeholder="Your name" /></label><label className="contact-field"><span>Email</span><input name="email" required type="email" placeholder="you@company.com" /></label></div>
            <div className="grid gap-6 sm:grid-cols-2"><label className="contact-field"><span>What do you need?</span><select name="project" defaultValue=""><option value="" disabled>Select a service</option><option>Website / Web App</option><option>Mobile App</option><option>UI / UX Design</option><option>AI / Automation</option><option>Cloud / Digital Systems</option><option>Brand Experience</option><option>Other</option></select></label><label className="contact-field"><span>Estimated budget</span><select name="budget" defaultValue=""><option value="" disabled>Select range</option><option>Under PKR 100k</option><option>PKR 100k — 300k</option><option>PKR 300k — 750k</option><option>PKR 750k — 1.5M</option><option>PKR 1.5M+</option><option>Not sure yet</option></select></label></div>
            <label className="contact-field"><span>Project brief</span><textarea name="message" required rows={7} placeholder="What are you trying to build, improve or solve?" /></label>
            <div className="contact-form-submit"><p><Check size={13} /> Your details stay in the conversation flow.</p><button type="submit" className="techcraft-button techcraft-button-primary">{sent ? "Opening WhatsApp" : "Send via WhatsApp"}{sent ? <Check size={16} /> : <Send size={15} />}</button></div>
          </form>
        </div>
      </section>

      <section className="contact-footer-cta bg-[#111318] px-[7vw] py-24 text-white"><div className="contact-footer-network" aria-hidden="true" /><div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">03 / FROM IDEA TO SYSTEM</p><h2 className="mt-6 max-w-[900px] text-[clamp(50px,6vw,90px)] font-medium leading-[.86] tracking-[-.08em]">A good project starts with a <span className="text-[#70a7ff]">good conversation.</span></h2></div><a href={whatsappHref} target="_blank" rel="noreferrer" className="techcraft-button techcraft-button-primary">Open WhatsApp <ArrowRight size={16} /></a></div></section>
    </main>
  );
}
