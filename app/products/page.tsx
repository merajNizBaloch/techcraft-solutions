import Link from "next/link";
import { ArrowRight, ArrowUpRight, BrainCircuit, GraduationCap, Smartphone } from "lucide-react";

export const metadata = {
  title: "Products — TechCraft Solutions",
  description:
    "Products built by TechCraft Solutions, including Academiq and Estara.",
};

const products = [
  {
    number: "01",
    name: "Academiq",
    eyebrow: "EDTECH / SCHOOL OS",
    description:
      "A practical school operating system bringing students, teachers, attendance, fees, exams and reporting into one connected digital workspace.",
    icon: GraduationCap,
    accent: "blue",
    stats: ["School management", "Attendance", "Fees & exams", "Reports"],
  },
  {
    number: "02",
    name: "Estara",
    eyebrow: "DIGITAL PRODUCT",
    description:
      "A product platform designed around clear workflows, modern interfaces and the flexibility to grow into a complete digital system.",
    icon: Smartphone,
    accent: "gold",
    stats: ["Product platform", "Web experience", "Automation", "Scalable system"],
  },
];

function ProductVisual({ product }: { product: (typeof products)[number] }) {
  const Icon = product.icon;

  return (
    <div className={`product-visual product-visual-${product.accent}`}>
      <div className="product-visual-grid" />
      <div className="product-visual-orbit product-visual-orbit-a" />
      <div className="product-visual-orbit product-visual-orbit-b" />
      <div className="product-visual-core">
        <Icon size={30} strokeWidth={1.25} />
        <span>TC / {product.number}</span>
      </div>
      <div className="product-visual-label product-visual-label-a">SYSTEM / ACTIVE</div>
      <div className="product-visual-label product-visual-label-b">BUILT BY TECHCRAFT</div>
      <div className="product-visual-node node-a" />
      <div className="product-visual-node node-b" />
      <div className="product-visual-node node-c" />
    </div>
  );
}

export default function ProductsPage() {
  return (
    <main className="products-page min-h-screen overflow-hidden bg-[#f4f6f8] text-[#111318]">
      <div className="fixed inset-x-0 top-0 z-40 h-0.5 bg-[#2563ff]" />

      <section className="relative flex min-h-[82vh] items-end overflow-hidden px-[7vw] pb-24 pt-36">
        <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(rgba(37,99,255,.045)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,255,.045)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 w-full max-w-[1050px]">
          <p className="font-mono text-[8px] tracking-[.18em] text-[#2563ff]">01 / PRODUCTS</p>
          <h1 className="mt-7 text-[clamp(64px,11vw,160px)] font-medium leading-[.8] tracking-[-.09em]">
            We build our<br /><span className="text-[#2563ff]">own products.</span>
          </h1>
          <p className="mt-10 max-w-[650px] text-[15px] leading-[1.9] text-black/50">
            TechCraft is not only a studio. We also create products from problems we understand closely — turning real workflows into focused software people can actually use.
          </p>
          <div className="mt-9 flex flex-col gap-2.5 sm:flex-row">
            <a href="#product-list" className="techcraft-button techcraft-button-primary">
              Explore products <ArrowRight size={16} />
            </a>
            <Link href="/services" className="techcraft-button">
              See our capabilities <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section id="product-list" className="border-t border-black/10 bg-white/55 px-[7vw] py-24">
        <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <p className="font-mono text-[8px] tracking-[.16em] text-black/35">02 / PRODUCT PORTFOLIO</p>
            <h2 className="mt-6 text-[clamp(48px,6vw,88px)] font-medium leading-[.88] tracking-[-.08em]">
              Products with a <span className="text-[#2563ff]">purpose.</span>
            </h2>
          </div>
          <p className="max-w-[340px] text-xs leading-7 text-black/40">
            Each product is treated as a living system — strategy, interface, engineering and future iterations stay connected.
          </p>
        </div>

        <div className="grid gap-8">
          {products.map((product) => (
            <article key={product.name} className="group grid overflow-hidden border border-black/10 bg-[#f8fafc] lg:grid-cols-[1.1fr_.9fr]">
              <ProductVisual product={product} />
              <div className="flex flex-col justify-between p-8 sm:p-10 lg:p-12">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] text-[#2563ff]">{product.number}</span>
                    <span className="font-mono text-[8px] tracking-[.14em] text-black/30">{product.eyebrow}</span>
                  </div>
                  <h3 className="mt-14 text-[clamp(44px,6vw,76px)] font-medium leading-[.86] tracking-[-.07em]">{product.name}</h3>
                  <p className="mt-6 max-w-[550px] text-sm leading-7 text-black/45">{product.description}</p>
                </div>

                <div className="mt-12">
                  <div className="grid grid-cols-2 border-y border-black/10">
                    {product.stats.map((stat) => (
                      <div key={stat} className="border-b border-black/10 py-4 text-[10px] text-black/55 last:border-0 even:border-l md:nth-last-1:border-b-0">
                        <span className="mr-2 text-[#2563ff]">+</span>{stat}
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 font-mono text-[8px] tracking-[.12em] text-[#2563ff]">
                    <BrainCircuit size={15} />
                    PRODUCT / IN DEVELOPMENT
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#07182f] px-[7vw] py-28 text-white">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(112,167,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(112,167,255,.08)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="relative z-10 max-w-[950px]">
          <p className="font-mono text-[8px] tracking-[.16em] text-[#70a7ff]">03 / THE PRODUCT MINDSET</p>
          <h2 className="mt-7 text-[clamp(52px,7vw,100px)] font-medium leading-[.85] tracking-[-.08em]">
            We build for the<br /><span className="text-[#70a7ff]">problem first.</span>
          </h2>
          <p className="mt-9 max-w-[620px] text-sm leading-7 text-white/45">
            Our own products let us apply the same design and engineering discipline we offer clients to problems that deserve long-term thinking, iteration and ownership.
          </p>
          <Link href="/#contact" className="techcraft-button mt-9 inline-flex border-white/15 bg-white/10 text-white">
            Talk about a product <ArrowUpRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
