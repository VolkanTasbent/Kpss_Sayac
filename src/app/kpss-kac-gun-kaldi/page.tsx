import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStackHost } from "@/components/CountdownStackHost";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS'ye kaç gün kaldı? Güncel süre",
  description:
    "KPSS lisans, ön lisans, ortaöğretim ve AGS için kaç gün kaldı sorusunun cevabı: canlı geri sayım ve açıklamalar.",
  keywords: ["kpss kaç gün kaldı", "kpssye kaç gün kaldı", "kpss geri sayım gün"],
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function KpssKacGunKaldiPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS&apos;ye kaç gün kaldı?</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Güncellenen referans tarihi: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Arama kutusuna &quot;KPSS kaç gün kaldı&quot; yazan çoğu aday aslında iki farklı bilgiyi aynı anda merak eder:
        birincisi, takvim üzerinde sınav gününe kadar kaç uyku sayılacağı; ikincisi ise o günün sabahında salona
        girene kadar kalan sürenin psikolojik ağırlığıdır. Bu sayfa birinci soruya net rakam verirken, ikinci soruda
        size çalışma düzenini sabitlemeniz için küçük bir çerçeve sunar.
      </p>

      <div className="my-10 w-full">
        <CountdownStackHost exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">&quot;Gün&quot; derken neyi kastediyoruz?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Tabloda veya sohbette kullanılan &quot;kaç gün kaldı&quot; ifadesi çoğu zaman tam gün esasına göre yuvarlanmış
        bir sayıdır. Oysa sınav sabahı erken kalkan biri için o son günün hissi, gece yarısından sonra başka türlü
        akar. Bu yüzden üst bölümdeki sayaç, sınav anına kadar kalan süreyi saat–dakika–saniye ayrıntısıyla da
        gösterir; böylece hem makro hem mikro plan yapabilirsiniz.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Lisans, ön lisans, ortaöğretim ve AGS aynı sayaçta mı?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Hayır. Dört hedef farklı oturum ve farklı kılavuz satırlarına bağlıdır. Lisans, ön lisans ve ortaöğretim (lise)
        KPSS aynı kelime öbekleriyle aransa da başvuru koşulları ve aday profili ayrışır; AGS akademik başvuru hattında
        ayrı bir sınavdır. Bu sayfada her biri için ayrı kart görmek, yanlış tarihe kilitlenmenizi azaltır.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Rakam küçüldükçe panik yerine ritim</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Kalan gün azaldıkça deneme sıklığını artırmak cazip gelir; fakat uyku borcunu şişirmek çoğu zaman hatayı
        artırır. Son iki haftada &quot;yeni konu&quot; açmak yerine hata defterinizi inceltmek, genelde daha yüksek
        getiri sağlar. Sayaç sizi yarışa sokmamalı; yalnızca ritim tayininde size eşlik etmeli.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Resmi tarih nereden doğrulanır?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        ÖSYM&apos;nin ilgili yıl sınav takvimi ve sınav kılavuzu tek doğru kaynaktır. Sosyal medyada dolaşan ekran
        görüntüleri gün güncellenebilir; bu site ise yapılandırılmış tarihleri size hızlı göstermek için vardır.
        Tarih değişirse yapılandırmayı güncellemeniz gerekir; aksi halde kendi kendinize yanlış güven vermiş olursunuz.
      </p>

      <p className="mt-10 text-sm text-white/65">
        Diğer başlıklar (geri sayım, 2026, ne zaman, planlama) tek listede:{" "}
        <Link className="font-medium text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        .
      </p>
    </main>
  );
}
