import type { ExamKey } from "@/config/exams";
import {
  LISANS_P10_BLEND_POP_CENTER,
  LISANS_P10_CALIB_GK_NET,
  LISANS_P10_CALIB_GY_NET,
  LISANS_P10_CALIB_SCORE,
  LISANS_P10_SCORE_POP_CENTER,
  ONLISANS_P93_REF_A_GK_NET,
  ONLISANS_P93_REF_A_GY_NET,
  ONLISANS_P93_REF_A_SCORE,
  ONLISANS_P93_SCORE_AT_CALIB_NETS,
  ORTAOGRETIM_P94_REF_A_SCORE,
  ORTAOGRETIM_P94_SCORE_AT_CALIB_NETS,
  TYPICAL_NET_MEAN_GK,
  TYPICAL_NET_MEAN_GY,
  TYPICAL_NET_SIGMA_GK,
  TYPICAL_NET_SIGMA_GY,
} from "@/config/scoreApprox";

export type KpssGyGkPart = "gy" | "gk";

function clamp(n: number, lo: number, hi: number) {
  return Math.min(hi, Math.max(lo, n));
}

/**
 * Aşırı uç SP değerlerini keser. Üst sınır 78 iken yüksek GY netleri (ör. 45+) yapay olarak düşüyordu;
 * kabı ÖSYM’de görülebilecek üst değerlere genişletildi (yine yaklaşık model).
 */
const STAN_CLAMP_LO = 39;
const STAN_CLAMP_HI = 90;

/**
 * Standart puana giden yolun basitleştirilmiş ilk adımı:
 * SP ≈ 50 + 10 × ((net − μ) / σ), ardından [STAN_CLAMP_LO, STAN_CLAMP_HI] ile kesilir.
 * μ, σ teste göre 2024 ÖSYM net dağılımından alınır (GY ve GK ayrı).
 */
export function standartProxyFromNet(net: number, part: KpssGyGkPart): number {
  const mu = part === "gy" ? TYPICAL_NET_MEAN_GY : TYPICAL_NET_MEAN_GK;
  const sigma = part === "gy" ? TYPICAL_NET_SIGMA_GY : TYPICAL_NET_SIGMA_GK;
  const z = (net - mu) / sigma;
  const sp = 50 + 10 * z;
  return clamp(sp, STAN_CLAMP_LO, STAN_CLAMP_HI);
}

/** Lisans kalibrasyon blend’i (GY/GK netleri + EB standart 50); eğim bu değerden türetilir. */
const LISANS_P10_CALIB_BLEND =
  0.3 * standartProxyFromNet(LISANS_P10_CALIB_GY_NET, "gy") +
  0.3 * standartProxyFromNet(LISANS_P10_CALIB_GK_NET, "gk") +
  20;

const LISANS_P10_GOSTERGE_SLOPE =
  (LISANS_P10_CALIB_SCORE - LISANS_P10_SCORE_POP_CENTER) /
  (LISANS_P10_CALIB_BLEND - LISANS_P10_BLEND_POP_CENTER);

/** P93 / P94 için ortak ASP referansları (GY–GK %50–%50, aynı μ/σ ve standart kesit). */
const SHARED_ASP_REF_A =
  0.5 * standartProxyFromNet(ONLISANS_P93_REF_A_GY_NET, "gy") +
  0.5 * standartProxyFromNet(ONLISANS_P93_REF_A_GK_NET, "gk");

const SHARED_ASP_REF_B =
  0.5 * standartProxyFromNet(LISANS_P10_CALIB_GY_NET, "gy") +
  0.5 * standartProxyFromNet(LISANS_P10_CALIB_GK_NET, "gk");

const P93_ASP_SLOPE =
  (ONLISANS_P93_SCORE_AT_CALIB_NETS - ONLISANS_P93_REF_A_SCORE) / (SHARED_ASP_REF_B - SHARED_ASP_REF_A);

const P94_ASP_SLOPE =
  (ORTAOGRETIM_P94_SCORE_AT_CALIB_NETS - ORTAOGRETIM_P94_REF_A_SCORE) / (SHARED_ASP_REF_B - SHARED_ASP_REF_A);

/** Lisans P10: GY %30 + GK %30 + EB %40 — EB yokken EB standart 50; gösterge iki nokta kalibrasyonu. */
export function approximateLisansGyGkEbPlaceholder(gyNet: number, gkNet: number): number {
  const sGy = standartProxyFromNet(gyNet, "gy");
  const sGk = standartProxyFromNet(gkNet, "gk");
  const sEb = 50;
  const blend = 0.3 * sGy + 0.3 * sGk + 0.4 * sEb;
  const raw =
    LISANS_P10_SCORE_POP_CENTER + LISANS_P10_GOSTERGE_SLOPE * (blend - LISANS_P10_BLEND_POP_CENTER);
  return clamp(raw, 56, 94);
}

/** Ön lisans P93: ASP = %50 GY + %50 GK; iki nokta doğrusu (`scoreApprox` referans puanları). */
export function approximateOnlisansP93(gyNet: number, gkNet: number): number {
  const sGy = standartProxyFromNet(gyNet, "gy");
  const sGk = standartProxyFromNet(gkNet, "gk");
  const asp = 0.5 * sGy + 0.5 * sGk;
  const raw = ONLISANS_P93_REF_A_SCORE + P93_ASP_SLOPE * (asp - SHARED_ASP_REF_A);
  return clamp(raw, 55, 93);
}

/** Ortaöğretim P94: aynı ASP tanımı; P93’ten ayrı iki nokta doğrusu. */
export function approximateOrtaogretimP94(gyNet: number, gkNet: number): number {
  const sGy = standartProxyFromNet(gyNet, "gy");
  const sGk = standartProxyFromNet(gkNet, "gk");
  const asp = 0.5 * sGy + 0.5 * sGk;
  const raw = ORTAOGRETIM_P94_REF_A_SCORE + P94_ASP_SLOPE * (asp - SHARED_ASP_REF_A);
  return clamp(raw, 54, 92);
}

export type ApproxBreakdown = {
  stanGy: number;
  stanGk: number;
  /** Lisans / ön lisans / ortaöğretim için skor; AGS için null */
  score: number | null;
};

export function approximateExamBreakdown(gyNet: number, gkNet: number, exam: ExamKey): ApproxBreakdown {
  const stanGy = Math.round(standartProxyFromNet(gyNet, "gy") * 10) / 10;
  const stanGk = Math.round(standartProxyFromNet(gkNet, "gk") * 10) / 10;

  if (exam === "kpss_lisans") {
    return { stanGy, stanGk, score: approximateLisansGyGkEbPlaceholder(gyNet, gkNet) };
  }
  if (exam === "kpss_onlisans") {
    return { stanGy, stanGk, score: approximateOnlisansP93(gyNet, gkNet) };
  }
  if (exam === "kpss_ortaogretim") {
    return { stanGy, stanGk, score: approximateOrtaogretimP94(gyNet, gkNet) };
  }
  return { stanGy, stanGk, score: null };
}
