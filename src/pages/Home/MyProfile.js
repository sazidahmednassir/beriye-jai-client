import { toast } from 'react-toastify';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const MyProfile = () => {
    const { register, handleSubmit, reset } = useForm();
    const [imageURL, setImageURL] = useState("");
    const [loading, setLoading] = useState(false);

    const imgStorageKey='f1e861da350102b2d812067271861cd9';

    const onSubmit = async (data) => {
        console.log(data.image[0])
        const image=data.image[0];
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
            const img=result.data.url;
            const user={
                name:data.name,
                img:img

            }
            fetch("http://localhost:5000/update-user", {
                method: "PUT",
                headers: {
                  "content-type": "application/json",
                  authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
                body: JSON.stringify(user),
              
            })
            .then(res=>res.json())
            .then(inserted=>{
                console.log(inserted)
                toast.success("User Updated!");
            })
        })
   
  
    }
    return (
        <div className='h-screen w-full flex bg-accent justify-center items-center'>
        <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div class='card-body'>
            <h1 className='text-center text-2xl'>Add Details</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class='form-control'>
                <label htmlFor='serviceName' class='label'>
                  <span class='label-text'>User Name</span>
                </label>
                <input
                  type='text'
                  id='Name'
                  class='input input-bordered'
                  {...register("name")}
                />
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
        </div>
      </div>
    );
};

export default MyProfile;