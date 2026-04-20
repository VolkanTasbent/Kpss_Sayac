"use client";

import { useMemo, useState } from "react";
import type { ExamKey } from "@/config/exams";
import {
  SCORE_METHOD_NOTES,
  TYPICAL_NET_MEAN_GK,
  TYPICAL_NET_MEAN_GY,
  TYPICAL_NET_SIGMA_GK,
  TYPICAL_NET_SIGMA_GY,
} from "@/config/scoreApprox";
import { approximateExamBreakdown } from "@/lib/kpss-approx-score";
import { sectionNet, totalNet } from "@/lib/kpss-net";

function FieldRow({
  title,
  correct,
  wrong,
  onCorrect,
  onWrong,
}: {
  title: string;
  correct: string;
  wrong: string;
  onCorrect: (v: string) => void;
  onWrong: (v: string) => void;
}) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50/80 p-4">
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      <div className="mt-3 grid grid-cols-2 gap-3">
        <label className="flex flex-col gap-1 text-xs text-zinc-600">
          Doğru
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 outline-none ring-cyan-500/40 focus:ring-2"
            value={correct}
            onChange={(e) => onCorrect(e.target.value.replace(/\D/g, ""))}
          />
        </label>
        <label className="flex flex-col gap-1 text-xs text-zinc-600">
          Yanlış
          <input
            inputMode="numeric"
            pattern="[0-9]*"
            className="rounded-lg border border-zinc-200 bg-white px-3 py-2 text-base text-zinc-900 outline-none ring-cyan-500/40 focus:ring-2"
            value={wrong}
            onChange={(e) => onWrong(e.target.value.replace(/\D/g, ""))}
          />
        </label>
      </div>
    </div>
  );
}

const TRACKS: { key: ExamKey; label: string }[] = [
  { key: "kpss_lisans", label: "Lisans" },
  { key: "kpss_onlisans", label: "Ön lisans" },
  { key: "kpss_ortaogretim", label: "Ortaöğretim" },
  { key: "ags", label: "AGS" },
];

