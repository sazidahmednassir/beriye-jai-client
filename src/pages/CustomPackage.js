import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { auth } from "../firebase.init";

const CustomPackage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    clearErrors,
  } = useForm();
  const [user, loading] = useAuthState(auth);

  const onSubmit = async (data) => {
    console.log(data);
    clearErrors();

    const cus = {
      name: data.name,
      useremail: data.useremail,
      pnumber: data.pnumber,
      places: data.places,
      total: data.total,
      food: data.food,
      days: data.days,
      date: data.date,
      htype: data.htype,
      vehicle: data.vehicle,
      req: data.req,
      point: data.point,
    };

    fetch("http://localhost:5000/cus", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(cus),
    })
      .then((res) => res.json())
      .then((data) => {
        toast("Order Taken");
        reset();
      });
  };
  return (
    // <div className='h-screen w-full flex bg-accent justify-center items-center '>
    // <div class='card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
    <div class="card-body mt-28">
      <h1 className="text-center text-2xl">Custom Package</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div class="form-control">
          <label htmlFor="Name" class="label">
            <span class="label-text">Name</span>
          </label>
          <input
            type="text"
            id="Name"
            class="input input-bordered"
            value={user?.displayName}
            {...register("name", {
              required: {
                value: true,
                message: "Name is Required",
              },
            })}
          />
          <label className="label">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="email" class="label">
            <span class="label-text">Email</span>
          </label>
          <input
            type="email"
            id="email"
            class="input input-bordered"
            value={user?.email}
            {...register("useremail", {
              required: {
                value: true,
                message: "Email is Required",
              },
            })}
          />
          <label className="label">
            {errors.useremail?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.useremail.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="pnumber" class="label">
            <span class="label-text">Phone Number</span>
          </label>
          <input
            type="text"
            id="pnumber"
            class="input input-bordered"
            {...register("pnumber", {
              required: {
                value: true,

                message: "Phone Number is Required",
              },
              minLength: {
                value: 11,
                message: "Please Enter correct Phone Number",
              },
            })}
          />
          <label className="label">
            {errors.pnumber?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.pnumber.message}
              </span>
            )}
            {errors.pnumber?.type === "minLength" && (
              <span className="label-text-alt text-red-500">
                {errors.pnumber.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="total" class="label">
            <span class="label-text">Total Person</span>
          </label>
          <input
            type="number"
            id="total"
            class="input input-bordered"
            {...register("total", {
              required: {
                value: true,
                message: "Total is Required",
              },
              // pattern: {
              //   value: /\0/,
              //   message: "Please Enter value greater than 0",
              // },
            })}
          />
          <label className="label">
            {errors.total?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.total.message}
              </span>
            )}
            {/* {errors.total?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.total.message}
              </span>
            )} */}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="places" class="label">
            <span class="label-text">Places</span>
          </label>
          <input
            type="text"
            id="places"
            class="input input-bordered"
            {...register("places", {
              required: {
                value: true,
                message: "Place is Required",
              },
            })}
          />
          <label className="label">
            {errors.places?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.places.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="days" class="label">
            <span class="label-text">How many Days</span>
          </label>
          <input
            type="number"
            id="days"
            class="input input-bordered"
            {...register("days", {
              required: {
                value: true,
                message: "Days is Required",
              },
              // pattern: {
              //   value: /\0/,
              //   message: "Please Enter value greater than 0",
              // },
            })}
          />
          <label className="label">
            {errors.days?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.days.message}
              </span>
            )}
            {/* {errors.total?.type === "pattern" && (
              <span className="label-text-alt text-red-500">
                {errors.total.message}
              </span>
            )} */}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="point" class="label">
            <span class="label-text">Pick up point</span>
          </label>
          <input
            type="text"
            id="point"
            class="input input-bordered"
            {...register("point", {
              required: {
                value: true,
                message: "Point is Required",
              },
            })}
          />
          <label className="label">
            {errors.point?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.point.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="date" class="label">
            <span class="label-text">Date Start From</span>
          </label>
          <input
            type="date"
            id="date"
            class="input input-bordered"
            {...register("date", {
              required: {
                value: true,
                message: "Date is Required",
              },
            })}
          />
          <label className="label">
            {errors.date?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.date.message}
              </span>
            )}
          </label>
        </div>
        <div class="form-control">
          <label htmlFor="food" class="label">
            <span class="label-text">Include Food</span>
          </label>
          <select id="food" class="input input-bordered" {...register("food")}>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        <div class="form-control">
          <label htmlFor="htype" class="label">
            <span class="label-text">Hotel Type</span>
          </label>
          <select
            id="htype"
            class="input input-bordered"
            {...register("htype")}
          >
            <option value="Ac">Ac</option>
            <option value="Non Ac">Non Ac</option>
            <option value="3 star">3 star</option>
            <option value="5 star">5 star</option>
          </select>
        </div>
        <div class="form-control">
          <label htmlFor="vehicle" class="label">
            <span class="label-text">Vehicle</span>
          </label>
          <select
            id="vehicle"
            class="input input-bordered"
            {...register("vehicle")}
          >
            <option value="Car">Car</option>
            <option value="Mini Bus">Mini Bus</option>
            <option value="Motor Cycle">Motor Cycle</option>
            <option value="Boat">Boat</option>
            <option value="CNG">CNG</option>
            <option value="Tom tom">Tom tom</option>
          </select>
        </div>

        <div class="form-control">
          <label htmlFor="req" class="label">
            <span class="label-text">Any Extra Requirement</span>
          </label>
          <textarea
            id="req"
            class="input input-bordered"
            {...register("req")}
          />
        </div>

        <div class="form-control mx-auto my-5 w-40">
          <button
            type="submit"
            class="btn btn-primary "
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
