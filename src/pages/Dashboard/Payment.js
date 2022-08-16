import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LX6CgLyTAvg31i5VwDZBvwPAlRQUouV2ru7OVLRsw2rFKfvMxArn58B2sr6EwjDgN3eyqmth8FkGn59WR0kDx8b00AXnoa9ya');

const Payment = () => {
    const {id}=useParams();
    console.log(id)
    const url=`http://localhost:5000/order/${id}`
    const {data: order, isLoading}=useQuery(['booking', id], ()=>fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }}).then((res)=>res.json()))
        console.log(order)
        if(isLoading){
            return <Loading></Loading>
        }
    return (
        <div>
        <div class="card w-full max-w-md bg-base-100 shadow-xl my-12">
       <div class="card-body">
           <p className="text-success font-bold">Hello, {order?.userName}</p>
           <h2 class="card-title">Please Pay for {order?.packageName}</h2>
        
           <p>Please pay: ${order?.price}</p>
       </div>
   </div>
   <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
       <div class="card-body">
           <Elements stripe={stripePromise}>
               <CheckoutForm  order={order} />
           </Elements>
       </div>
   </div>
   </div>
    );
};

export default Payment;
