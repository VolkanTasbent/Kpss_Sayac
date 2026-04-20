import type { Metadata } from "next";
import Link from "next/link";
import { SiteMapInline } from "@/components/SiteMapInline";
import { CountdownStackHost } from "@/components/CountdownStackHost";
import { NetCalculator } from "@/components/NetCalculator";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

const slotHome = process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME ?? "";

export const metadata: Metadata = {
  title: "KPSS kaç gün kaldı — canlı sayaç",
  description:
    "KPSS kaç gün kaldı mı? Lisans, ön lisans, ortaöğretim (lise) KPSS ve AGS için güncel kalan süre ve net hesaplama. İstanbul saatine göre canlı geri sayım.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KPSS kaç gün kaldı — canlı sayaç",
    description: "KPSS ve AGS için güncel geri sayım ve net hesaplama tek yerde.",
    url: "/",
    locale: "tr_TR",
    type: "website",
  },
};

export default function HomePage() {
  const today = longTurkishDate();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/25 via-slate-950 to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[min(100%,88rem)] flex-col items-stretch gap-10 px-3 pb-16 pt-10 sm:gap-12 sm:px-5 sm:pb-20 sm:pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm text-cyan-100/80">Bugün: {today}</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              KPSS (lisans, ön lisans, ortaöğretim) ve AGS geri sayım
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Tüm sınavlar için kalan süreyi tek ekranda hızlıca takip edebilirsiniz.
            </p>
            <p className="mt-3 text-sm text-cyan-100/85 sm:text-base">
              <span className="text-white/70">Çok aranan:</span>{" "}
              <Link
                className="font-medium text-cyan-200 underline-offset-4 hover:underline"
                href="/kpss-kac-gun-kaldi"
              >
                KPSS kaç gün kaldı
              </Link>{" "}
              — ayrı sayfada açıklamalı süre özeti
            </p>
          </div>
          <div className="w-full">
            <CountdownStackHost exams={EXAMS} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-5 lg:px-8">
        <AdSenseSlot slot={slotHome} className="mb-10" />
      </div>

      <section className="border-t border-white/10 bg-white text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
          <article className="space-y-4 text-base leading-relaxed text-zinc-700">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Neden ayrı sayaçlar?</h2>
            <p>
              Her sınavın tarihi farklı olduğu için sayaçlar ayrı gösterilir. Böylece kendi hedefinize kalan süreyi tek
              bakışta görebilirsiniz.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Geri sayım nasıl hesaplanıyor?</h3>
            <p>
              Kalan süre İstanbul saatine göre otomatik güncellenir. Resmi saat ve sınav detayları için her zaman
              ÖSYM&apos;nin güncel kılavuzunu kontrol edin.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Çalışma planına nasıl yansır?</h3>
            <p>
              Kalan gün sayısını planınıza göre kullanarak haftalık tekrar ve deneme düzeninizi daha kolay
              oluşturabilirsiniz.
            </p>
            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <SiteMapInline variant="onLight" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Şeffaflık ve reklam politikaları</h3>
            <p>
              Kişisel veriler, çerezler ve kullanım şartlarıyla ilgili detayları şu sayfalarda bulabilirsiniz:{" "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/gizlilik-politikasi">
                gizlilik politikası
              </Link>
              {", "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/cerez-politikasi">
                çerez politikası
              </Link>{" "}
              ve{" "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/kullanim-kosullari">
                kullanım koşulları
              </Link>
              .
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <NetCalculator />
        </div>
      </section>
    </>
  );
}
