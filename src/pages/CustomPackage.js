import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { auth } from '../firebase.init';


const CustomPackage = () => {
    const { register, handleSubmit, reset } = useForm();
    const [user, loading] = useAuthState(auth);

    const onSubmit = async (data) => {
      console.log(data)
     
      
      const cus={
       name : data.name,
       useremail : data.useremail,
       pnumber: data.pnumber,
      places : data.places,
      total : data.total,
      food : data.food,
      days : data.days,
      date : data.date,
      htype : data.htype,
      vehicle : data.vehicle,
      req: data.req,
      point: data.point,


      }

      fetch("http://localhost:5000/cus", {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
        body: JSON.stringify( cus),
      })
        .then((res) => res.json())
        .then(data=>{
          toast('Order Taken')
          reset()
        })
    }
    return (
        // <div className='h-screen w-full flex bg-accent justify-center items-center '>
        // <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div class='card-body mt-5'>
            <h1 className='text-center text-2xl'>Custom Package</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class='form-control'>
                <label htmlFor='serviceName' class='label'>
                  <span class='label-text'>Name</span>
                </label>
                <input
                  type='text'
                  id='Name'
                  class='input input-bordered'
                  value={user?.displayName}
                  {...register("name")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='email' class='label'>
                  <span class='label-text'>Email</span>
                </label>
                <input
                  type='text'
                  id='email'
                  class='input input-bordered'
                  value={user?.email}
                  {...register("useremail")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='pnumber' class='label'>
                  <span class='label-text'>Phone Number</span>
                </label>
                <input
                  type='text'
                  id='pnumber'
                  class='input input-bordered'
                  {...register("pnumber")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='total' class='label'>
                  <span class='label-text'>Total Person</span>
                </label>
                <input
                  type='number'
                  id='total'
                  class='input input-bordered'
                  {...register("total")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='places' class='label'>
                  <span class='label-text'>Places</span>
                </label>
                <input
                  type='text'
                  id='places'
                  class='input input-bordered'
                  {...register("places")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='days' class='label'>
                  <span class='label-text'>How many Days</span>
                </label>
                <input
                  type='number'
                  id='days'
                  class='input input-bordered'
                  {...register("days")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='point' class='label'>
                  <span class='label-text'>Pick up point</span>
                </label>
                <input
                  type="text"
                  id='point'
                  class='input input-bordered'
                  {...register("point")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='date' class='label'>
                  <span class='label-text'>Date Start From</span>
                </label>
                <input
                  type="date"
                  id='date'
                  class='input input-bordered'
                  {...register("date")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='food' class='label'>
                  <span class='label-text'>Include Food</span>
                </label>
                <select id='food' class='input input-bordered' {...register("food")}>
                <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
                </div>
             
              <div class='form-control'>
                <label htmlFor='htype' class='label'>
                  <span class='label-text'>Hotel Type</span>
                </label>
                <select id='htype' class='input input-bordered' {...register("htype")}>
                <option value="Ac">Ac</option>
                <option value="Non Ac">Non Ac</option>
                <option value="3 star">3 star</option>
                <option value="5 star">5 star</option>
                  
                </select>
                </div>
              <div class='form-control'>
                <label htmlFor='vehicle' class='label'>
                  <span class='label-text'>Vehicle</span>
                </label>
                <select id='vehicle' class='input input-bordered' {...register("vehicle")}>
                <option value="Car">Car</option>
                <option value="Mini Bus">Mini Bus</option>
                <option value="Motor Cycle">Motor Cycle</option>
                <option value="Boat">Boat</option>
                <option value="CNG">CNG</option>
                <option value="Tom tom">Tom tom</option>
                  
                </select>
                </div>
                <div class='form-control'>
                <label htmlFor='req' class='label'>
                  <span class='label-text'>Any Extra Requirement</span>
                </label>
                <textarea
               
                  id='req'
                  class='input input-bordered'
                  {...register("req")}
                />
                </div>
              
              <div class='form-control mx-auto my-5 w-40'>
                <button
                  type='submit'
                  class='btn btn-primary '
                //   disabled={!imageURL ? true : false}
                >
                  Book!
                </button>
              </div>
            </form>
          </div>
      //   </div>
      // </div>
    );
};

export default CustomPackage;