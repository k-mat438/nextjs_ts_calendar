'use client'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AppsIcon from '@mui/icons-material/Apps';
import { usePathname, useRouter } from 'next/navigation';
import { getMonth, getYear, format } from 'date-fns';
import { getCalendarInfo } from '@/utils/utilsCalendar';

const Header = () => {
  const router = useRouter();
  const currentPath = usePathname()

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'week') {
      router.push('/calendar/week');
    }
    if (value === 'month') {
      router.push('/calendar/month');
    }
  };


  const { date }= getCalendarInfo()
  return (
    <header className="flex px-4 py-2 w-full bg-white items-center border-b">
      <div className="flex space-x-4">
        <button className="text-2xl">☰</button>
        <div className="flex items-center">
          <CalendarMonthIcon />
          <span className="font-medium text-lg">カレンダー</span>
        </div>
      </div>

      <div className="flex justify-between w-10/12 mx-auto">
        <div className='flex items-center space-x-5'>
          <button className="px-4 py-2 bg-white border border-gray-200 rounded hover:bg-gray-50">今日</button>
          <button className="px-2 py-1 hover:bg-gray-50 rounded">&lt;</button>
          <button className="px-2 py-1 hover:bg-gray-50 rounded">&gt;</button>
          {/* <div className="text-xl ml-2">{`${getYear(date)}年 ${getMonth(date)+1}月`}</div> */}
          <div className="text-xl ml-2">{`${getYear(date)}年 ${getMonth(date)+1}月`}</div>
        </div>

        <div className='flex items-center space-x-2'>
          <select className="px-3 py-1 border rounded-md" onChange={handleSelectChange}>
            <option value='month'>月</option>
            <option value='week'>週</option>
          </select>
          <AppsIcon className='hover:bg-gray-100' />
        </div>
      </div>

      <div>
        <div className="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white">
          M
        </div>
      </div>
    </header>
  );
};

export default Header;