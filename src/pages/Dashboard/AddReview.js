import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../../firebase.init";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);
  const { register, handleSubmit, reset } = useForm();

  // const handleOrder = (event) => {
  //   event.preventDefault();
  //   console.log(event.target.image.files[0].name);
  //   let image = event.target.image.files[0].name;
  //   image.toString();
  //   const formData = new FormData();
  //   formData.append("image", image);
  //   const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
  //   fetch(url, {
  //     method: "POST",
  //     body: formData,
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       const img = result?.data?.url;
  //       console.log(img);
  //       const review = {
  //         name: event.target.name.value,
  //         img: img,
  //         comments: event.target.comments.value,
  //         star: event.target.star.value,
  //       };
  //       if (event.target.comments.value == "") {
  //         return toast("Enter Your Comments");
  //       }
  //       if (event.target.star.value == "") {
  //         return toast("Enter Your Star");
  //       }
  //       fetch("http://localhost:5000/review", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //           authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //         },
  //         body: JSON.stringify(review),
  //       })
  //         .then((res) => res.json())
  //         .then((inserted) => {
  //           if (inserted.insertedId) {
  //             toast.success("Review added successfully");
  //             event.target.reset();
  //           } else {
  //             toast.error("Failed to add the Review");
  //             event.target.reset();
  //           }
  //         });
  //     });

  //   // if (event.target.img.value == "") {
  //   //   return toast("Enter Your Image Url");
  //   // }

  //   // if (event.target.comments.value == "") {
  //   //   return toast("Enter Your Comments");
  //   // }
  //   // if (event.target.star.value == "") {
  //   //   return toast("Enter Your Star");
  //   // }
  //   // fetch("http://localhost:5000/review", {
  //   //   method: "POST",
  //   //   headers: {
  //   //     "content-type": "application/json",
  //   //     authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //   //   },
  //   //   body: JSON.stringify(review),
  //   // })
  //   //   .then((res) => res.json())
  //   //   .then((inserted) => {
  //   //     if (inserted.insertedId) {
  //   //       toast.success("Review added successfully");
  //   //       event.target.reset();
  //   //     } else {
  //   //       toast.error("Failed to add the Review");
  //   //       event.target.reset();
  //   //     }
  //   //   });
  // };

  const imgStorageKey = "f1e861da350102b2d812067271861cd9";
  const onSubmit = async (data) => {
    console.log(data);
    console.log(data.image[0]);
    const image = data.image[0];
    console.log(data.image);
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const img = result.data.url;
        console.log(img);
        const review = {
          name: data.name,
          img: img,
          comment: data.comment,
          star: data.star,
        };
        fetch("http://localhost:5000/review", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((inserted) => {
            console.log(inserted);
            toast.success("Review Added");
            reset();
          });
      });
  };
  return (
    // <div className="h-screen w-full flex bg-accent justify-center items-center mt-5">
    //   <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
    //     <div class="card-body">
    //       <h1 className="text-center text-2xl">Add Review</h1>
    //       <form
    //         onSubmit={handleOrder}
    //         className="flex flex-col w-full max-w-lg my-2 "
    //       >
    //         <input
    //           id="name"
    //           type="text"
    //           placeholder="Type here"
    //           class="input input-bordered input-accent w-full max-w-xs"
    //           value={user?.displayName}
    //         />

    //         <label
    //           htmlFor="image"
    //           //   class={
    //           //     loading
    //           //       ? "btn btn-primary loading mt-5"
    //           //       : "btn btn-primary mt-5"
    //           //   }
    //           class="btn btn-primary mt-5"
    //         >
    //           Upload Image
    //         </label>
    //         <input
    //           type="file"
    //           id="image"
    //           class="input input-bordered hidden"

    //           //   onChange={handleUploadImage}
    //         />
    //         <div class="form-control">
    //           <label class="label" for="comments">
    //             <span class="label-text">Your Comments</span>
    //           </label>
    //           <textarea
    //             name="comments"
    //             class="textarea textarea-bordered h-24"
    //             placeholder="comments"
    //             id="comments"
    //           ></textarea>

    //           <label class="label">
    //             {/* <span class="label-text-alt">Your Address</span> */}
    //           </label>
    //         </div>
    //         <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
    //           <label
    //             class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
    //             for="grid-state"
    //           >
    //             Star
    //           </label>
    //           <div class="relative w-full">
    //             <select
    //               class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    //               id="star"
    //             >
    //               <option>⭐</option>
    //               <option>⭐⭐</option>
    //               <option>⭐⭐⭐</option>
    //               <option>⭐⭐⭐</option>
    //               <option>⭐⭐⭐⭐</option>
    //               <option>⭐⭐⭐⭐⭐</option>
    //             </select>
    //             <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
    //               <svg
    //                 class="fill-current h-4 w-4"
    //                 xmlns="http://www.w3.org/2000/svg"
    //                 viewBox="0 0 20 20"
    //               >
    //                 <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
    //               </svg>
    //             </div>
    //           </div>
    //         </div>
    //         <div class="card-actions justify-start my-4">
    //           <button class="btn btn-primary" type="submit">
    //             Add
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="h-screen w-full flex bg-accent justify-center items-center">
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <h1 className="text-center text-2xl">Add Review</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">User Name</span>
              </label>
              <input
                type="text"
                id="Name"
                class="input input-bordered"
                value={user?.displayName}
                {...register("name")}
              />
            </div>
            <div class="form-control">
              <label htmlFor="serviceName" class="label">
                <span class="label-text">Enter Comments</span>
              </label>
              <textarea
                type="text"
                id="comment"
                class="input input-bordered"
                {...register("comment")}
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
            <div class="form-control">
              <label
                htmlFor="image"
                //   class={
                //     loading
                //       ? "btn btn-primary loading mt-5"
                //       : "btn btn-primary mt-5"
                //   }
                class="btn btn-primary mt-5"
              >
                Upload Image
              </label>
              <input
                type="file"
                id="image"
                class="input input-bordered hidden"
                {...register("image")}
                //   onChange={handleUploadImage}
              />
            </div>
            <div class="form-control">
              <label htmlFor="star" class="label">
                <span class="label-text">Enter Ratings</span>
              </label>
              <select className="outine-0" id="star" {...register("star")}>
                <option value="⭐">⭐</option>
                <option value="⭐⭐">⭐⭐</option>
                <option value="⭐⭐⭐">⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐">⭐⭐⭐⭐</option>
                <option value="⭐⭐⭐⭐⭐">⭐⭐⭐⭐⭐</option>
              </select>
            </div>
            <div class="form-control mt-6">
              <button
                type="submit"
                class="btn btn-primary"
                //   disabled={!imageURL ? true : false}
              >
                Add Review
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
