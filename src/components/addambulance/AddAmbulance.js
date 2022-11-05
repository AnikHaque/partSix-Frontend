import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddAmbulance.css';

const AddAmbulance = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(' https://whispering-bayou-93638.herokuapp.com/ambulance',data)
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
strings: [' Please add an ambulance  : '],
autoStart: true,
loop: true,

}}
/></h1>
        <div className='ml-72'>
            
       

<div className="lg:max-w-lg bg-base-100  shadow-xl">
<figure><img src="https://thumbs.dreamstime.com/b/word-blog-colourful-letters-15012227.jpg" className='w-96' alt="Shoes" /></figure>
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  
  <input {...register("name",)} placeholder="Ambulance Name" />
  <input {...register("description",)} placeholder="Ambulance Description Description"/>
  <input {...register("image",)} placeholder=" Ambulance Image"/>
  <input type="number" {...register("price", )} placeholder="Ambulance Price"/>
  
  <button className="btn btn-primary w-full">Add Ambulance</button>


</form> 
</div>
</div>
      
     
    </div>
    </div>
    );
};

export default AddAmbulance;