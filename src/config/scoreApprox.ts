import type { ExamKey } from "./exams";

/**
 * Yaygın hesaplama sitelerinin özetlediği mantık (ÖSYM resmi değildir):
 * - Net = doğru − yanlış/4 (kılavuzdaki çoktan seçmeli kuralı).
 * - Standart puan kabı: (net − tipik ortalama) / tipik ss × 10 + 50.
 * - Lisans P10: GY %30 + GK %30 + Eğitim Bilimleri %40 (EB yokken EB standart için 50 varsayılır).
 * - Ön lisans P93: GY ve GK eşit ağırlıkla birleştirilir denir.
 * - Ortaöğretim: çoğunlukla GY+GK üzerinden puan türleri (ör. P94) anlatılır; kılavuz yılına göre ağırlıklar değişir.
 * - AGS: çok alt test (sözel, sayısal, tarih vb.); bu sayfadaki GY/GK alanlarından resmi AGS puanı çıkmaz.
 *
 * μ ve σ: **2024-KPSS Lisans** Genel Yetenek / Genel Kültür testlerine ilişkin ÖSYM yayınlı ortalama net ve net
 * standart sapması (ÖSYM duyuru sayfası ve ek PDF, 2024-08-23). Kaynak:
 * https://www.osym.gov.tr/TR,30634/2024-kpss-lisans-genel-yetenek-genel-kultur-egitim-bilimleri-alan-bilgisi-ve-oabt-sinav-sonuclarina-iliskin-sayisal-bilgiler.html
 * Yaklaşık standart puan kabı buna göre hizalanır; gösterge puanı yine ÖSYM’nin tam dönüşümü değildir.
 */
/** 2024 GY — ÖSYM ortalama net (sayısal bilgiler tablosu). */
export const TYPICAL_NET_MEAN_GY = 16.73;
/** 2024 GY — ÖSYM net standart sapması. */
export const TYPICAL_NET_SIGMA_GY = 9.098;
/** 2024 GK — ÖSYM ortalama net. */
export const TYPICAL_NET_MEAN_GK = 18.861;
/** 2024 GK — ÖSYM net standart sapması. */
export const TYPICAL_NET_SIGMA_GK = 10.517;

/** Geri bildirim: tahminler ~1,5 puan yüksek kalıyordu; tüm gösterge/P93/P94 hedefleri bu kadar aşağı çekildi (eğim korunur). */
export const SCORE_CALIB_DOWN_SHIFT = 1.5;

/**
 * Lisans P10 “gösterge” doğrusal kabı: iki nokta ile kalibre (ÖSYM kesiti değil).
 * - Havuz ortası: blend ≈ 50 → gösterge ≈ 54,5 (önceki 56’dan 1,5 aşağı).
 * - Referans netler: GY/GK aşağıda + EB standart 50 → gösterge ≈ 79,035 (önceki ~80,53’ten 1,5 aşağı).
 */
export const LISANS_P10_BLEND_POP_CENTER = 50;
export const LISANS_P10_SCORE_POP_CENTER = 56 - SCORE_CALIB_DOWN_SHIFT;
export const LISANS_P10_CALIB_GY_NET = 45.25;
export const LISANS_P10_CALIB_GK_NET = 24;
export const LISANS_P10_CALIB_SCORE = 80.53498 - SCORE_CALIB_DOWN_SHIFT;

/**
 * Ön lisans P93 doğrusal kabı: iki ASP noktası (GY/GK %50–%50 birleşimi).
 * - Düşük referans: 25 / 20 net — tablo özeti hedefi ~71,4 (72,908 − 1,5).
 * - Yüksek referans: aynı kalibrasyon netleri; P93 ≈ 82,75 (84,25 − 1,5).
 */
export const ONLISANS_P93_REF_A_GY_NET = 25;
export const ONLISANS_P93_REF_A_GK_NET = 20;
export const ONLISANS_P93_REF_A_SCORE = 72.908 - SCORE_CALIB_DOWN_SHIFT;
export const ONLISANS_P93_SCORE_AT_CALIB_NETS = 84.25 - SCORE_CALIB_DOWN_SHIFT;

/** Ortaöğretim P94: aynı ASP ekseni; referans puanlar 1,5 aşağı (69,25 / 80,35). */
export const ORTAOGRETIM_P94_REF_A_SCORE = 70.75 - SCORE_CALIB_DOWN_SHIFT;
export const ORTAOGRETIM_P94_SCORE_AT_CALIB_NETS = 81.85 - SCORE_CALIB_DOWN_SHIFT;

export const SCORE_METHOD_NOTES: Record<ExamKey, string> = {
  kpss_lisans:
    "Özet: net → yaklaşık standart; P10’da GY %30 + GK %30 + EB %40 (EB yokken standart 50). Gösterge, havuz ortası (blend≈50→54,5) ile GY 45,25 / GK 24 referansı (~79,0) arasında doğrusal kabdır; standart üst kesit 90’a kadar. Kesin puan ÖSYM’dir.",
  kpss_onlisans:
    "P93: ASP = %50 GY + %50 GK. İki nokta doğrusu (25/20 net ≈71,4; 45,25/24 net ≈82,8). Kesin P93 ÖSYM’dir.",
  kpss_ortaogretim:
    "P94: ASP = %50 GY + %50 GK. İki nokta doğrusu (25/20 net ≈69,3; 45,25/24 net ≈80,4). Kesin P94 ÖSYM’dir.",
  ags: "AGS’de tek bir “GY/GK” testi yoktur; puan türleri (ör. P1–P3) alt test netleri ve katsayılarla hesaplanır. Aşağıdaki GY/GK kutuları AGS resmi puanı için kullanılamaz.",
};
