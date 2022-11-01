import React from 'react'
import BookingModal from './appointment/BookingModal';

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:max-w-lg bg-base-100 shadow-xl">
        <div className="card-body mx-auto">
          <h2 className="card-title text-primary">{name}</h2>
          <p>
            {slots.length
              ? <span>{slots[0]}</span>
              :
              <span className='text-red-500'>Try another day !!</span>

            }
          </p>
          <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
          <div className="card-actions justify-center">
            <label
              disabled={slots.length == 0}
              htmlFor="booking-modal"
              onClick={() => setTreatment(service)}
              className="btn btn-primary">
              <i class="fa-regular fa-calendar-check mr-2"> </i>Book Appointment
            </label>
          </div>
        </div>
      </div>

    </div>
  )
}
export default AppointmentService;