import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Kullanım koşulları",
  description:
    "KPSS Sayaç hizmetinin kapsamı, sorumluluk reddi, fikri mülkiyet ve uyuşmazlık çözümüne ilişkin kurallar.",
};

export default function TermsPage() {
  return (
    <PolicyPage title="Kullanım koşulları" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Hizmetin tanımı</h2>
        <p>
          KPSS Sayaç; sınavlara kalan süreyi göstermeye yönelik geri sayım bileşenleri ve KPSS Genel Yetenek–Genel
          Kültür testleri için basit net hesaplama aracı sunar. Sunulan bilgiler bilgilendirme amaçlıdır; bağlayıcı bir
          danışmanlık, hukuki görüş veya resmi duyuru niteliği taşımaz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Doğruluk ve güncellik</h2>
        <p>
          Sınav tarihleri, başvuru pencereleri ve puanlama kuralları resmi makamlarca değiştirilebilir. Site üzerindeki
          tarih yapılandırması, yayındaki özet bilgilere göre güncellenmelidir. Kullanıcı, herhangi bir işlem veya
          karar vermeden önce ÖSYM ve ilgili kurumların güncel kılavuzlarını doğrudan incelemekle yükümlüdür.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Net hesaplama aracı</h2>
        <p>
          Net hesaplama, yaygın çoktan seçmeli formülü örnekler. Gerçek sınavda soru iptali, cevap anahtarı değişikliği
          veya farklı test yapıları sonucu değiştirebilir. Araçtan elde edilen sonuçların doğruluğu, eksiksizliği veya
          belirli bir sonucu garanti ettiği iddia edilemez.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">4. Kabul edilebilir kullanım</h2>
        <p>
          Siteye zarar verecek otomasyon, aşırı istek üreten botlar, güvenlik açıklarını tarama veya başkalarının
          erişimini engelleyecek davranışlar yasaktır. Reklam geliri modelinde, kendi reklamlarınıza veya üçüncü
          kişilere tıklatma yönlendirmesi yapmak gibi politika ihlalleri oluşturabilecek eylemlerden kaçınılmalıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">5. Fikri mülkiyet</h2>
        <p>
          Arayüz metinleri, düzen ve özgün içerikler telif hakkı ve ilgili mevzuatla korunabilir. İzinsiz olarak tüm
          siteyi kopyalayıp başka alan adında yayımlamak, arama motorlarında kötü niyetli çoğaltma oluşturmak veya
          yanıltıcı benzer alan adları kullanmak kabul edilemez. Makul alıntılar için kaynak göstermeniz ve izin
          gerektiren durumlarda yazılı onay almanız gerekir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">6. Sorumluluğun sınırlandırılması</h2>
        <p>
          Site &quot;olduğu gibi&quot; sunulur. Veri sorumlusu; dolaylı zarar, kâr kaybı, sınav sonucuna ilişkin beklenti
          farkı veya üçüncü taraf hizmet kesintilerinden doğan zararlardan, mevzuatın izin verdiği ölçüde sorumlu
          tutulamaz. Bazı hukuk düzenlemeleri belirli garantilerin hariç tutulmasına izin vermeyebilir; bu durumda
          sınırlama, izin verilen azami ölçüde uygulanır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">7. Ücret ve erişim</h2>
        <p>
          Site ücretsiz erişime açık tutulabilir; reklam gösterimi veya ileride eklenebilecek ücretli özellikler bu
          maddede ayrıca duyurulabilir. Ücretli bir özellik eklendiğinde ödeme, iptal ve iade koşulları ayrı bir metinle
          paylaşılır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">8. Uygulanacak hukuk</h2>
        <p>
          Uyuşmazlıklarda Türkiye Cumhuriyeti kanunları uygulanır. Yetkili mahkeme ve icra daireleri, veri sorumlusunun
          yerleşim yerine veya mevzuatta öngörülen düzenlemelere göre belirlenir.
        </p>
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/gizlilik-politikasi">
          Gizlilik politikası
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/cerez-politikasi">
          Çerez politikası
        </Link>
      </p>
    </PolicyPage>
  );
}
