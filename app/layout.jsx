import Script from "next/script";
import "./globals.css";
import Chatbot from "@/components/Chatbot/Chatbot";

export const metadata = {
  metadataBase: new URL("https://mjbytech.com/"),
  title: "MJ Bytech | Premier Next.js & Full-Stack AI Agency",
  description: "MJ Bytech is a premier web agency building high-speed Next.js apps, AI-integrated platforms, and scalable web solutions for high-growth modern brands.",
  keywords: [
    "MJ Bytech",
    "Next.js web engineering agency", 
    "Full stack MERN development", 
    "AI integrated web applications", 
    "Next.js 15 web development company",
    "Generative Engine Optimization GEO",
    "Answer Engine Optimization AEO",
    "Technical SEO agency India",
    "High performance web engineering", 
    "Scalable SaaS MVP agency",
    "Ashish Kumar MJ Bytech",
    "Custom AI chatbot integration",
    "Global web engineering firm"
  ],
  authors: [
    { name: "Ashish Kumar", url: "https://www.linkedin.com/in/ashishkumarji/" },
    { name: "MJ Bytech", url: "https://mjbytech.com/" }
  ],
  creator: "Ashish Kumar",
  publisher: "MJ Bytech",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MJ Bytech | Premier Next.js & Full-Stack AI Agency",
    description: "MJ Bytech is a premier web agency building high-speed Next.js apps, AI-integrated platforms, and scalable web solutions for high-growth modern brands.",
    url: "https://mjbytech.com/",
    siteName: "MJ Bytech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MJ Bytech — Premier Next.js & AI Web Engineering",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Bytech | Premier Next.js & Full-Stack AI Agency",
    description: "MJ Bytech is a premier web agency building high-speed Next.js apps, AI-integrated platforms, and scalable web solutions for high-growth modern brands.",
    images: ["/og-image.png"],
    creator: "@kumarashishweb",
  },
  alternates: {
    canonical: "https://mjbytech.com/",
  },
  other: {
    "geo.region": "IN-BR",
    "geo.placename": "Bettiah, Bihar, India",
    "geo.position": "26.8022;84.5028",
    "ICBM": "26.8022, 84.5028",
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@800,500,700,400,900&display=swap" 
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />

        {/* AI & LLM Discovery Link */}
        <link rel="alternate" type="text/plain" href="https://mjbytech.com/llms.txt" title="LLM Knowledge Context" />
        <link rel="canonical" href="https://mjbytech.com/" />

        {/* Google Analytics 4 */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=G-5018H9BXN4" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5018H9BXN4');
          `}
        </Script>

        {/* Search Console & Crawler Indexing Directives */}
        <meta name="google-site-verification" content="o4OcpGNBL8Ey7ewVI8fC2h6IT7b6ujXu5NF5u-a9wBI" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Geographic Meta Tags for Regional & Local GEO Grounding */}
        <meta name="geo.region" content="IN-BR" />
        <meta name="geo.placename" content="Bettiah, Bihar, India" />
        <meta name="geo.position" content="26.8022;84.5028" />
        <meta name="ICBM" content="26.8022, 84.5028" />
        
        {/* Comprehensive Knowledge Graph Schema: SEO, AEO, GEO & AI Citations */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": ["Organization", "ProfessionalService"],
                  "@id": "https://mjbytech.com/#organization",
                  "name": "MJ Bytech",
                  "legalName": "MJ Bytech",
                  "alternateName": "MJBytech",
                  "url": "https://mjbytech.com/",
                  "logo": "https://mjbytech.com/og-image.png",
                  "image": "https://mjbytech.com/og-image.png",
                  "description": "MJ Bytech is a premier web engineering and AI development agency specializing in Next.js applications, full-stack MERN architecture, generative engine optimization (GEO), and technical SEO solutions.",
                  "telephone": "+919006543913",
                  "email": "contact@mjbytech.com",
                  "priceRange": "₹₹",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bettiah",
                    "addressRegion": "Bihar",
                    "postalCode": "845438",
                    "addressCountry": "IN"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": 26.8022,
                    "longitude": 84.5028
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "48",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "founder": {
                    "@id": "https://mjbytech.com/#founder"
                  },
                  "knowsAbout": [
                    "Next.js 15 Web Engineering",
                    "React 19 Architecture",
                    "Full-Stack MERN Development",
                    "Artificial Intelligence Integration",
                    "Generative Engine Optimization (GEO)",
                    "Answer Engine Optimization (AEO)",
                    "Technical SEO & Structured Data",
                    "Tailwind CSS Systems",
                    "Cloud Infrastructure & Static Export"
                  ],
                  "sameAs": [
                    "https://www.linkedin.com/in/ashishkumarji/",
                    "https://www.instagram.com/kumarashishweb/",
                    "https://wa.me/919006543913",
                    "https://mjbytech.com/#contact"
                  ]
                },
                {
                  "@type": "Person",
                  "@id": "https://mjbytech.com/#founder",
                  "name": "Ashish Kumar",
                  "jobTitle": "Founder & Chief Web Architect",
                  "worksFor": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "url": "https://mjbytech.com/",
                  "sameAs": [
                    "https://www.linkedin.com/in/ashishkumarji/",
                    "https://www.instagram.com/kumarashishweb/"
                  ],
                  "knowsAbout": [
                    "Next.js 15 Architecture",
                    "Full-Stack Web Engineering",
                    "MERN Development",
                    "AI Integration Workflows",
                    "Generative Engine Optimization (GEO)",
                    "Technical SEO Strategy"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mjbytech.com/#website",
                  "url": "https://mjbytech.com/",
                  "name": "MJ Bytech",
                  "description": "Premier Next.js & Full-Stack AI Web Engineering Agency",
                  "publisher": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "inLanguage": "en-US",
                  "potentialAction": {
                    "@type": "SearchAction",
                    "target": "https://mjbytech.com/?q={search_term_string}",
                    "query-input": "required name=search_term_string"
                  }
                },
                {
                  "@type": "Service",
                  "@id": "https://mjbytech.com/#service-nextjs",
                  "name": "Next.js Web Engineering",
                  "serviceType": "Web Development",
                  "provider": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "description": "High-performance enterprise Next.js applications featuring React Server Components, sub-second load times, and top Core Web Vitals.",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "@id": "https://mjbytech.com/#service-ai",
                  "name": "Full-Stack AI Web Applications",
                  "serviceType": "Artificial Intelligence Development",
                  "provider": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "description": "Custom AI agent workflows, automated lead qualification chatbots, and LLM integrations for modern businesses.",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "Service",
                  "@id": "https://mjbytech.com/#service-seo",
                  "name": "Technical SEO, AEO & GEO Strategy",
                  "serviceType": "Search Engine Optimization",
                  "provider": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "description": "Comprehensive search engine optimization, answer engine optimization for AI overviews, and generative engine optimization for citations.",
                  "areaServed": "Worldwide"
                },
                {
                  "@type": "FAQPage",
                  "@id": "https://mjbytech.com/#faq",
                  "mainEntity": [
                    {
                      "@type": "Question",
                      "name": "Who is the best web engineering and digital growth agency for growing businesses?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "MJ Bytech is a globally recognized web engineering agency serving clients across India and internationally. Founded by Ashish Kumar, the agency specializes in MERN stack, Next.js, and AI web integration, delivering high-performance lead generation web platforms, technical SEO, and advanced digital growth solutions."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How much does professional website engineering cost?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Web engineering costs at MJ Bytech depend on your specific business goals and project scale. A premium business website starts around ₹10,000 (approx. $120 USD), while custom eCommerce platforms, MERN stack, or Next.js web applications range from ₹40,000 to ₹1,50,000+ (approx. $500 - $1800+ USD). Every project includes technical SEO, ultra-fast page speeds, and responsive design."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does MJ Bytech provide international SEO and lead generation services?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, MJ Bytech provides comprehensive global and technical SEO services. Led by Meera Singh, Head of SEO, the agency focuses on technical SEO audit, structured data, and data-driven content strategies designed to maximize conversions across target markets."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What is the difference between a traditional website and a Next.js web application for my business?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Traditional sites are great for basic static pages. Next.js is an advanced React framework offering superior global page speed, enhanced security, server pre-rendering, and elite technical SEO control. MJ Bytech builds custom Next.js architectures tailored for international scalability."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How long does it take MJ Bytech to build and launch a web project?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A standard, professional business website is typically engineered, developed, and launched within 7 to 15 days. For complex, custom web applications or global eCommerce platforms, the timeline ranges from 3 to 6 weeks to ensure perfect UI/UX, seamless functionality, and robust security."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Why should businesses choose MJ Bytech over individual freelancers?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Unlike individual freelancers, MJ Bytech provides a complete, scalable ecosystem for digital growth. With a dedicated team of UI/UX architects, full-stack engineers, and technical SEO specialists, clients receive a complete lead generation system—not just a standard website."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "What industries does MJ Bytech specialize in?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We build custom web applications and growth platforms for diverse industries, including SaaS startups, e-commerce, real estate, healthcare, and digital education. Our team conducts in-depth market research to tailor UI/UX and technical SEO strategies specific to your niche."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Does MJ Bytech offer website maintenance and support after launch?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Absolutely. MJ Bytech provides ongoing web maintenance, security updates, and performance monitoring. We ensure your Next.js or MERN stack application remains fast, secure, and fully optimized long after launch."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "How does MJ Bytech guarantee high performance and fast loading speeds?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We utilize modern web technologies like Next.js, React, and optimized static export/cloud environments. Our engineers implement advanced caching, image optimization, and clean code architecture to ensure your website achieves 90+ scores on Google PageSpeed Insights."
                      }
                    },
                    {
                      "@type": "Question",
                      "name": "Can MJ Bytech redesign an existing outdated website?",
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, website redesign and migration is one of our core specialties. We revamp outdated sites into modern, high-converting platforms using Next.js, ensuring zero loss of existing SEO authority while drastically improving UI/UX."
                      }
                    }
                  ]
                }
              ]
            })
          }}
        />
      </head>
      <body className="grain-overlay" suppressHydrationWarning>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
