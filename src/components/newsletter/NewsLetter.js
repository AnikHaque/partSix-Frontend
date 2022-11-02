import React from 'react'
import './NewsLetter.css';
const NewsLetter = () => {
  return (
    <div className='news-letter container mx-auto px-6 p-3'>
       <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1'>
<div className='text-center pb-5 '>
<h1 className='font-bold text-white text-5xl pt-20 pb-4'>Grab Our Newsletter</h1>
<p className='text-white font-bold text-center pb-4'>To receive latest offers and discounts from the shop.</p>
<input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
<button className="btn btn-news">Subscribe Now</button>
</div>
<div className='hidden lg:visible lg:block'>
    <img src='https://doccure-react.dreamguystech.com/template/6533b030d020461e359bc2a66db3cb82.png' className='lg:max-w-lg news-image mx-auto'></img>
</div>
       </div>
    </div>
  )
}
export default NewsLetter;