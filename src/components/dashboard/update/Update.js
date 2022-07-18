import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Update = () => {
    const {id} = useParams();
const [info,setInfo] = useState({});
useEffect(()=>{

    const url = `https://arcane-falls-40021.herokuapp.com/booking/${id}`;
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
const url = `https://arcane-falls-40021.herokuapp.com/booking/${id}`;
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
        <h1>Updating user:{info.name}</h1>
        <br></br>
        <br></br>
        <form onSubmit={handleUpdate}>
            <input className='w-96 bg-accent p-3' type='text' name="email" placeholder='Email'></input>
            <br></br>
            <br></br>
            <input className='w-96 bg-accent p-3' type='text' name="displayname" placeholder='Name'></input>
            <br></br>
            <br></br>
            <input className='w-96 bg-accent p-3' type='number' name="contact" placeholder='Contact No'></input>
            <br></br>
            <br></br>
            <input className='w-96 bg-accent p-3' type='text' name="address" placeholder='Address'></input>
            <br></br>
            <br></br>
            <input className='w-96 bg-accent p-3' type='text' name="image" placeholder='Image'></input>
            <br></br>
            <br></br>
            <input className='bg-success w-80 p-2' type='submit' value='Update'></input>
        </form>
    </div>
  )
}
