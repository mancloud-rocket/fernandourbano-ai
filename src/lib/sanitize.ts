/** Strip control chars and normalize whitespace for mailto / display. */
export function sanitizePlainText(
  value: string,
  maxLength: number,
): string {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .trim()
    .slice(0, maxLength);
}
