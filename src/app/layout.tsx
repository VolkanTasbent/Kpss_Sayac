import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import Script from "next/script";
import { SiteShell } from "@/components/SiteShell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const adsClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

function requestMetadataBase(): URL {
  const fallback = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kpsssayac.com";
  try {
    return new URL(fallback);
  } catch {
    return new URL("https://kpsssayac.com");
  }
}

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get("x-forwarded-host") ?? headersList.get("host") ?? "";
  const proto = headersList.get("x-forwarded-proto") ?? "https";
  let metadataBase = requestMetadataBase();
  if (host && !host.startsWith("localhost") && !host.startsWith("127.0.0.1")) {
    try {
      metadataBase = new URL(`${proto}://${host}`);
    } catch {
      /* keep fallback */
    }
  }

  return {
    metadataBase,
    title: {
      default: "KPSS Sayaç — Lisans, ön lisans, ortaöğretim ve AGS geri sayım",
      template: "%s | KPSS Sayaç",
    },
    description:
      "KPSS lisans, ön lisans, ortaöğretim ve AGS sınavlarına kalan günleri İstanbul saatine göre hesaplayın. KPSS net hesaplama aracı ve güncel içerik.",
    openGraph: {
      title: "KPSS Sayaç",
      description: "Lisans, ön lisans, ortaöğretim KPSS ve AGS için geri sayım ve net hesaplama.",
      locale: "tr_TR",
      type: "website",
    },
    robots: { index: true, follow: true },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full bg-slate-950 font-sans text-zinc-50">
        {adsClient ? (
          <Script
            id="adsense-init"
            async
            strategy="afterInteractive"
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsClient}`}
          />
        ) : null}
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
