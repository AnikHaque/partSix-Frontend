import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import  Footer  from '../footer/Footer'
import './MDetails.css';

 const MDetails = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(` https://whispering-bayou-93638.herokuapp.com/mdetails/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
        console.log(data);
        axios.post("  https://whispering-bayou-93638.herokuapp.com/medicinebooking",data)
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
   <div className='mt-32'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 container'>
        <img src={parts.image} className='lg:max-w-lg mx-20'></img>
       <div>
        <h1 className='font-bold text-primary text-3xl'>{parts.name}</h1>
        <p className='text-gray-400 p-medicine'>{parts.description}</p>
        {/* modal  */}

{/* The button to open modal */}
<label htmlFor="my-modal-3" className="btn btn-primary text-white-500 font-bold mt-5 w-72 ml-40">Order Now</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
      <h1 className='font-bold text-2xl mb-1 text-primary'>Order a Medicine : </h1>
         <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.email}  />
        
     
         <input {...register("medicinename", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1'  />
         
         <input type="text" {...register("price")}placeholder="Medicine Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'/>
    
    
    <input {...register("image", { required: true, maxLength: 1920 })} placeholder="Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
         
    
    
    
         <input {...register("address", { required: true, })} placeholder="Delivery Address" className='input input-bordered w-full max-w-xs drop-shadow-lg'/>
      
    
         
       
         <input type="submit" className='w-80 btn btn-primary shadow-banner' value='Order Medicine' />
       </form>
  </div>
</div>


       </div>

    </div>
   </div>
  )
}
export default MDetails;