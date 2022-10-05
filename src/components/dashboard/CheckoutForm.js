import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'
import { Loading } from '../loading/Loading';

export const CheckoutForm = ({coursebooking}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError,setCardError]= useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [success, setSuccess] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState("");

    const {_id,price,email,name,coursename} = coursebooking;

    useEffect(()=>{
fetch(`https://dry-brook-75772.herokuapp.com/create-payment-intent`,{
    method:'POST',
    headers:{
        'content-type':'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    },
    body:JSON.stringify({price})
})
.then(res=>res.json())
.then(data=>{
if(data?.clientSecret){
    setClientSecret(data.clientSecret);
}
})
    }, [price])
    const handleSubmit= async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);

          if (card == null) {
            return;
          }

           // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
      setCardError(error.message);
      } else {
       setCardError('');
      }
setProcessing(true);

    //   confirm card payment 
      const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:email,
              
            },
          },
        },
      );
      if(intentError){
        setCardError(intentError?.message);
        setProcessing(false);
      }
      else{
        setCardError('');
        setTransactionId(paymentIntent.id);
        console.log(paymentIntent);
setSuccess('Congrats!! Your Payment is Completed Successfully')

// Store payment on database 
const payment = {
  coursebooking:_id,
  transactionId: paymentIntent.id
}

fetch(`https://dry-brook-75772.herokuapp.com/booking/${_id}`,{
  method:'PATCH',
  headers:{
    'content-type':'application/json',
    'authorization':`Bearer ${localStorage.getItem('accessToken')}`
},
body:JSON.stringify(payment)
})
.then(res=>res.json())
.then(data=>{
setProcessing(false);
  console.log(data);
})
      }

    }
  return (
    <div className=''>
        <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-course pl-12 pr-12 mt-3' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
        success && <div className='text-green-500 bg-blue-200 p-8 mt-5'>
            <p>{success}</p>
            <p><b>Your TransactionId</b> <span className='text-secondary'>{transactionId}</span></p>
        </div>
    }
   
    </div>
  )
}
