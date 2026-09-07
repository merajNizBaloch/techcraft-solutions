import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Braces,
  Check,
  FileImage,
  FileOutput,
  FileText,
  ImageIcon,
  Images,
  Link2,
  ScanLine,
  Shrink,
  Sparkles,
  Wand2,
  Zap,
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
  href: string;
};

const convertXUrl = "https://convertx.techcraftsolution.com";

const freeTools: FreeTool[] = [
  { number: "01", name: "PNG to JPG", eyebrow: "IMAGE CONVERTER", description: "Convert PNG images to JPG quickly with ConvertX.", icon: FileImage, tag: "IMAGE", href: `${convertXUrl}/?tool=png-jpg` },
  { number: "02", name: "JPG to PNG", eyebrow: "IMAGE CONVERTER", description: "Convert JPG images to clean PNG files with ConvertX.", icon: Images, tag: "IMAGE", href: `${convertXUrl}/?tool=jpg-png` },
  { number: "03", name: "WEBP to JPG", eyebrow: "IMAGE CONVERTER", description: "Convert WEBP images to widely compatible JPG files.", icon: ImageIcon, tag: "IMAGE", href: `${convertXUrl}/?tool=webp-jpg` },
  { number: "04", name: "JPG to WEBP", eyebrow: "MODERN IMAGE FORMAT", description: "Convert JPG images to efficient WEBP files for the web.", icon: ImageIcon, tag: "WEB", href: `${convertXUrl}/?tool=jpg-webp` },
  { number: "05", name: "Image Compressor", eyebrow: "IMAGE OPTIMIZER", description: "Reduce image file size for websites, sharing and uploads.", icon: Shrink, tag: "OPTIMIZE", href: `${convertXUrl}/?tool=compress` },
  { number: "06", name: "Image Resizer", eyebrow: "IMAGE UTILITY", description: "Resize images to exact dimensions with ConvertX.", icon: ScanLine, tag: "IMAGE", href: `${convertXUrl}/?tool=resize` },
  { number: "07", name: "Images to PDF", eyebrow: "DOCUMENT CONVERTER", description: "Turn images into a PDF document in a few clicks.", icon: FileOutput, tag: "PDF", href: `${convertXUrl}/?tool=image-pdf` },
  { number: "08", name: "PDF to JPG / PNG", eyebrow: "DOCUMENT CONVERTER", description: "Render PDF pages as JPG or PNG images.", icon: FileText, tag: "PDF", href: `${convertXUrl}/?tool=pdf-image` },
  { number: "09", name: "Merge PDF", eyebrow: "DOCUMENT UTILITY", description: "Combine multiple PDFs into one organized document.", icon: FileText, tag: "PDF", href: `${convertXUrl}/?tool=merge` },
  { number: "10", name: "Split PDF", eyebrow: "DOCUMENT UTILITY", description: "Split a PDF into smaller documents or selected pages.", icon: FileText, tag: "PDF", href: `${convertXUrl}/?tool=split` },
];

const upcomingTools = [
  ["11", "HEIC to JPG", "Convert phone photos into widely compatible JPG images.", ImageIcon],
  ["12", "Image Background Remover", "Quickly isolate a subject from a simple image background.", Wand2],
  ["13", "URL Shortener", "Turn long links into short, shareable URLs.", Link2],
  ["14", "Text to QR", "Generate QR codes directly from text, notes or messages.", Braces],
  ["15", "Favicon Generator", "Create browser-ready favicon assets from a single image.", Sparkles],
  ["16", "More free utilities", "A growing list of small tools for files, images and everyday work.", Zap],
] as const;

