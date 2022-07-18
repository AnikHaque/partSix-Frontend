import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const MyOrders = () => {

    const [foods, setFoods] = useState([])
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`http://localhost:5000/booking?email=${user.email}`)
            .then(res => res.json())
            .then(data => setFoods(data));
    }, [])
   
    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to delete?');
        if(proceed){
            console.log('deleting user with id',id);
            const url = `http://localhost:5000/booking/${id}`;
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
        <div>
            <h2>My Appointments: {foods.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((a, index) =><tr>
                                <th>{index + 1}</th>
                                <td>{a.partsname}</td>
                                <td>$ {a.price}</td>
                                <td>{a.quantity}</td>
                                <td>{a.address}</td>
                                <button onClick={()=>handleDelete(a._id)} className='btn btn-error text-white'>Delete</button>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;