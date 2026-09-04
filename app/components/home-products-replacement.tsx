"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Building2, CheckCircle2, LayoutDashboard, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function AcademiqPreview() {
  return (
    <div className="home-product-preview home-product-preview-academiq">
      <div className="home-product-window">
        <div className="home-product-windowbar">
          <div className="home-product-dots"><i /><i /><i /></div>
          <span>ACADEMIQ / SCHOOL OS</span>
          <b>LIVE</b>
        </div>
        <div className="home-product-dashboard">
          <aside>
            <div className="home-product-mini-logo">A</div>
            <span className="active"><LayoutDashboard size={12} /></span>
            <span><BookOpen size={12} /></span>
            <span><CheckCircle2 size={12} /></span>
          </aside>
          <div className="home-product-main">
            <div className="home-product-topline">
              <div><small>OVERVIEW</small><strong>Good morning, Admin</strong></div>
              <span>2026 / 27</span>
            </div>
            <div className="home-product-metrics">
              <div><small>STUDENTS</small><strong>1,284</strong><em>+8.4%</em></div>
              <div><small>ATTENDANCE</small><strong>94.2%</strong><em>+2.1%</em></div>
              <div><small>FEES</small><strong>82%</strong><em>TRACKED</em></div>
            </div>
            <div className="home-product-chart">
              <div className="home-product-chart-head"><span>Attendance activity</span><b>LAST 30 DAYS</b></div>
              <div className="home-product-chart-lines"><i /><i /><i /><i /><i /><i /><i /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-product-float-tag">STUDENTS / TEACHERS / FEES / EXAMS</div>
    </div>
  );
}

function EstaraPreview() {
  return (
    <div className="home-product-preview home-product-preview-estara">
      <div className="home-estara-orbit orbit-a" />
      <div className="home-estara-orbit orbit-b" />
      <div className="home-estara-core">
        <Sparkles size={20} />
        <span>ESTARA</span>
        <small>CONNECTED PLATFORM</small>
      </div>
      <div className="home-estara-node node-a"><span>01</span><b>DISCOVER</b></div>
      <div className="home-estara-node node-b"><span>02</span><b>CONNECT</b></div>
      <div className="home-estara-node node-c"><span>03</span><b>ACT</b></div>
      <div className="home-estara-node node-d"><span>04</span><b>EVOLVE</b></div>
      <div className="home-estara-line line-a" />
      <div className="home-estara-line line-b" />
      <div className="home-estara-line line-c" />
      <div className="home-estara-caption">PRODUCT ARCHITECTURE / EXPERIENCE / SYSTEM</div>
    </div>
  );
}

export default function HomeProductsReplacement() {
  const [host, setHost] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.getElementById("work");
    if (!element) return;
    element.classList.add("products-section-host");
    setHost(element);

    return () => element.classList.remove("products-section-host");
  }, []);

  if (!host) return null;

  return createPortal(
    <div className="home-products-content">
      <div className="home-products-heading">
        <div>
          <span className="section-kicker">05 / PRODUCTS</span>
          <h2>We build <span>products</span> too.</h2>
          <p>Our own digital products are where strategy, design and engineering come together to solve problems we understand deeply.</p>
        </div>
        <div className="home-products-index">TC / PRODUCTS / 2026</div>
      </div>

      <div className="home-products-grid">
        <article className="home-product-card home-product-card-academiq">
          <div className="home-product-card-meta">
            <span>01 / OWN PRODUCT</span>
            <span>EDUCATION</span>
          </div>
          <AcademiqPreview />
          <div className="home-product-card-copy">
            <div className="home-product-card-icon"><Building2 size={18} /></div>
            <h3>Academiq</h3>
            <p>A school operating system bringing students, teachers, attendance, fees, exams and reporting into one connected digital workspace.</p>
            <div className="home-product-card-tags"><span>School OS</span><span>Web platform</span><span>Digital systems</span></div>
          </div>
        </article>

        <article className="home-product-card home-product-card-estara">
          <div className="home-product-card-meta">
            <span>02 / OWN PRODUCT</span>
            <span>DIGITAL PLATFORM</span>
          </div>
          <EstaraPreview />
          <div className="home-product-card-copy">
            <div className="home-product-card-icon"><Sparkles size={18} /></div>
            <h3>Estara</h3>
            <p>A connected digital product shaped around a clear experience, structured workflows and a foundation designed to evolve with its users.</p>
            <div className="home-product-card-tags"><span>Product design</span><span>Platform</span><span>Systems</span></div>
          </div>
        </article>
      </div>

      <div className="home-products-footer">
        <p>More TechCraft products are taking shape.</p>
        <Link href="/#contact">Talk to us about a product <ArrowUpRight size={15} /></Link>
      </div>
    </div>,
    host,
  );
}
