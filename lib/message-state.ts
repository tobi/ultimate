type Status = { reply: boolean; state: string; to: number | 'user' | 'remote' }

export const isOpen = (message: Status) =>
  message.reply && (message.state === 'sent' || message.state === 'delivered')

export const isOwed = (message: Status) => message.reply && message.state === 'delivered'

export const openQuestion = (message: Status) => message.to === 'user' && isOwed(message)

export const asksForDecisions = (text: string) =>
  /^[ \t>*_`-]*(?:\d+[.)][ \t]*)?[*_`]*decisions\b[^\n:]{0,40}:(?![ \t*_`]*none\b)|^#{1,6}[ \t]+decisions\b/im.test(
    text,
  )

export const awaitsStarter = (message: { awaits?: true; report?: true; text: string }) =>
  message.awaits === true || (message.report === true && asksForDecisions(message.text))
