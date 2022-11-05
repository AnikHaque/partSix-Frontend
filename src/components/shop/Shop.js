import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IndividualTool } from '../individualtool/IndividualTool'

export const Shop = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch(' https://whispering-bayou-93638.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
//     <div className='container mx-auto px-6'>
// <h2 className=' text-center mb-5 text-title text-2xl'>Browse by Specialities</h2>
// <div className='grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10'>

// {
//     tools.map(tool=><IndividualTool
//     key={tool._id}
//     tool={tool}
//     ></IndividualTool>)
// }

// </div>
//     </div>
<div className='container mx-auto px-6'>
<div className='grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10'>
<div className="card w-96 bg-base-100 shadow-xl mb-5">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mb-5">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl mb-5">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
<div className="card w-96 bg-base-100 shadow-xl">
<div className="card-body">
<div className='grid grid-cols-2 lg:grid-cols-2'>
<div className=''>
<img src='https://i.ibb.co/Yd6CcSf/1.jpg' className='w-28'></img>
</div>
<div>
<h2 className="text-2xl">Urology</h2>
<Link to='/uro'>Click to view</Link>

</div>
</div>

{/* <div className="card-actions justify-end">
<button className="btn btn-primary">Buy Now</button>
</div> */}
</div>
</div>
</div>
</div>
  )
}
