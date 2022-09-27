import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../../firebase.init";

const PurchasePage = () => {
  const { id } = useParams();
  console.log(id);

  const [user, loading] = useAuthState(auth);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const url = `http://localhost:5000/package/${id}`;
    console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleOrder = (event) => {
    event.preventDefault();

    const packageid = id;

    let order = {
      packageId: packageid,
      packageName: product?.name,
      userName: user?.displayName,
      user: user?.email,
      address: event.target.address.value,
      phone: event.target.phone.value,
      price: event.target.price.value,
    };

    console.log(order);
    console.log(event.target.address.value);
    if (event.target.address.value == "" && event.target.phone.value == "") {
      return toast("Enter Your Address & Phone Number");
    }

    if (event.target.address.value == "") {
      return toast("Enter Your Address");
    }

    if (event.target.phone.value == "") {
      return toast("Enter Your Phone Number");
    }
    event.target.address.value = "";
    event.target.phone.value = "";

    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //   setControl(!control);
        toast("Order taken Suceesfully, Pleaqse Pay the bill in Myorders");
      });
  };
  return (
    <div className="my-20 mt-24">
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div class="text-center lg:text-left">
            <h1 class="text-5xl font-bold">Book {product.name} now!</h1>
            <p class="py-6">
              After Giving information here, Please Pay the{" "}
              <span className="font-bold text-xl">{product.sprice}</span>
              (Taka) in MyOrder Navbar Using Dashboard Section
            </p>
          </div>
          <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <form onSubmit={handleOrder}>
                <label class="label" for="name">
                  <span class="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  id="name"
                  class="input input-bordered input-accent w-full max-w-xs"
                  value={user?.displayName}
                />
                <label class="label" for="email">
                  <span class="label-text">Your Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  id="email"
                  class="input input-bordered input-accent w-full max-w-xs my-2"
                  value={user?.email}
                />
                <div class="w-full md:w-1/2 px-3"></div>
                <div class="form-control">
                  <label class="label" for="address">
                    <span class="label-text">Your Address</span>
                  </label>
                  <textarea
                    name="address"
                    class="textarea textarea-bordered h-24"
                    placeholder="Your Address"
                    id="address"
                  ></textarea>

                  <label class="label">
                    {/* <span class="label-text-alt">Your Address</span> */}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label" for="phone">
                    <span class="label-text">Your Phone</span>
                  </label>
                  <input
                    name="phone"
                    type="text"
                    placeholder="Type Your Phone Number"
                    class="input input-bordered w-full max-w-xs"
                    id="phone"
                  />

                  <label class="label">
                    {/* <span class="label-text-alt">Alt label</span> */}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label" for="package">
                    <span class="label-text">Your Package</span>
                  </label>
                  <input
                    type="text"
                    id="package"
                    placeholder="Type here"
                    class="input input-bordered input-accent w-full max-w-xs my-2"
                    value={product?.name}
                  />

                  <label class="label">
                    {/* <span class="label-text-alt">Alt label</span> */}
                  </label>
                </div>
                <div class="form-control w-full max-w-xs">
                  <label class="label" for="price">
                    <span class="label-text">Your Price</span>
                  </label>
                  <input
                    type="text"
                    id="price"
                    placeholder="Type here"
                    class="input input-bordered input-accent w-full max-w-xs my-2"
                    value={product?.sprice}
                  />

                  <label class="label">
                    {/* <span class="label-text-alt">Alt label</span> */}
                  </label>
                </div>
                <div class="card-actions justify-end">
                  <button class="btn btn-primary" type="submit">
                    Order Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
