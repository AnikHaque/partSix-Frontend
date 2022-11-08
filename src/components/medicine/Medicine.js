import React, { useEffect, useState } from 'react';
import { Search } from '../Search/Search';
import Medicines from './Medicines';

const Medicine = () => {
  const [medicine,setMedicine] = useState([])
  const [searchTerm , setSearchTerm] = useState('')

    useEffect(()=>{
        fetch(' https://whispering-bayou-93638.herokuapp.com/medicine')
        .then(res => res.json())
        .then(data => setMedicine(data))
    },[])
  return (
    <div className='container mx-auto px-6 p-3'>
       <h2 className='text-center text-xl pt-20 pb-16 font-bold text-gray-900 md:text-4xl'>Our <span className='text-primary'>Medicine</span> Collection</h2>
       <input type="text" className='w-96 mr-2 mx-80 border-rounded mb-5' placeholder='Search medicine here' onChange={event =>{setSearchTerm(event.target.value)}}></input>
       <button className='btn btn-primary text-white-500'>Search</button>
<div className='grid grid-cols-1 lg:grid-cols-4 gap-4'>

    {
      medicine.filter((medicines=>{
        if(searchTerm == '') {
          return medicines;
        }
        else if(medicines.name.toLowerCase().includes(searchTerm.toLowerCase())){
          return medicines
        }
      })).map(medicines=><Medicines key={medicines._id} medicines={medicines}></Medicines>

  )
}
</div>
</div>
)}
export default Medicine;