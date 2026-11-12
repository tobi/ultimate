/** Watchdog failure cards: the failed conversation, error, last step and retry outcome. */
export type Failure = {
  conversation: number
  title: string
  error: string
  step: string
  hint?: string
  retried: boolean
  /** When the used-up provider quota that failed the run resets (epoch ms), if its error names a time. */
  resetAt?: number
}
