import React, { useEffect, useState } from 'react'
import Unique from '../uniquenews/Unique'
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';


const News = () => {
  const [tools, setTools] = useState([])
  useEffect(() => {
    fetch(' https://dry-brook-75772.herokuapp.com/news')
      .then(res => res.json())
      .then(data => setTools(data))
  }, [])
  return (
    <>
      <section className='md:mx-10 pt-40 pb-10'>
        <div className='container mx-auto px-6 p-3 mt-[80px]' >
          <p className='text-center text-4xl uppercase font-bold  '>Our Popoular <span className='text-[#1b82e2]'> (Blogs) </span> </p>
          <div className='mt-[80px]' >

            <Swiper
              modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
              spaceBetween={20}
              // slidesPerView={3}
              centeredslide="true"
              navigation
              key={tools.length}
              autoplay={true}
              breakpoints={{
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                500: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
            >


              {
                tools.map((tool, index) => (
                  <SwiperSlide key={index} >
                    <Unique key={tool._id} tool={tool} ></Unique>
                  </SwiperSlide>
                ))
              }

            </Swiper>


            {/* {
    tools.map(tool=><Unique
    key={tool._id}
    tool={tool}
    
    ></Unique>)
} */}
          </div>

        </div>
      </section>
  
    </>
  )
}
export default News;