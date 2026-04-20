import { CountdownStack } from "@/components/CountdownStack";
import type { ExamInfo } from "@/config/exams";

/** Sunucu isteği anındaki zamanı client ile aynı prop olarak verir; hydration #418 önlenir. */
export function CountdownStackHost({ exams }: { exams: ExamInfo[] }) {
  /* Her istekte bir kez; RSC çıktısı ile istemci aynı initialNowMs’i paylaşır. */
  // eslint-disable-next-line react-hooks/purity -- SSR anlık zaman damgası (sayaç hydration eşlemesi)
  const initialNowMs = Date.now();
  return <CountdownStack exams={exams} initialNowMs={initialNowMs} />;
}
