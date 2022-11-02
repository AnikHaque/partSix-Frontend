import React, { useEffect, useState } from "react";
// swiper import
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Zoom,EffectCoverflow  } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react'
import Reviewdg from "./Reviewdg";


const Reviewda = () => {
  const [reviews,setReviews] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
  return (
    <div className="container mx-auto px-6 p-3">
       <div className='mb-[100px] mt-[30px]'>
       <p className='text-center text-4xl uppercase font-bold  '>What says our <span className='text-[#1b82e2]'> (patients) </span> regarding of us </p>
        <p className='text-center mt-1'> if your have any doubdt regarding of us. Hope you well get your ans from here.This review patient give from her soul </p>
       </div>
      <div>
      <Swiper
                  className="shadow-none box-content"
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y,EffectCoverflow ]}
                    spaceBetween={40}
                    effect={"coverflow"}
                    centeredslide="true"
                    navigation
                    key={reviews.length}
                    autoplay={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 1.5,
                        
                      }}
                      
                      slidesPerView={"auto"}
                    // breakpoints={{
                    //     300: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //       },
                    //     500: {
                    //         slidesPerView: 1,
                    //         spaceBetween: 20,
                    //       },
                    //     640: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 20,
                    //     },
                    //     768: {
                    //       slidesPerView: 2,
                    //       spaceBetween: 40,
                    //     },
                    //     1024: {
                    //       slidesPerView: 3,
                    //       spaceBetween: 50,
                    //     },
                    //   }}
                >

{
                       reviews.map((review, index) => (
                            <SwiperSlide className="bg-[#FFFFFF] shadow-none  " key={index} >
                                <Reviewdg key={review._id} review={review} ></Reviewdg>
                            </SwiperSlide>
                        ))
                    }

           </Swiper>


      </div>
    </div>
  );
};

export default Reviewda;
