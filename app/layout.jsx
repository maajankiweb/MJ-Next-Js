import Script from "next/script";
import "./globals.css";
import Chatbot from "@/components/Chatbot/Chatbot";

export const metadata = {
  metadataBase: new URL("https://mjbytech.com"),
  title: "MJ Bytech | Premier Next.js & Full-Stack AI Web Engineering Agency",
  description: "MJ Bytech: A global web engineering & digital innovation agency. We build high-speed Next.js applications, AI-integrated platforms, and SEO-optimized web solutions for growing brands.",
  keywords: [
    "MJ Bytech",
    "Next.js web engineering agency", 
    "full stack MERN development", 
    "AI integrated web applications", 
    "high performance web agency", 
    "Next.js development company", 
    "scalable web app agency",
    "Ashish Kumar",
    "global web engineering"
  ],
  authors: [{ name: "Ashish Kumar" }],
  openGraph: {
    title: "MJ Bytech | Premier Next.js & AI Web Engineering",
    description: "A globally recognized tech agency crafting high-performance Next.js applications, AI web solutions, and digital growth systems.",
    url: "https://mjbytech.com",
    siteName: "MJ Bytech",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "MJ Bytech Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MJ Bytech | Premier Next.js & AI Web Engineering",
    description: "A globally recognized tech agency crafting high-performance Next.js applications, AI web solutions, and digital growth systems.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://mjbytech.com",
  },
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
        {/* Google Search Console */}
        <meta name="google-site-verification" content="o4OcpGNBL8Ey7ewVI8fC2h6IT7b6ujXu5NF5u-a9wBI" />
        
        {/* Schema Markup for AEO, GEO & AI Search Citations */}
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
                  "url": "https://mjbytech.com",
                  "logo": "https://mjbytech.com/og-image.png",
                  "image": "https://mjbytech.com/og-image.png",
                  "description": "MJ Bytech is a premier web engineering and AI development agency specializing in Next.js applications, full-stack MERN architecture, and technical SEO solutions.",
                  "telephone": "+919006543913",
                  "email": "contact@mjbytech.com",
                  "priceRange": "₹₹",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Bettiah",
                    "addressRegion": "Bihar",
                    "addressCountry": "IN"
                  },
                  "founder": {
                    "@type": "Person",
                    "@id": "https://mjbytech.com/#founder",
                    "name": "Ashish Kumar",
                    "jobTitle": "Founder & CEO",
                    "sameAs": [
                      "https://www.linkedin.com/in/ashishkumarji/",
                      "https://www.instagram.com/kumarashishweb/"
                    ]
                  },
                  "knowsAbout": [
                    "Next.js 15 Web Development",
                    "React 19 Architecture",
                    "Full-Stack MERN Development",
                    "Artificial Intelligence Integration",
                    "Technical SEO Strategy",
                    "AEO and GEO Optimization",
                    "Tailwind CSS Systems",
                    "Headless CMS & Cloud Export"
                  ],
                  "sameAs": [
                    "https://wa.me/919006543913",
                    "https://mjbytech.com/#contact"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://mjbytech.com/#website",
                  "url": "https://mjbytech.com",
                  "name": "MJ Bytech",
                  "description": "Premier Next.js & Full-Stack AI Web Engineering Agency",
                  "publisher": {
                    "@id": "https://mjbytech.com/#organization"
                  },
                  "inLanguage": "en-US"
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


