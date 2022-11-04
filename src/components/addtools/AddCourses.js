import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddCourses.css';

const AddCourses = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post(' https://dry-brook-75772.herokuapp.com/parts',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='container-fluid '>
        <h1 className='text-center text-2xl font-bold mb-4'>  <Typewriter 
options={{
strings: [' Please add a Speciality  : '],
autoStart: true,
loop: true,

}}
/></h1>

<div className="card card-compact lg:max-w-lg bg-base-100 mx-auto">
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name",)} placeholder="Speciality Name" />
  <input {...register("description",)} placeholder="Speciality Description"/>
  <input {...register("img",)} placeholder="Speciality Image"/>
  <button className="btn btn-course w-full">Add Speciality</button>


</form> 
</div>
</div>
      
     
    </div>
    );
};

export default AddCourses;