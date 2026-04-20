import Link from "next/link";
import { SiteMapInline } from "@/components/SiteMapInline";
import { CountdownStack } from "@/components/CountdownStack";
import { NetCalculator } from "@/components/NetCalculator";
import { AdSenseSlot } from "@/components/AdSenseSlot";
import { EXAMS } from "@/config/exams";
import { longTurkishDate } from "@/lib/dates";

const slotHome = process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME ?? "";

export default function HomePage() {
  const today = longTurkishDate();

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/25 via-slate-950 to-slate-950" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent" />
        <div className="relative mx-auto flex w-full max-w-[min(100%,88rem)] flex-col items-stretch gap-10 px-3 pb-16 pt-10 sm:gap-12 sm:px-5 sm:pb-20 sm:pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm text-cyan-100/80">Bugün: {today}</p>
            <h1 className="mt-2 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              KPSS (lisans, ön lisans, ortaöğretim) ve AGS geri sayım
            </h1>
            <p className="mt-4 text-pretty text-base leading-relaxed text-white/75 sm:text-lg">
              Lisans, ön lisans, ortaöğretim (lise) KPSS ile AGS tarihleri yan yana değil; alt alta, mobilde okunaklı
              ve sade bir düzenle sunulur. Aşağıdaki sayaçlar İstanbul (UTC+3) takvim gününe göre kalan süreyi günceller.
            </p>
          </div>
          <div className="w-full">
            <CountdownStack exams={EXAMS} />
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-3 py-8 sm:px-5 lg:px-8">
        <AdSenseSlot slot={slotHome} className="mb-10" />
      </div>

      <section className="border-t border-white/10 bg-white text-zinc-900">
        <div className="mx-auto max-w-3xl px-4 py-14 sm:py-16">
          <article className="space-y-4 text-base leading-relaxed text-zinc-700">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Neden ayrı sayaçlar?</h2>
            <p>
              Kamu personel seçme sınavına hazırlanan adayların en çok ihtiyaç duyduğu bilgi, doğru sınav gününe göre
              kalan süreyi görmektir. Lisans, ön lisans ve ortaöğretim (lise) KPSS oturumları farklı aday grupları ve
              takvim dilimlerine sahiptir; AGS ise akademik başvurular için ayrı bir sınav takvimidir. Bu yüzden tek bir
              genel sayaç yerine, her hedef için ayrı kart göstererek kafa karışıklığını azaltmayı hedefledik.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Geri sayım nasıl hesaplanıyor?</h3>
            <p>
              Gün farkı, tam gün esasına göre hesaplanır; saat dilimi olarak Avrupa/İstanbul kullanılır. Sınav günü
              geldiğinde değer sıfıra iner. Kesin oturum saatleri ve salon bilgileri için her zaman ÖSYM&apos;nin
              güncel kılavuzunu esas alın; buradaki tarihler yayındaki özet takvime göre yapılandırılmıştır ve resmi
              değişikliklerde güncellenmelidir.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Çalışma planına nasıl yansır?</h3>
            <p>
              Kalan gün sayısı tek başına motivasyon sağlar; asıl fayda, haftalık tekrar bloklarını ve deneme
              sıklığını gerçekçi biçimde ayarlamaktır. Net hesaplama bölümü, deneme sonrası hızlı karşılaştırma yapmanız
              için pratik bir özet sunar; nihai puan dönüşümü ise sınav yılındaki katsayılar ve kurallarla belirlenir.
            </p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Site haritası ve içerik</h3>
            <p>
              Arama motorlarında sürdürülebilir görünürlük için yalnızca sayaç yetmez; farklı arama niyetleri için ayrı
              sayfalar da vardır (&quot;kaç gün kaldı&quot;, &quot;geri sayım&quot;, &quot;2026 KPSS&quot; vb.). Üst
              menüde en çok aranan birkaç bağlantı vardır; kalanları aşağıdaki site haritası satırında, footer’da ve{" "}
              <code className="rounded bg-zinc-200 px-1 text-xs">sitemap.xml</code> içinde bulabilirsiniz. Net
              hesaplama sayfası formülü ve sınırlarını açıkça anlatır.
            </p>
            <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3">
              <SiteMapInline variant="onLight" />
            </div>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">Şeffaflık ve reklam politikaları</h3>
            <p>
              Ziyaretçilerin haklarını netleştirmek ve üçüncü taraf reklam teknolojilerinde beklentiyi yönetmek için
              ayrı yasal sayfalar tutuyoruz. Kişisel verilerin işlenmesi, çerezler ve hizmetin hukuki çerçevesi şu
              belgelerde açıklanır:{" "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/gizlilik-politikasi">
                gizlilik politikası
              </Link>
              {", "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/cerez-politikasi">
                çerez politikası
              </Link>{" "}
              ve{" "}
              <Link className="font-medium text-cyan-700 underline-offset-4 hover:underline" href="/kullanim-kosullari">
                kullanım koşulları
              </Link>
              . Bu sayfalar yalnızca şablon değil; siteye özgü dil ve kapsamla yazıldı; yayıncı olarak iletişim
              e-postanızı ortam değişkeniyle eklemeniz, KVKK başvurularında izlenebilirlik sağlar.
            </p>
          </article>
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-zinc-50 py-14 sm:py-16">
        <div className="mx-auto flex max-w-5xl flex-col items-center px-4">
          <NetCalculator />
        </div>
      </section>
    </>
  );
}
