import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "KPSS Sayaç için iletişim kanalları, geri bildirim, içerik düzeltmesi ve KVKK kapsamındaki başvuru bilgileri.",
};

const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function ContactPage() {
  return (
    <PolicyPage title="İletişim" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Bize ne için yazabilirsiniz?</h2>
        <p>
          Bu sayfa; teknik sorun bildirimi, içerik düzeltme talebi, telif veya alıntı konuları, erişilebilirlik
          önerileri ve KVKK kapsamındaki haklarınızın kullanımı gibi konularda iletişim kurmanız için hazırlanmıştır.
          Sınav sonucu itirazı, yerleştirme şikayeti veya ÖSYM sistemine giriş sorunları gibi konularda doğrudan sonuç
          üretecek bir destek hattı sunulmaz; bu tür işlemler ilgili kurumların resmi kanallarından yürütülmelidir.
          Yine de sitede yanlış yönlendiren bir ifade gördüyseniz bunu iletişim adresine iletmeniz, diğer adayların
          da doğru bilgiye ulaşmasına yardımcı olur.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. E-posta ile iletişim</h2>
        <p>
          Günlük operasyonel yoğunluk nedeniyle yanıt süreleri her zaman aynı olmayabilir; ancak mesajınızın konusu
          net olduğunda değerlendirme daha hızlı ilerler. E-postanızda mümkünse sayfa adresi, ekran görüntüsü (gerekliyse)
          ve kısa bir özet bulunsun. Kişisel veri içeren ekler göndermeden önce gerekli olup olmadığını kontrol edin;
          gereksiz kimlik bilgisi paylaşımından kaçınmak hem sizin hem de alıcı tarafın güvenliği için önemlidir.
        </p>
        {contact ? (
          <p>
            E-posta:{" "}
            <a className="text-cyan-300 underline-offset-4 hover:underline" href={`mailto:${contact}`}>
              {contact}
            </a>
          </p>
        ) : (
          <p className="rounded-xl border border-amber-400/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-100/90">
            Canlı ortamda iletişim e-postası tanımlanmalıdır. Yayıncı panelinde{" "}
            <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CONTACT_EMAIL</code> ortam
            değişkenini ekleyip yeniden dağıtım yapın.
          </p>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. KVKK ve kişisel veri başvuruları</h2>
        <p>
          Kişisel verilerin işlenmesi, saklama süreleri, üçüncü taraf hizmetler ve çerezler hakkında ayrıntılı bilgi
          gizlilik politikasında açıklanmıştır. Kanun kapsamındaki taleplerinizi iletmek için e-posta yolu tercih
          edilebilir; kimlik doğrulama ihtiyacı doğabilir ve bu durumda size hangi bilgilerin gerektiği tarafınıza
          bildirilir. İletişim adresine gönderilen mesajların içerikleri, yalnızca talebin yerine getirilmesi için
          gerekli ölçüde işlenir; amaç dışı kullanım hedeflenmez.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">4. Reklam ve iş birliği talepleri</h2>
        <p>
          Reklam ağı başvuruları ve benzeri süreçlerde site politikalarına uygunluk esastır. Kullanıcıyı yanıltan
          içerik, tıklama odaklı manipülasyon veya yanıltıcı “resmi” ibareleri içeren teklifler değerlendirilmez.
          İş birliği tekliflerinizde marka bilgisi, hedef sayfa ve beklenen yayın formatını özetlemeniz, değerlendirme
          sürecini hızlandırır. Her teklif kabul edileceği anlamına gelmez; kullanıcı güveni ve yasal uyum önceliklidir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">5. Sık görülen yanlış anlama</h2>
        <p>
          İletişim kanalı üzerinden gönderilen mesajlar, otomatik sınav kaydı oluşturmaz, ÖSYM sistemine müdahale etmez
          ve resmi bir sonuç bildirmez. Site yalnızca bilgilendirme ve pratik araçlar sunar; resmi işlemler ilgili
          kurumların kendi platformlarından yürütülür. Bu sınırı netleştirmek hem beklenti yönetimi hem de hukuki
          çerçeve açısından önemlidir.
        </p>
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/hakkimizda">
          Hakkımızda
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/gizlilik-politikasi">
          Gizlilik politikası
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kullanim-kosullari">
          Kullanım koşulları
        </Link>
      </p>
    </PolicyPage>
  );
}
