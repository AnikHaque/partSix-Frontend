import React, { useEffect, useState } from 'react'
import { IndividualTool } from '../individualtool/IndividualTool'

export const Tools = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
    <div>
<h1 className='font-bold text-5xl text-center mt-10 mb-5'>All Tools</h1>
<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 px-12 bg-base-200 pt-10 pb-10'>
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
