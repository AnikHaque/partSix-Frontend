import React, { useState } from 'react';


const UserRow = ({ user, refetch }) => {
    const [emaill,setEmail] = useState('')
  const {email,role} = user;
   
    const makeAdmin = (e) => {
       
        fetch(`https://dry-brook-75772.herokuapp.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
               authorization:`Bearer ${localStorage.getItem('accessToken')}`
            },
         
            })
  .then(res=>res.json())
  .then(data=>{
  if(data.modifiedCount>0){
      alert('Successfully made admin');
    setEmail('');
    console.log(data);
    
  }
   
  })
  
        e.preventDefault()
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;