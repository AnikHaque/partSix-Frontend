import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './AddTools.css';

const AddTools = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/parts',data)
        .then(res=>{
           if(res.data.insertedId){
               alert('Added Successfully');
               reset();
           }
        })
    };
    return (
        <div className='add-course container bg-base-200'>
            <h1 className='text-center text-4xl font-bold mb-4  text-error'>Please Add a Car !!!</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email",)} placeholder="Email" />
      <input {...register("displayname",)} placeholder="Name"  />
      <input {...register("name",)} placeholder="Product Name" />
      <input {...register("description",)} placeholder="Product Description"/>
      <input {...register("sold",)} placeholder="Product sold"/>
      <input type="number" {...register("price", )} placeholder="Product Price"/>
      
      <input type="number" {...register("quantity", )} placeholder="Product Quantity"/>
      <input {...register("img",)} placeholder="Product Image"/>
      <input type="submit" className='bg-error' />
    </form> 
        </div>
    );
};

export default AddTools;