export default function FreebiesPage() {
  return (
    <main className="freebies-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="freebies-hero relative overflow-hidden px-[7vw] pb-20 pt-36">
        <div className="freebies-grid" />
        <div className="freebies-glow freebies-glow-a" />
        <div className="freebies-glow freebies-glow-b" />
        <div className="freebies-lab-corner freebies-lab-corner-tl"><span>TC / LAB-01</span><span>FREE TOOLS DIVISION</span></div>
        <div className="freebies-lab-corner freebies-lab-corner-tr"><span className="freebies-live-dot" /> LIVE / OPEN ACCESS</div>

        <div className="relative z-10 grid items-center gap-14 lg:grid-cols-[.88fr_1.12fr]">
          <div className="freebies-hero-copy">
            <div className="freebies-hero-kicker"><span className="freebies-kicker-mark">✦</span><span>THE TECHCRAFT FREE TOOL LAB</span><i /></div>
            <p className="mt-7 font-mono text-[8px] tracking-[.2em] text-black/35">TOOLS FOR THE BORING STUFF</p>
            <h1 className="freebies-title mt-6 max-w-[900px] text-[clamp(68px,10.5vw,150px)] font-medium leading-[.76] tracking-[-.105em]">Useful work.<br /><span className="text-[#2563ff]">Zero cost.</span></h1>
            <p className="mt-9 max-w-[620px] text-[15px] leading-[1.9] text-black/50">We build the little utilities that should already exist. Convert, compress, resize, generate and clean up your files directly in the browser—without accounts, clutter or a paywall.</p>
            <div className="freebies-hero-actions"><a href="#free-tool-list" className="techcraft-button techcraft-button-primary">Open the free lab <ArrowRight size={15} /></a><div className="freebies-free-badge"><span>10</span><div><strong>TOOLS LIVE</strong><small>AND GROWING</small></div></div></div>
            <div className="freebies-principles"><span><Check size={11} /> NO ACCOUNT</span><span><Check size={11} /> NO PAYWALL</span><span><Check size={11} /> BROWSER FIRST</span></div>
          </div>

          <div className="freebies-hero-machine" aria-hidden="true">
            <div className="freebies-machine-label label-top"><span>FREE TOOL LAB</span><b>01 / 10</b></div>
            <div className="freebies-machine-label label-bottom"><span>DROP</span><span>PROCESS</span><span>GET RESULT</span></div>
            <div className="freebies-machine-grid" /><div className="freebies-machine-scan" />
            <div className="freebies-machine-orbit machine-orbit-a" /><div className="freebies-machine-orbit machine-orbit-b" />
            <div className="freebies-machine-beam beam-one" /><div className="freebies-machine-beam beam-two" />
            <div className="freebies-tool-chip chip-image"><FileImage size={15} /><span>IMAGE</span><b>CONVERT</b></div>
            <div className="freebies-tool-chip chip-pdf"><FileText size={15} /><span>PDF</span><b>CONVERT</b></div>
            <div className="freebies-tool-chip chip-qr"><ScanLine size={15} /><span>RESIZE</span><b>IMAGE</b></div>
            <div className="freebies-tool-chip chip-json"><Shrink size={15} /><span>COMPRESS</span><b>IMAGE</b></div>
            <div className="freebies-machine-node machine-node-image"><FileImage size={17} /><strong>PNG → JPG</strong><small>IMAGE / CONVERT</small></div>
            <div className="freebies-machine-node machine-node-pdf"><FileText size={17} /><strong>PDF</strong><small>DOCUMENT / INPUT</small></div>
            <div className="freebies-machine-core"><div className="machine-core-halo" /><div className="machine-core-inner"><Zap size={20} /><strong>FREE</strong><small>TOOL ENGINE</small></div></div>
            <div className="freebies-machine-node machine-node-output"><Sparkles size={17} /><strong>READY</strong><small>RESULT / OUTPUT</small></div>
            <div className="freebies-machine-status"><i /> LOCAL BROWSER WORKFLOW / NO ACCOUNT REQUIRED</div>
            <span className="machine-particle particle-one" /><span className="machine-particle particle-two" /><span className="machine-particle particle-three" /><span className="machine-particle particle-four" />
          </div>
        </div>
        <div className="freebies-scroll-cue"><span>SCROLL TO THE TOOLKIT</span><i /></div>
      </section>

      <section className="freebie-factory-section relative overflow-hidden border-y border-black/10 bg-[#0b1120] px-[7vw] py-24 text-white">
        <div className="freebie-factory-grid" /><div className="relative z-10 grid items-center gap-14 lg:grid-cols-[.72fr_1.28fr]">
          <div><p className="font-mono text-[8px] tracking-[.18em] text-[#70a7ff]">02 / LIVE TOOL ENGINE</p><h2 className="mt-6 text-[clamp(48px,6vw,88px)] font-medium leading-[.84] tracking-[-.08em]">Watch a file<br /><span className="text-[#70a7ff]">transform.</span></h2><p className="mt-8 max-w-[470px] text-sm leading-7 text-white/45">The idea behind Freebies is simple: drop in a file, let the browser do the work, and leave with the result.</p></div>
          <div className="freebie-factory" aria-label="Animated file conversion demonstration"><div className="freebie-factory-header"><span>TC / FREE TOOL ENGINE</span><span className="freebie-engine-live"><i /> PROCESSING</span></div><div className="freebie-factory-stage"><div className="factory-node factory-input"><span className="factory-file-icon"><FileImage size={27} /></span><b>IMAGE.PNG</b><small>2.8 MB</small></div><div className="factory-track"><span className="factory-beam" /><span className="factory-particle particle-a" /><span className="factory-particle particle-b" /><span className="factory-particle particle-c" /></div><div className="factory-core"><div className="factory-core-ring" /><strong>CONVERT</strong><small>01 / 03</small></div><div className="factory-track track-right"><span className="factory-beam" /><span className="factory-particle particle-d" /><span className="factory-particle particle-e" /></div><div className="factory-node factory-output"><span className="factory-file-icon"><FileOutput size={27} /></span><b>IMAGE.JPG</b><small>1.1 MB</small><em>READY</em></div></div><div className="freebie-factory-footer"><span>INPUT DETECTED</span><span>OPTIMIZING → CONVERTING → READY</span></div></div>
        </div>
      </section>

      <section id="free-tool-list" className="freebies-tools-section border-t border-black/10 bg-white/55 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"><div><p className="font-mono text-[8px] tracking-[.16em] text-black/35">03 / FREE TOOLKIT</p><h2 className="mt-6 text-[clamp(50px,6vw,90px)] font-medium leading-[.86] tracking-[-.08em]">Pick a tool.<br /><span className="text-[#2563ff]">Get it done.</span></h2></div><div className="freebies-count-box"><strong>10</strong><span>FREE TOOLS</span><small>NO ACCOUNT REQUIRED</small></div></div>
        <div className="freebies-tool-grid">{freeTools.map((tool) => { const Icon = tool.icon; return <a key={tool.name} href={tool.href} aria-label={`Open ${tool.name} in ConvertX`} className="freebies-tool-card block text-inherit no-underline"><div className="freebies-tool-card-top"><span>{tool.number}</span><span className="freebie-status"><Check size={11} /> FREE</span></div><div className="freebies-tool-icon"><Icon size={21} /></div><p className="mt-7 font-mono text-[7px] tracking-[.16em] text-[#2563ff]">{tool.eyebrow}</p><h3>{tool.name}</h3><p className="freebies-tool-description">{tool.description}</p><div className="freebies-tool-footer"><span>{tool.tag}</span><span className="freebies-tool-action">OPEN IN CONVERTX <ArrowRight size={13} /></span></div></a>; })}</div>
      </section>

      <section className="freebies-upcoming-section border-t border-black/10 px-[7vw] py-24"><div className="grid gap-14 lg:grid-cols-[.72fr_1.28fr]"><div><p className="font-mono text-[8px] tracking-[.16em] text-[#c83a32]">04 / UPCOMING</p><h2 className="mt-6 text-[clamp(52px,6vw,92px)] font-medium leading-[.84] tracking-[-.08em]">More useful<br /><span className="text-[#c83a32]">things coming.</span></h2><p className="mt-8 max-w-[480px] text-sm leading-7 text-black/45">We are building the next batch around the repetitive jobs that waste time: files, images, links, web assets and everyday developer tasks.</p></div><div className="freebies-upcoming-list">{upcomingTools.map(([number, name, description, Icon], index) => <article key={name} className="freebies-upcoming-card" style={{ animationDelay: `${index * 90}ms` }}><span className="freebies-upcoming-number">{number}</span><span className="freebies-upcoming-icon"><Icon size={18} /></span><div><div className="flex items-center gap-3"><h3>{name}</h3><span className="freebies-soon">COMING SOON</span></div><p>{description}</p></div></article>)}</div></div></section>
      <section className="freebies-cta border-t border-black/10 bg-[#111318] px-[7vw] py-24 text-white"><div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end"><div><p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">05 / KEEP IT FREE</p><h2 className="mt-6 max-w-[850px] text-[clamp(48px,6vw,86px)] font-medium leading-[.87] tracking-[-.08em]">Small tools can solve <span className="text-[#70a7ff]">big annoyances.</span></h2></div><a href="#free-tool-list" className="techcraft-button techcraft-button-primary">Explore the toolkit <ArrowRight size={16} /></a></div></section>
    </main>
  );
}
