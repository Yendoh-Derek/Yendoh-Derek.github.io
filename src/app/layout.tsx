import type { Metadata } from "next";
import { DM_Sans, JetBrains_Mono, Syne } from "next/font/google";
import { Nav } from "@/components/layout/Nav";
import { site } from "@/content/site";
import "@/styles/globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.title}`,
  description: site.metaDescription,
  metadataBase: new URL(site.url),
  openGraph: {
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: `${site.name} — ${site.title} · HealthTech · EdTech`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.title}`,
    description: site.metaDescription,
    images: ["/og.svg"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${jetbrains.variable}`}
    >
      <body>
        <div className="grain-overlay" aria-hidden />
        <Nav />
        <main>{children}</main>
        <footer className="border-t border-border py-8">
          <div className="section-container flex flex-col items-center justify-between gap-4 text-sm text-secondary md:flex-row">
            <p>© {new Date().getFullYear()} {site.name}.</p>
            <p className="font-mono text-xs">{site.location}</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
