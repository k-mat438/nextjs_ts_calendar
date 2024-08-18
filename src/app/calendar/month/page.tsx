import { getCalendarInfo } from '@/utils/utilsCalendar';
import { addDays, endOfDay, endOfMonth, endOfWeek, getDate, startOfMonth, startOfWeek, subDays, format, getMonth } from 'date-fns';
import React from 'react';

type DateDisplay = {
  value: string | number;
  isFirstDay: boolean;
};

const MonthCalendar = () => {
  // const { today, endDate, date, firstDay}= getCalendarInfo()
  
  // const preMonth = []
  // let preDate = subDays(startOfMonth(today), 1)
  // for (let i = 0; i < firstDay; i++) {
  //   preMonth.push(getDate(preDate))
  //   preDate = subDays(preDate, 1)
  // }

  // 今月の最初の日を求める。startOfWeekから前月の月末までをpush
  // const endPreManth = getDate(subDays( startOfMonth(date), 1))
  // const startWeek = getDate(startOfWeek(startOfMonth(date)))
  // for (let i = startWeek; i <= endPreManth; i++) {
  //   preMonth.push(i)
  // }
  
  const { date } = getCalendarInfo()
  const startDay = startOfWeek(startOfMonth(date))
  // let day = startDay
  // while (day < endDay) {
  //   week.push(<div className="text-center text-gray-500 text-xl border-b">
  //          {day}
  //        </div>)
  //   day++
  // }

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

    const textColorClass = (index % 7 === 0) ? 'text-red-500' : (index % 7 === 6) ? 'text-blue-500' : '';

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
            {/* {preMonth.map((num, index) => (
              <div key={index} className="text-center p-2 border-b border-l">
                {num}
              </div>
            ))}
            {[...Array(endDate)].map((_, index) => (
              (index + 1 === today) ? (
                <div key={index} className="text-center p-2 border-b border-l flex justify-center">
                  <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                    {index + 1}
                  </span>
                </div>
              ) : (
                <div key={index} className="text-center p-2 border-b border-l">
                  {index + 1}
                </div>
              )
            ))} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default MonthCalendar