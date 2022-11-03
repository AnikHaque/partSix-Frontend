import React from "react";
import { A11y, Navigation, Pagination, Scrollbar, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Homecomponents.css";
import Navbar from "../navbar/Navbar";
import './Banner.css'

const Banner = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        // spaceBetween={50}
        // slidesPerView={3}
        // navigation
        autoplay={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}

  

      >
        <SwiperSlide>
        <div className="">
            <div className="bannerbg flex justify-end items-center ">
            
              <div className="flex">
             
                <div className="mr-[30px] text-[33px] text-left font-extrabold text-white uppercase container p-2">
               
                  <p >
                    our best doctor are ready for you
                    <br /> just make an{" "}
                    <span className="text-[#0071DC]">appoinment </span>{" "}
                  </p>
                  <button className="btn btn-outline btn-primary mt-3">
                    visit Doctors{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        
        {/* our second banner */}
        {/* <SwiperSlide className="bg-[#E5F1FB]">
          <div className="flex justify-between pt-3">
            <div className="scbgdraw" >  </div>
            <div className="scbgdraw2 mt-10 " > </div>
            <div className="scbgdraw3" > </div>
            </div>
          <div className="flex flex-col md:flex-row items-center ">
            <div className="w-1/2">
              <img className="" src='https://medical-clinic.cmsmasters.net/wp-content/uploads/2016/09/bg-1.jpg' alt="" />
            </div>
            <div className="flex w-1/2 justify-end mt-5 md:mt-0" >
              <div> 
                <p className="text-4xl uppercase font-bold text-left">meet  Elizabeth Blackwell 
                <br /> Our american  <span className="text-[#7FB7ED]">gynaecologist</span> specialist </p>
                <div className="flex mt-5 md:mt-0">
                <button className="btn btn-outline btn-primary mt-3 text-left align-left ">
                    visit Doctors{" "}
                  </button> 
                </div>
              </div>
             
            </div>
          </div>
        </SwiperSlide> */}




      </Swiper>
    </div>
  );
};

export default Banner;
