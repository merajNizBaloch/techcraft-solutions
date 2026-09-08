import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import BrandLogo from "./brand-logo";

type SocialIconProps = { size?: number };

function InstagramIcon({ size = 17 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4.1" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon({ size = 17 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M14.2 4.2c.8 1.8 2.1 3 4.1 3.5v3.1a9 9 0 0 1-4.1-1.4v5.1a5.6 5.6 0 1 1-4.8-5.5v3.2a2.5 2.5 0 1 0 1.7 2.3V4.2h3.1Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon({ size = 17 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="8" cy="8.2" r="1.25" fill="currentColor" />
      <path d="M7 10.5v6.5M11 17v-6.5m0 2.7c.8-1.7 4.7-2.1 4.7 1.2V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function YouTubeIcon({ size = 17 }: SocialIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20.2 7.1c-.2-1-1-1.8-2-2-1.7-.4-4.3-.4-6.2-.4s-4.5 0-6.2.4c-1 .2-1.8 1-2 2-.3 1.4-.3 3.2-.3 4.9s0 3.5.3 4.9c.2 1 1 1.8 2 2 1.7.4 4.3.4 6.2.4s4.5 0 6.2-.4c1-.2 1.8-1 2-2 .3-1.4.3-3.2.3-4.9s0-3.5-.3-4.9Z" stroke="currentColor" strokeWidth="1.6" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" />
    </svg>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/techcraft__solution?stkn=c3BwbXVuZXVscHlx",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@techcraft12?_r=1&_t=ZS-99Z0PoljAp7",
    Icon: TikTokIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/techcraftsolution/",
    Icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@greenscreensolutions7140?si=Wv_22InXIwNx9PFo",
    Icon: YouTubeIcon,
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
                  <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={`TechCraft on ${label}`}>
                    <span className="site-footer-social-icon"><Icon size={17} /></span>
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
            <a href={whatsappUrl} target="_blank" rel="noreferrer">+92 333 6077281</a>
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
