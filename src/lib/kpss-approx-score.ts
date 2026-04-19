import type { ExamKey } from "@/config/exams";
import { SCORE_APPROX } from "@/config/scoreApprox";

/** Tek ondalık basamakla tahmini gösterim puanı. */
export function approximateDisplayScore(totalNet: number, exam: ExamKey): number {
  const p = SCORE_APPROX[exam];
  const raw = p.base + p.perNet * totalNet;
  const clamped = Math.min(p.clampMax, Math.max(p.clampMin, raw));
  return Math.round(clamped * 10) / 10;
}
