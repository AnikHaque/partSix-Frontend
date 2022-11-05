import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';


const MyAppointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [user,loading] = useAuthState(auth);
  useEffect(() => {

    fetch(` https://whispering-bayou-93638.herokuapp.com/hospitaldoctorsbooking?patient=${user.email}`)
      .then(res => res.json())
      .then(data => setAppointments(data))

  }, [])
  if (loading === true) {
    return
  }
  return (
    <div>
      <section className='md:mx-10 pt-60 pb-10'>
        <h1>My Appointments: {appointments.length}</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">

            <thead>
              <tr>
                <th></th>
                <th>Booked Doctor</th>
                <th>Date</th>
                <th>Slot</th>
                <th>Fees</th>
                <th>Pay</th>
              </tr>
            </thead>
            <tbody>
              {
                appointments?.map((a, index) => <tr>
                  <th>{index + 1}</th>
                  <td>{a.treatment}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.fees}</td>
                  <td>Pay</td>
                </tr>)
              }
            </tbody>
          </table>
        </div>
      </section>
    <tbody>
        {
            appointments.map((a, index) => <tr>
            <th>{index + 1}</th>
            <td>{a.treatment}</td>
            <td>{a.date}</td>
            <td>{a.slot}</td>
            <td>{a.fees}</td>
            <td className='text-center'>
            {(a.fees && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-course text-light-400'>Pay</button></Link>}
            {(a.fees && a.paid) && <p className='text-green-400'>Paid</p>}
            </td>
          </tr> )
        }
    </tbody>
</div>
   
  )
}
export default MyAppointment;