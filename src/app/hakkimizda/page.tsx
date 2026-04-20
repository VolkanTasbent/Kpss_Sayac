import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description:
    "KPSS Sayaç projesinin amacı, içerik ilkeleri, güncelleme yaklaşımı ve kullanıcı odaklı düzen hakkında bilgi.",
};

export default function AboutPage() {
  return (
    <PolicyPage title="Hakkımızda" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Bu site ne işe yarar?</h2>
        <p>
          KPSS Sayaç; Kamu Personel Seçme Sınavı hazırlığında en sık sorulan sorulardan biri olan “sınava ne kadar
          zaman kaldı?” sorusuna pratik bir cevap sunmak için hazırlanmıştır. Lisans, ön lisans ve ortaöğretim (lise)
          adayları ile Akademik Personel ve Lisansüstü Eğitimi Giriş Sınavı (AGS) takvimini takip eden kullanıcılar,
          farklı sınav hedefleri için ayrı ayrı geri sayım kartlarıyla kalan süreyi tek ekranda görebilir. Ayrıca Genel
          Yetenek ve Genel Kültür testlerine yönelik net hesaplama aracı, deneme sonrası hızlı bir özet üretmek isteyen
          adaylar için sade bir arayüz sunar.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. İçerik ve doğruluk ilkeleri</h2>
        <p>
          Sitede yer alan sınav tarihleri ve açıklamalar bilgilendirme amaçlıdır. Resmi başvuru tarihleri, oturum
          saatleri, salon kuralları, iptal–iade süreçleri ve puanlama düzeni gibi konularda bağlayıcı bilgi kaynağı
          Ölçme, Seçme ve Yerleştirme Merkezi Başkanlığı (ÖSYM) ve ilgili kurumların güncel kılavuzlarıdır. Bu nedenle
          içerikleri mümkün olduğunca sade tutarak okunabilirlik önceliyoruz; aynı zamanda kullanıcıyı yanlış bir
          güvene sürüklememek için resmi kaynaklara yönlendiren ifadeleri sayfalarda açıkça tekrarlıyoruz. Takvimde
          değişiklik olduğunda yapılandırmanın güncellenmesi gerekir; güncellenmemiş bir tarih kullanıcıya zarar
          verebileceği için düzenli kontrol önerilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Kullanıcı deneyimi ve erişilebilirlik</h2>
        <p>
          Mobil cihazlarda sayaçların alt alta okunabilir olması, masaüstünde de aynı düzenin korunması ve gereksiz
          teknik jargonun azaltılması tasarımın temel parçalarıdır. Geri sayım bileşenleri, İstanbul saat dilimine
          göre kalan süreyi gösterecek şekilde yapılandırılmıştır; böylece Türkiye içindeki çoğu kullanıcı için günlük
          planlama daha tutarlı hale gelir. Net hesaplama bölümünde girilen doğru ve yanlış sayıları tarayıcıda
          hesaplanır; bu sayede sınav pratiği için hızlı geri bildirim alınır. Sonuçların resmi puanla birebir
          örtüşeceği iddia edilmez; nihai değerlendirme yine ÖSYM sonuçlarına dayanır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">4. Reklam, çerezler ve şeffaflık</h2>
        <p>
          Siteyi sürdürülebilir kılmak için üçüncü taraf reklam teknolojileri kullanılabilir. Reklam gösterimi
          etkinleştirildiğinde çerez ve benzeri tanımlayıcılar devreye girebilir. Bu konularda kullanıcı beklentisini
          netleştirmek için çerez politikası ve gizlilik politikası sayfaları ayrı ayrı tutulur. Reklam tıklamalarını
          yapay şekilde artırmaya yönelik yöntemler önerilmez; hem kullanıcı güvenini zedeler hem de yayıncı programları
          açısından risk oluşturur. Reklam ayarları kapalıyken bile temel içerik erişilebilir kalmaya devam eder.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">5. Geri bildirim ve geliştirme</h2>
        <p>
          Yazım hatası, yanlış anlaşılan bir ifade veya güncellenmesi gereken bir tarih fark ederseniz iletişim
          kanalından bize ulaşabilirsiniz. Geri bildirimler, mümkün olduğunca makul sürelerde değerlendirilir; her
          talebin teknik olarak uygulanabilir olacağı garanti edilmez ancak kullanıcı güvenliği ve doğruluk hedefiyle
          önceliklendirilir. Site haritası ve rehber sayfası, farklı arama niyetleri için hazırlanmış içeriklere hızlı
          geçiş sağlar; ana deneyim ise ana sayfadaki sayaç ve net aracı etrafında toplanır.
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
