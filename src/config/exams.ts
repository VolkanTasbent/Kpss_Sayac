/**
 * Sınav tarihleri ÖSYM takvimine göre güncellenmelidir.
 * 2026 için yayında görünen takvim özetine göre ayarlandı; kesin bilgi için osym.gov.tr.
 */
export type ExamKey = "kpss_lisans" | "kpss_onlisans" | "kpss_ortaogretim" | "ags";

export type ExamInfo = {
  key: ExamKey;
  title: string;
  subtitle: string;
  /** YYYY-MM-DD — takvim günü gösterimi ve tablolar için */
  dateISO: string;
  /**
   * Sınav başlangıcı (Türkiye saati +03, HH:mm:ss).
   * ÖSYM oturum saatine göre `src/config/exams.ts` içinden güncelleyin.
   */
  startTimeTR?: string;
  href: string;
};

export const EXAMS: ExamInfo[] = [
  {
    key: "kpss_lisans",
    title: "KPSS Lisans",
    subtitle: "Genel Yetenek–Genel Kültür (2026 takvim özeti)",
    dateISO: "2026-09-06",
    startTimeTR: "10:15:00",
    href: "https://www.osym.gov.tr",
  },
  {
    key: "kpss_onlisans",
    title: "KPSS Ön Lisans",
    subtitle: "Genel Yetenek–Genel Kültür oturumu (2026 takvim özeti)",
    dateISO: "2026-10-04",
    startTimeTR: "10:15:00",
    href: "https://www.osym.gov.tr",
  },
  {
    key: "kpss_ortaogretim",
    title: "KPSS Ortaöğretim",
    subtitle: "Lise mezunları — Genel Yetenek–Genel Kültür (2026 takvim özeti)",
    dateISO: "2026-10-25",
    startTimeTR: "10:15:00",
    href: "https://www.osym.gov.tr",
  },
  {
    key: "ags",
    title: "AGS",
    subtitle: "Akademik Giriş Sınavı (2026 takvim özeti)",
    dateISO: "2026-07-12",
    startTimeTR: "10:15:00",
    href: "https://www.osym.gov.tr",
  },
];
