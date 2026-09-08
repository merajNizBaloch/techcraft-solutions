import Link from "next/link";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  MessageCircle,
  Music2,
  Youtube,
} from "lucide-react";
import BrandLogo from "./brand-logo";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/techcraft__solution?stkn=c3BwbXVuZXVscHlx",
    Icon: Instagram,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@techcraft12?_r=1&_t=ZS-99Z0PoljAp7",
    Icon: Music2,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/techcraftsolution/",
    Icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@greenscreensolutions7140?si=Wv_22InXIwNx9PFo",
    Icon: Youtube,
  },
] as const;

const footerLinks = [
  ["Services", "/services"],
  ["Products", "/products"],
  ["Portfolio", "/portfolio"],
  ["Freebies", "/freebies"],
  ["DevCanvas", "/about"],
  ["Our Team", "/team"],
  ["Contact", "/contact"],
] as const;

const whatsappUrl = "https://wa.me/923336077281";

export default function SiteFooter() {
  return (
    <>
      <footer className="site-footer">
        <div className="site-footer-grid" aria-hidden="true" />

        <div className="site-footer-inner">
          <div className="site-footer-top">
            <div className="site-footer-brand-block">
              <Link href="/" className="site-footer-brand" aria-label="TechCraft home">
                <BrandLogo height={42} />
                <span>
                  TECH<strong>CRAFT</strong>
                </span>
              </Link>

              <p className="site-footer-statement">
                Design, engineering and useful digital products shaped in Balochistan and built for people everywhere.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="site-footer-whatsapp"
                aria-label="Message TechCraft on WhatsApp"
              >
                <span className="site-footer-whatsapp-icon"><MessageCircle size={18} /></span>
                <span>
                  <small>WHATSAPP / DIRECT CHAT</small>
                  <strong>Message TechCraft on WhatsApp</strong>
                </span>
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="site-footer-nav-block">
              <div className="site-footer-label">EXPLORE</div>
              <nav className="site-footer-links" aria-label="Footer navigation">
                {footerLinks.map(([label, href]) => (
                  <Link href={href} key={href}>{label}</Link>
                ))}
              </nav>
            </div>

            <div className="site-footer-social-block">
              <div className="site-footer-label">SOCIAL</div>
              <div className="site-footer-socials">
                {socialLinks.map(({ label, href, Icon }) => (
                  <a href={href} target="_blank" rel="noreferrer" key={label}>
                    <span className="site-footer-social-icon"><Icon size={17} strokeWidth={1.7} /></span>
                    <span>{label}</span>
                    <ArrowUpRight size={14} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="site-footer-divider" />

          <div className="site-footer-bottom">
            <span>© {new Date().getFullYear()} TechCraft Solutions</span>
            <span>FROM BALOCHISTAN / BUILDING FOR PEOPLE</span>
            <a href="mailto:hello@techcraftsolution.com">hello@techcraftsolution.com</a>
          </div>
        </div>
      </footer>

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        className="site-whatsapp-fab"
        aria-label="Message TechCraft on WhatsApp"
      >
        <MessageCircle size={21} strokeWidth={1.8} />
        <span>WhatsApp</span>
      </a>
    </>
  );
}
