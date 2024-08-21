'use client'

import { notFound, usePathname, useRouter } from 'next/navigation';
import { getMonth, getYear, addMonths, subMonths } from 'date-fns';
import { getCalendarInfo } from '@/utils/utilsCalendar';
import CalendarHeader from './CalendarHeader';

const MonthHeader = () => {
  const router = useRouter();
  const currentPath = usePathname()
  const { date }= getCalendarInfo();
  const regexMonth = /^\/calendar\/month\/(\d{4})\/(1[0-2]|0?[1-9])$/;

  const getNowPageDate = (): Date => {
    if (currentPath == '/calendar/month' || currentPath == '/calendar/week') {
      return date
    } else if (regexMonth.test(currentPath)) {
      const match = currentPath.match(regexMonth);
      if (match) {
        const year = parseInt(match[1], 10);
        const month = parseInt(match[2], 10); 
        return new Date(year, month - 1);
      }
      return notFound()
    } else {
      return notFound()
    }
  }
  const nowPageDate = getNowPageDate();


  const handleToday = () => {
    const regex = /^\/calendar\/month\/.*$/;
    if (regex.test(currentPath)) {
      router.push('/calendar/month');
    }
  }

  const handlePreMonth = () => {
    const prevMonth = subMonths(nowPageDate, 1);
    const year = getYear(prevMonth);
    const month = getMonth(prevMonth) + 1; 
    router.push(`/calendar/month/${year}/${month}`);
  }

  const handleNextMonth = () => {
    const nextMonth = addMonths(nowPageDate, 1);
    const year = getYear(nextMonth);
    const month = getMonth(nextMonth) + 1;
    router.push(`/calendar/month/${year}/${month}`);
  }
  
  const monthOptions: { value: 'month' | 'week'; label: string; }[] = [
    { value: 'month', label: '月' },
    { value: 'week', label: '週' },
  ];

  return (
    <CalendarHeader
      nowPageDate={nowPageDate}
      handleToday={handleToday}
      handlePrev={handlePreMonth}
      handleNext={handleNextMonth}
      options={monthOptions}
    />
  );
};

export default MonthHeader;