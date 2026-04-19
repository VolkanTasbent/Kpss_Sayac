const TZ = "Europe/Istanbul";

export function calendarDateInTimeZone(d: Date, timeZone: string): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(d);
}

function utcMidnightFromISO(iso: string): number {
  const [y, m, day] = iso.split("-").map(Number);
  return Date.UTC(y, m - 1, day);
}

/** İstanbul takvimine göre bugün ile hedef sınav günü arasındaki tam gün farkı (sınav günü = 0). */
export function wholeDaysUntilCalendarEnd(isoDate: string, now = new Date()): number {
  const today = calendarDateInTimeZone(now, TZ);
  const start = utcMidnightFromISO(today);
  const end = utcMidnightFromISO(isoDate);
  const diffDays = Math.round((end - start) / 86_400_000);
  return Math.max(0, diffDays);
}

export function longTurkishDate(now = new Date()): string {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: TZ,
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(now);
}

const DEFAULT_EXAM_START_TR = "10:15:00";

/** Sınav anının zaman damgası (ms). Türkiye +03 sabit kabulü (yaz/kış saati yok). */
export function examStartTimestampMs(dateISO: string, startTimeTR: string = DEFAULT_EXAM_START_TR): number {
  const t = /^\d{2}:\d{2}(:\d{2})?$/.test(startTimeTR) ? startTimeTR : DEFAULT_EXAM_START_TR;
  const withSeconds = t.length === 5 ? `${t}:00` : t;
  return Date.parse(`${dateISO}T${withSeconds}+03:00`);
}

export type RemainingSplit = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
};

/**
 * Kalan süreyi ay–gün–saat–dakika–saniye olarak böler.
 * "Ay" birimi takvim ayı değil; kullanıcı arayüzünde tutarlılık için **30 tam gün** olarak ele alınır.
 */
export function remainingUntilTimestamp(targetMs: number, nowMs: number = Date.now()): RemainingSplit {
  const diff = targetMs - nowMs;
  if (diff <= 0) {
    return { months: 0, days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  }
  const totalSeconds = Math.floor(diff / 1000);
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const totalHours = Math.floor(totalMinutes / 60);
  const hours = totalHours % 24;
  const totalDays = Math.floor(totalHours / 24);
  const months = Math.floor(totalDays / 30);
  const days = totalDays % 30;
  return { months, days, hours, minutes, seconds, done: false };
}

export function formatExamStartTurkish(dateISO: string, startTimeTR: string = DEFAULT_EXAM_START_TR): string {
  const ms = examStartTimestampMs(dateISO, startTimeTR);
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: TZ,
    dateStyle: "long",
    timeStyle: "short",
  }).format(new Date(ms));
}
