import { async } from '@firebase/util';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react'

export const MedCheckout = ({appointment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
const [clientSecret, setClientSecret] = useState('');
const [success, setSuccess] = useState('');
const handlePay = () => {
    alert("Payment Successful");
}
const {price,name,email} = appointment
useEffect(()=>{
fetch(' https://whispering-bayou-93638.herokuapp.com/create-payment-intent',{
    method: 'POST',
    headers:{
        'content-type': 'application/json',
        'authorization':`Bearer ${localStorage.getItem('accessToken')}`
    },
    body: JSON.stringify({price})
})
.then(res=>res.json())
.then(data=>{
if(data?.clientSecret){
setClientSecret(data.clientSecret);
}
})

},[price])

    const handleSubmit = async(event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
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
        console.log('[error]', error);
        setCardError(error.message);
      } else {
        setCardError('');
        setSuccess('');
      }
// confirm card payment
const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
    clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name:name,
          email:email
        },
      },
    },
  );

if(intentError){
    setCardError(intentError?.message)
}
else{
    setCardError('');
    console.log(paymentIntent);
    setSuccess('Congrats! Your payment is completed');
  
}

    }
  return (
    <div>
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
      <button onClick={handlePay} type="submit" className='btn btn-primary w-40 ml-24 mt-4 mb-4' disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        cardError && <p className='text-red-500'>{cardError}</p>
    }
    {
        success && <p className='text-green-500'>{success}</p>
    }
    </div>
  )
}
