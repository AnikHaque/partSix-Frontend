import React from 'react'
import CountUp from 'react-countup';

 export const Count = () => {
  <CountUp
  start={-875.039}
  end={160527.012}
  duration={2.75}
  separator=" "
  decimals={4}
  decimal=","
  prefix="EUR "
  suffix=" left"
  onEnd={() => console.log('Ended! 👏')}
  onStart={() => console.log('Started! 💨')}
>
  {({ countUpRef, start }) => (
    <div>
      <span ref={countUpRef} />
      <button onClick={start}>Start</button>
    </div>
  )}
</CountUp>
  return (
    <div>
       

       <div className="stats stats-vertical lg:stats-horizontal shadow w-full">
  
  <div className="stat text-center">
    <div className="stat-title">WorldWide Students</div>
    <div className="stat-value text-title">248K</div>
    <div className="stat-desc">Jan 1st - Feb 1st</div>
  </div>
  
  <div className="stat text-center">
    <div className="stat-title">Years Experience</div>
    <div className="stat-value text-title">20+</div>
    <div className="stat-desc">↗︎ 400 (22%)</div>
  </div>
  
  <div className="stat text-center">
    <div className="stat-title">Professional Courses</div>
    <div className="stat-value text-title">661+</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  <div className="stat text-center">
    <div className="stat-title">Beautiful Review</div>
    <div className="stat-value text-title">NaN+</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>

    </div>
  )
}
