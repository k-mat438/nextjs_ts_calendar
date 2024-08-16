import Header from '../../../components/Header';

const WeekCalendar = () => {
  const getTimeLabel = (index: number) => {
    if (index < 12) return `午前${index}時`;
    else if (index == 12) return '正午';
    else return `午後${index}時`;
  }

  return (
    <>
      {/* <div className="h-screen flex flex-col"> */}
        {/* <Header /> */}
        {/* <div className="flex-1 flex flex-col overflow-hidden"> */}
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
                      {11 + index}
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
        {/* </div> */}
      {/* </div> */}
    </>
  );
};

export default WeekCalendar;
