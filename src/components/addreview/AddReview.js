import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddReview.css';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(' https://dry-brook-75772.herokuapp.com/reviews',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div>
            <h1 className='text-center text-4xl  mb-4  text-primary'>  <Typewriter 
options={{
strings: [' Please Write a Review  : '],
autoStart: true,
loop: true,

}}
/></h1>
        <div className='ml-72'>
            
       

<div className="lg:max-w-lg bg-base-100  shadow-xl">
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  
  <input {...register("name",)} placeholder="Reviewer Name" />
  <input {...register("quote",)} placeholder="Write Review"/>
  <input {...register("img",)} placeholder=" Reviewer Image"/>
  <button className="btn btn-primary w-full">Add Ambulance</button>


</form> 
</div>
</div>
      
     
    </div>
    </div>
    );
};

export default AddReview;