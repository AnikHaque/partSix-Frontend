import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './MyOrders.css';

const MyOrders = () => {

    const [foods, setFoods] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://dry-brook-75772.herokuapp.com/booking?email=${user.email}`,{
            method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
   
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id',id);
            const url = `https://dry-brook-75772.herokuapp.com/booking/${id}`;
            fetch(url,{
                method:'DELETE'

            })
            .then(res=>res.json())
            .then(data=>{
         if(data.deletedCount>0){
            console.log('deleted');
            const remaining = foods.filter(records=>records._id !==id);
            setFoods(remaining);

         }
            })
        }
    
            }

    return (
        <div className='bg-myorder'>
            <h2 className='text-white font-bold text-center text-2xl pt-5'>My Orders: {foods.length}</h2>
            <div class="overflow-x-auto pt-10 pb-10">
                <table class="table-compact w-full text-gray-400">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Course Name</th>
                            <th>Price</th>
                            <th>Address</th>
                            <th></th>
                            <th>Pay</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td className='text-center'>{a.coursename}</td>
                                <td className='text-center'>$ {a.price}</td>
                               
                                <td className='text-center'>{a.address}</td>
                                <td className='text-center'>
                                <button onClick={()=>handleDelete(a._id)} className='text-white btn-delete text-gray-400'>Delete</button>
                                </td>
                                <td className='text-center'>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-course text-gray-400'>Pay</button></Link>}
                                    {(a.price && a.paid) && <p className='text-green-400'>Paid</p>}
                                    </td>
                               
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;