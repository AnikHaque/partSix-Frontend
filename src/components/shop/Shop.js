import React, { useEffect, useState } from 'react'
import { IndividualTool } from '../individualtool/IndividualTool'

export const Shop = () => {
    const [tools, setTools] = useState([])
    useEffect(()=>{
        fetch('https://dry-brook-75772.herokuapp.com/parts')
        .then(res => res.json())
        .then(data => setTools(data))
    },[])
  return (
    <div className='container mx-auto px-6'>
<h2 className=' text-center mb-5 text-title text-2xl'>Browse by Specialities</h2>
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
