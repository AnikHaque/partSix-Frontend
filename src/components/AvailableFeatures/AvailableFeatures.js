import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
import './AvailableFeatures.css';
const AvailableFeatures = () => {
  return (
//     <div className='container mx-auto px-6 mb-[130px]'>
//       <div className='text-4xl font-bold text-center justify-center pb-14'>
//         <h1>Available Features in Our Clinic</h1>
//       </div>

//       {/* parts */}

//       <div className='grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-4'>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={operationimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Operation</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={medicalimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Medical</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={patientimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Patient Ward</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={testimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Test Room</h2>  
//   </div>
// </div>
//       <div className=" hhh lg:max-w-lg bg-base-100 pl-12 pr-12">
//   <figure><img src={icuimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">ICU</h2>  
//   </div>
// </div>
//       <div className=" hhh  lg:max-w-lg bg-base-100 pl-8 pr-8">
//   <figure><img src={labimage} className='w-20 mx-auto mt-12' alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className=" font-bold">Laboratory</h2>  
//   </div>
// </div>
//       </div>
//     </div>
<div>
<div className='text-4xl font-bold text-center justify-center pb-14 uppercase'>
<h1>Available <span className='text-[#1b82e2]'> (Features) </span> in Our Clinic</h1>

      </div>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 container mx-auto px-6 mb-[130px]'>
<div>
<img src='https://doccure-react.dreamguystech.com/template/389ad37182b22862cc747163aa14547e.png' className='lg:max-w-lg'></img>
</div>
<div>
<Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper text-white mt-16"
      >
        <SwiperSlide>
          <div>
            <img src='https://doccure-react.dreamguystech.com/template/5f512084522e55e7d0b0558624d98a9a.jpg' className='w-56 a-image'></img>
            <h1 className='text-primary font-bold text-center text-xl'>Test room</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://doccure-react.dreamguystech.com/template/6962bf596e4125886d79ad2872e3d47e.jpg' className='w-40 a-image'></img>
            <h1 className='text-primary font-bold ml-12 text-xl'>Medical</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://doccure-react.dreamguystech.com/template/1eb95d47909144cd3761c65e9c4c776c.jpg' className='w-56 a-image'></img>
            <h1 className='text-primary font-bold ml-8 text-xl'>Patient Ward</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://doccure-react.dreamguystech.com/template/83604bf3f6914c5df51fe23d9df9098f.jpg' className='w-36 a-image'></img>
            <h1 className='text-primary font-bold ml-8 text-xl'>ICU</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://doccure-react.dreamguystech.com/template/1f1ad77261b62c3930f3f5e97cb75efd.jpg' className='w-36 a-image'></img>
            <h1 className='text-primary font-bold ml-8 text-xl'>Laboratory</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <img src='https://doccure-react.dreamguystech.com/template/bf33350e232bcb1c47c9b10ab9626ca6.jpg' className='w-36 a-image'></img>
            <h1 className='text-primary font-bold ml-8 text-xl'>Operation</h1>
          </div>
        </SwiperSlide>
        
      </Swiper>
</div>
</div>
</div>
  );
};

export default AvailableFeatures;