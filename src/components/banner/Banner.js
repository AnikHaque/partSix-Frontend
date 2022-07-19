import React from 'react'
import Typewriter from 'typewriter-effect';
import './Banner.css';
export const Banner = () => {
  return (
    <div className='bg-dark pt-32 pb-20'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3'>
<div className='mt-16 px-16'>
  <p className='text-5xl text-white pb-2'>Lowest Price</p>

  <h1 className='font-bold text-7xl text-gray-500 pb-2'>
 
  <Typewriter 
  options={{
    strings: ['EVERYTHING'],
    autoStart: true,
    loop: true,
    
  }}
/>

  </h1>
  <p className='text-3xl pb-5 text-white'>High Quality - Extreme Performance</p>
  <button class="btn btn-dark shadow-banner pl-10 pr-10">Shop Now</button>
  
  

</div>
<div>
 <img src='https://risingtheme.com/html/demo-partsix/partsix/assets/img/slider/home3-slider1-layer.webp' className='w-96'></img>
</div>

        </div>
    </div>
  )
}
