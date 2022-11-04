import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddMedicine.css';

const AddMedicine = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://part-six-server-side.vercel.app/medicine',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div>
            <h1 className='text-center text-4xl  mb-4  text-primary font-bold'>  <Typewriter 
options={{
strings: [' Please add a Medicine   : '],
autoStart: true,
loop: true,

}}
/></h1>
        <div className='ml-72'>
            
       

<div className="lg:max-w-lg bg-base-100  shadow-xl">
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  
  <input {...register("name",)} placeholder="Medicine Name" />
  <input {...register("description",)} placeholder="MedicineDescription"/>
  <input {...register("image",)} placeholder=" Medicine Image"/>
  <input type="number" {...register("price", )} placeholder="Medicine Price"/>
  <input type="number" {...register("review", )} placeholder="Medicine Review"/>
  
  <button className="btn btn-primary w-full">Add Medicine</button>


</form> 
</div>
</div>
      
     
    </div>
    </div>
    );
};

export default AddMedicine;