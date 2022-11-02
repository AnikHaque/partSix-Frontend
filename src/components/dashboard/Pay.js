import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { Loading } from '../loading/Loading';
import { Checkout } from './Checkout';

const stripePromise = loadStripe('pk_test_51LzkrZG7vHJjeI7EHjSOU97FxNeQ1yPZ78Y4tFuGFgGxawdISDtQmWixjaSAolEyYlykTISegKYIU3GhnmjaW0gr002ib0ihud');

export const Pay = () => {
    const {id} = useParams();
    const url = `https://dry-brook-75772.herokuapp.com/hospitaldoctorsbooking/${id}`;
    const {data:appointment,isLoading} = useQuery(['hospitaldoctorsbooking',id],()=>fetch(url,{
      method:'GET',
            headers:{
                'authorization':`Bearer ${localStorage.getItem('accessToken')}`
            }
    }).then(res=>res.json()));
    if(isLoading){
      return <Loading></Loading>
    }
  return (
    <div>
        <h1 className='text-2xl text-primary'> please Pay for {id}</h1>
        <div className="card w-96 bg-base-100 shadow-xl mt-5">
  <div className="card-body">
    <h1>Hello {appointment.patientName}</h1>
    <h2 className="text-primary">Please pay for {appointment.treatment}</h2>
    <p>We will see you on <span className='text-secondary'>{appointment.date}</span> at <span className='text-secondary'>{appointment.slot}</span></p>
   <p>Please pay $ {appointment.fees}</p>
  </div>
  <Elements stripe={stripePromise}>
      <Checkout appointment={appointment} />
    </Elements>
</div>
    </div>
  )
}
