import React, { useEffect, useState } from 'react';

const Study = () => {
    const [study, setStudy]=useState({})
    useEffect(()=>{
     fetch('http://localhost:5000/study')
     .then(res=>res.json())
     .then(data=>setStudy(data))


    },[study])
    console.log(study[0]?.name)
    return (
        
            <div class="hero min-h-screen bg-base-200 my-5">
  <div class="hero-content flex-col lg:flex-row-reverse ">
    <img src={study[0]?.img} class="w-full lg:max-w-sm rounded-lg shadow-2xl " />
    <div>
      <h1 class="text-5xl font-bold">{study[0]?.name}!</h1>
      <p class="py-6">{study[0]?.des}</p>
      <p class="py-6 text-2xl font-bold">For Booking Contact us with email: beriyepori.bd@gmail.com</p>
      
    </div>
  </div>
</div>
       
    );
};

export default Study;