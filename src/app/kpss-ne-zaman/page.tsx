import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStack } from "@/components/CountdownStack";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS ne zaman? Sınav tarihleri ve kontrol listesi",
  description:
    "KPSS ve AGS ne zaman yapılır sorusu: hedef tarihler, ÖSYM’den doğrulama adımları ve canlı geri sayım.",
  keywords: ["kpss ne zaman", "kpss sınavı ne zaman", "ags ne zaman"],
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function KpssNeZamanPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS ne zaman?</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Referans: {today}</p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        &quot;Ne zaman&quot; sorusu çoğu zaman yalnızca takvim gününü değil; başvurunun ne zaman açıldığını, sınav
        belgesinin ne zaman indirileceğini ve sonuç sürecinin nasıl işlediğini de içerir. Bu sayfa, o geniş soruya
        kısa ve uygulanabilir bir çerçeve sunar: önce resmi kaynağı işaretler, sonra bu sitede yapılandırılmış hedef
        tarihlerle canlı süreyi gösterir. Unutmayın; kesin saat ve salon bilgisi yalnızca sınav günü öncesinde
        sisteminize düşen belgelerle kesinleşir.
      </p>

      <div className="my-10 w-full">
        <CountdownStack exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="text-xl font-semibold text-white">ÖSYM üzerinden doğrulama (kısa)</h2>
      <ul className="mt-4 list-inside list-disc space-y-2 text-base leading-relaxed text-white/80">
        <li>İlgili yılın sınav takvimini açın ve KPSS ile AGS satırlarını yan yana okuyun.</li>
        <li>Başvuru tarihleri ile sınav tarihini karıştırmayın; başvuru kapanmadan önce evrakları yükleyin.</li>
        <li>Engelli erişim ve özel durumlar için ayrı duyurular çıkabileceğinden kılavuzu baştan sona tarayın.</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold text-white">Sınav günü öncesi pratik rutin</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Tarihi bilmek yetmez; o güne uyku borcu taşımadan gelmek gerekir. Son haftada kahvaltıyı sınav saatine yakın
        yapmak, mideyi denemek ve yol süresini ölçmek küçük ama yüksek etkili adımlardır. Geri sayım kartları, bu
        rutini zihinde canlı tutmanıza yardım eder.
      </p>

      <h2 className="mt-8 text-xl font-semibold text-white">AGS ile KPSS aynı gün mü?</h2>
      <p className="mt-3 text-base leading-relaxed text-white/80">
        Genelde hayır. Akademik Giriş Sınavı ile KPSS farklı amaçlara hizmet eder ve takvimde ayrı yer tutar. İkisine
        birden hazırlanan adaylar için bu sayfadaki iki ayrı sayaç, planlama sırasında çakışmaları erken görmenizi
        sağlar.
      </p>

      <p className="mt-10 text-sm text-white/65">
        Tüm konular:{" "}
        <Link className="font-medium text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/">
          Ana sayfa
        </Link>
        .
      </p>
    </main>
  );
}
