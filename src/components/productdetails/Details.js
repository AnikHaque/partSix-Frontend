import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import './Details.css';
export const Details = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`https://arcane-falls-40021.herokuapp.com/parts/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
        console.log(data);
        axios.post("https://arcane-falls-40021.herokuapp.com/booking",data)
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
    <div>
      
 <div class="hero pt-20 pb-20 bg-base-200">
  <div class="hero-content ">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold ">{parts.name}</h1>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
<div>
<p class="pt-6">Total Available: <b>{parts.quantity}</b></p>
</div>
<div>
<p class="pt-4">Parts Price: <b className='text-2xl text-error'>$ {parts.price}</b></p>
</div>
    </div>
     
    
      <button class="btn btn-error font-bold mt-3">Scroll to view</button>
    </div>
  </div>
</div> 
<div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
<div className='mx-20 mt-20'>
<img src={parts.img} className='w-96'></img>
</div>
<div className='add-course'>
<form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5 px-5 pe-5 mb-5">
     <input {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs' defaultValue={user.email} />

     <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs' defaultValue={user.displayName} />
   
     <input {...register("partsname", { required: true, maxLength: 1520 })} placeholder="Parts Name" className='input input-bordered w-full max-w-xs'  />

    
     <input type="text" {...register("available")}placeholder="Available" className='input input-bordered w-full max-w-xs' defaultValue={parts.quantity} />
     <input type="text" {...register("price")}placeholder="Parts Price" className='input input-bordered w-full max-w-xs'  />
     
<input {...register("image", { required: true, maxLength: 1920 })} placeholder="Parts Image" className='input input-bordered w-full max-w-xs'  />
<input {...register("quantity", { required: true, maxLength: 920 })} placeholder="Quantity" className='input input-bordered w-full max-w-xs' />

     <input {...register("address", { required: true, })} placeholder="Delivery Address" className='input input-bordered w-full max-w-xs'/>
   
     <input type="submit" className='w-50 btn btn-error' value='Book Order' />
   </form>
</div>
</div>
<div>
  <p className='font-bold text-4xl mx-20 mt-20 mb-5'>Description:</p>
  <p className='mx-12'>{parts.description}</p>
</div>

    </div>
  )
}
