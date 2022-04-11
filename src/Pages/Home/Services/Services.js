import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

/* const services = [
    {id : 1 , name : 'oil change', price : 100, description : '', img : 'https://i.ibb.co/XzcZDjH/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance.jpg'}
] */

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=> {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <>
        <h2 className='text-primary text-center'>Services Available : {services.length}</h2>
        <div className='services-container'>
            {
                services.map(service => <Service service={service} key ={service.id}></Service>)
            }
        </div>
        </>
    );
};

export default Services;