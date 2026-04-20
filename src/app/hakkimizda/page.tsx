import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "KPSS Sayaç projesinin amacı, içerik ilkeleri ve resmi kaynak kullanımı yaklaşımı hakkında bilgi.",
};

export default function AboutPage() {
  return (
    <PolicyPage title="Hakkımızda" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Projenin amacı</h2>
        <p>
          KPSS Sayaç, adayların sınava kalan süreyi hızlıca takip etmesi ve deneme sonrası netlerini pratik biçimde
          görmesi için hazırlanmış bilgilendirme odaklı bir web uygulamasıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. İçerik yaklaşımı</h2>
        <p>
          Sayfalardaki metinler kullanıcı deneyimini kolaylaştırmak için sade tutulur. Tarih ve sınav kuralları zamanla
          değişebileceği için nihai doğrulama her zaman ÖSYM resmi duyurularından yapılmalıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Reklam ve şeffaflık</h2>
        <p>
          Site, sürdürülebilirlik amacıyla reklam gösterebilir. Reklam teknolojileri devreye alındığında çerezler ve
          veri işleme süreçleri hakkında ayrıntılar politika sayfalarında güncel tutulur.
        </p>
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/iletisim">
          İletişim
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/gizlilik-politikasi">
          Gizlilik politikası
        </Link>
      </p>
    </PolicyPage>
  );
}
