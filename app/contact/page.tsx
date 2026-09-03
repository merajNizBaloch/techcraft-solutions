"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  Check,
  CircleDashed,
  Mail,
  MessageCircle,
  MoveRight,
  Send,
  Sparkles,
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
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const project = String(form.get("project") ?? "").trim();
    const budget = String(form.get("budget") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const text = [
      "Hello TechCraft Solutions,",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Project: ${project}`,
      `Budget: ${budget || "Not specified"}`,
      "",
      "Project brief:",
      message,
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

        <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[.95fr_1.05fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / CONTACT</p>
            <h1 className="contact-title mt-7 max-w-[900px] text-[clamp(68px,10.5vw,148px)] font-medium leading-[.8] tracking-[-.1em]">
              Let&apos;s build<br />
              <span className="text-[#2563ff]">something useful.</span>
            </h1>
            <p className="mt-10 max-w-[620px] text-[15px] leading-[1.9] text-black/50">
              Tell us what you are trying to solve. We&apos;ll turn the first conversation into a clear direction, practical scope and a path to build it.
            </p>
          </div>

          <div className="contact-connection" aria-hidden="true">
            <div className="contact-connection-label label-client">CLIENT</div>
            <div className="contact-connection-label label-techcraft">TECHCRAFT</div>
            <div className="contact-node node-client">
              <MessageCircle size={18} />
              <span>YOUR IDEA</span>
              <small>REQUEST / BRIEF</small>
            </div>
            <div className="contact-node node-techcraft">
              <Sparkles size={18} />
              <span>TECHCRAFT</span>
              <small>DESIGN / BUILD</small>
            </div>
            <div className="contact-connection-line line-one" />
            <div className="contact-connection-line line-two" />
            <div className="contact-connection-line line-three" />
            <div className="contact-connection-core">
              <CircleDashed size={32} />
              <strong>CONNECTED</strong>
              <small>IDEA → CONVERSATION → PRODUCT</small>
            </div>
            <span className="contact-packet packet-one" />
            <span className="contact-packet packet-two" />
            <span className="contact-packet packet-three" />
          </div>
        </div>
      </section>

      <section className="contact-workspace border-t border-black/10 bg-white/60 px-[7vw] py-24">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / START A CONVERSATION</p>
            <h2 className="mt-6 text-[clamp(50px,6vw,88px)] font-medium leading-[.86] tracking-[-.08em]">
              Give us the<br /><span className="text-[#2563ff]">starting point.</span>
            </h2>
            <p className="mt-8 max-w-[460px] text-sm leading-7 text-black/45">
              No formal proposal is needed. A rough idea, a business problem or an existing product is enough to start.
            </p>

            <div className="contact-ways mt-12 border-t border-black/10">
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="contact-way">
                <span className="contact-way-icon contact-way-whatsapp"><MessageCircle size={18} /></span>
                <span>
                  <strong>WhatsApp directly</strong>
                  <small>Fastest way to reach us</small>
                </span>
                <MoveRight size={18} />
              </a>
              <a href="mailto:hello@techcraftsolution.com" className="contact-way">
                <span className="contact-way-icon"><Mail size={18} /></span>
                <span>
                  <strong>Email the team</strong>
                  <small>For detailed project discussions</small>
                </span>
                <MoveRight size={18} />
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-head">
              <div>
                <span>PROJECT INTAKE / 001</span>
                <strong>Tell us about the work.</strong>
              </div>
              <span className="contact-form-live"><i /> OPEN</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="contact-field">
                <span>Your name</span>
                <input name="name" required placeholder="Your name" />
              </label>
              <label className="contact-field">
                <span>Email</span>
                <input name="email" required type="email" placeholder="you@company.com" />
              </label>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <label className="contact-field">
                <span>What do you need?</span>
                <select name="project" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  <option>Website / Web App</option>
                  <option>Mobile App</option>
                  <option>UI / UX Design</option>
                  <option>AI / Automation</option>
                  <option>Cloud / Digital Systems</option>
                  <option>Brand Experience</option>
                  <option>Other</option>
                </select>
              </label>
              <label className="contact-field">
                <span>Estimated budget</span>
                <select name="budget" defaultValue="">
                  <option value="" disabled>Select range</option>
                  <option>Under PKR 100k</option>
                  <option>PKR 100k — 300k</option>
                  <option>PKR 300k — 750k</option>
                  <option>PKR 750k — 1.5M</option>
                  <option>PKR 1.5M+</option>
                  <option>Not sure yet</option>
                </select>
              </label>
            </div>

            <label className="contact-field">
              <span>Project brief</span>
              <textarea name="message" required rows={7} placeholder="What are you trying to build, improve or solve?" />
            </label>

            <div className="contact-form-submit">
              <p><Check size={13} /> Your details stay in the conversation flow.</p>
              <button type="submit" className="techcraft-button techcraft-button-primary">
                {sent ? "Opening WhatsApp" : "Send via WhatsApp"}
                {sent ? <Check size={16} /> : <Send size={15} />}
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="contact-footer-cta bg-[#111318] px-[7vw] py-24 text-white">
        <div className="contact-footer-network" aria-hidden="true" />
        <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">03 / FROM IDEA TO SYSTEM</p>
            <h2 className="mt-6 max-w-[900px] text-[clamp(50px,6vw,90px)] font-medium leading-[.86] tracking-[-.08em]">
              A good project starts with a <span className="text-[#70a7ff]">good conversation.</span>
            </h2>
          </div>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="techcraft-button techcraft-button-primary">
            Open WhatsApp <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </main>
  );
}
