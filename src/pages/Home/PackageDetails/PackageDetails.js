import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './PackageDetails.css';

const PackageDetails = () => {
  const { id } = useParams();
//   console.log(id);
  const [spack, setSpack] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/package/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSpack(data));
  }, []);

  console.log(spack.des1)

  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
            {/* for destop */}
          <div class="carousel cus-car w-full gap-5">
            <div id="item1" class="carousel-item w-50">
              <img src={spack.img1} class="w-50" />
            </div>
            <div id="item2" class="carousel-item w-50">
              <img src={spack.img2} class="w-50" />
            </div>
            <div id="item3" class="carousel-item w-50">
              <img src={spack.img3} class="w-50" />
            </div>
          </div>
        {/* for mobile */}
          <div class="carousel w-full lg:hidden">
            <div id="items1" class="carousel-item w-full">
              <img src={spack.img1} class="w-full" />
            </div>
            <div id="items2" class="carousel-item w-full">
              <img src={spack.img2} class="w-full" />
            </div>
            <div id="items3" class="carousel-item w-full">
              <img src={spack.img3} class="w-full" />
            </div>
          </div>
          <div class="flex justify-center w-full py-2 gap-2 lg:hidden">
            <a href="#items1" class="btn btn-xs">
              1
            </a>
            <a href="#items2" class="btn btn-xs">
              2
            </a>
            <a href="#items3" class="btn btn-xs">
              3
            </a>
          </div>
            <div className='flex flex-col'>
            <h1 class="text-5xl font-bold text-center">{spack.name}</h1>
          <button class="bg-transparent hover:bg-primary text-primary font-semibold hover:text-accent py-2 px-4 border border-primary hover:border-transparent rounded my-12 w-full cursor-pointer ">
             <Link to={`/purchase/${spack._id}` } > {spack.sprice} TK</Link> 
            </button>
            </div>
            
         
        </div>
        
      </div>
      <div class="card-body">
    <h2 class="card-title text-2xl">Duration:{spack.duration}</h2>
    <span className='card-title text-2xl'>Tour Info:</span>
    <p className='text-2xl'>{spack?.des1?.map(sp=><li className='text-xl'>{sp}</li>)}</p>
    <span className='card-title text-2xl'>Tour Includes:</span>
    <p className='text-2xl'>{spack?.includes?.map(incl=><li className='text-xl'>{incl}</li>)}</p>
    <span className='card-title text-2xl'>Tour Excludes:</span>
    <p className='text-2xl'>{spack?.excludes?.map(excl=><li className='text-xl'>{excl}</li>)}</p>
    <span className='card-title text-2xl'>Tour End:</span>
    <p className='text-2xl'><span className='text-xl'>{spack.end}</span></p>
    
    </div>
    </div>
  );
};

export default PackageDetails;
