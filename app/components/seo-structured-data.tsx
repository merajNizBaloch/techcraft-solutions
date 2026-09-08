export default function SeoStructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "TechCraft Solutions",
    logo: "https://www.techcraftsolution.com/images/techcraft-logomark.svg",
    url: "https://www.techcraftsolution.com",
    description:
      "TechCraft Solutions designs and engineers digital products, websites, software systems and AI-powered experiences.",
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "TechCraft Solutions",
    url: "https://www.techcraftsolution.com",
    description:
      "Digital product design, software engineering and intelligent technology from TechCraft Solutions.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
    </>
  );
}
