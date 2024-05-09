// import { CountdownCircleTimer } from 'react-countdown-circle-timer';
// import './styles.css';

// import { useState } from 'react';

// const minuteSeconds = 60;
// const hourSeconds = 3600;
// const daySeconds = 86400;

// const timerProps = {
//   isPlaying: true,
//   size: 120,
//   strokeWidth: 6,
// };

// const renderTime = (dimension: any, time: number) => {
//   return (
//     <div>
//       <div className="text-center">{time}</div>
//       <div className="text-[20px]">{dimension}</div>
//     </div>
//   );
// };

// const getTimeSeconds = (time: number) => (minuteSeconds - time) | 0;
// const getTimeMinutes = (time: number) =>
//   ((time % hourSeconds) / minuteSeconds) | 0;
// const getTimeHours = (time: number) => ((time % daySeconds) / hourSeconds) | 0;
// const getTimeDays = (time: number) => (time / daySeconds) | 0;

// const TimeCountDown = () => {
//   const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
//   const endTime = stratTime + 243248; // use UNIX timestamp in seconds

//   const remainingTime = endTime - stratTime;
//   const days = Math.ceil(remainingTime / daySeconds);
//   const daysDuration = days * daySeconds;

//   return (
//     <div className="flex flex-wrap gap-2">
//       <div className="h-[50px]">
//         <CountdownCircleTimer
//           {...timerProps}
//           colors="#fff"
//           duration={daysDuration}
//           initialRemainingTime={remainingTime}
//         >
//           {({ elapsedTime, color }: any) => (
//             <span style={{ color }}>
//               {renderTime('days', getTimeDays(daysDuration - elapsedTime))}
//             </span>
//           )}
//         </CountdownCircleTimer>
//       </div>

//       <CountdownCircleTimer
//         {...timerProps}
//         colors="#fff"
//         duration={daySeconds}
//         initialRemainingTime={remainingTime % daySeconds}
//         onComplete={(totalElapsedTime: any) => ({
//           shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
//         })}
//       >
//         {({ elapsedTime, color }: any) => (
//           <span style={{ color }}>
//             {renderTime('hours', getTimeHours(daySeconds - elapsedTime))}
//           </span>
//         )}
//       </CountdownCircleTimer>
//       <CountdownCircleTimer
//         {...timerProps}
//         colors="#fff"
//         duration={hourSeconds}
//         initialRemainingTime={remainingTime % hourSeconds}
//         onComplete={(totalElapsedTime: any) => ({
//           shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
//         })}
//       >
//         {({ elapsedTime, color }: any) => (
//           <span style={{ color }}>
//             {renderTime('minutes', getTimeMinutes(hourSeconds - elapsedTime))}
//           </span>
//         )}
//       </CountdownCircleTimer>
//       <CountdownCircleTimer
//         {...timerProps}
//         colors="#fff"
//         duration={minuteSeconds}
//         initialRemainingTime={remainingTime % minuteSeconds}
//         onComplete={(totalElapsedTime: any) => ({
//           shouldRepeat: remainingTime - totalElapsedTime > 0,
//         })}
//       >
//         {({ elapsedTime, color }: any) => (
//           <span style={{ color }}>
//             {renderTime('seconds', getTimeSeconds(elapsedTime))}
//           </span>
//         )}
//       </CountdownCircleTimer>
//     </div>
//   );
// };

// export default TimeCountDown;

// import React, { useState, useEffect } from 'react';

// const TimeCountDown = ({ targetDate }: any) => {
//   const calculateTimeLeft = () => {
//     const difference = +new Date(targetDate) - +new Date();
//     let timeLeft = {};

//     if (difference > 0) {
//       timeLeft = {
//         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//         hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//         minutes: Math.floor((difference / 1000 / 60) % 60),
//         seconds: Math.floor((difference / 1000) % 60),
//       };
//     }

//     return timeLeft;
//   };

//   const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setTimeLeft(calculateTimeLeft());
//     }, 1000);

//     return () => clearTimeout(timer);
//   });

//   const addLeadingZero = (value: any) => {
//     return value < 10 ? `0${value}` : value;
//   };

//   return (
//     <div className="flex items-center justify-center space-x-2">
//       <div className="text-lg">{addLeadingZero(timeLeft.days)} Days</div>
//       <div className="text-lg">{addLeadingZero(timeLeft.hours)} Hours</div>
//       <div className="text-lg">{addLeadingZero(timeLeft.minutes)} Minutes</div>
//       <div className="text-lg">{addLeadingZero(timeLeft.seconds)} Seconds</div>
//     </div>
//   );
// };

// export default TimeCountDown;

import React, { useState, useEffect } from 'react';

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
