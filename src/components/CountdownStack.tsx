"use client";

import { useEffect, useMemo, useState } from "react";
import type { ExamInfo } from "@/config/exams";
import {
  examStartTimestampMs,
  formatExamStartTurkish,
  remainingUntilTimestamp,
  type RemainingSplit,
} from "@/lib/dates";

const UNITS = [
  { key: "months", label: "Ay" },
  { key: "days", label: "Gün" },
  { key: "hours", label: "Saat" },
  { key: "minutes", label: "Dakika" },
  { key: "seconds", label: "Saniye" },
] as const satisfies readonly { key: keyof Omit<RemainingSplit, "done">; label: string }[];

function pad2(n: number) {
  return n.toString().padStart(2, "0");
}

export function CountdownStack({ exams }: { exams: ExamInfo[] }) {
  const [nowMs, setNowMs] = useState(() => Date.now());
  useEffect(() => {
    const id = window.setInterval(() => setNowMs(Date.now()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const rows = useMemo(
    () =>
      exams.map((e) => {
        const start = e.startTimeTR ?? undefined;
        const targetMs = examStartTimestampMs(e.dateISO, start ?? "");
        const r = remainingUntilTimestamp(targetMs, nowMs);
        return { exam: e, targetMs, r };
      }),
    [exams, nowMs],
  );

  return (
    <div className="flex w-full max-w-xl flex-col gap-4">
      {rows.map(({ exam: e, targetMs, r }) => (
        <article
          key={e.key}
          className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.65)] backdrop-blur-md"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-10 h-44 w-44 rounded-full bg-indigo-500/25 blur-2xl" />
          <div className="relative flex flex-col gap-1">
            <h2 className="text-lg font-semibold tracking-tight text-white">{e.title}</h2>
            <p className="text-sm text-white/70">{e.subtitle}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.2em] text-white/50">Sınava kalan süre</p>

            <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-5">
              {UNITS.map(({ key, label }) => {
                const v = r[key];
                const showPad = key === "hours" || key === "minutes" || key === "seconds";
                const text = showPad ? pad2(v) : String(v);
                return (
                  <div
                    key={key}
                    className="rounded-xl border border-white/10 bg-black/20 px-2 py-3 text-center sm:px-3"
                  >
                    <div className="text-2xl font-semibold tabular-nums tracking-tight text-white sm:text-3xl">{text}</div>
                    <div className="mt-1 text-[10px] font-medium uppercase tracking-wider text-white/55 sm:text-xs">{label}</div>
                  </div>
                );
              })}
            </div>

            <p className="mt-2 text-[11px] leading-snug text-white/45 sm:text-xs">
              Ay göstergesi 30 günlük birimdir (takvim ayı değil). Sınav saati kılavuza göre{" "}
              <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/70">startTimeTR</code> alanından
              düzenlenir.
            </p>

            <p className="mt-2 text-xs text-white/55">
              Hedef:{" "}
              <time dateTime={new Date(targetMs).toISOString()}>
                {formatExamStartTurkish(e.dateISO, e.startTimeTR ?? "")}
              </time>
            </p>
            <a
              className="mt-3 inline-flex w-fit items-center gap-1 text-sm font-medium text-cyan-200 underline-offset-4 hover:underline"
              href={e.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              ÖSYM duyuruları
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
