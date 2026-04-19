import type { ReactNode } from "react";

export function PolicyPage({
  title,
  lastUpdated,
  children,
}: {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h1>
      <p className="mt-3 text-sm text-cyan-100/70">Son güncelleme: {lastUpdated}</p>
      <div className="mt-10 space-y-6 text-base leading-relaxed text-white/80">{children}</div>
    </main>
  );
}
