import React from 'react'
import { Link } from 'react-router-dom';
import './IndividualTool.css'
export const IndividualTool = (props) => {
  const {_id,name,email,displayname,description,lessons,quizes,students,courseduration,skilllevel,language,instructor,instructorimage,review,price,video,img}=props.tool;

  return (
    <div>
       



<div className="card w-96 bg-base-100">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
  <div className='grid lg:grid-cols-2 sm:grid-cols-2'>
<img src={instructorimage} className='instructor-img ml-4'></img>
<h1 className='font-bold font-card'>{name}</h1>
</div>
  <div className='grid lg:grid-cols-3 sm:grid-cols-3'>
<p className='mr-2'>{lessons} Lessons</p>
<p className='mr-2'>{students} Students</p>
<p>{review} Review</p>

</div>
  <div className='grid lg:grid-cols-2 sm:grid-cols-2'>
<h5 className='mr-2 font-bold mt-2'>$ {price}</h5>

<Link to={`/parts/${_id}`}>  <button class="btn btn-course">View Details</button></Link>

</div>
   
  </div>
</div>
    </div>
  )
}
