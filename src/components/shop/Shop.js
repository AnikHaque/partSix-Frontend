import React, { useEffect, useState } from 'react'
import { IndividualTool } from '../individualtool/IndividualTool'

export const Shop = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://arcane-falls-40021.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
    <div className='bg-black pt-10'>
<h1 className='font-bold text-5xl text-center mt-10 mb-5 text-white'>All Tools</h1>
<div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-10 px-12  pt-10 pb-10'>
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
