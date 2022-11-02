import React, { useEffect, useState } from 'react';

import SingleAmbulance from './SingleAmbulance';


const Ambulance = () => {
  const [ambulance,setAmbulance] = useState([])
    useEffect(()=>{
        fetch(' https://dry-brook-75772.herokuapp.com/ambulance')
        .then(res => res.json())
        .then(data => setAmbulance(data))
    },[])
  return (
    <div className='container mx-auto px-6 p-3'>
       <h2 className='text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-primary'>Ambulance</span> Services</h2>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

    {
      ambulance.map(ambulances=><SingleAmbulance key={ambulances._id} ambulances={ambulances}>

      </SingleAmbulance>

  )
}
</div>
</div>
)}
export default Ambulance;