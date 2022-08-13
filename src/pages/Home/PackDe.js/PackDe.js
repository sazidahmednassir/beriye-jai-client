import React from 'react';
import { Link } from 'react-router-dom';
import './PackDe.css';

const PackDe = ({ pack }) => {
  // console.log(pack._id)
  return (
    <div>
      <div class="container ">
        <div class="card ">
          <div class="card-header">
            <img src={pack.img} className='animate__animated animate__zoomIn ' alt="rover" />
          </div>
          <div class="cus-card-body">
            <span class="tag tag-teal text-2xl ">{pack.stand}</span>
            <h4 className="text-2xl my-2 ">{pack.name}</h4>
            <p>{pack.meta}</p>
            <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-accent py-2 px-4 border border-primary hover:border-transparent rounded my-3 w-full cursor-pointer ">
             <Link to={`/package/${pack._id}` }> Click Here To See Details</Link> 
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDe;
