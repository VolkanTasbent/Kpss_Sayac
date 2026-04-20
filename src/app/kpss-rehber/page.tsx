import type { Metadata } from "next";
import Link from "next/link";
import { SITE_MAP_LINKS_FOR_REHBER } from "@/config/site-map-links";

export const metadata: Metadata = {
  title: "KPSS rehberi — tüm konular ve aramalar",
  description:
    "Kaç gün kaldı, geri sayım, 2026 KPSS, ne zaman ve planlama sayfalarına tek yerden erişin. Google’dan gelenler için hızlı menü.",
};

export default function KpssRehberPage() {
  return (
    <main className="mx-auto max-w-3xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS rehberi</h1>
      <p className="mt-4 text-base leading-relaxed text-white/80">
        Üst menüde en sık kullanılan birkaç sayfa vardır; tüm konu sayfaları burada ve alttaki footer site haritasında
        listelenir. Arama motorundan doğrudan bir alt sayfaya düşmüş olabilirsiniz — ana deneyim için{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/">
          ana sayfaya
        </Link>{" "}
        dönebilir veya aşağıdan ihtiyacınız olanı seçebilirsiniz.
      </p>

      <ul className="mt-10 space-y-3">
        {SITE_MAP_LINKS_FOR_REHBER.map((p) => (
          <li key={p.href}>
            <Link
              href={p.href}
              className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 px-5 py-4 transition hover:border-cyan-400/35 hover:bg-white/10 sm:flex-row sm:items-center sm:justify-between"
            >
              <span className="font-medium text-white group-hover:text-cyan-100">{p.label}</span>
              <span className="mt-1 text-sm text-white/55 sm:mt-0 sm:max-w-xs sm:text-right">{p.hint}</span>
            </Link>
          </li>
        ))}
      </ul>

      <p className="mt-10 text-sm leading-relaxed text-white/55">
        Bu liste yalnızca gezinmeyi kolaylaştırır; her sayfanın metni farklıdır. Tarihler için her zaman ÖSYM resmi
        kaynaklarını kontrol edin.
      </p>
    </main>
  );
}
