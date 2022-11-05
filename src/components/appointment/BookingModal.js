import React, { useState } from 'react'
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
const BookingModal = ({treatment,date,setTreatment,refetch}) => {
    const {_id,name,fees, slots} = treatment;
    const Navigate = useNavigate();
    const [userInfo] = useAuthState(auth);
    const formatedDate = format(date,'PP');
    const [bookerr,setBookErr] = useState(false);
    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id,name,slot);
        const booking = {
          treatmentId:_id,
          treatment:name,
          date:formatedDate,
          fees:fees,
          slot,
          patient:userInfo.email,
          patientName:userInfo.displayName,
          phone:event.target.phone.value

        }
        

        fetch(' https://whispering-bayou-93638.herokuapp.com/hospitaldoctorsbooking',{
          method: 'POST',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.insertedId){
            // toast(`Appointment is set,${formatedDate} at ${slot}`)
            alert("Booked Appointment Successfully");
          
            Navigate('/dashboard/myorders');
          }
          else{
            // toast.error(`You already have an ppointment on,${data.booking?.date} at ${data.booking?.slot}`)
             alert("You Already Booked bhai !!");
            
          }
        
          setTreatment(null);
        })
      
    }
  return (
    <div>

<input type="checkbox" id="booking-modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
  
  <div className="modal-box">
   
  <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
  
    <h3 className="font-bold text-lg">Booking for {name}</h3>
   
    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-2'>
    <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xs" />
    <select name="slot" className="select select-bordered w-full max-w-xs">
  {
    slots.map(slot=><option value={slot}>{slot}</option>)
  }
  
</select>
    <input type="number" name='fees' className="input input-bordered w-full max-w-xs" defaultValue={fees} />
    <input type="text" name='name' className="input input-bordered w-full max-w-xs" defaultValue={userInfo.displayName} />
    <input type="email" name='email' placeholder='Email Address' className="input input-bordered w-full max-w-xs" defaultValue={userInfo.email} />
    <input type="text" name='phone' placeholder="Phone" className="input input-bordered w-full max-w-xs" />

    <input type="submit" value='Submit' placeholder="Type here" className=" btn btn-primary input input-bordered w-full max-w-xs" />
    </form>
  </div>
</div>
    </div>
  )
}
export default BookingModal;