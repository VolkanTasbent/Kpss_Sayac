"use client";

import { useMemo, useState } from "react";
import type { ExamKey } from "@/config/exams";
import { SCORE_APPROX } from "@/config/scoreApprox";
import { approximateDisplayScore } from "@/lib/kpss-approx-score";
import { totalNet } from "@/lib/kpss-net";

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
  { key: "ags", label: "AGS" },
];

export function NetCalculator() {
  const [gyD, setGyD] = useState("0");
  const [gyY, setGyY] = useState("0");
  const [gkD, setGkD] = useState("0");
  const [gkY, setGkY] = useState("0");
  const [track, setTrack] = useState<ExamKey>("kpss_lisans");

  const result = useMemo(() => {
    const a = Number(gyD) || 0;
    const b = Number(gyY) || 0;
    const c = Number(gkD) || 0;
    const d = Number(gkY) || 0;
    return totalNet(a, b, c, d);
  }, [gyD, gyY, gkD, gkY]);

  const approx = useMemo(() => approximateDisplayScore(result, track), [result, track]);
  const approxMeta = SCORE_APPROX[track];

  return (
    <section className="w-full max-w-2xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-2">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">KPSS net hesaplama</h2>
        <p className="text-sm leading-relaxed text-zinc-600">
          Genel Yetenek ve Genel Kültür testleri için yaygın formülü kullanır: her bölümde{" "}
          <span className="font-medium text-zinc-800">net = doğru − (yanlış ÷ 4)</span>. Boş sorular neti değiştirmez.
          Kesin puan dönüşümü ÖSYM kılavuzuna göre değişebilir; bu araç hızlı karşılaştırma içindir.
        </p>
      </div>

      <div className="mt-5">
        <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Sınav türü (tahmini puan için)</p>
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
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-gradient-to-br from-cyan-600 to-indigo-700 p-[1px]">
          <div className="rounded-2xl bg-white px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">Toplam net</p>
            <p className="mt-1 text-4xl font-semibold tabular-nums text-zinc-900">{result.toFixed(2)}</p>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-700 p-[1px]">
          <div className="rounded-2xl bg-white px-5 py-4">
            <p className="text-xs font-medium uppercase tracking-wide text-zinc-500">
              Tahmini ortalama puan ({approxMeta.title})
            </p>
            <p className="mt-1 text-4xl font-semibold tabular-nums text-zinc-900">{approx.toFixed(1)}</p>
            <p className="mt-2 text-xs leading-snug text-zinc-500">{approxMeta.footnote}</p>
          </div>
        </div>
      </div>
      <p className="mt-4 rounded-xl border border-amber-200/80 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-amber-950/90">
        <strong className="font-semibold">Önemli:</strong> Gösterilen puan, yayıncının tanımladığı doğrusal kablodur;
        ÖSYM’nin resmi ham/standart puan hesaplarıyla aynı olmak zorunda değildir. Yerleştirme veya atama kararı için
        yalnızca ÖSYM sonuç belgeleri geçerlidir.
      </p>
    </section>
  );
}
