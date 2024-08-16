import React from 'react';

const MonthCalendar = () => {
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
            <div className="text-center p-2 border-b border-l text-red-500">28</div>
            <div className="text-center p-2 border-b border-l">29</div>
            <div className="text-center p-2 border-b border-l">30</div>
            <div className="text-center p-2 border-b border-l">31</div>
            <div className="text-center p-2 border-b border-l flex justify-center">
              <span className="w-8 h-8 flex items-center justify-center bg-blue-500 text-white rounded-full">
                1
              </span>
            </div>
            <div className="text-center p-2 border-b border-l">2</div>
            <div className="text-center p-2 border-b border-l border-r text-blue-500">3</div>
            {[...Array(28)].map((num ,index) => (
              <div key={index} className="text-center p-2 border-b border-l">{index + 4}</div>
            ))}
            {/* <div className="text-center p-2 border-b border-l text-red-500">4</div>
            <div className="text-center p-2 border-b border-l">5</div>
            <div className="text-center p-2 border-b border-l">6</div>
            <div className="text-center p-2 border-b border-l">7</div>
            <div className="text-center p-2 border-b border-l">8</div>
            <div className="text-center p-2 border-b border-l">9</div>
            <div className="text-center p-2 border-b border-l border-r text-blue-500">10</div> */}
          </div>
        </div>
      </div>
    </>
  )
}


export default MonthCalendar