import React from "react";
import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "./../../firebase.init";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import axiosPrivate from "./../../api/axiosPrivate";
import { axios } from 'axios';

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
//   console.log(user.email, user.accessToken)

  useEffect(() => {
    const getOrder = async () => {
      const email = user?.email;
      const url = `https://obscure-fjord-94626.herokuapp.com/order?email=${email}`;
      console.log(url)
      /* const response = await axios.get(url);
        const data = response.data; */
        const {data} = await axios.get(url)
            // const { data } = await axiosPrivate.get(url);
            console.log(data)
            setOrders(data);
      /* try {
        const { data } = await axiosPrivate.get(url);
        console.log(data)
        setOrders(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      } */
    };
    getOrder();
  }, [user]);
  return (
    <div className="w-50 mx-auto">
      <h2>Your Total Orders : {orders.length}</h2>
      {
          orders.map(order => <div key={order._id}>
              <p>{order.email} : {order.service}</p>
          </div>)
      }
    </div>
  );
};

export default Order;
