import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddPackage = () => {

  const imgStorageKey='f1e861da350102b2d812067271861cd9';
    const { register, handleSubmit, reset } = useForm();
    
    const onSubmit = async (data) => {
      console.log(data)
      const name=data.name;
      const sprice=data.sprice;
      const des= data.des;
      const stand= data.stand;
      const duration= data.duration;
      const end= data.end;
      const meta= data.meta;
      const include= data.includes
      const exclude= data.excludes
      const des1= des.split('.')
      const includes= include.split('.')
      const excludes= exclude.split('.')
      console.log(des1, includes, excludes)
      const image=data.image[0];
      const image1=data.image1[0];
      const image2=data.image2[0];
      const image3=data.image3[0];
      var img;
      var img1;
      var img2;
      var img3;
      const map=data.map
      const formData = new FormData();
      formData.append('image', image);
      
      const url=`https://api.imgbb.com/1/upload?key=${imgStorageKey}`
      fetch(url, {
          method: "POST",
          body:formData
        
      })
      .then(res=>res.json())
      .then(result=>{
          console.log(result)
          img=result.data.url
    })
    formData.append('image', image1);
    fetch(url, {
      method: "POST",
      body:formData
    
  })
  .then(res=>res.json())
  .then(resultone=>{
      console.log(resultone)
      img1=resultone.data.url
})
    formData.append('image', image2);
    fetch(url, {
      method: "POST",
      body:formData
    
  })
  .then(res=>res.json())
  .then(resulttwo=>{
      console.log(resulttwo)
      img2=resulttwo.data.url
})
    formData.append('image', image3);
    fetch(url, {
      method: "POST",
      body:formData
    
  })
  .then(res=>res.json())
  .then(resultthree=>{
      console.log(resultthree)
     img3=resultthree.data.url
     const pack={
      name : name,
      sprice : sprice,
      stand: stand,
      duration : duration,
      des1: des1,
      end: end,
      includes: includes,
      excludes: excludes,
      meta: meta,
      img: img,
      img1: img1,
      img2: img2,
      img3: img3,
      map: map
}
fetch("http://localhost:5000/add-package", {
  method: "POST",
  headers: {
    "content-type": "application/json",
    authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
  body: JSON.stringify(pack),

})
.then(res=>res.json())
.then(result=>{
  console.log(result)
  toast('Package Added!')
})
     
})


  }
    return (
        // <div className='h-screen  flex bg-accent justify-center items-center'>
        // <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
         
          <div class='card-body '>
            
            <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className='text-center text-2xl mt-80'>Add Package</h1>
            <div className='flex  gap-5'>
              <div class='form-control'>
                <label htmlFor='serviceName' class='label '>
                  <span class='label-text'>Package Name</span>
                </label>
                <input
                  type='text'
                  id='Name'
                  class='input input-bordered'
                  {...register("name")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='price' class='label'>
                  <span class='label-text'>Price</span>
                </label>
                <input
                  type='number'
                  id='price'
                  class='input input-bordered'
                  {...register("sprice")}
                />
              </div>
              </div>
              {/* <div class='form-control'>
                <label class='label'>
                  <span class='label-text'>Email</span>
                </label>
                <input
                  type='email'
                  class='input input-bordered'
                  {...register("email")}
                />
              </div> */}
              <div className='flex gap-5'>
              <div class='form-control'>
                <label htmlFor='stand' class='label'>
                  <span class='label-text'>Stand</span>
                </label>
                <input
                  type='text'
                  id='stand'
                  class='input input-bordered'
                  {...register("stand")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='duration' class='label'>
                  <span class='label-text'>Duration</span>
                </label>
                <input
                  type='text'
                  id='duration'
                  class='input input-bordered'
                  {...register("duration")}
                />
              </div>
              </div>
              <div className='flex gap-5'>
              <div class='form-control'>
                <label htmlFor='end' class='label'>
                  <span class='label-text'>End</span>
                </label>
                <input
                  type='text'
                  id='end'
                  class='input input-bordered'
                  {...register("end")}
                />
              </div>
              <div class='form-control'>
                <label htmlFor='meta' class='label'>
                  <span class='label-text'>Meta</span>
                </label>
                <textarea
                  id='meta'
                  class='input input-bordered'
                  {...register("meta")}
                />
              </div>
              </div>
              
              <div class='form-control'>
                <label htmlFor='des' class='label'>
                  <span class='label-text'>Description</span>
                </label>
                <textarea
                  id='des'
                  class='input input-bordered'
                  {...register("des")}
                />
              </div>
              <div className='flex gap-5'>
              <div class='form-control'>
                <label htmlFor='includes' class='label'>
                  <span class='label-text'>Includes</span>
                </label>
                <textarea
                  id='includes'
                  class='input input-bordered'
                  {...register("includes")}
                />
              </div>
              
              <div class='form-control'>
                <label htmlFor='excludes' class='label'>
                  <span class='label-text'>Excludes</span>
                </label>
                <textarea
                  id='excludes'
                  class='input input-bordered'
                  {...register("excludes")}
                />
              </div>
              </div>
              <div class='form-control'>
                <label htmlFor='map' class='label'>
                  <span class='label-text'>Map Link</span>
                </label>
                <input
                  type='text'
                  id='map'
                  class='input input-bordered'
                  {...register("map")}
                />
              </div>
              <div class='form-control'>
                <label
                  htmlFor='image'
                //   class={
                //     loading
                //       ? "btn btn-primary loading mt-5"
                //       : "btn btn-primary mt-5"
                //   }
                class='btn btn-primary mt-5'
                 
                >
                  Upload Image
                </label>
                <input
                  type='file'
                  id='image'
                  class='input input-bordered hidden'
                  {...register("image")}
                //   onChange={handleUploadImage}
                />
              </div>
              <div class='form-control'>
                <label
                  htmlFor='image1'
                //   class={
                //     loading
                //       ? "btn btn-primary loading mt-5"
                //       : "btn btn-primary mt-5"
                //   }
                class='btn btn-primary mt-5'
                 
                >
                  Upload Image for slider
                </label>
                <input
                  type='file'
                  id='image1'
                  class='input input-bordered hidden'
                  {...register("image1")}
                //   onChange={handleUploadImage}
                />
              </div>
              <div class='form-control'>
                <label
                  htmlFor='image2'
                //   class={
                //     loading
                //       ? "btn btn-primary loading mt-5"
                //       : "btn btn-primary mt-5"
                //   }
                class='btn btn-primary mt-5'
                 
                >
                  Upload Image for slider
                </label>
                <input
                  type='file'
                  id='image2'
                  class='input input-bordered hidden'
                  {...register("image2")}
                //   onChange={handleUploadImage}
                />
              </div>
              <div class='form-control'>
                <label
                  htmlFor='image3'
                //   class={
                //     loading
                //       ? "btn btn-primary loading mt-5"
                //       : "btn btn-primary mt-5"
                //   }
                class='btn btn-primary mt-5'
                 
                >
                  Upload Image for slider
                </label>
                <input
                  type='file'
                  id='image3'
                  class='input input-bordered hidden'
                  {...register("image3")}
                //   onChange={handleUploadImage}
                />
              </div>
              
              <div class='form-control mt-6'>
                <button
                  type='submit'
                  class='btn btn-primary'
                //   disabled={!imageURL ? true : false}
                >
                  Update Details
                </button>
              </div>
            </form>
          </div>
      //   </div>
      // </div>
    );
};

export default AddPackage;