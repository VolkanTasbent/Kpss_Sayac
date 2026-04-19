"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    adsbygoogle?: object[];
  }
}

type Props = {
  /** AdSense reklam birimi kimliği (panelden) */
  slot?: string;
  className?: string;
};

/**
 * AdSense onayından sonra .env.local içine ekleyin:
 * NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxx
 * Reklam birimlerini AdSense panelinden oluşturup slot değerlerini buraya verin.
 */
export function AdSenseSlot({ slot = "", className }: Props) {
  const insRef = useRef<HTMLModElement>(null);
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !slot || !insRef.current) return;
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      /* yüklenmediyse sessizce geç */
    }
  }, [client, slot]);

  if (!client) {
    return (
      <div
        className={
          className ??
          "mx-auto flex min-h-[120px] w-full max-w-4xl items-center justify-center rounded-2xl border border-dashed border-zinc-300 bg-zinc-50 px-4 text-center text-sm text-zinc-500"
        }
      >
        Reklam alanı hazır. AdSense için{" "}
        <code className="mx-1 rounded bg-zinc-200 px-1 py-0.5 text-xs">NEXT_PUBLIC_ADSENSE_CLIENT</code> tanımlayın.
      </div>
    );
  }

  if (!slot) {
    return (
      <div
        className={
          className ??
          "mx-auto flex min-h-[100px] w-full max-w-4xl items-center justify-center rounded-2xl border border-dashed border-amber-200/60 bg-amber-50/90 px-4 text-center text-sm text-amber-900/80"
        }
      >
        Yayıncı kimliği tanımlı; reklam birimi için{" "}
        <code className="mx-1 rounded bg-amber-100 px-1 py-0.5 text-xs">data-ad-slot</code> değerini{" "}
        <code className="mx-1 rounded bg-amber-100 px-1 py-0.5 text-xs">NEXT_PUBLIC_ADSENSE_SLOT_*</code> ile verin.
      </div>
    );
  }

  return (
    <div className={className ?? "mx-auto w-full max-w-4xl"}>
      <ins
        ref={insRef}
        className="adsbygoogle"
        style={{ display: "block", minHeight: "120px" }}
        data-ad-client={client}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  );
}
