import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const getOrder = async() =>{
            const email = user?.email;
            const url = `http://localhost:5000/order?email=${email}`;
            const response = await axios.get(url);
            const data = response.data;
            // const {data} =  await axios.get(url);
            setOrders(data);
        }
        getOrder()
    },[user])
    return (
        <div>
            <h2>Your Total Orders : {orders.length}</h2>
        </div>
    );
};

export default Order;