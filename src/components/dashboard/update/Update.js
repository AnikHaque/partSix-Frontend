import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Update.css';
export const Update = () => {
    const {id} = useParams();
const [info,setInfo] = useState({});
useEffect(()=>{

    const url = `https://dry-brook-75772.herokuapp.com/booking/${id}`;
    fetch(url)
    .then(res=>res.json())
.then(data=>setInfo(data));


},[])

const handleUpdate = event => {
event.preventDefault();
const displayname = event.target.displayname.value;
const email = event.target.email.value;
const contact = event.target.contact.value;
const address = event.target.address.value;
const image = event.target.image.value;

const updated= {displayname,email,contact,address,image};
const url = `https://dry-brook-75772.herokuapp.com/booking/${id}`;
fetch(url,{
    method:'PUT',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(updated)
})
.then(res=>res.json())
.then(data=>{
    alert('Updated Successfully');
    event.target.reset();
})
}

  return (
    <div>
        <h1 className='text-5xl font-bold text-center mt-10'>Please Update the Information</h1>
        <br></br>
        <br></br>
        <form onSubmit={handleUpdate} className='text-center'>
            <input className='w-2/4 bg-base-200 p-3 input-update' type='text' name="email" placeholder='Email'></input>
            <br></br>
            <br></br>
            <input className='w-2/4 bg-base-200 p-3 input-update' type='text' name="displayname" placeholder='Name'></input>
            <br></br>
            <br></br>
            <input className='w-2/4 bg-base-200 p-3 input-update' type='number' name="contact" placeholder='Contact No'></input>
            <br></br>
            <br></br>
            <input className='w-2/4 bg-base-200 p-3 input-update' type='text' name="address" placeholder='Address'></input>
            <br></br>
            <br></br>
            <input className='w-2/4 bg-base-200 p-3 input-update' type='text' name="image" placeholder='Image'></input>
            <br></br>
            <br></br>
            <input  className='bg-black text-white font-bold w-96 p-2' type='submit' value='Update'></input>
        </form>
    </div>
  )
}
