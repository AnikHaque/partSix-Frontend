import React from 'react'
import Typewriter from 'typewriter-effect';
import './Banner.css';
export const Banner = () => {
  return (
    <div className='bg-banner pt-20 pb-30'>
        <div className='grid lg:grid-cols-1 sm:grid-cols-1 gap-3'>
<div className='mt-16 px-16'>
  <p className='text-3xl text-white pb-2 pt-14 banner-tag'>Learn New Skills & Popular Courses</p>

  <h1 className='font-bold text-7xl text-white pb-2'>
 
  <Typewriter 
  options={{
    strings: [' Grow Skills '],
    autoStart: true,
    loop: true,
    
  }}
/>

  </h1>
 
  
  <p className='text-3xl  text-white pb-4'>For Real Life</p>
  <button class="btn btn-banner pl-10 pr-10">Explore Courses</button>
  
  

</div>


        </div>
    </div>
  )
}
