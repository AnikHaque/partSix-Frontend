import React, { useEffect, useState } from 'react'
import { IndividualTool } from '../individualtool/IndividualTool'


export const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://dry-brook-75772.herokuapp.com/courses')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
    <div>
<h2 className=' text-center mb-5 text-title text-2xl'>Our Popular Courses</h2>
<div className='grid lg:grid-cols-3 sm:grid-cols-1  pt-10 pb-10'>
{
    tools.map(tool=><IndividualTool
    key={tool._id}
    tool={tool}
    
    ></IndividualTool>)
}
</div>

    </div>
  )
}
