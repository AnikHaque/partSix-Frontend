import React from 'react'
import { Link } from 'react-router-dom'
import './Blood.css';
export const Blood = () => {
  return (
    <div className='grid  lg:grid-cols-3 sm:grid-cols-1 mt-32 container mx-auto'>
        <div className="card w-96 blood bg-base-100 shadow-xl">
  <figure><img src="https://1.bp.blogspot.com/-iNjPFmg17jM/XcsN0KcmO3I/AAAAAAAAdHA/jkFo0C47MWMiNJui3CGjifcnrLUSyl11QCNcBGAsYHQ/s1600/Blood%2BBank.jpg" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-primary text-4xl font-bold">Blood Bank</h2>
   <Link to='/bloodbank' className='text-secondary'>Click Here</Link>
    
  </div>
</div>


        <div className="card blood w-96 bg-base-100 shadow-xl">
  <figure><img src="https://img.freepik.com/free-vector/cartoon-blood-donation-background_52683-70798.jpg?w=2000" alt="Shoes" className='w-96'/></figure>
  <div className="card-body">
  <h2 className="text-primary text-4xl font-bold">Donate Blood</h2>
   <Link to='/doner' className='text-secondary'>Click Here</Link>
    
  </div>
</div>


        <div className="card w-96 blood bg-base-100 shadow-xl">
  <figure><img src="https://1.bp.blogspot.com/-Kidh77ZgY4c/X0KaRxyw2sI/AAAAAAAAAQM/F8QX19lpfesI9S7m4ux1etRLHTDRCheSwCPcBGAYYCw/s640/Blood%2BDonor%2BPic.jpg" alt="Shoes" className='w-48' /></figure>
  <div className="card-body">
  <h2 className="text-primary text-4xl font-bold">Donor List</h2>
   <Link to='/donerlist' className='text-secondary'>Click Here</Link>
    
  </div>
</div>
    </div>
  )
}
