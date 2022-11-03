// .--------------------
// doctors booking card page ////
import React, { useState } from "react";

// icon import

import { Link, useNavigate } from "react-router-dom";

const Ortho = ({ doctor }) => {
  const {
    _id,
    image,
    category,
    name,
    location,
    education,
    reviews,
    designation,
    department,
    hospital,
    slots,
    fees,
    specialization,
  } = doctor;

  // collaps
  const [descriptionCollapse, setDescriptionCollapse] = useState(true);

  // collaps button
  const showMore = () => {
    setDescriptionCollapse(true);
  };

  // collaps button
  const showLess = () => {
    setDescriptionCollapse(false);
  };

   const navigate = useNavigate()


  return (
    <div>
      <div>
        <div className="single-doctor p-7">
          <img
            style={{ height: "300px" }}
            src={image}
            className="w-96 mx-auto pt-3 pb-3"
            alt="doctor"
          />

          <div className="doctor-description ">
            <i class="fa-solid fa-star mr-2 text-orange-400	"></i>
            <i class="fa-solid fa-star mr-2 text-orange-400	"></i>
            <i class="fa-solid fa-star mr-2 text-orange-400	"></i>
            <i class="fa-solid fa-star text-orange-400	"></i> <b>({reviews})</b>
            <p className="doctor-category">{specialization}</p>
            <h4 className="doctor-name">{name}</h4>
            <span className="doctor-education">{hospital}</span>
            {/* <h6 className="mt-4">{designation}</h6>
            <h6 className="department">{department}</h6>
            <h6 className="hospital">{hospital}</h6> */}
            <div className="mt-5 grid lg:grid-cols-3 sm:grid-cols-1">
              <div className="flex items-center gap-2">
                <h6 className="hospital text-[15px] font-[600]">
                  <i class="fa-solid fa-user text-primary"></i> {designation}
                </h6>
              </div>

              <div className="flex items-center gap-2">
                <h6 className="hospital text-[15px] font-[600]">
                  <i class="fa-solid fa-location-pin text-primary"></i>{" "}
                  {location}
                </h6>
              </div>
              <div className="flex items-center gap-2">
                <h6 className="hospital text-[15px] font-[600]">
                  <i class="fa-solid fa-dollar-sign text-primary"></i> {fees}.00
                </h6>
              </div>

              {/* <div className="flex items-center gap-2">
                <p className="text-left text-[#757575]  font-[600]"> <FaRegMoneyBillAlt  ></FaRegMoneyBillAlt> </p>
                <h6 className="department  text-[15px] font-[600]"> $ {fees}.00 </h6>
            </div> */}
            </div>
            <div className="text-center">
              <div className="flex justify-between mt-10">
                {/* View profile butoon */}
                {/* use useNavigation this buttton where you wanna go*/}
                <button
                  class="text-1xl mt-4 mx-5 bg-white
                outline outline-[#1b82e2] hover:bg-[#1b82e2] w-[130px] h-[46px]  rounded-lg text-black font-[600] transition ease-in-out delay-100 hover:text-white 
                hover:translate-y-1 "
                >
                  {" "}
                  <span className="text-[20px] text-white ">
                    {/* <AiFillCalendar></AiFillCalendar> */}
                  </span>{" "}
                  <span className="mx-2 text-[16px]  ">
                    <Link to={`/ortho/${_id}`}>
                       View Profile
                    </Link>
                  </span>{" "}
                </button>

                {/* book now button */}
                {/* use useNavigaein this buttton where you wanna go*/}
                <button
                onClick={()=>navigate("/appointment")}
                  class="text-1xl mt-4 mx-5 bg-[#4506cb]
                w-[130px] h-[50px]  rounded-lg text-black font-[600] transition ease-in-out delay-100 hover:translate-y-1  "
                >
                  {" "}
                  <span className="text-[20px] text-white ">
                    {/* <AiFillCalendar></AiFillCalendar> */}
                  </span>{" "}
                  <span className="mx-2 text-[16px] text-white ">
                    {" "}
                     Book Now
                  </span>{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ortho;
