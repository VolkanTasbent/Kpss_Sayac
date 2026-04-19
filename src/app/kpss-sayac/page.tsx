import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStack } from "@/components/CountdownStack";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS sayacı — canlı gün sayacı",
  description: "Lisans KPSS, ön lisans KPSS ve AGS için sade geri sayım aracı.",
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL ?? "";

export default function KpssSayacPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS sayacı</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Güncel: {today}</p>
      <p className="mt-6 text-base leading-relaxed text-white/80">
        Bu ekran araç odaklıdır: açıklamayı kısa tuttuk, sayaçları öne aldık. Kartlar her dakika başı yenilenerek
        İstanbul takvim gününe göre kalan süreyi günceller. Mobil cihazlarda tek sütun halinde alt alta dizilir; masaüstünde
        aynı düzen korunarak okunurluk artırılır.
      </p>

      <div className="my-10 flex justify-center">
        <CountdownStack exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">Sık sorulanlar</h2>
      <dl className="mt-4 space-y-5 text-base leading-relaxed text-white/80">
        <div>
          <dt className="font-medium text-white">Sayaç gün dönümünde nasıl davranır?</dt>
          <dd className="mt-1">
            Yerel takvimde yeni gün başladığında kalan gün bir azalır. Sınav günü geldiğinde sıfır gösterilir.
          </dd>
        </div>
        <div>
          <dt className="font-medium text-white">Tarihleri kimden doğrularım?</dt>
          <dd className="mt-1">
            ÖSYM&apos;nin ilgili yıl kılavuzu ve sınav takvimi. Bu sayfa özet bilgi sunar; resmi değişiklikleri sizin
            güncellemeniz gerekir.
          </dd>
        </div>
        <div>
          <dt className="font-medium text-white">Net hesaplama nerede?</dt>
          <dd className="mt-1">
            <Link href="/kpss-net-hesaplama" className="text-cyan-300 underline-offset-4 hover:underline">
              KPSS net hesaplama
            </Link>{" "}
            sayfasında formül ve alanlar ayrıntılı anlatılır.
          </dd>
        </div>
      </dl>
    </main>
  );
}
