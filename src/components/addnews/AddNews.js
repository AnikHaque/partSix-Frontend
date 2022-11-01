import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddNews.css';


const AddNews = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/news',data)
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
strings: [' Please add a Blog with Details : '],
autoStart: true,
loop: true,

}}
/></h1>
        <div className='container-fluid'>
            
       

<div className="card card-compact lg:max-w-lg bg-base-100 mx-auto">
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  
  <input {...register("name",)} placeholder="Blog Name" />
  <input {...register("description",)} placeholder="Blog Description"/>
  <input {...register("addedBy",)} placeholder=" Added by the doctor"/>
  <input {...register("image",)} placeholder=" doctor's Image"/>
  <input {...register("blogImage",)} placeholder=" Blog Image"/>
  <input {...register("addedTime",)} placeholder=" Time"/>
  <input {...register("comment",)} placeholder="Total Comment"/>
  <input {...register("reviews",)} placeholder="Total Reviews"/>
  
  <button className="btn btn-primary w-full">Add blog</button>


</form> 
</div>
</div>
      
     
    </div>
    </div>
    );
};

export default AddNews;