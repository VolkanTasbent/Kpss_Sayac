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
    <div className="flex w-full max-w-none flex-col gap-5 sm:gap-6 lg:gap-8">
      {rows.map(({ exam: e, targetMs, r }) => (
        <article
          key={e.key}
          className="relative w-full overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-[0_24px_80px_-28px_rgba(0,0,0,0.72)] backdrop-blur-md sm:p-8 md:p-10 lg:p-12"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl sm:h-72 sm:w-72" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-indigo-500/25 blur-3xl sm:h-80 sm:w-80" />
          <div className="relative flex w-full flex-col gap-1">
            <h2 className="text-xl font-bold tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl">{e.title}</h2>
            <p className="text-sm text-white/75 sm:text-base md:text-lg">{e.subtitle}</p>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.25em] text-white/50 sm:mt-5 sm:text-sm">
              Sınava kalan süre
            </p>

            <div className="mt-4 grid w-full grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-3 sm:gap-3 md:grid-cols-5 md:gap-4 lg:gap-5">
              {UNITS.map(({ key, label }) => {
                const v = r[key];
                const showPad = key === "hours" || key === "minutes" || key === "seconds";
                const text = showPad ? pad2(v) : String(v);
                return (
                  <div
                    key={key}
                    className="flex min-h-[5.5rem] flex-col items-center justify-center rounded-2xl border border-white/10 bg-black/25 px-2 py-4 text-center sm:min-h-[6.5rem] md:min-h-32 md:rounded-3xl md:py-6 lg:min-h-36"
                  >
                    <div className="font-bold leading-none tabular-nums tracking-tight text-white text-[clamp(2rem,min(14vw,7.5rem),7.5rem)] md:text-[clamp(3.25rem,min(11vw,8.5rem),8.5rem)]">
                      {text}
                    </div>
                    <div className="mt-2 text-[10px] font-semibold uppercase tracking-wider text-white/60 sm:text-xs md:text-sm">
                      {label}
                    </div>
                  </div>
                );
              })}
            </div>

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
