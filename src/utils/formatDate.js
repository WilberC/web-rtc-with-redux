import { parseISO, format } from 'date-fns'

export function FormatDate(date) {
  return (format(parseISO(date), "yyyy-MM-dd"))
}