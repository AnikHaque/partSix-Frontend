import React from 'react'
import { Link } from 'react-router-dom';
import './IndividualTool.css'
export const IndividualTool = (props) => {
  const {_id,name,description,img}=props.tool;

  return (
    <div className='container'>
       <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src={img} className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">{name}</h2>

</div>
    </div>
   
    {/* <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    </div>
  )
}
