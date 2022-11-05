import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';

import { useForm } from "react-hook-form";
import './NewsDetails.css';
const NewsDetails = () => {
   
    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`  http://localhost:5000/news/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

    

    
const handleChange = event => {
    const disable = event.target.value;

    setDisable(disable);
}

  return (
    <div className=''>
    
    <div className='grid lg:grid-cols-1 sm:grid-cols-1 '>
    <img src='https://weblearnbd.net/wp/epora/wp-content/uploads/2022/07/breadcrumb-bg-1.jpg' className='mx-auto mt-5'></img>
    <h1 className='font-bold text-center text-3xl mt-5 text-title pb-2'>
 
 <Typewriter 
 options={{
   strings: [' Take a look on the details of the Blog :  '],
   autoStart: true,
   loop: true,
   
 }}
/>

 </h1>
    <div className=' mt-16'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-dark  mx-5  shadow-details '>
    <div>
    <h1 className='font-bold text-2xl mt-2 mb-2'>{parts.name}</h1>
    <div className='grid lg:grid-cols-4 sm:grid-cols-4 '>
      
      <p>  <i class="fa-solid fa-star text-warning"></i> ({parts.reviews})</p>
      <p>  <i class="fa-solid fa-video text-primary"></i> Video Calling</p>
      <p>  <i class="fa-solid fa-comment text-cyan-800"></i> Comments ({parts.comment})</p>
     
     
    </div>
    
    <p className='mt-4'>{parts.description}</p>
    
    </div>
    
    
      <div className="overflow-x-auto">
      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
    <img src={parts.blogImage} className='w-full'></img>
      <div className="card-body">
      
       



       <div className='grid lg:grid-cols-2 sm:grid-cols-1  pt-10 pb-10'>
    
    
    <div>
      <h1 className=' font-bold mt-2 text-title'>Added By: </h1>
    </div>
    <div>
      <p className='mt-2'>{parts.addedBy}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Total Comment: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.comment}</p>
    </div>
    <div>
      <h1 className=' font-bold mt-2 text-title'>Total Rating: </h1>
    </div>
    <div>
      <p className='font-bold mt-2'>{parts.reviews}</p>
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
export default NewsDetails;