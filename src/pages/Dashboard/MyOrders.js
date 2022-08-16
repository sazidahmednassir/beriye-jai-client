import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase.init';
import OrderRow from './OrderRow';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();
    console.log(user)

    useEffect(() => {
        if (user) {
          fetch(`http://localhost:5000/orders?user=${user?.email}`, {
            method: "GET",
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          })
            .then((res) => {
              console.log("res", res);
              if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem("accessToken");
                navigate("/");
              }
              return res.json();
            })
            .then((data) => {
                console.log(data)
              setOrders(data);
            });
        }
      }, [user]);

    console.log(orders)
    return (
        
        <div class="overflow-x-auto w-full ">
        <table class="table table-compact w-50 mt-2 ml-4">
      
          <thead>
            <tr>
              <th></th>
              <th>Package Name</th>
              <th>Address</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Cancel Package</th>
            </tr>
          </thead>
          <tbody>
          {
                           orders?.map((order, index)=><OrderRow
                           index={index}
                           key={order._id}
                           order={order}
                           
                           ></OrderRow>)
                       } 
          </tbody>
        </table>
      </div>
      
    );
};

export default MyOrders;