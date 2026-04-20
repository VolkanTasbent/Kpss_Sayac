import type { Metadata } from "next";
import Link from "next/link";
import { CountdownStackHost } from "@/components/CountdownStackHost";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate, wholeDaysUntilCalendarEnd } from "@/lib/dates";

export const metadata: Metadata = {
  title: "KPSS 2026 kaç gün kaldı?",
  description:
    "2026 KPSS lisans, ön lisans, ortaöğretim ve AGS için İstanbul takvimine göre kalan günler. Tarihleri ÖSYM ile doğrulayın.",
};

const slot = process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE ?? "";

export default function Kpss2026KacGunKaldiPage() {
  const today = longTurkishDate();

  return (
    <main className="mx-auto max-w-6xl px-3 py-12 sm:px-5 sm:py-16 lg:px-8">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">KPSS 2026 kaç gün kaldı?</h1>
      <p className="mt-3 text-sm text-cyan-100/80">Güncel tarih: {today}</p>
      <p className="mt-6 text-base leading-relaxed text-white/80">
        Bu sayfa özellikle &quot;kaç gün&quot; niyetiyle arama yapan adaylar içindir: elimizdeki hedef tarihlere göre
        kalan tam gün sayısını net biçimde gösteririz. Lisans, ön lisans ve ortaöğretim KPSS ile AGS farklı başlıklar
        olduğundan, her
        biri için ayrı sayaç görürsünüz. Tarihler yayındaki özet takvime göre yapılandırılmıştır; resmi değişiklik
        olursa yapılandırmayı güncellemeniz gerekir.
      </p>

      <div className="my-10 w-full">
        <CountdownStackHost exams={EXAMS} />
      </div>

      <AdSenseSlot slot={slot} className="mb-10" />

      <h2 className="mt-4 text-xl font-semibold text-white">Tablo: hedef ve kalan gün</h2>
      <div className="mt-4 overflow-hidden rounded-2xl border border-white/10">
        <table className="w-full text-left text-sm text-white/85">
          <thead className="bg-white/5 text-xs uppercase tracking-wide text-white/55">
            <tr>
              <th className="px-4 py-3">Sınav</th>
              <th className="px-4 py-3">Tarih</th>
              <th className="px-4 py-3">Kalan gün</th>
            </tr>
          </thead>
          <tbody>
            {EXAMS.map((e) => (
              <tr key={e.key} className="border-t border-white/10">
                <td className="px-4 py-3 font-medium text-white">{e.title}</td>
                <td className="px-4 py-3">
                  <time dateTime={e.dateISO}>{e.dateISO}</time>
                </td>
                <td className="px-4 py-3 tabular-nums">{wholeDaysUntilCalendarEnd(e.dateISO)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-base leading-relaxed text-white/80">
        &quot;Kaç gün kaldı&quot; sorusunun pratik cevabı, takvim günü farkıdır; oturum saatine göre saat saat geri
        sayım isteyenler için de sayaçlar gün sonunda sıfırlanacak şekilde tutarlı kalır. Deneme maratonunda bu sayıyı
        haftalık hedeflerinize bölmek, çalışma temposunu sürdürülebilir kılar.
      </p>

      <p className="mt-6 text-base leading-relaxed text-white/80">
        Diğer konular ve arama sayfaları:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-rehber">
          KPSS rehberi
        </Link>
        {" "}
        (tek listede tüm başlıklar). Net için{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kpss-net-hesaplama">
          hesaplama sayfası
        </Link>
        .
      </p>
    </main>
  );
}
