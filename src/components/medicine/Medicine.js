import React, { useEffect, useState } from 'react';
import Medicines from './Medicines';




const Medicine = () => {
  const [medicine,setMedicine] = useState([])
    useEffect(()=>{
        fetch(' https://dry-brook-75772.herokuapp.com/medicine')
        .then(res => res.json())
        .then(data => setMedicine(data))
    },[])
  return (
    <div className='container mx-auto px-6 p-3'>
       <h2 className='text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-primary'>Medicine</span> Collection</h2>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>

    {
      medicine.map(medicines=><Medicines key={medicines._id} medicines={medicines}></Medicines>

  )
}
</div>
</div>
)}
export default Medicine;