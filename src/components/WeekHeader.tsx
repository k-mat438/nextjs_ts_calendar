'use client'

import { notFound, usePathname, useRouter } from 'next/navigation';
import { getMonth, getYear, subWeeks, addWeeks, getDate } from 'date-fns';
import { getCalendarInfo } from '@/utils/utilsCalendar';
import CalendarHeader from './CalendarHeader';


const WeekHeader = () => {
  const router = useRouter();
  const currentPath = usePathname()
  const { date }= getCalendarInfo();
  const regexWeek = /^\/calendar\/week\/(\d{4})\/(1[0-2]|0?[1-9])\/([1-9]|[12]\d|3[01])$/;

  const getNowPageDate = () => {
    if (currentPath == '/calendar/month' || currentPath == '/calendar/week') {
      return date
    } else if (regexWeek.test(currentPath)) {
      const match = currentPath.match(regexWeek);
      if (match) {
        const year = parseInt(match[1], 10);
        const month = parseInt(match[2], 10); 
        const day = parseInt(match[3],10);
        return new Date(year, month -1, day);
      }
      return notFound()
      // return 'hello'
    } else {
      return notFound() 
      // return 'hello'
    } 
  }
  const nowPageDate = getNowPageDate();

  const handleToday = () => {
    const regex = /^\/calendar\/week\/.*$/;
    if (regex.test(currentPath)) {
      router.push('/calendar/week');
    }
  }

  const handlePreWeek = () => {
    const prevWeek = subWeeks(nowPageDate, 1);
    const year = getYear(prevWeek);
    const month = getMonth(prevWeek); 
    const day = getDate(prevWeek)
    router.push(`/calendar/week/${year}/${Number(month) + 1}/${day}`);
  }

  const handleNextWeek = () => {
    const nextWeek = addWeeks(nowPageDate, 1);
    const year = getYear(nextWeek);
    const month = getMonth(nextWeek);
    const day = getDate(nextWeek)
    router.push(`/calendar/week/${year}/${Number(month) + 1}/${day}`);
  }

  const weekOptions: { value: 'month' | 'week'; label: string; }[] = [
    { value: 'week', label: '週' },
    { value: 'month', label: '月' },
  ];

  return (
    <CalendarHeader
      nowPageDate={nowPageDate}
      handleToday={handleToday}
      handlePrev={handlePreWeek}
      handleNext={handleNextWeek}
      options={weekOptions}
    />
  );
};

export default WeekHeader;