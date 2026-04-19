import type { Metadata } from "next";
import Link from "next/link";
import { PolicyPage } from "@/components/PolicyPage";

export const metadata: Metadata = {
  title: "Gizlilik politikası",
  description:
    "KPSS Sayaç sitesinde kişisel verilerin işlenmesi, çerezler, reklam teknolojileri ve KVKK kapsamındaki haklarınız.",
};

const contact = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

export default function PrivacyPolicyPage() {
  return (
    <PolicyPage title="Gizlilik politikası" lastUpdated="20 Nisan 2026">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">1. Amaç ve kapsam</h2>
        <p>
          Bu metin, KPSS Sayaç web sitesini ziyaret ettiğinizde hangi bilgilerin işlenebileceğini, hangi amaçlarla
          kullanıldığını ve hangi üçüncü taraflarla paylaşım söz konusu olabileceğini açıklar. Site; sınav tarihleri,
          geri sayım ve net hesaplama gibi bilgilendirici araçlar sunar. Kesin sınav kuralları ve resmi duyurular için
          Ölçme, Seçme ve Yerleştirme Merkezi Başkanlığı (ÖSYM) kaynakları esas alınmalıdır.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">2. Veri sorumlusu ve iletişim</h2>
        <p>
          KVKK açısından veri sorumlusu, siteyi işleten gerçek veya tüzel kişidir. Aşağıdaki iletişim yolu üzerinden
          başvurularınızı iletebilirsiniz:
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
            İletişim e-postası henüz yayınlanmadı. Yayına almadan önce{" "}
            <code className="rounded bg-black/30 px-1.5 py-0.5 text-xs">NEXT_PUBLIC_CONTACT_EMAIL</code> ortam
            değişkenini tanımlamanız önerilir.
          </p>
        )}
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">3. Hangi veriler işlenebilir?</h2>
        <p>
          Siteyi salt okunur şekilde kullandığınızda, barındırma sağlayıcısı ve güvenlik katmanları teknik loglar
          üretebilir (örneğin IP adresi, tarayıcı türü, istek zamanı, hata kayıtları). Bu kayıtların süresi ve
          içeriği altyapı sağlayıcınızın politikasına bağlıdır. Net hesaplama aracına girdiğiniz doğru/yanlış sayıları
          tarayıcınızda hesaplanır; bu proje kapsamında sunucuya gönderilmemesi hedeflenmiştir. İleride analitik veya
          kayıt özelliği eklenirse bu politika güncellenir ve gerekirse açık rıza veya bilgilendirme adımları eklenir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">4. Çerezler ve reklam teknolojileri</h2>
        <p>
          Google AdSense ve benzeri reklam hizmetleri, kişiselleştirilmiş veya kişiselleştirilmemiş reklamlar sunmak
          için çerez veya benzeri tanımlayıcılar kullanabilir. Google&apos;ın reklam ortakları hakkında daha fazla
          bilgi için Google Gizlilik ve Şartlar sayfasını inceleyebilirsiniz. Ayrıntılı çerez türleri ve tercihlerinizi
          nasıl yönetebileceğiniz için sitemizdeki{" "}
          <Link href="/cerez-politikasi" className="text-cyan-300 underline-offset-4 hover:underline">
            çerez politikası
          </Link>{" "}
          belgesine bakın.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">5. Hukuki sebepler ve süreler</h2>
        <p>
          Teknik güvenlik ve meşru menfaat (yetkisiz erişimi engelleme, kötüye kullanımı tespit etme) gerekçesiyle sınırlı
          süreyle log tutulması yaygın bir uygulamadır. Reklam ve ölçümle ilgili işlemlerde ilgili sağlayıcıların
          açıkladığı hukuki dayanak ve saklama süreleri geçerlidir. Veri sorumlusunun yasal yükümlülükleri gereği
          saklaması gereken bilgiler, mevzuatta öngörülen süre boyunca muhafaza edilebilir.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">6. KVKK kapsamındaki haklarınız</h2>
        <p>
          Kanun&apos;un ilgili maddeleri uyarınca; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse
          buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, yurt
          içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmişse düzeltilmesini
          isteme, kanunda öngörülen şartlar çerçevesinde silinmesini veya yok edilmesini isteme, aktarılan üçüncü
          kişilere bildirilmesini isteme, münhasıran otomatik sistemler ile analiz edilmesi suretiyle aleyhinize bir
          sonucun ortaya çıkmasına itiraz etme ve kanuna aykırı işlenmesi sebebiyle zarara uğramanız hâlinde zararın
          giderilmesini talep etme haklarına sahipsiniz. Başvurularınızı iletişim kanalına yazılı olarak iletebilirsiniz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">7. Üçüncü taraf bağlantılar</h2>
        <p>
          Sitede ÖSYM gibi dış sitelere bağlantılar bulunabilir. Bu sitelerin gizlilik uygulamalarından veri sorumlusu
          sorumlu değildir. Bağlantıyı tıkladığınızda ilgili sitenin politikasını okumanızı öneririz.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-white">8. Güncellemeler</h2>
        <p>
          Site özellikleri veya yasal düzenlemeler değiştikçe bu politika güncellenebilir. Önemli değişikliklerde sayfa
          üzerinde yeni yayın tarihi gösterilir. Düzenli aralıklarla bu sayfayı kontrol etmeniz iyi bir uygulamadır.
        </p>
      </section>

      <p className="pt-4 text-sm text-white/55">
        İlgili:{" "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/cerez-politikasi">
          Çerez politikası
        </Link>
        {" · "}
        <Link className="text-cyan-300 underline-offset-4 hover:underline" href="/kullanim-kosullari">
          Kullanım koşulları
        </Link>
      </p>
    </PolicyPage>
  );
}
