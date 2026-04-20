import type { Metadata } from "next";
import Link from "next/link";
import { NetCalculator } from "@/components/NetCalculator";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS net hesaplama",
  description:
    "GY/GK neti, yaklaşık standart puan; lisans (P10), ön lisans (P93), ortaöğretim (P94); AGS için ayrı test uyarısı.",
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL ?? "";

export default function KpssNetHesaplamaPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS net hesaplama</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Tarih: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Net kuralı yaygın olarak dört yanlışın bir doğruyu götürmesi şeklindedir. Araç, GY ve GK netlerinden önce
        basit bir standart puan kabı üretir; ardından lisans için P10 yapısına benzeyen (EB girilmediğinde EB
        standart için 50 varsayılan) iki nokta kalibrasyonuyla tahmini gösterge üretir. Ön lisans{" "}
        <strong className="font-semibold text-white">P93</strong> ve ortaöğretim{" "}
        <strong className="font-semibold text-white">P94</strong> için de aynı standart kabı üzerinde ASP (%50 GY +
        %50 GK) ve ayrı iki nokta doğrusu kullanılır (düşük uçta tablo özeti, yüksek uçta lisansla aynı referans
        netleri). AGS farklı
        alt testlerden oluşur; bu sayfadaki GY/GK alanlarından resmi AGS puanı çıkmaz. Kesin sonuç yalnızca ÖSYM /
        kılavuzdadır.
      </p>

      <div className="my-10 flex justify-center text-zinc-900">
        <NetCalculator />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">Formülün özü</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Her bölüm için net ≈ doğru − (yanlış ÷ 4). Boş bıraktığınız sorular genelde neti değiştirmez. Alan bilgisi,
        öğretmenlik testleri veya farklı test yapıları bu sayfanın kapsamı dışındadır; çünkü soru dağılımı ve kurallar
        branşa göre değişebilir.
      </p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Deneme sonrası not tutmayı unutmayın: hangi konuda hız kaybettiniz, hangi soru tipinde tekrarlı hata yaptınız?
        Net rakamı tek başına yeterli değildir; hata türünü iyileştirdiğinizde puan eğrisi doğal olarak yükselir.
      </p>

      <p className="mt-8 text-sm text-white/60">
        Geri dön:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/">
          ana sayfa
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-sayac">
          sayaç
        </Link>
      </p>
    </main>
  );
}
