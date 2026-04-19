/** Klasik çoktan seçmeli net: doğru − yanlış / 4 (boş 0). */
export function sectionNet(correct: number, wrong: number): number {
  const c = Math.max(0, correct);
  const w = Math.max(0, wrong);
  return Math.max(0, c - w / 4);
}

export function totalNet(gyCorrect: number, gyWrong: number, gkCorrect: number, gkWrong: number): number {
  return sectionNet(gyCorrect, gyWrong) + sectionNet(gkCorrect, gkWrong);
}
