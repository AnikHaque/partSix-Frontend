import React from 'react'
import { Link } from 'react-router-dom';
import './IndividualTool.css'
export const IndividualTool = (props) => {
    const {_id,name,description,price,sold,quantity,img}=props.tool;
  return (
    <div>
       <div class="card bg-gray-500 shadow-banner lg:max-w-lg  pt-5">
  <figure><img src={img} alt="Shoes" className='w-28' /></figure>
  <div class="card-body">
    <h2 class="card-title text-white">{name}</h2>
    <p className='text-white'>$ {price}.00</p>
    <div className='card-actions justify-start'>
    <div class="badge badge-outline bg-black text-white p-3">
        <p className='text-1xl'><b>{quantity}</b> piece available</p>
        </div> 
      <div class="badge badge-outline">Sale</div>
    </div>
    <div class="card-actions justify-start">
   
    <Link to={`/parts/${_id}`}>  <button class="btn btn-dark font-bold text-white mt-2 px-14 pe-16">View Details</button></Link>
    </div>
  </div>
</div>
    </div>
  )
}
