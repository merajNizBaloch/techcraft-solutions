import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Braces,
  Check,
  FileArchive,
  FileImage,
  FileOutput,
  FileText,
  ImageIcon,
  Images,
  Link2,
  QrCode,
  ScanLine,
  Shrink,
  Sparkles,
  Wand2,
} from "lucide-react";

export const metadata = {
  title: "Freebies — TechCraft Solutions",
  description:
    "Free browser tools from TechCraft Solutions for everyday design, image and document tasks.",
};

type FreeTool = {
  number: string;
  name: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  tag: string;
};

const freeTools: FreeTool[] = [
  { number: "01", name: "PNG to JPG", eyebrow: "IMAGE CONVERTER", description: "Convert PNG images to lightweight JPG files in seconds.", icon: FileImage, tag: "IMAGE" },
  { number: "02", name: "JPG to PNG", eyebrow: "IMAGE CONVERTER", description: "Turn JPG images into clean PNG files while preserving detail.", icon: Images, tag: "IMAGE" },
  { number: "03", name: "Image Compressor", eyebrow: "IMAGE OPTIMIZER", description: "Reduce image file size for websites, sharing and uploads.", icon: Shrink, tag: "OPTIMIZE" },
  { number: "04", name: "Image Resizer", eyebrow: "IMAGE UTILITY", description: "Resize images to exact pixel dimensions without extra software.", icon: ScanLine, tag: "IMAGE" },
  { number: "05", name: "Image to WebP", eyebrow: "MODERN IMAGE FORMAT", description: "Convert common images to WebP for faster, modern web delivery.", icon: ImageIcon, tag: "WEB" },
  { number: "06", name: "PDF to JPG", eyebrow: "DOCUMENT CONVERTER", description: "Turn PDF pages into shareable JPG images with a simple workflow.", icon: FileOutput, tag: "PDF" },
  { number: "07", name: "PDF Compressor", eyebrow: "DOCUMENT OPTIMIZER", description: "Make PDF files smaller for email, uploads and everyday sharing.", icon: FileArchive, tag: "PDF" },
  { number: "08", name: "Merge PDF", eyebrow: "DOCUMENT UTILITY", description: "Combine multiple PDF documents into one organized file.", icon: FileText, tag: "PDF" },
  { number: "09", name: "QR Code Generator", eyebrow: "QUICK GENERATOR", description: "Create clean QR codes for links, contact details and everyday sharing.", icon: QrCode, tag: "UTILITY" },
  { number: "10", name: "JSON Formatter", eyebrow: "DEVELOPER TOOL", description: "Format, inspect and clean JSON so structured data is easier to read.", icon: Braces, tag: "DEV" },
];

const upcomingTools = [
  ["11", "PDF Splitter", "Split large PDFs into selected pages or smaller documents.", FileText],
  ["12", "HEIC to JPG", "Convert phone photos into widely compatible JPG images.", ImageIcon],
  ["13", "Image Background Remover", "Quickly isolate a subject from a simple image background.", Wand2],
  ["14", "URL Shortener", "Turn long links into short, shareable URLs.", Link2],
  ["15", "Text to QR", "Generate QR codes directly from text, notes or messages.", QrCode],
  ["16", "Favicon Generator", "Create browser-ready favicon assets from a single image.", Sparkles],
] as const;

