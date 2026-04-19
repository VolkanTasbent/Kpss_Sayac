import type { Metadata } from "next";
import Link from "next/link";
import { NetCalculator } from "@/components/NetCalculator";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS net hesaplama",
  description:
    "Genel Yetenek ve Genel Kültür için net hesaplama; lisans, ön lisans ve AGS için yaklaşık puan gösterimi (bilgilendirme).",
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_TOOL ?? "";

export default function KpssNetHesaplamaPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS net hesaplama</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Tarih: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Çoktan seçmeli testlerde en yaygın yaklaşım, her dört yanlışın bir doğruyu götürdüğü varsayımıdır. Bu sayfadaki
        hesaplayıcı, Genel Yetenek ve Genel Kültür için ayrı ayrı doğru ve yanlış sayılarınızı alıp toplam neti
        gösterir. Ayrıca seçtiğiniz sınav türüne (lisans, ön lisans veya AGS) göre, yapılandırılabilir bir doğrusal
        kablo ile yaklaşık bir puan gösterilir; bu puan ÖSYM&apos;nin resmi hesabının yerine geçmez. Gerçek
        puanınız; sınav yılındaki kurallar, soru iptalleri ve ÖSYM&apos;nin açıkladığı dönüşüm tablolarıyla şekillenir.
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
