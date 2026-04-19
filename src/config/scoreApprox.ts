import type { ExamKey } from "./exams";

/**
 * ÖSYM’nin yıllık kılavuzundaki gerçek puan modelinin yerini tutmaz.
 * Deneme karşılaştırması için doğrusal kablo: skor ≈ base + perNet × (GY+GK toplam net).
 * Resmi kılavuz yayınlandıkça bu sayıları kendi ölçümünüzle güncelleyin.
 */
export type ApproxScoreParams = {
  title: string;
  base: number;
  perNet: number;
  clampMin: number;
  clampMax: number;
  footnote: string;
};

export const SCORE_APPROX: Record<ExamKey, ApproxScoreParams> = {
  kpss_lisans: {
    title: "KPSS Lisans",
    base: 49.5,
    perNet: 0.352,
    clampMin: 50,
    clampMax: 92,
    footnote:
      "Lisans KPSS’de ham puan ve standart puan adımları vardır; burada yalnızca toplam nete bağlı basit bir ölçek gösterilir.",
  },
  kpss_onlisans: {
    title: "KPSS Ön Lisans",
    base: 48.8,
    perNet: 0.338,
    clampMin: 49,
    clampMax: 90,
    footnote:
      "Ön lisans oturumunda dağılım ve katsayılar farklı olabilir; sonuç kabaca ön lisans eğrisine göre hafif düşük tutuldu.",
  },
  ags: {
    title: "AGS",
    base: 47.5,
    perNet: 0.315,
    clampMin: 48,
    clampMax: 88,
    footnote:
      "AGS test yapısı ve puan bileşenleri KPSS’den farklıdır. Aynı GY/GK net girişi yalnızca kıyaslama içindir; kesin skor için ÖSYM AGS kılavuzu esas alınmalıdır.",
  },
};
