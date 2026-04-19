import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStack } from "@/components/CountdownStack";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS’ye ne kadar kaldı? Planlama rehberi",
  description:
    "Kalan süreyi haftalık plana çevirmek için pratik öneriler. Lisans, ön lisans KPSS ve AGS sayaçları.",
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function KpssNeKadarKaldiPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS’ye ne kadar kaldı?</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Referans tarihi: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Bu sayfa yalnızca rakam vermekten çok, kalan süreyi nasıl parçalayacağınızı düşünmeniz için yazıldı. &quot;Ne
        kadar kaldı&quot; sorusu çoğu zaman aslında şu anlama gelir: haftada kaç deneme, hangi konu blokları, hangi
        günlerde mola? Aşağıdaki sayaçlar size toplam süreyi hatırlatır; metin ise o süreyi üç aşamaya bölmeyi önerir:
        tarama, pekiştirme, branş denemesi.
      </p>

      <div className="my-10 w-full">
        <CountdownStack exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">12 haftalık çerçeve (örnek)</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-white/80">
        <li>
          <span className="font-medium text-white">Keşif:</span> İlk dört haftada konu eksiklerinizi kapatın; her
          hafta sonu tek bir genel deneme ile ölçüm alın.
        </li>
        <li>
          <span className="font-medium text-white">Hız:</span> Orta dört haftada süreyi sıkılaştırın; yanlış türlerini
          etiketleyip tekrar edin.
        </li>
        <li>
          <span className="font-medium text-white">Stabilizasyon:</span> Son dört haftada branş ve genel denemeyi
          dönüşümlü tutun; uyku ve beslenmeyi sabitleyin.
        </li>
      </ol>

      <p className="mt-8 text-base leading-relaxed text-white/80">
        AGS ile KPSS aynı gün değildir; iki hedefi birlikte taşıyorsanız takvim çakışmalarını erken görün. Lisans ve ön
        lisans adayları da farklı kılavuz satırlarına tabi olabileceğinden, başvuru pencerelerini ÖSYM duyurularından
        doğrulamak en güvenli yoldur.
      </p>

      <p className="mt-6 text-sm text-white/60">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-2026-kac-gun-kaldi">
          2026 kaç gün kaldı
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-net-hesaplama">
          net hesaplama
        </Link>
      </p>
    </main>
  );
}
