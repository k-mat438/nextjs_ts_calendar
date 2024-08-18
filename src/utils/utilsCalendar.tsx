import { endOfMonth, getDate, getDay, startOfMonth } from 'date-fns';

export const getCalendarInfo = (date: Date  = new Date()) => {
  const today = getDate(date)
  const endDate = getDate(endOfMonth(date))
  const firstDay = getDay(startOfMonth(date))
  return {
    date,
    today,
    endDate,
    firstDay
  };
}