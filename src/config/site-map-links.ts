/**
 * İç link + sitemap + rehber listesi için tek kaynak.
 * Yeni sayfa: buraya ekleyin; sitemap ve site haritası satırı otomatik güncellenir.
 */
export const SITE_MAP_LINKS = [
  {
    href: "/kpss-kac-gun-kaldi",
    label: "KPSS kaç gün kaldı",
    hint: "Tam gün ve süre odaklı açıklama + sayaç",
  },
  {
    href: "/kpss-ne-kadar-kaldi",
    label: "KPSS ne kadar kaldı",
    hint: "Haftalık plan ve süre yönetimi",
  },
  {
    href: "/kpss-geri-sayim",
    label: "KPSS geri sayım",
    hint: "Canlı süre ve odak önerileri",
  },
  {
    href: "/kpss-sayac",
    label: "KPSS sayacı",
    hint: "Kısa araç sayfası ve SSS",
  },
  {
    href: "/kpss-2026-kac-gun-kaldi",
    label: "KPSS 2026 kaç gün kaldı",
    hint: "Yıl + tablo ile özet",
  },
  {
    href: "/2026-kpss-kac-gun-kaldi",
    label: "2026 KPSS kaç gün kaldı",
    hint: "Alternatif kelime sırası, yıl odaklı",
  },
  {
    href: "/kpss-ne-zaman",
    label: "KPSS ne zaman",
    hint: "Tarih doğrulama ve sınav günü rutini",
  },
  {
    href: "/kpss-ortaogretim",
    label: "KPSS ortaöğretim (lise)",
    hint: "Lise KPSS sayacı ve net yönlendirmesi",
  },
  {
    href: "/kpss-net-hesaplama",
    label: "Net hesaplama",
    hint: "GY/GK neti ve tahmini puan seçenekleri",
  },
  {
    href: "/kpss-rehber",
    label: "Tüm konular (rehber)",
    hint: "Bu liste sayfası",
  },
] as const;

export type SiteMapLink = (typeof SITE_MAP_LINKS)[number];

/**
 * Üst şerit navigasyonu — `SITE_MAP_LINKS` ile aynı path’ler (404 veya yanlış etiket olmasın).
 */
export const HEADER_NAV_LINKS = [
  { href: "/", label: "Ana sayfa" },
  { href: "/kpss-sayac", label: "KPSS sayacı" },
  { href: "/kpss-net-hesaplama", label: "Net hesaplama" },
  { href: "/kpss-rehber", label: "Tüm konular" },
  { href: "/kpss-kac-gun-kaldi", label: "KPSS kaç gün kaldı" },
] as const;

export const LEGAL_SITEMAP_PATHS = [
  "/hakkimizda",
  "/iletisim",
  "/gizlilik-politikasi",
  "/cerez-politikasi",
  "/kullanim-kosullari",
] as const;

export function allPublicSitemapPaths(): string[] {
  return ["", ...SITE_MAP_LINKS.map((l) => l.href), ...LEGAL_SITEMAP_PATHS];
}

/** Rehber kartlarında kendine döngü olmasın. */
export const SITE_MAP_LINKS_FOR_REHBER = SITE_MAP_LINKS.filter((l) => l.href !== "/kpss-rehber");
