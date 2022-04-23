import React from "react";
import useServices from "../../../hooks/useServices";
import Service from "../Service/Service";
import "./Services.css";

/* const services = [
    {id : 1 , name : 'oil change', price : 100, description : '', img : 'https://i.ibb.co/XzcZDjH/close-up-hands-unrecognizable-mechanic-doing-car-service-maintenance.jpg'}
] */

const Services = () => {
  const [services ] = useServices([]);

  return (
    <div id ='services'>
      <h2 className="text-primary text-center">
        Services Available : {services.length}
      </h2>
      <div className="services-container">
        {services.map((service) => (
          <Service service={service} key={service._id}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