export function NetCalculator() {
  const [gyD, setGyD] = useState("0");
  const [gyY, setGyY] = useState("0");
  const [gkD, setGkD] = useState("0");
  const [gkY, setGkY] = useState("0");
  const [track, setTrack] = useState<ExamKey>("kpss_lisans");

  const { gyNet, gkNet, total } = useMemo(() => {
    const a = Number(gyD) || 0;
    const b = Number(gyY) || 0;
    const c = Number(gkD) || 0;
    const d = Number(gkY) || 0;
    return {
      gyNet: sectionNet(a, b),
      gkNet: sectionNet(c, d),
      total: totalNet(a, b, c, d),
    };
  }, [gyD, gyY, gkD, gkY]);

  const breakdown = useMemo(() => approximateExamBreakdown(gyNet, gkNet, track), [gyNet, gkNet, track]);
  const note = SCORE_METHOD_NOTES[track];

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">KPSS net hesaplama</h2>
        <p className="text-sm leading-relaxed text-zinc-600">
          Net:{" "}
          <span className="font-medium text-zinc-800">doğru − (yanlış ÷ 4)</span>. Kamuoyunda ve hesaplama
          sitelerinde özetlenen puan yolu: ham netlerden standart puan (ortalaması 50, standart sapması 10 olacak
          şekilde normalize edilen), ardından puan türüne göre ağırlıklar (
          <a
            className="font-medium text-cyan-700 underline-offset-4 hover:underline"
            href="https://kpss-lisans-puan.hesaplama.net/"
            target="_blank"
            rel="noopener noreferrer"
          >
            örnek özet
          </a>
          ,{" "}
          <a
            className="font-medium text-cyan-700 underline-offset-4 hover:underline"
            href="https://m.haberturk.com/kpss-puan-hesaplama-formulu-2025-kpss-lisans-puani-nasil-hesaplanir-4-yanlis-1-dogruyu-goturuyor-mu-osym-kilavuzu-ile-kpss-puan-hesaplama-yontemi-3821893"
            target="_blank"
            rel="noopener noreferrer"
          >
            Habertürk / kılavuz özeti
          </a>
          ). Lisans (P10 göstergesi), ön lisans (
          <strong className="font-semibold text-zinc-800">P93</strong>) ve ortaöğretim (
          <strong className="font-semibold text-zinc-800">P94</strong>) aynı standart kabından ASP (%50 GY + %50 GK)
          türetir; P93 ve P94 puana iki nokta kalibrasyonuyla gider. Kesin değer yalnızca ÖSYM sonuçlarındadır.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Sınav türü (tahmin modeli)</p>
        <div className="mt-2 flex flex-wrap gap-2" role="tablist" aria-label="Sınav türü">
          {TRACKS.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={track === t.key}
              onClick={() => setTrack(t.key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                track === t.key
                  ? "border-cyan-600 bg-cyan-600 text-white shadow-sm"
                  : "border-zinc-200 bg-zinc-50 text-zinc-700 hover:border-zinc-300"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        <FieldRow title="Genel Yetenek" correct={gyD} wrong={gyY} onCorrect={setGyD} onWrong={setGyY} />
        <FieldRow title="Genel Kültür" correct={gkD} wrong={gkY} onCorrect={setGkD} onWrong={setGkY} />
      </div>

      <div className="mt-4 rounded-xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs leading-relaxed text-zinc-600">
        <span className="font-medium text-zinc-800">Yaklaşık standart (GY):</span>{" "}
        <span className="tabular-nums">{breakdown.stanGy.toFixed(1)}</span>
        {" · "}
        <span className="font-medium text-zinc-800">Yaklaşık standart (GK):</span>{" "}
        <span className="tabular-nums">{breakdown.stanGk.toFixed(1)}</span>
        <span className="mt-1 block text-zinc-500">
          2024 ÖSYM KPSS Lisans sayısal bilgileri: GY μ = {TYPICAL_NET_MEAN_GY}, σ = {TYPICAL_NET_SIGMA_GY}; GK μ ={" "}
          {TYPICAL_NET_MEAN_GK}, σ = {TYPICAL_NET_SIGMA_GK}. Yaklaşık standart kabı buna göre; gösterge yine kesin değildir.
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-indigo-700 p-[1px]">
          <div className="rounded-2xl bg-white px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Toplam net (GY + GK)</p>
            <p className="mt-1 text-4xl font-semibold tabular-nums text-zinc-900">{total.toFixed(2)}</p>
            <p className="mt-1 text-xs text-zinc-500">
              GY net {gyNet.toFixed(2)} + GK net {gkNet.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-[1px]">
          <div className="rounded-2xl bg-white px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              {track === "ags"
                ? "AGS puanı (bu girişlerle)"
                : track === "kpss_onlisans"
                  ? "Tahmini P93 puanı"
                  : track === "kpss_ortaogretim"
                    ? "Tahmini P94 puanı"
                    : "Tahmini gösterge puanı"}
            </p>
            {breakdown.score != null ? (
              <>
                <p className="mt-1 text-4xl font-semibold tabular-nums text-zinc-900">
                  {track === "kpss_lisans"
                    ? breakdown.score.toFixed(4)
                    : track === "kpss_onlisans" || track === "kpss_ortaogretim"
                      ? breakdown.score.toFixed(2)
                      : breakdown.score.toFixed(1)}
                </p>
                {track === "kpss_onlisans" || track === "kpss_ortaogretim" ? (
                  <p className="mt-1 text-xs tabular-nums text-zinc-500">
                    {track === "kpss_onlisans" ? "P93" : "P94"} ASP adımı (yaklaşık):{" "}
                    {(0.5 * (breakdown.stanGy + breakdown.stanGk)).toFixed(1)} — %50 GY + %50 GK standart birleşimi
                  </p>
                ) : null}
              </>
            ) : (
              <p className="mt-2 text-sm font-medium leading-snug text-amber-900">
                AGS puanı bu GY/GK alanlarından hesaplanmaz. Alt test netleri ve MEB/ÖSYM kılavuzu gerekir (
                <a
                  className="text-cyan-700 underline-offset-4 hover:underline"
                  href="https://ags-puan.hesaplama.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  örnek AGS hesap özeti
                </a>
                ).
              </p>
            )}
            <p className="mt-2 text-xs leading-snug text-zinc-500">{note}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-950/90">
        <strong className="font-semibold">Önemli:</strong> Bu araç deneme karşılaştırması içindir. Yerleştirme ve
        resmi puan için yalnızca ÖSYM (ve AGS için ilgili kılavuz) sonuçları geçerlidir.
      </p>
    </section>
  );
}
