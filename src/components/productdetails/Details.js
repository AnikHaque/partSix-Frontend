import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Footer } from '../footer/Footer'
import './Details.css';
export const Details = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`https://dry-brook-75772.herokuapp.com/parts/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
        console.log(data);
        axios.post("https://dry-brook-75772.herokuapp.com/booking",data)
        .then(res=>{
            if(res.data.insertedId){
               alert("Added Successfully.")
                reset();
               
                
            }
        })
    } 

    
const handleChange = event => {
    const disable = event.target.value;

    setDisable(disable);
}

  return (
    <div className=''>
    <div className='grid lg:grid-cols-1 sm:grid-cols-1 '>
    <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/07/breadcrumb-bg-1.jpg' className='mx-auto mt-5'></img>
    <h1 className='font-bold text-center text-5xl mt-5 text-title pb-2'>
 
 <Typewriter 
 options={{
   strings: [' Take a look on the details of the Course :  '],
   autoStart: true,
   loop: true,
   
 }}
/>

 </h1>
    <div className=' mt-16'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-dark  mx-5  shadow-details '>
    <div>
    <img src={parts.img} className='w-full'></img>
    <h1 className='font-bold text-2xl mt-2 mb-2'>{parts.name}</h1>
    <div className='grid lg:grid-cols-4 sm:grid-cols-4 '>
      
      <p>  <i class="fa-solid fa-star text-warning"></i> ({parts.review})</p>
      <p>  <i class="fa-solid fa-video text-title"></i> {parts.lessons} Lessons</p>
      <p>  <i class="fa-solid fa-user text-title"></i> {parts.students} Students</p>
     
     
    </div>
    
    <p className='mt-4'>{parts.description}</p>
    <div class="overflow-x-auto">
        <h1 className='font-bold text-3xl mb-5'>Instructor: </h1>
          <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
       <div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
        <img src={parts.instructorimage} className='details-ins w-28'></img>
      
        <p className='text-2xl part-ins mt-4'>{parts.instructor}</p>
       </div>
       </div>
          </div>
     
    </div>
    </div>
    
    
      <div className="overflow-x-auto">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
    <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/08/c-details-video-bg.jpg' className='w-full'></img>
      <div className="card-body">
        <h2 className="font-bold text-center text-3xl mb-3">$ {parts.price}</h2>
       
<label htmlFor="my-modal-3" className="btn btn-course modal-button"><i class="fa-solid fa-lock mr-3"></i> Enroll Now</label>


<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
      <h1 className='font-bold text-2xl mb-1 text-title'>Please Make a Enrollment: </h1>
         <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.email} />
        
     
         <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.displayName} />
         
    
         <input {...register("coursename", { required: true, maxLength: 1520 })} placeholder="Course Name" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
    
    
         <input type="text" {...register("price")}placeholder="Course Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
    
    <input {...register("image", { required: true, maxLength: 1920 })} placeholder="Course Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
         
    
    
    
         <input {...register("address", { required: true, })} placeholder="User Address" className='input input-bordered w-full max-w-xs drop-shadow-lg'/>
      
    
         
       
         <input type="submit" className='w-80 btn btn-course shadow-banner' value='Book Enrollment' />
       </form>
  </div>
</div>
       <div className='grid lg:grid-cols-2 sm:grid-cols-1  pt-10 pb-10'>
    <div>
      <h1 className=' font-bold text-title'>Lessons: </h1>
    </div>
    <div>
      <p className='font-bold'>{parts.lessons}</p>
    </div>
    
    <div>
      <h1 className=' font-bold mt-2 text-title'>Quizes: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.quizes}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Students: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.students}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Duration: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.courseduration}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Skill Level: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.skilllevel}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Language: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.language}</p>
    </div>
    
    <div className='grid lg:grid-cols-1 sm:grid-cols-1 gap-2'>
        <h1 className='text-title text-2xl mt-3 font-bold mb-3'>Share Now</h1>
       </div>
<br></br>
    <div className='grid lg:grid-cols-4 sm:grid-cols-4 mr-2 gap-2'>
    <i class="fa-brands fa-facebook text-4xl"></i>
    <i class="fa-brands fa-twitter text-4xl ml-8 "></i>
    <i class="fa-brands fa-whatsapp text-4xl ml-16"></i>
    
    
   
       
       </div>
    </div>
      </div>
    </div>
    </div>
    
      
      
    </div>
    
    
    </div>
    <div className='add-course'>
    
    </div>
    </div>
    <div>
      
      
      <div>
      
       
      </div>
    </div>
    <br></br>
    <br></br>
    
    
        </div>
  )
}
