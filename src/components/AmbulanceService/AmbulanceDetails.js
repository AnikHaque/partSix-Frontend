import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailImage1 from '../../assets/Ambulance-images/service-details1.jpg';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AmbulanceDetails = () => {
  const {id} = useParams();
  const [ambulan, setAmbulance] = useState({});
  const [user] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  useEffect(()=>{
    fetch(`http://localhost:5000/ambulance/${id}`)
  .then(res=>res.json())
   .then(data=>setAmbulance(data))

},[])

const onSubmit = data =>{
  console.log(data);
  axios.post("  http://localhost:5000/ambooking",data)
  .then(res=>{
      
       alert("Ambulance Booked Successfully");
          reset();
         
          
      
  })
} 
  return (
    <div>
     
     <div className='grid lg:grid-cols-2 sm:grid-cols-1 mt-32'>
 {/* Images  */}
 <div className='container max-w-screen-lg mx-auto text-center pb-10'>
          <img src={ambulan.image} alt="" className='lg:max-w-lg mx-auto' />
        </div>
        {/* Details Content-1 */}
        <div>
        
          <h2 className='text-primary text-2xl pb-3 font-bold text-left'>{ambulan.name}</h2>
          <p className=' text-gray-500 text-semibold pr-40 text-left'>{ambulan.description}</p>
           <label htmlFor="my-modal-3" className="btn btn-primary text-white mt-8">Book Ambulance</label>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />

    <div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <form onSubmit={handleSubmit(onSubmit)} className="bg-details text-center w-75 mx-auto pt-5 pb-5  pe-5 mb-5">
      <h1 className='font-bold text-2xl mb-1 text-primary'>Please Make a Booking: </h1>
         <input  {...register("email", { required: true, maxLength: 120 })} placeholder="email" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1' defaultValue={user.email} />
        
     
         <input {...register("name", { required: true, maxLength: 520 })} placeholder=" Ambulance name" className='input input-bordered w-full max-w-xs drop-shadow-md text-black mb-1'  />
       
         <input type="text" {...register("price")}placeholder="Ambulance Price" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
    
        <input {...register("image", { required: true, maxLength: 1920 })} placeholder="Ambulance Image" className='input input-bordered w-full max-w-xs drop-shadow-lg mb-1'  />
    
         <input {...register("address", { required: true, })} placeholder="Address" className='input input-bordered w-full max-w-xs drop-shadow-lg'/>

         <input type="submit" className='w-80 btn btn-primary shadow-banner' value='Book Ambulance' />
       </form>
  </div>
</div> 
         
        </div>
        </div>
    <div className='container max-w-screen-lg mx-auto text-center items-center justify-center'>
      {/* Details Section  */}
      <div className='container'>
        {/* Details Content-2 */}
        <div className='box-border hover:box-content container max-w-screen-lg mx-auto mt-7'>
          <div className='flex space-x-3 gap-10'>
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title pb-3"><span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span> Help us Save a Life</h2>
            <p>Proin gravida, urna et cursus aliquam, velit felis</p>
            </div>
          </div>
          
          <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title pb-3"><span className='text-black'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
             <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg></span> Join our Big Family</h2>
            <p>Nullam mollis elit quis dusto is lacinia efficitur</p>
            </div>
          </div>

          </div>
        </div>

        <br />
        {/* Details Content-3 */}
        
      </div>
    </div>
    </div>
  );
};

export default AmbulanceDetails;