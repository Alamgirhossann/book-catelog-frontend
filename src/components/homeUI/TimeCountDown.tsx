import { useState, useEffect } from 'react';

function TimeCountdown() {
  const calculateTimeLeft = () => {
    const difference = +new Date('2026-05-10T00:00:00') - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());
  // console.log(timeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const addLeadingZero = (value: number) => {
    return value < 10 ? `0${value}` : value;
  };

  if (
    !timeLeft.days &&
    !timeLeft.hours &&
    !timeLeft.minutes &&
    !timeLeft.seconds
  ) {
    return <div>The countdown is over!</div>;
  }

  return (
    <div className="flex space-x-3">
      <div className="md:text-2xl text-[15px]">
        <p className="text-center">
          {timeLeft.days ? addLeadingZero(timeLeft.days) : '00'}
        </p>
        <p>Days</p>
      </div>
      <div className="md:text-2xl text-[15px]">
        <p className="text-center">
          {timeLeft.hours ? addLeadingZero(timeLeft.hours) : '00'}
        </p>
        <p>Hours</p>
      </div>
      <div className="md:text-2xl text-[15px]">
        <p className="text-center">
          {timeLeft.minutes ? addLeadingZero(timeLeft.minutes) : '00'}
        </p>
        <p>Minutes</p>
      </div>
      <div className="md:text-2xl text-[15px]">
        <p className="text-center">
          {timeLeft.seconds ? addLeadingZero(timeLeft.seconds) : '00'}
        </p>
        <p>Seconds</p>
      </div>
    </div>
  );
}

export default TimeCountdown;
