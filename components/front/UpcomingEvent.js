import Button from '../Button';
import Typography from '../Typography';
import { useEffect, useState } from 'react';
import Timer from './timer';
function UpcomingEvent() {
  const [day, setDay] = useState();
  const [hour, setHour] = useState();
  const [minute, setMinute] = useState();
  const [second, setSecond] = useState();
  useEffect(() => {
    setInterval(() => {
      Timer(
        'september 25,2021 20:00:00',
        setDay,
        setHour,
        setMinute,
        setSecond
      );
    }, 1000);
  }, []);

  const fineTime = (day) => {
    if (day < 10) {
      return `0${day}`;
    } else {
      return day;
    }
  };

  return (
    <div
      className='rounded-md overflow-hidden relative shadow-lg flex flex-col md:flex-row justify-between items-center h-max bg-gray-800'
      style={{
        backgroundImage:
          ' linear-gradient(125deg, #000 50%, rgba(0,0,0,0)), url("/assets/images/party.jpg")',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className='p-5 py-5 md:p-10 w-full md:w-6/12 text-white'>
        <Typography className='mb-2' type='secondary'>
          Upcoming Event
        </Typography>
        <Typography className='mb-2' type='header-caption'>
          Let’s build your career together “ We at digital learning group,
          prepare students for future by making them aware of all the
          opportunities available in the digital world and how to make best use
          of them
        </Typography>

        <Button btnType='primary'>Register Now</Button>
        <Typography
          type='secondary'
          className='mt-5 w-8/12 flex justify-between items-center  text-white '
        >
          <span className='flex items-center justify-center flex-col'>
            {fineTime(day)} <span className='text-base font-medium'>Days</span>
          </span>
          :
          <span className='flex items-center justify-center flex-col'>
            {fineTime(hour)} <span className='text-base font-medium'>Hr</span>
          </span>
          :
          <span className='flex items-center justify-center flex-col'>
            {fineTime(minute)}{' '}
            <span className='text-base font-medium'>Min</span>
          </span>
          :
          <span className='flex items-center justify-center flex-col'>
            {fineTime(second)}{' '}
            <span className='text-base font-medium'>Sec</span>
          </span>
        </Typography>
      </div>
    </div>
  );
}

export default UpcomingEvent;
