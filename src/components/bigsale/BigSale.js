import React from 'react'
import './BigSale.css'
export const BigSale = () => {
  return (
    <div className='px-12 pt-10'>
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-3'>
            <div className='big-sale-1'>
                <p className='text-1xl'><span className='text-white'>Big Sale - Up to</span> 40% Off</p>
                <h1 className='text-2xl'><b>GENUINE <span className='text-white'>PARTS</span> </b></h1>
                <p className=' '>We Supply top Brands</p>
                <a className='font-bold text-white' href='#'>Buy Now</a>
            </div>
            <div className='big-sale-2'>
            <p className='text-1xl'><span className='text-white'>Big Sale - Up to</span> 40% Off</p>
                <h1 className='text-2xl'><b className='text-white'>GENUINE <span className='text-white'>PARTS</span> </b></h1>
                <p className='text-white '>We Supply top Brands</p>
                <a className='font-bold text-white' href='#'>Buy Now</a>
            </div> 
             <div className='big-sale-3'>
            <p className='text-1xl text-error'>Big Sale - Up to 40% Off</p>
            <h1 className='text-2xl'><b className='text-white'>GENUINE <span className='text-white'>PARTS</span> </b></h1>
            <p className='text-error '>We Supply top Brands</p>
                <a className='font-bold text-white' href='#'>Buy Now</a>
            </div> 
        </div>
    </div>
  )
}
