// .......................-------------////
// book our doctors swiper slider  dynamic

import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
// swiper imports
import { A11y, Autoplay, Navigation, Pagination, Scrollbar, Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Swiper, SwiperSlide } from 'swiper/react';
// Routing page
import Doctors from './Doctors';
// import phto


const Doctor = () => {

// //   docotrs damy json //
// const doctors = [
//     {
//         id: '01',
//         img: 'https://doccure-react.dreamguystech.com/template/82a70aca5403c6ff499b0ac2a729e670.jpg',
//         category: 'Medicine, Diabetes, Thyroid & Hormone',
//         name: 'Dr. Md. Firoj Hossain',
//         education: 'MBBS, FCPS (Medicine), DEM (BIRDEM), MD (Endocrinology), MACE (USA), MACP (USA) ',
//         designation: 'Assistant Professor',
//         department: 'Department of Endocrinology',
//         hospital: 'Mugda Medical College & Hospital',
//          available: "Available Fri-Mon",
//          Fee : " 1000$," 
//     },
//     {
//         id: '02',
//         img: 'https://doccure-react.dreamguystech.com/template/e7c74a698df7da05026e7a78cfe2eb75.jpg',
//         category: 'Diet & Nutrition Consultant',
//         name: 'Ms. Jayoti Mukherjee',
//         education: 'B.Sc & M.Sc in Nutrition Science (DU), Trained in BIRDEM, 10+ Years Experience in Weight Management',
//         designation: 'Senior Nutrition Consultant',
//         department: 'Surecell Medical BD',
//         hospital: 'Ex- VLCC Healthcare & VIBES Healthcare',
//        available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '03',
//         img: 'https://doccure-react.dreamguystech.com/template/81f237c60c9af3153ecf4340f772db98.jpg',
//         category: 'Medicine & Chest Specialist (Pulmonologist)',
//         name: 'Dr. Rajib Kumar Saha',
//         education: 'MBBS(Dhaka), MRCP(UK), MCPS(Medicine), MD(Chest), MACP (USA)',
//         designation: 'Consultant',
//         department: 'Department of Respiratory Medicine',
//         hospital: 'ASGAR ALI HOSPITAL',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '04',
//         img: 'https://doccure-react.dreamguystech.com/template/4c4edf4d3fc07e7acd8f249becdbcc04.jpg',
//         category: 'Neonate & Child Specialist',
//         name: 'Dr. Salahuddin Mahmud',
//         education: 'Fellow in Pediatric Nutrition, Boston University (USA), MBBS (Dhaka), MD (Pediatrics), Fellow in Pediatric Nutrition, Boston University (USA), MBBS (Dhaka), MD (Pediatrics) & Sanjay Gandhi Postgraduate Institute, Lucknow (India)',
//         designation: 'Associate Professor',
//         department: 'Department of Pediatric  Gastroenterology ',
//         hospital: 'Dhaka Shishu (Children) Hospital',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '05',
//         img: 'https://doccure-react.dreamguystech.com/template/9109ec39a7b4d06af126b0d5cec32273.jpg',
//         category: 'Dermatologist (Skin, Allergy, Hair, Sex)',
//         name: 'Dr. Humaira Afreen',
//         education: 'MBBS (DMC), BCS (Health), FCPS (Dermatology and Venereology)',
//         designation: 'Assistant Professor',
//         department: 'Skin & VD Department',
//         hospital: 'SSMC Mitford Hospital, Dhaka',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '06',
//         img: 'https://doccure-react.dreamguystech.com/template/7058680646be673ef70f79e43f408408.jpg',
//         category: 'Ears, Nose and Throat (ENT) Specialist',
//         name: 'Dr. Rashedul Hasan',
//         education: 'MBBS, MSc (London), Specialty: Vertigo, Tinnitus, Hearing loss & ENT disease',
//         designation: 'Consultant',
//         department: 'Department of Ears, Nose and Throat',
//         hospital: 'Prescription Point, Banani ',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '07',
//         img: 'https://doccure-react.dreamguystech.com/template/e8a9570dc3b6da522754127d53f3be00.jpg',
//         category: 'Gynaecologist',
//         name: 'Dr. Riffat Rahim',
//         education: 'MBBS (Dhaka), BCS (Health), DGO, FCPS (Gynae & Obs), MMED (BSMMU), Special Training of Laparoscopic Surgery (Chennai, India)',
//         designation: 'Assistant Professor',
//         department: 'Department of Gynae & Obs',
//         hospital: 'Mugda Medical College, Dhaka',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '08',
//         img: 'https://i.imgur.com/a9HMk43.jpg',
//         category: 'Neurologist',
//         name: 'PROF. DR. Mohd. Mozibor',
//         education: 'MBBS, FCPS(Medicine), FRCP(UK), FACP(USA) Advance Training in Neurophysiology (TURKEY)',
//         designation: 'Consultant',
//         department: 'Neurology Department',
//         hospital: 'United Hospital Ltd., Gulshan 2',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '09',
//         img: 'https://i.imgur.com/B63wRTP.png',
//         category: 'Dentist',
//         name: 'Dr. Shahana Dastagir',
//         education: 'BDS (Dhaka Dental College), PGT (Netherlands), MPH (USA), MPhil',
//         designation: 'Associate Professor',
//         department: 'Department of Dentistry',
//         hospital: 'BIRDEM Hospital & Ibrahim Medical College',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '10',
//         img: 'https://doccure-react.dreamguystech.com/template/4c4edf4d3fc07e7acd8f249becdbcc04.jpg',
//         category: 'Orthopaedic Surgeon',
//         name: 'Dr. Asadullah Ripon',
//         education: 'MBBS, D. Ortho in Orthopaedic Surgery, Specialised Training in Hand Surgery (India, UK)',
//         designation: 'Associate Professor',
//         department: 'Department of Orthopedics',
//         hospital: 'Enam Medical College and Hospital',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '11',
//         img: 'https://doccure-react.dreamguystech.com/template/bf787f19425899943e27628617507aa9.jpg',
//         category: 'Nephrologist',
//         name: 'Dr. Shudhanshu Kumar',
//         education: 'MBBS, MD (Nephrology), Advance Training in Neurophysiology (India)',
//         designation: 'Registrar',
//         department: 'Department of Nephrology & Dialysis',
//         hospital: 'BIRDEM Hospital & Ibrahim Medical College',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     },
//     {
//         id: '12',
//         img: 'https://doccure-react.dreamguystech.com/template/bf787f19425899943e27628617507aa9.jpg',
//         category: 'General and Colorectal Surgeon',
//         name: 'Dr. Nazmul Hoque Masum',
//         education: 'MBBS (DMC), FCPS (Surgery) FICS, FACS (USA) Fellow, International Society of University Colon and Rectal Surgeons (FISUCRS) Member, American Society of Colon and Rectal Surgeons(ASCRS) Fellow, Minimal Access Surgery (FMAS), India',
//         designation: 'Associate Professor',
//         department: 'Department of Surgery',
//         hospital: 'Dhaka Medical College & Hospital',
//         available: "Available Fri-Mon",
//        Fee : " 1000$,"
//     }
// ];

const [doctors,setDoctors] = useState([])
    useEffect(()=>{
        fetch(' https://dry-brook-75772.herokuapp.com/hospitaldoctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    },[])



  return (
    <div className='mt-[150px] container mx-auto px-6'>
       <div className='mb-[100px] '>
       <p className='text-center text-4xl uppercase font-bold  '>Book Our Best Super Herros <span className='text-[#1b82e2]'> (docotrs) </span> </p>
        <p className='text-center mt-1'> Lorem ipsumaudantium saepe fuga. Veritatis? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae, distinctio. </p>
       </div>
        <div>
        <Swiper
                    modules={[Navigation, Autoplay, Pagination, Scrollbar, Zoom, A11y]}
                    spaceBetween={20}
                    // slidesPerView={3}
                    centeredslide="true"
                    navigation
                    key={doctors.length}
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
                        doctors.map((doctor, index) => (
                            <SwiperSlide key={index} >
                                <Doctors key={doctor._id} doctor={doctor} ></Doctors>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
        </div>
    </div>
  )
}

export default Doctor;