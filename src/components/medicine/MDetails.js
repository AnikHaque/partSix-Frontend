import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Typewriter from 'typewriter-effect';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import  Footer  from '../footer/Footer'
import './MDetails.css';

 const MDetails = () => {
    const [user] = useAuthState(auth);
    const {id} = useParams();
    const [parts,setParts] = useState({})
    const [disable, setDisable] = useState(false);
     useEffect(()=>{
         fetch(`https://dry-brook-75772.herokuapp.com/mdetails/${id}`)
       .then(res=>res.json())
        .then(data=>setParts(data))

     },[])
     const { register, handleSubmit, reset } = useForm();

    //  const onSubmit = data =>{
    //     console.log(data);
    //     axios.post(" https://dry-brook-75772.herokuapp.com/booking",data)
    //     .then(res=>{
    //         if(res.data.insertedId){
    //            alert("Added Successfully.")
    //             reset();
               
                
    //         }
    //     })
    // } 

    
const handleChange = event => {
    const disable = event.target.value;

    setDisable(disable);
}

  return (
   <div className='mt-12'>
    <div className='grid lg:grid-cols-2 sm:grid-cols-1 container'>
        <img src={parts.image} className='lg:max-w-lg mx-20'></img>
       <div>
        <h1 className='font-bold text-primary text-3xl'>{parts.name}</h1>
        <p className='text-gray-400 p-medicine'>{parts.description}</p>
        <button className='btn btn-primary text-white-500 font-bold mt-5 w-72 ml-40'>Order Now</button>
       </div>

    </div>
   </div>
  )
}
export default MDetails;