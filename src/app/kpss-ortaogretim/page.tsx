import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStack } from "@/components/CountdownStack";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS ortaöğretim — geri sayım ve net",
  description:
    "Lise mezunları için KPSS ortaöğretim sınavına kalan süre, canlı sayaç ve GY/GK net hesaplama için diğer sayfalara bağlantılar.",
  keywords: ["kpss ortaöğretim", "lise kpss", "ortaöğretim kpss kaç gün kaldı"],
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function KpssOrtaogretimPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS ortaöğretim (lise)</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Güncel: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Ortaöğretim düzeyindeki KPSS, lise ve dengi okul mezunlarının girebildiği oturumdur; lisans veya ön lisans
        KPSS ile karıştırılmamalıdır. Aşağıdaki kartlarda hem bu sınavın tarihine göre kalan süreyi hem de diğer
        sınavlar için ayrı sayaçları görürsünüz — böylece yanlış hedefe çalışma riski azalır. Net ve tahmini P94 puanı
        için{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-net-hesaplama">
          net hesaplama
        </Link>{" "}
        sayfasında &quot;Ortaöğretim&quot; sekmesini seçmeniz yeterlidir.
      </p>

      <div className="my-10 w-full">
        <CountdownStack exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">Başvuru ve sınav günü</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Başvuru penceresi ile sınav günü farklıdır; geç başvuru ücreti ve belge yüklemeleri için kılavuzu baştan sona
        okuyun. Ortaöğretim oturumu genelde sonbaharda planlanır; kesin tarih ve saat için ÖSYM takvimini esas alın.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Çalışma önerisi</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        GY ve GK için konu dağılımını denemelerle ölçün; zayıf kalan blokları haftalık tekrar planına sabitleyin. Net
        arttıkça standart puana yaklaşımın da yükselmesi beklenir; fakat gerçek puan dağılımı o yılın istatistiklerine
        bağlıdır.
      </p>

      <p className="mt-10 text-sm text-white/65">
        Diğer konular:{" "}
        <Link className="font-medium text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        .
      </p>
    </main>
  );
}
