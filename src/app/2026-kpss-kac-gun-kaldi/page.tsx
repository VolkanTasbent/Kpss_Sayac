import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStack } from "@/components/CountdownStack";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "2026 KPSS kaç gün kaldı?",
  description:
    "2026 KPSS ve AGS için kalan süre: lisans, ön lisans ve AGS geri sayımı. Başvuru ve sınav takvimini ÖSYM ile doğrulayın.",
  keywords: ["2026 kpss kaç gün kaldı", "2026 kpss", "kpss 2026 geri sayım"],
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function Y2026KpssKacGunKaldiPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">2026 KPSS kaç gün kaldı?</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Sayfa tarihi: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Arama motorlarında &quot;2026 KPSS&quot; ve &quot;kaç gün kaldı&quot; kelimelerinin sırası değişerek
        yazılabiliyor; bu URL özellikle yılı cümle başında arayanlar için ayrı bir giriş kapısıdır. İçerik olarak
        amaç farklıdır: aşağıda yıl bazlı hazırlık akışını, üstte ise üç hedef için canlı süreyi görürsünüz. Tablo
        odaklı sayfadan farklı olarak burada kronolojik hatırlatmalar ön plandadır.
      </p>

      <div className="my-10 w-full">
        <CountdownStack exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">2026 turunda nelere dikkat?</h2>
      <ol className="mt-4 list-decimal space-y-3 pl-5 text-base leading-relaxed text-white/80">
        <li>
          <span className="font-medium text-white">Takvim:</span> Lisans, ön lisans ve AGS için sınav günleri ve
          başvuru pencereleri farklıdır. Tek bir &quot;KPSS günü&quot; yoktur; hangi oturuma gireceğinizi erken
          netleştirin.
        </li>
        <li>
          <span className="font-medium text-white">Kılavuz:</span> Soru sayıları, süreler ve puan dönüşümü yıla göre
          değişebilir. Deneme yayınlarını seçerken kılavuz uyumunu kontrol edin.
        </li>
        <li>
          <span className="font-medium text-white">Yedek plan:</span> Sağlık, ulaşım veya teknik aksaklık için son
          haftada B planı yazılı olsun; stres anında karar vermek zordur.
        </li>
      </ol>

      <h2 className="mt-8 text-xl font-semibold text-white">Neden ayrı bir URL?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Kullanıcılar aynı soruyu farklı kelime sıralarıyla sorar. Google, niyeti yakalamak için başlık, URL ve gövde
        metninin birbirini desteklemesini ister. Bu sayfa &quot;2026&quot; kelimesini öne alır; benzer içerikli
        görünse de vurgu ve paragraf yapısı farklıdır. Kopyala-yapıştır sayfa üretmek yerine, her URL&apos;ye ayrı
        değer önerisi yazmak uzun vadede daha sürdürülebilirdir.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Özet hatırlatma</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Sayaçlar yapılandırılmış tarihlere bağlıdır. Resmi değişiklik duyurulduğunda site yöneticisi tarihleri
        güncellemelidir. Siz aday olarak da en az ayda bir ÖSYM sayfasını doğrudan kontrol etmeyi alışkanlık edinin.
      </p>

      <p className="mt-10 text-sm text-white/65">
        Diğer girişler:{" "}
        <Link className="font-medium text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        .
      </p>
    </main>
  );
}
