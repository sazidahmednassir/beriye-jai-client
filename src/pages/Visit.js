import React, { useEffect, useState } from 'react';
import {useLocation, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Visit = ({setLoading, isLoading, refetch}) => {
//     const location = useLocation()
//   const { setLoading } = location.state
    const { id } = useParams();
    console.log(id)
    const [visitable, setVistable] = useState({});
    // const [loading, setLoading] = useState(true);

   if(isLoading){
    <Loading></Loading>
   }

    useEffect(() => {
        const url = `http://localhost:5000/visit/${id}`;
        console.log(url);
        fetch(url)
          .then((res) => res.json())
          .then((data) =>{ setVistable(data)
            const timer = setTimeout(() => {
              if(data){
                window.location.reload();
                         
                }
          }, 20000);
        });
      }, []);

    return (
        <div>
            <div class="hero min-h-screen bg-base-200">
            <div class="card w-95">
  <figure><img src={visitable.img} alt="Album"/></figure>
  <h1 className='card-title text-2xl mx-auto'>{visitable.name}</h1>
 
  </div>
 
      </div>
      <div class="card-body ">
  <p className='text-2xl'>{visitable.meta}</p>
  <span className='card-title text-2xl'>Visitable Places:</span>
  <p className='text-2xl'>{visitable?.placesTogo?.map(plgo=><li className='text-xl'>{plgo}</li>)}</p>
    </div>
 
      </div>
            
  
    );
};

export default Visit;