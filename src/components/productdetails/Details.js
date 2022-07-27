import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
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
         fetch(`http://localhost:5000/parts/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

     const onSubmit = data =>{
        console.log(data);
        axios.post("http://localhost:5000/booking",data)
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
      

<div className='grid lg:grid-cols-1 sm:grid-cols-1 bg-base-200'>
<div className=' mt-16'>
<div className='grid lg:grid-cols-2 sm:grid-cols-1 bg-dark  mx-5  shadow-details '>
  <img src={parts.img} className='mx-3'></img>
  <div class="hero-content ">
    <div class="max-w-lg">
      <h1 class="text-5xl font-bold ">{parts.name}</h1>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-4'>
<div>
<p class="pt-6">Total Available: <b>{parts.quantity}</b></p>
</div>
<div>
<p class="pt-4">Parts Price: <b className='text-2xl text-black'>$ {parts.price}</b></p>
</div>
    </div>
    
  <p className='font-bold text-2xl mt-5 mx-5'>Key Features:</p>
  
    <li className='mx-5'>{parts.keyfeature1}</li>
    <li className='mx-5'>{parts.keyfeature2}</li>
    <li className='mx-5'>{parts.keyfeature3}</li>
    <li className='mx-5'>{parts.keyfeature4}</li>
    <li className='mx-5'>{parts.keyfeature5}</li>
       
    <button class="btn btn-dark shadow-banner font-bold mt-3">Scroll to view</button>
    </div>
    
  </div>


  
  
</div>
</div>
<div className='add-course'>

</div>
</div>
<div>
  <p className='font-bold text-4xl mx-20 mt-20 mb-5 pagla' id='anik'>Description:</p>
  <p className='mx-12'>{parts.description}</p>
  <div>
    <h1 className='font-bold text-4xl mx-16 mt-20 mb-5'>Specification:</h1>
    <div class="overflow-x-auto mx-12">
      <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2'>
      <table class="table w-full text-black">
  
  <thead>
    <tr className='drop-shadow-xl'>
      
    
    </tr>
  </thead>
  <tbody>
  
    <tr className=''>
     
      <td><b>Brand</b> </td>
      <td>{parts.brands}</td>

    </tr>

    <tr>
     
      <td><b>Country</b></td>
      <td>{parts.country}</td>

    </tr>
    
    <tr>
 
      <td><b>Part Number</b></td>
      <td>{parts.partnumber}</td>

    </tr>
    <tr>
 
      <td><b>Material</b></td>
      <td>{parts.material}</td>

    </tr>
    <tr>
 
      <td><b>Color</b></td>
      <td>{parts.color}</td>

    </tr>
  </tbody>
</table>
<form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
  <h1 className='font-bold text-2xl mb-1 text-gray-400'>Please Make a order: </h1>
     <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.email} />
    
 
     <input {...register("name", { required: true, maxLength: 520 })} placeholder="name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.displayName} />
     

     <input {...register("partsname", { required: true, maxLength: 1520 })} placeholder="Parts Name" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />


    
     <input type="text" {...register("available")}placeholder="Available" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={parts.quantity} />


     <input type="text" {...register("price")}placeholder="Parts Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />


<input {...register("image", { required: true, maxLength: 1920 })} placeholder="Parts Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />

     
<input {...register("quantity", { required: true, maxLength: 920 })} placeholder="Quantity" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1' />


     <input {...register("address", { required: true, })} placeholder="Delivery Address" className='input input-bordered w-full max-w-xs drop-shadow-lg'/>
  

     
   
     <input type="submit" className='w-80 btn btn-dark shadow-banner' value='Book Order' />
   </form>
      </div>
 
</div>
  </div>
</div>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<Footer></Footer>

    </div>
  )
}
