/** Tiny className joiner — keeps UI free of ad-hoc string concat. */
export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ')
}
