import { notFound } from 'next/navigation'
import { addDays, getDate, startOfMonth, startOfWeek, format, getMonth } from 'date-fns';
import React from 'react';
import { getCalendarInfo } from '@/utils/utilsCalendar';
import MonthHeader from '@/components/MonthHeader';


type CurrentMonth = {
  params: {
    year: string
    month: string
  }
}

type DateDisplay = {
  value: string | number;
  isFirstDay: boolean;
};

export default function CalendarPage({ params }: CurrentMonth) {
  const year = parseInt(params.year)
  const month = parseInt(params.month)

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    notFound()
  }

  const activeMonth:  Date= new Date(year, month -1, 1)
  const { date } = getCalendarInfo()
  
  const startDay = startOfWeek(startOfMonth(activeMonth))

  const renderDateContent = (display: DateDisplay) => {
    return display.isFirstDay ? display.value : display.value.toString();
  };

  const renderCalendarDay = (index: number) => {
    const currentDate = addDays(startDay, index);
    const isToday = getDate(currentDate) === getDate(date) && getMonth(currentDate) === getMonth(date);
    const isFirstDay = getDate(currentDate) === 1;
    
    const dateDisplay: DateDisplay = {
      value: isFirstDay ? format(currentDate, 'M/d') : getDate(currentDate),
      isFirstDay
    };

    const textColorClass = (index % 7 === 0) ? 'text-red-500' : (index % 7 === 6) ? 'text-blue-500 border-r' : '';

    return (
      <div 
        key={index} 
        className={`text-center p-2 border-b border-l ${textColorClass} ${isToday ? 'flex justify-center' : ''}`}
      >
        {isToday ? (
          <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
            {renderDateContent(dateDisplay)}
          </span>
        ) : renderDateContent(dateDisplay)}
      </div>
    );
  };

  return (
    <>
      <MonthHeader />
      <div className="flex flex-col">
        <div className="bg-white px-4 shadow-lg">
          <div className='grid grid-cols-7'>
            <div className="text-center font-bold text-red-500 border-l">日</div>
            <div className="text-center font-bold border-l">月</div>
            <div className="text-center font-bold border-l">火</div>
            <div className="text-center font-bold border-l">水</div>
            <div className="text-center font-bold border-l">木</div>
            <div className="text-center font-bold border-l">金</div>
            <div className="text-center font-bold text-blue-500 border-l border-r">土</div>
          </div>
          <div className='grid grid-cols-7 h-[88vh]'>
            {[...Array(35)].map((_, index) => renderCalendarDay(index))}
           
          </div>
        </div>
      </div>
    </>
  )
}