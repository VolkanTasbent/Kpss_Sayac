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

  // Onay surecinde kullaniciya teknik placeholder gostermemek icin
  // reklam ayari yoksa blok hic render edilmez.
  if (!client || !slot) return null;

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
