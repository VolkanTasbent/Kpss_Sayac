import Link from "next/link";
import type { ReactNode } from "react";
import { SiteMapInline } from "@/components/SiteMapInline";
import { HEADER_NAV_LINKS } from "@/config/site-map-links";

const LINKEDIN_VOLKAN = "https://www.linkedin.com/in/volkan-tasbent/";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-row flex-wrap items-center justify-between gap-3 px-3 py-4 sm:px-5 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            KPSS Sayaç
          </Link>
          <nav
            className="flex flex-wrap justify-end gap-2 text-sm sm:ml-auto"
            aria-label="Ana navigasyon"
          >
            {HEADER_NAV_LINKS.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-white/85 transition hover:border-cyan-400/40 hover:bg-white/10"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-white/10 bg-slate-950 px-3 py-10 text-sm text-white/60 sm:px-5 lg:px-8">
        <div className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-col gap-6">
          <SiteMapInline variant="onDark" />
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-white/70">
            <Link className="hover:text-cyan-200" href="/gizlilik-politikasi">
              Gizlilik politikası
            </Link>
            <Link className="hover:text-cyan-200" href="/cerez-politikasi">
              Çerez politikası
            </Link>
            <Link className="hover:text-cyan-200" href="/kullanim-kosullari">
              Kullanım koşulları
            </Link>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Bu site bilgilendirme amaçlıdır; kesin tarihler ve kurallar için ÖSYM resmi kaynaklarını kullanın.
              Tüm içerik sayfalarına üst menü, site haritası satırı ve sitemap ile ulaşılabilir.
            </p>
            <p className="shrink-0 text-white/40">© {new Date().getFullYear()} KPSS Sayaç</p>
          </div>
          <p className="border-t border-white/10 pt-6 text-center text-xs text-white/45 sm:text-left">
            Created by{" "}
            <a
              href={LINKEDIN_VOLKAN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-300/90 underline-offset-4 transition hover:text-cyan-200 hover:underline"
            >
              Volkan Taşbent
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
