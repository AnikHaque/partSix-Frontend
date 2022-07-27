import React from 'react';
import Typewriter from 'typewriter-effect';
import './About.css';
export const About = () => {
  return (
    <div>
        <div class="hero pt-5 pb-5 bg-black">
  <div class="hero-content flex-col lg:flex-row">
    <img src="https://risingtheme.com/html/demo-partsix/partsix/assets/img/banner/banner14.webp" class="max-w-lg rounded-lg shadow-2xl" />
    <div>
      <h1 class="text-5xl font-bold text-gray-500">
      <Typewriter 
  options={{
    strings: ['We commit to provide  quality & safe.'],
    autoStart: true,
    loop: true,
    
  }}
/>

  </h1>
      <p class="py-6 text-white">Born out of a shared love of good design & quality products, we create considered solutions fit for the modern lifestyle. Always driven by passion, we work to empower others to live the same</p>
      <button class="btn btn-black text-white">Read More</button>
    </div>
  </div>
</div>
    </div>
  )
}
