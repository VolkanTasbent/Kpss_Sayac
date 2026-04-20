import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStackHost } from "@/components/CountdownStackHost";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS geri sayım — canlı süre",
  description:
    "KPSS (lisans, ön lisans, ortaöğretim) ve AGS için geri sayım: ay, gün, saat, dakika ve saniye.",
  keywords: ["kpss geri sayım", "kpss sayaç", "kpss canlı geri sayım"],
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function KpssGeriSayimPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS geri sayım</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Canlı güncelleme: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        &quot;Geri sayım&quot; kelimesi çoğu zaman görsel bir araca indirgenir; oysa asıl mesele, sürenin sizi
        aceleye mi yoksa disipline mi taşıdığıdır. Bu sayfada gördüğünüz saniye saniye akan rakamlar, dikkatinizi
        parçalamak için değil; blok çalışma (örneğin 50 dakika odak + 10 dakika nefes) disiplinine çerçeve çizmek
        için vardır. Aşağıdaki sayaçlar üç farklı hedefi aynı ekranda tutar; böylece yanlış sınavı mentally
        hedefleme riskini azaltırsınız.
      </p>

      <div className="my-10 w-full">
        <CountdownStackHost exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">Saniye neden önemli görünür?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        İnsan beyni, büyük hedefe göre küçük kazanımları küçümser; oysa sınav günü performansı çoğu zaman son
        haftalardaki uyku düzeni ve stres yönetimiyle belirlenir. Saniye gösterimi, &quot;zaman gerçekten akıyor&quot;
        hissini hatırlatır; bu da ertelemeyi azaltabilir. Ancak sayaca bakıp endişeyi beslemek yerine, her oturum
        sonunda tek cümlelik özet yazmayı deneyin: bugün neyi netleştirdim, neyi yarın bıraktım?
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Üç sayaç yan yana değil, alt alta</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Mobil kullanımda okunabilirlik için kartlar alt alta dizilir. Lisans, ön lisans, ortaöğretim KPSS ve AGS farklı
        başlıklar olduğundan, hangi hedefe odaklandığınızı görsel olarak seçmiş olursunuz. Oturum öncesi ekran
        görüntüsü alıp kendinize hatırlatma kurmak da yaygın bir yöntemdir; fakat tarih değişirse eski görüntü
        yanıltıcı olabilir.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">Geri sayım + deneme analizi</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Net hesaplama aracı ile deneme sonrası toplam netinizi hızlıca kayda geçirmek, geri sayımın yalnızca
        duygusal değil ölçülebilir tarafını güçlendirir. Aynı neti iki farklı haftada yakaladıysanız, ikinci seferde
        süreyi kısaltabildiyseniz bu somut bir gelişmedir. Rakamın düşmesi kötü haber değildir; ölçümünüz iyileşiyorsa
        trend iyidir.
      </p>

      <p className="mt-10 text-sm text-white/65">
        Tüm konu sayfaları:{" "}
        <Link className="font-medium text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        .
      </p>
    </main>
  );
}
