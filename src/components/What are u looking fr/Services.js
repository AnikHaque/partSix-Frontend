// 2 what are you lkokking for 14 number  and 12 no r hovver effect
import React from "react";
// react icons import 
import {FaUserMd} from 'react-icons/fa'
import {FaTablets} from "react-icons/fa"
import {FaVial} from 'react-icons/fa'
import { useNavigate } from "react-router-dom";
// image import
import svgservices from '../../assets/Banner Image/services.png';



const Services = () => {

  const navigate = useNavigate()

  return (
    <div>
      <div className=" container mx-auto px-6 mb-[130px]">

       <div className="flex justify-center mb-[120px] items-center gap-5 ">
        <img className="hidden md:block w-[66px] h-[25px]" src={svgservices} alt="" />
        <p className="font-bold  text-4xl"> What are you <span className='text-[#1b82e2]'>looking</span> for ? </p>
        <img className="hidden md:block w-[66px] h-[25px]" src={svgservices} alt="" />
       </div>

        <div className=" grid grid-row lg:grid-cols-3 gap-x-4 ">

{/* visit doctors card Buttons  */}   

          <button onClick={()=>navigate('/doctor')} >
          <div  className="featured h-auto lg:max-x-lg md:max-w-md sm:max-w-sm">
            <div className="flex justify-center  "> 
            <i className=""> <FaUserMd className="text-7xl mt-[-35px] text-white bg-[#0071DC] rounded-[50%] p-2  "></FaUserMd> </i>
            </div>
             
            <p className="pt-3 px-5 text-[40px] font-[600] text-[#545767] number ">
              01
            </p>
            <p className="px-5 mt-2 text-[20px]  common font-extrabold text-primary tagline">
              visit doctor
            </p>
            <p className="px-5 mt-3 pb-5  explain ">
            We hire the best specialists to deliver top-notch diagnostic services for you.
            </p>
          </div>
          </button>

{/* Find pharmacy card button */}
         <button onClick={()=>navigate('/pharmacy')}  >
         <div  className="featured2  h-auto lg:max-x-lg md:max-w-md sm:max-w-sm  ">         
          <div className="flex justify-center"> 
            <FaTablets className="text-7xl mt-[-35px] text-white bg-[#27AD5F] rounded-[50%] p-2"></FaTablets></div>

            <p className="number pt-3 px-5 text-[40px] font-[600] text-[#545767]  ">
              02
            </p>
            <p className="px-5 mt-2 text-[20px] common font-extrabold text-[#1b82e2] tagline">
            Find a Pharmacy
            </p>
            <p className="px-5 mt-3 pb-5 ] explain">
              {" "}
              We provide the a wide range of medical services, so every person could have the opportunity.{" "}
            </p>
          </div>
         </button>


{/* Find lab card button Stastci  */}
          <div className="featured3  h-auto lg:max-x-lg md:max-w-md sm:max-w-sm  ">
          <div className="flex justify-center"> 
            <FaVial className="text-7xl mt-[-35px] text-white bg-[#F2A54A] rounded-[50%] p-2"></FaVial></div>

            <p className="number pt-3 px-5 text-[40px] font-[600] text-[#545767]  ">
              03
            </p>
            <p className="px-5 mt-2 text-[20px] common font-extrabold text-[#1b82e2]  tagline ">
            Find a Lab
            </p>
            <p className="px-5 mt-3 pb-5  explain">
              {" "}
              We use the first-class medical equipment for timely diagnostics of various diseases timely diagnostics of various diseases diseases timely diagnostics of various diseases.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
