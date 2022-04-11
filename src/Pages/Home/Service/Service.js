import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {name, price, description, img} = service;
    return (
        <div className='service-container'>
                <img src={img} alt="" />
            <div className='service-description'>
                <h3>{name}</h3>
                <p>Price : $ {price}</p>
                <p>{description}</p>
                <button className='btn text-white'>Book : {name}</button>
            </div>
        </div>
    );
};

export default Service;