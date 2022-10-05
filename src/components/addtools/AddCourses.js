import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Typewriter from 'typewriter-effect';
import './AddCourses.css';

const AddCourses = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://dry-brook-75772.herokuapp.com/parts',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='container-fluid add-courses'>
        <h1 className='text-center text-4xl font-bold mb-4  text-title'>  <Typewriter 
options={{
strings: [' Please add a Course with Details : '],
autoStart: true,
loop: true,

}}
/></h1>

<div className="card card-compact lg:max-w-lg bg-base-100  shadow-xl">
<figure><img src="https://cdn.iconscout.com/icon/premium/png-256-thumb/add-course-2797477-2317924.png" alt="Shoes" /></figure>
<div className="card-body">
<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("email",)} placeholder="Email" />
  <input {...register("displayname",)} placeholder="Name"  />
  <input {...register("name",)} placeholder="Course Name" />
  <input {...register("description",)} placeholder="Course Description"/>
  <input {...register("lessons",)} placeholder=" Total Lessons"/>
  <input {...register("quizes",)} placeholder=" Total Quizes"/>
  <input {...register("students",)} placeholder=" Total Students"/>
  <input {...register("courseduration",)} placeholder=" Course Duration"/>
  <input {...register("skilllevel",)} placeholder=" Skill Level"/>
  <input {...register("language",)} placeholder="Language"/>
  <input {...register("instructor",)} placeholder="Instructor Name"/>
  <input {...register("instructorimage",)} placeholder="Instructor-Image"/>
  <input {...register("review",)} placeholder=" Total Review"/>
  <input type="number" {...register("price", )} placeholder="Course Price"/>
  <input {...register("img",)} placeholder="Course Image"/>
  <input {...register("video",)} placeholder="Course Video"/>
  <button className="btn btn-course w-full">Add Course</button>


</form> 
</div>
</div>
      
     
    </div>
    );
};

export default AddCourses;