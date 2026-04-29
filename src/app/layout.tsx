import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair_Display = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: {
    default: "Success Ede | Frontend Developer",
    template: "%s | Success Ede",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    shortcut: "/shortcut-icon.png",
  },
  description: "Frontend Engineer with expertise in building performant, accessible, and visually polished web applications. Specialized in React and Next.js...",
  keywords: ["Frontend Developer", "Frontend Engineer", "React Developer", "Next.js", "JavaScript Developer", "Web Developer",],
  authors: [{ name: "Success Ede" }],
  creator: "Success Ede",

  // for social sharing previews (WhatsApp, Twitter, LinkedIn)
  openGraph: {
    type: "website",
    url: "https://johndoe.com",
    title: "Success Ede | Frontend Developer",
    description: "Frontend developer specializing in React and Next.js...",
    images: [{ url: "https://johndoe.com/og-image.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Success Ede | Frontend Developer",
    description: "Frontend developer specializing in React and Next.js...",
    images: ["https://johndoe.com/og-image.png"],
  },
};

// After deploying, submit your sitemap to Google Search Console at search.google.com/search-console — this tells Google to crawl and index your site faster.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair_Display.variable}`}>
      
      <body
        className="antialiased"
      >
        {children}
        <Analytics />
        <SpeedInsights />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Success Ede",
              url: "https://johndoe.com",
              jobTitle: "Frontend Developer",
              sameAs: [
                "https://github.com/edesuccess54",
                "https://www.linkedin.com/in/edesuccess",
                "https://x.com/frontend_dev_js",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
