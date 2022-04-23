import React from 'react';
import useServices from '../../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices([]);
    const handleDelete = id =>{
        const proceedDelete = window.confirm("Are you sure remove this service?")
        if(proceedDelete){
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: "DELETE",
            })
            .then(res => res.json())
            .then(data => {
                const remaining = services.filter(service => service._id !== id );
                setServices(remaining);
                console.log(data);
            })


        } 
    }
    return (
        <div className="container w-50 mx-auto text-center">
            <h2>Manage Your Services</h2>
            {
                services.map(service => 
                <div key={service._id}>
                    <h5>{service.name}{" "}
                        <button onClick={()=>{handleDelete(service._id)}} className='btn btn-primary'>X</button>
                    </h5>
                </div>
                )
            }
        </div>
    );
};

export default ManageServices;