import Link from "next/link";
import type { ReactNode } from "react";
import { SiteMapInline } from "@/components/SiteMapInline";

/** Üst menü sade; diğer sayfalar ana sayfa + footer site haritası + sitemap ile bulunur. */
const nav = [
  { href: "/", label: "Ana sayfa" },
  { href: "/kpss-sayac", label: "Sayaç" },
  { href: "/kpss-net-hesaplama", label: "Net hesaplama" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-full flex-col">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-[min(100%,88rem)] flex-col gap-3 px-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-tight text-white">
            KPSS Sayaç
          </Link>
          <nav className="flex flex-wrap gap-2 text-sm">
            {nav.map((n) => (
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
              Ek KPSS sayfaları üst menüde yok; site haritası satırı, ana sayfa metni ve sitemap ile erişilebilir.
            </p>
            <p className="shrink-0 text-white/40">© {new Date().getFullYear()} KPSS Sayaç</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
