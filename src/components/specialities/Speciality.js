import React from "react";
import { Link } from "react-router-dom";
import Img15 from "../../assets/Speciality-img/dentistry.png";
import Img16 from "../../assets/Speciality-img/ent.png";
import Img21 from "../../assets/Speciality-img/hematology.png";
import Img20 from "../../assets/Speciality-img/nephrology.png";
import Img22 from "../../assets/Speciality-img/physical.png";
import Img17 from "../../assets/Speciality-img/urology.png";

const Specialty = () => {
  return (
    <div className="tpx-4 pb-12 mx-auto max-w-lg sm:px-6 md:max-w-2xl md:px-8 lg:max-w-5xl xl:max-w-7xl 2xl:container">
      <h1 className="text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl">
        Select a <span className="text-[#1b82e2]">Speciality</span>
      </h1>

      {/* Specialties Card  */}
      <div className="grid gap-9 sm:grid-cols-1 lg:grid-cols-3 2xl:grid-cols-3">
        {/* Card-Body-15  */}
        <div className="tp-4 mb-3 pt-5 pb-5  rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/GtXtjYh/360-F-302681154-9-HOWdv-GLt-CKpfw-O5-B85y-ESsz-G7-Mfml-Ul.jpg' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">
                Dental Care / Dentistry
              </h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis, management, and treatment of defects and injuries
                related to the teeth and gums.
              </p>
              <Link to='/ortho'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
            </div>
          </div>
        </div>
        {/* Card-Body-16  */}
       

        {/* Card-Body-17  */}
        <div className="tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/xY5XyVm/419-4198753-urology-logo-png-clipart-png-download-urology-logo.png' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">Urology</h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis and treatment of diseases of the male and female
                urinary-tract system.
              </p>
              <Link to='/uro'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
              
            </div>
          </div>
        </div>
        <div className="tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/XVmcJmG/869gyno-logo.png' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">Gynecology</h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis and treatment of diseases of the male and female
                urinary-tract system.
              </p>
              <Link to='/gyne'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
              
            </div>
          </div>
        </div>
        <div className="tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/HTxy1YC/images.png' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">Medicine</h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis and treatment of diseases of the male and female
                urinary-tract system.
              </p>
              <Link to='/uro'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
              
            </div>
          </div>
        </div>
        <div className="tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/KDKqKcJ/Heart-Only.png' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">Cardiology</h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis and treatment of diseases of the male and female
                urinary-tract system.
              </p>
              <Link to='/uro'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
              
            </div>
          </div>
        </div>
        <div className="tp-4 mb-3 pt-5 pb-5 rounded-[10px] bg-white drop-shadow-xl ring-4 ring-gray-50 ring-offset-2 hover:bg-sky-500 hover:no-underline">
          <div className="tmb-5 flex space-x-4">
            {/* Card-img  */}
            <div className="tmb-4 h-24 w-24 flex-shrink-0 rounded">
              <img src='https://i.ibb.co/wSRR7xv/528-At3-VB-400x400.png' alt="" className="h-24 w-24 object-cover" />
            </div>
            {/* Card-Title  */}
            <div className="text-left">
              <h3 className="text-xl tmb-2 font-bold text-[#1b82e2]">Endocrinology</h3>
              <p className="text-sm pt-2 m-0 pr-8 font-normal text-gray-600">
                Diagnosis and treatment of diseases of the male and female
                urinary-tract system.
              </p>
              <Link to='/uro'><i class="fa-solid fa-arrow-right ml-64 text-2xl text-primary font-bold"></i></Link>
              
            </div>
          </div>
        </div>

        {/* Card-Body-20  */}
       
        {/* Card-Body-21  */}
       

        {/* Card-Body-22  */}
      
      </div>
    </div>
  );
};

export default Specialty;
