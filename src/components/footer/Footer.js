import React from 'react';
import './Footer.css'
import { v4 as uuidv4 } from 'uuid';
import { BsFillArrowUpCircleFill, BsInstagram, BsLinkedin, BsFacebook, BsTwitter } from "react-icons/bs";
import Logo from '../../assets/Logo-removed BG.png'
export const Footer = () => {
    const service = ["Cardiology",
        "Diabetes",
        "Plastic Surgery",
        "Gastroenterology",
        "Gynecology",
        "Hepatology",
        "Neurology",
        "Radiology",
        "Rhinology",
        "Obstetrics",
        "Ophthalmology",
        "Oral Health",
        "Orthopedics",
        "Osteology",
        "Otology",
        "Pediatrics",
        "Psychiatry",
        "Pulmonolog",
    ]
    const doctorsLink = [
        "Appointments",
        "Chat",
        "Login",
        "Register",
        "Doctor Dashboard"
    ]
    const patientLink = [
        "Search for Doctors",
        "Login",
        "Register",
        "Booking",
        "Patient Dashboard"
    ]
    return (
        <footer className='bg-white'>
            <section className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 md:gap-0 w-[90vw] mx-auto py-10'>
                <div className='flex flex-col justify-items-start items-start'>
                    
                    <p className='text-left'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque ipsa assumenda eveniet quasi, culpa dignissimos fugit molestias adipisci corporis laborum ab ipsam! Vel facere similique quos aliquam repudiandae temporibus minus?</p>
                    <div className='flex justify-around'>
                        <BsInstagram className='mx-2 inline-block' /> <BsLinkedin className='mx-2 inline-block' /> <BsFacebook className='mx-2 inline-block' /> <BsTwitter className='mx-2 inline-block' />
                    </div>
                </div>
                <div className='flex flex-col justify-items-start items-start'>
                    <h4 className='text-[20px] font-[700] text-left'>For Doctor</h4>
                    {
                        doctorsLink.map(elem => <p key={uuidv4} className="hover:pl-5 hover:transition hover:ease-linear hover:delay-200 hover:text-blue-600">{elem}</p>)
                    }
                </div>
                <div className='flex flex-col justify-items-start items-start'>
                    <h4 className='text-[20px] font-[700] text-left'>For Patient</h4>
                    {
                        patientLink.map(elem => <p key={uuidv4} className="hover:pl-5 hover:transition hover:ease-linear hover:delay-200 hover:text-blue-600">{elem}</p>)
                    }
                </div>
                <div className='flex flex-col justify-items-start items-start text-left'>
                    <h4 className='text-[20px] font-[700] text-left'>Contact Us</h4>
                    <p>3556 Beech Street, San Francisco,California, CA 94108</p>
                    <br />
                    <a href="tel:+1 315 369 5943">+1 315 369 5943</a>
                    <br />
                    <a href="mailto: doccure@example.com">doccure@example.com</a>
                </div>
            </section>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29218.663069602597!2d90.4007547011052!3d23.735505945107015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85c366afdaf%3A0x63cbcd8b4dfb9d3c!2sMotijheel%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1665924369608!5m2!1sen!2sbd" width="400" height="300" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title={"Map"} ></iframe> */}
            <span className='block w-[90vw] h-[1px] bg-slate-500 mx-auto'></span>
            <section className='py-10'>
                <h3 className=' w-[90vw] mx-auto text-[20px] font-[700] text-left'>Service</h3>
                <div className='grid md:grid-cols-4 w-[90vw] mx-auto justify-items-start sm:grid-cols-1 mt-5'>
                    {service?.map(elem => <p key={uuidv4()} className='hover:pl-5 hover:transition hover:ease-linear delay-200 hover:text-blue-600 hover:duration-75'>{elem}</p>)}
                </div>
            </section>
            <span className='block w-[90vw] h-[1px] bg-slate-500 mx-auto'></span>
            <div className='flex md:justify-between md:self-center flex-col w-[90vw] justify-start items-start md:flex-row md:mx-auto pl-5 py-10'>
                <p>© 2022 Save Life. All rights reserved.</p>
                <p>Terms and Conditions | Policy</p>
            </div>
            {/* Upper button Scrollbar */}
            <a href="#home" className='bg-sky-700 w-10 h-10 inline-block rounded-md fixed bottom-[10%] right-[3%] bounce2'> <BsFillArrowUpCircleFill className='text-white translate-y-3 translate-x-3' /></a>
            {/* <BsFillArrowUpCircleFill className='absolute' /> */}
            {/* Footer End */}
        </footer>
    );
};
