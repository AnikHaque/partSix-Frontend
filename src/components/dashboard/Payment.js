import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { Loading } from '../loading/Loading';
import { CheckoutForm } from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LpZwZGWuhjNp2K6pFzfxzpHQUhiTt4zlADTaiQEGR1yJ5zHH3uwJgCmgV23OVUsZt4GYSqH4AspdcXhF5MFYlYF00JFx9LFp7');

export const Payment = () => {
    const {id} = useParams();
    const url = `https://dry-brook-75772.herokuapp.com/booking/${id}`;
    console.log(url);

    const {data:coursebooking,isLoading} = useQuery(['booking',id], ()=>fetch(url).then(res=>res.json()))

        if(isLoading){
            return <Loading></Loading>
        }
  return (
    <div>
<div className="card w-96 bg-myorder mx-auto mt-12 shadow-xl">
  <div className="card-body">
    <h2 className="card-title font-bold">Hello! <span className='text-white'>{coursebooking.name}</span></h2>
    <h2 className="font-bold text-green-300">Please pay for <b className='text-white'>{coursebooking.coursename}</b></h2>
    <p>Please Pay $ <span className='font-bold text-secondary'>{coursebooking.price}</span></p>
   
    <Elements stripe={stripePromise}>
      <CheckoutForm coursebooking={coursebooking} />
    </Elements>
  </div>
</div>
    </div>
  )
}
