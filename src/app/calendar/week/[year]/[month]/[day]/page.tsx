import { notFound } from 'next/navigation'
import { addDays, getDate, startOfMonth, startOfWeek, format, getMonth } from 'date-fns';
import React from 'react';
import { getCalendarInfo } from '@/utils/utilsCalendar';

import WeekHeader from '@/components/WeekHeader';


type CurrentWeek = {
  params: {
    year: string
    month: string
    day: string
  }
}

export default function WeekCalendarPage({ params }: CurrentWeek) {
  const year = parseInt(params.year)
  const month = parseInt(params.month)
  const day = parseInt(params.day)

  if (isNaN(year) || isNaN(month) || month < 1 || month > 12) {
    notFound()
  }

  const getTimeLabel = (index: number) => {
    if (index < 12) return `午前${index}時`;
    else if (index == 12) return '正午';
    else return `午後${index}時`;
  }

  const { date }= getCalendarInfo()
  // const startWeek = startOfWeek(date)
  const activeWeek:  Date= new Date(year, month -1, day)
  const startWeek = startOfWeek(activeWeek)


  return (
    <>
      <WeekHeader />
      <div className="h-full flex flex-col">
        <div className="sticky top-0 bg-white z-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-8">
              <div className="col-span-1"></div>
              {['日', '月', '火', '水', '木', '金', '土'].map((day, index) => (
                <div key={index} className="col-span-1">
                  <div className={`h-8 flex items-center justify-center text-sm font-medium ${index === 0 ? 'text-red-500' : ''} ${index === 6 ? 'text-blue-500' : ''}`}>
                    {day}
                  </div>
                  <div className="text-center text-gray-500 text-xl border-b">
                    {getDate(addDays(startWeek, index)) }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-4 pt-0">
              <div className="grid grid-cols-8">
                {/* 時間列 */}
                <div className="col-span-1">
                  <div className="h-5"></div>
                  {[...Array(24)].map((_, index) => (
                    <div key={index} className="h-12 flex items-center justify-end pr-2 text-sm text-gray-500">
                      {`${getTimeLabel(index)}`}
                    </div>
                  ))}
                </div>

                {/* 曜日列 */}
                {[...Array(7)].map((_, index) => (
                  <div key={index} className="col-span-1">
                    {[...Array(25)].map((_, hourIndex) => (
                      <div key={hourIndex} className="h-12 border-b border-r"></div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
         </div>
    </>

  )
}