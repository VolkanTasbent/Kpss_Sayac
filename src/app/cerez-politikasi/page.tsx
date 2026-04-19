import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Çerez politikası",
  description:
    "KPSS Sayaç sitesinde kullanılan çerez türleri, Google reklamları ve tarayıcı ayarlarıyla tercih yönetimi.",
};

export default function CookiePolicyPage() {
  return (
    <PolicyPage title="Çerez politikası" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Çerez nedir?</h2>
        <p>
          Çerezler, ziyaret ettiğiniz site tarafından tarayıcınıza kaydedilen küçük metin dosyalarıdır. Oturumun
          sürdürülmesi, dil tercihi, güvenlik veya ölçüm gibi amaçlarla kullanılabilir. Benzer işlev gören piksel,
          yerel depolama ve oturum depolama teknolojileri de aynı politika çerçevesinde değerlendirilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Bu sitede hangi çerezler görülebilir?</h2>
        <p>
          Temel site işlevleri için zorunlu sayılabilecek teknik çerezler (örneğin tercihinizi hatırlamak) ile üçüncü
          taraf çerezleri birlikte görülebilir. Özellikle Google AdSense etkinleştirildiğinde, reklam gösterimi ve
          dolandırıcılıkla mücadele amaçlı çerezler devreye girebilir. Bu çerezlerin bir kısmı kişiselleştirilmiş reklam
          deneyimi için kullanılabilir; bir kısmı ise istatistiksel veya teknik amaçlıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Birinci taraf ve üçüncü taraf ayrımı</h2>
        <p>
          Birinci taraf çerezleri, adres çubuğunda gördüğünüz alan adı üzerinden yerleştirilir. Üçüncü taraf çerezleri ise
          içerik veya reklam sağlayıcısının alan adı üzerinden okunur. AdSense gibi programlarda üçüncü taraf çerezleri
          yaygındır; bu çerezlerin yönetimi hem tarayıcı ayarlarınıza hem de ilgili sağlayıcının sunduğu araçlara bağlıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">4. Çerezleri nasıl yönetirsiniz?</h2>
        <p>
          Tarayıcınızın gizlilik bölümünden çerezleri silmeyi, üçüncü taraf çerezlerini engellemeyi veya site bazlı
          istisnalar tanımlamayı seçebilirsiniz. Mobil işletim sistemlerinde de benzer kontroller bulunur. Reklam
          kişiselleştirmesini sınırlamak için cihaz ayarlarınızda ilgili seçenekleri kapatabilir veya sektörde kullanılan
          reklam tercih yönetim araçlarını inceleyebilirsiniz. Unutmayın: tüm çerezleri kapatmak, sitenin bazı bölümlerinin
          düzgün çalışmamasına yol açabilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">5. Saklama süreleri</h2>
        <p>
          Çerezlerin ömrü; oturum çerezi gibi tarayıcı kapanınca silinenlerden, ay veya yıl süreli kalıcı çerezlere kadar
          değişebilir. Üçüncü taraf çerezlerinin süreleri ilgili sağlayıcının politikasında açıklanır. Bu sayfa genel
          bilgilendirme sağlar; teknik envanter çıkarmak isterseniz tarayıcı geliştirici araçları üzerinden ağ
          isteklerini inceleyebilirsiniz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">6. Politika değişiklikleri</h2>
        <p>
          Reklam yapılandırması veya kullanılan teknolojiler değiştikçe bu metin güncellenebilir. Önemli değişikliklerde
          üst kısımdaki &quot;Son güncelleme&quot; tarihi yenilenir. AdSense başvurusu veya denetimi sırasında Google
          tarafından talep edilen ek açıklamalar, bu politikanın eki olarak sayfaya eklenebilir.
        </p>
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
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