export default function FreebiesPage() {
  return (
    <main className="freebies-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="freebies-hero relative overflow-hidden px-[7vw] pb-20 pt-36">
        <div className="freebies-grid" />
        <div className="freebies-glow freebies-glow-a" />
        <div className="freebies-glow freebies-glow-b" />
        <div className="relative z-10 grid items-end gap-14 lg:grid-cols-[.88fr_1.12fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / FREEBIES</p>
            <h1 className="freebies-title mt-7 max-w-[920px] text-[clamp(70px,11vw,156px)] font-medium leading-[.78] tracking-[-.1em]">Useful tools.<br /><span className="text-[#2563ff]">No paywall.</span></h1>
            <p className="mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/50">A growing collection of small tools built by TechCraft for the things people need to get done every day. Free to use, simple by design.</p>
          </div>

          <div className="freebies-hero-panel">
            <div className="freebies-hero-panel-line"><span>FREE TOOLKIT / ACTIVE</span><span>10 AVAILABLE</span></div>
            <div className="freebies-hero-panel-core"><div className="freebies-core-mark"><Sparkles size={18} /></div><strong>TECHCRAFT<br />FREEBIES</strong><small>TOOLS FOR REAL WORK</small></div>
            <div className="freebies-hero-orbit orbit-a" /><div className="freebies-hero-orbit orbit-b" />
            <span className="freebies-hero-pulse pulse-a" /><span className="freebies-hero-pulse pulse-b" />
          </div>
        </div>
      </section>

      <section className="freebie-factory-section relative overflow-hidden border-y border-black/10 bg-[#0b1120] px-[7vw] py-24 text-white">
        <div className="freebie-factory-grid" />
        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="font-mono text-[8px] tracking-[.18em] text-[#70a7ff]">02 / LIVE TOOL ENGINE</p>
            <h2 className="mt-6 text-[clamp(48px,6vw,88px)] font-medium leading-[.84] tracking-[-.08em]">Watch a file<br /><span className="text-[#70a7ff]">transform.</span></h2>
            <p className="mt-8 max-w-[470px] text-sm leading-7 text-white/45">The idea behind Freebies is simple: drop in a file, let the browser do the work, and leave with the result.</p>
          </div>

          <div className="freebie-factory" aria-label="Animated file conversion demonstration">
            <div className="freebie-factory-header"><span>TC / FREE TOOL ENGINE</span><span className="freebie-engine-live"><i /> PROCESSING</span></div>
            <div className="freebie-factory-stage">
              <div className="factory-node factory-input"><span className="factory-file-icon"><FileImage size={27} /></span><b>IMAGE.PNG</b><small>2.8 MB</small></div>
              <div className="factory-track"><span className="factory-beam" /><span className="factory-particle particle-a" /><span className="factory-particle particle-b" /><span className="factory-particle particle-c" /></div>
              <div className="factory-core"><div className="factory-core-ring" /><strong>CONVERT</strong><small>01 / 03</small></div>
              <div className="factory-track track-right"><span className="factory-beam" /><span className="factory-particle particle-d" /><span className="factory-particle particle-e" /></div>
              <div className="factory-node factory-output"><span className="factory-file-icon"><FileOutput size={27} /></span><b>IMAGE.JPG</b><small>1.1 MB</small><em>READY</em></div>
            </div>
            <div className="freebie-factory-footer"><span>INPUT DETECTED</span><span>OPTIMIZING → CONVERTING → READY</span></div>
          </div>
        </div>
      </section>

      <section id="free-tool-list" className="freebies-tools-section border-t border-black/10 bg-white/55 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div><p className="font-mono text-[8px] tracking-[.16em] text-black/35">03 / FREE TOOLKIT</p><h2 className="mt-6 text-[clamp(50px,6vw,90px)] font-medium leading-[.86] tracking-[-.08em]">Pick a tool.<br /><span className="text-[#2563ff]">Get it done.</span></h2></div>
          <div className="freebies-count-box"><strong>10</strong><span>FREE TOOLS</span><small>NO ACCOUNT REQUIRED</small></div>
        </div>
        <div className="freebies-tool-grid">
          {freeTools.map((tool) => { const Icon = tool.icon; return <article key={tool.name} className="freebies-tool-card"><div className="freebies-tool-card-top"><span>{tool.number}</span><span className="freebie-status"><Check size={11} /> FREE</span></div><div className="freebies-tool-icon"><Icon size={21} /></div><p className="mt-7 font-mono text-[7px] tracking-[.16em] text-[#2563ff]">{tool.eyebrow}</p><h3>{tool.name}</h3><p className="freebies-tool-description">{tool.description}</p><div className="freebies-tool-footer"><span>{tool.tag}</span><span className="freebies-tool-action">AVAILABLE <ArrowRight size={13} /></span></div></article>; })}
        </div>
      </section>

      <section className="freebies-upcoming-section border-t border-black/10 px-[7vw] py-24">
        <div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="font-mono text-[8px] tracking-[.16em] text-[#c83a32]">04 / UPCOMING</p><h2 className="mt-6 text-[clamp(52px,6vw,92px)] font-medium leading-[.84] tracking-[-.08em]">More useful<br /><span className="text-[#c83a32]">things coming.</span></h2><p className="mt-8 max-w-[480px] text-sm leading-7 text-black/45">We are building the next batch around the repetitive jobs that waste time: files, images, links, web assets and everyday developer tasks.</p></div>
          <div className="freebies-upcoming-list">{upcomingTools.map(([number, name, description, Icon], index) => <article key={name} className="freebies-upcoming-card" style={{ animationDelay: `${index * 90}ms` }}><span className="freebies-upcoming-number">{number}</span><span className="freebies-upcoming-icon"><Icon size={18} /></span><div><div className="flex items-center gap-3"><h3>{name}</h3><span className="freebies-soon">COMING SOON</span></div><p>{description}</p></div></article>)}</div>
        </div>
      </section>

      <section className="freebies-cta border-t border-black/10 bg-[#111318] px-[7vw] py-24 text-white"><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">05 / KEEP IT FREE</p><h2 className="mt-6 max-w-[850px] text-[clamp(48px,6vw,86px)] font-medium leading-[.87] tracking-[-.08em]">Small tools can solve <span className="text-[#70a7ff]">big annoyances.</span></h2></div><a href="#free-tool-list" className="techcraft-button techcraft-button-primary">Explore the toolkit <ArrowRight size={16} /></a></div></section>
    </main>
  );
}
