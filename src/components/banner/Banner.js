import React from 'react'

import './Banner.css';
export const Banner = () => {
  return (
    <div className='bg-home pt-10 pb-10'>
        <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3'>
<div className='mt-16 px-16'>
  <p className='text-5xl'>Lowest Price</p>
  <h1 className='font-bold text-7xl text-error'>EVERYTHING</h1>
  <p className='text-3xl pb-3'>High Quality - Extreme Performance</p>
  <button class="btn btn-error">Shop Now</button>
  
</div>
<div>
 <img src='https://risingtheme.com/html/demo-partsix/partsix/assets/img/slider/home3-slider1-layer.webp' className='w-96'></img>
</div>

        </div>
    </div>
  )
}
