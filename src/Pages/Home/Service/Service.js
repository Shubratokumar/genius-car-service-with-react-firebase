import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {_id, name, price, description, img} = service;
    const navigate = useNavigate();

    const handleNavigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
                <img src={img} alt="" />
            <div className='service-description'>
                <h3>{name}</h3>
                <p>Price : $ {price}</p>
                <p>{description}</p>
                <button onClick={()=> handleNavigateToServiceDetail(_id)} className='btn text-white'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;