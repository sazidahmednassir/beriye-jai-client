import React from 'react';
import { Link } from 'react-router-dom';
import './PackDe.css';

const PackDe = ({ pack }) => {
  return (
    <div>
      <div class="container">
        <div class="card">
          <div class="card-header">
            <img src={pack.img} className='animate__animated animate__zoomIn' alt="rover" />
          </div>
          <div class="cus-card-body">
            <span class="tag tag-teal">{pack.stand}</span>
            <h4 className="text-2xl my-2">{pack.name}</h4>
            <p>{pack.meta}</p>
            <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded my-2 w-full cursor-pointer">
             <Link to='/'> Click Here To See Details</Link> 
            </button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackDe;
