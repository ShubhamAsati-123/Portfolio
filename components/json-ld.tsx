export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shubham Asati",
    url: "https://shubhamasati.tech",
    image: "https://shubhamasati.tech/profile-image.jpg",
    sameAs: [
      "https://github.com/shubhamasati",
      "https://linkedin.com/in/shubhamasati",
      "https://twitter.com/shubhamasati",
    ],
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressCountry: "India",
    },
    email: "contact@shubhamasati.tech",
    description:
      "Passionate full stack developer specializing in React, Next.js, Node.js, and AI integration. Building innovative web applications that make a difference.",
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
      "AI Development",
      "Web Development",
      "Full Stack Development",
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Your University Name",
    },
  }

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Shubham Asati Portfolio",
    url: "https://shubhamasati.tech",
    description: "Portfolio website of Shubham Asati, showcasing full stack development projects and AI integrations.",
    author: {
      "@type": "Person",
      name: "Shubham Asati",
    },
    inLanguage: "en-US",
  }

  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: "Shubham Asati Portfolio",
    description: "A collection of web development projects and AI applications",
    author: {
      "@type": "Person",
      name: "Shubham Asati",
    },
    url: "https://shubhamasati.tech",
    dateCreated: "2024-01-01",
    dateModified: new Date().toISOString().split("T")[0],
    genre: "Web Development Portfolio",
    keywords: "React, Next.js, Node.js, AI, Full Stack Development",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(portfolioStructuredData),
        }}
      />
    </>
  )
}
