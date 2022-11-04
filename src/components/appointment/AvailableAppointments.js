import { format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import AppointmentService from '../AppointmentService';
import BookingModal from './BookingModal';

const AvailableAppointments = ({ date, setDate }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch(' https://part-six-server-side.vercel.app/hospitaldoctors')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <div>
      <h1 className=' text-center text-2xl mt-12 mb-12'>Available Appointments on {format(date, 'PP')} </h1>
      <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 gap-4 mx-auto container'>
        {
          services.map(service => <AppointmentService
            key={service._id}
            service={service}
            setTreatment={setTreatment}

          >

          </AppointmentService>)
        }
      </div>
      {treatment && <BookingModal treatment={treatment} setTreatment={setTreatment} date={date}></BookingModal>}
    </div>
  )
}
export default AvailableAppointments;