import React from 'react';

import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { useState } from 'react';
import { format } from 'date-fns';


const AppointmentBanner = ({ date, setDate }) => {


  return (
    <div>
     

      <div className=' grid lg:grid-cols-2 sm:grid-cols-1 mt-[80px]'>
        <div className='mx-auto mt-24 w-96'>
          <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
          />
        </div>

        <img src='https://doccure-react.dreamguystech.com/template/dd1ce07d846143bf5f7e940654570762.png' className='lg:max-w-lg'></img>

      </div>
    </div>
  );
}
export default AppointmentBanner;