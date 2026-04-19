import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com";
  const paths = [
    "",
    "/kpss-2026-kac-gun-kaldi",
    "/kpss-ne-kadar-kaldi",
    "/kpss-sayac",
    "/kpss-net-hesaplama",
    "/gizlilik-politikasi",
    "/cerez-politikasi",
    "/kullanim-kosullari",
  ];
  const lastModified = new Date();
  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: path.startsWith("/gizlilik") || path.startsWith("/cerez") || path.startsWith("/kullanim") ? "monthly" : "daily",
    priority:
      path === ""
        ? 1
        : path.startsWith("/gizlilik") || path.startsWith("/cerez") || path.startsWith("/kullanim")
          ? 0.4
          : 0.7,
  }));
}
