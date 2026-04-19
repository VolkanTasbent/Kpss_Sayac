import Link from "next/link";
import { SITE_MAP_LINKS, type SiteMapLink } from "@/config/site-map-links";

type Variant = "onDark" | "onLight";

const wrap: Record<Variant, string> = {
  onDark: "text-xs leading-relaxed text-white/55",
  onLight: "text-xs leading-relaxed text-zinc-600",
};

const label: Record<Variant, string> = {
  onDark: "font-medium text-white/70",
  onLight: "font-medium text-zinc-800",
};

const link: Record<Variant, string> = {
  onDark: "text-cyan-200/95 underline-offset-2 hover:underline",
  onLight: "text-cyan-700 underline-offset-2 hover:underline",
};

const sep = "text-white/35";

/** Menüde gizli kalan sayfalar için görünür HTML link satırı (Google ile kullanıcı aynı içeriği görür). */
export function SiteMapInline({
  variant,
  links = SITE_MAP_LINKS as readonly SiteMapLink[],
}: {
  variant: Variant;
  /** Örn. rehber sayfasında kendini hariç tutmak için */
  links?: readonly SiteMapLink[];
}) {
  return (
    <nav aria-label="Site haritası" className={wrap[variant]}>
      <p>
        <span className={label[variant]}>Site haritası: </span>
        {links.map((l, i) => (
          <span key={l.href}>
            {i > 0 ? <span className={variant === "onDark" ? sep : "text-zinc-300"}> · </span> : null}
            <Link href={l.href} className={link[variant]}>
              {l.label}
            </Link>
          </span>
        ))}
      </p>
    </nav>
  );
}
