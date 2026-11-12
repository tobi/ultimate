/** Watchdog failure cards: the failed conversation, error, last step and retry outcome. */
import type { ConversationId } from '@earendil-works/pi-durable'
export type Failure = {
  conversation: ConversationId
  title: string
  error: string
  step: string
  hint?: string
  retried: boolean
  /** When the used-up provider quota that failed the run resets (epoch ms), if its error names a time. */
  resetAt?: number
}
