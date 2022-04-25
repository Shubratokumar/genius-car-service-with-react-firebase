import React from 'react';
// import { useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Checkout = () => {
    // const [serviceId] = useParams();
    const [service] = useServiceDetail();
    const [user] = useAuthState(auth);
    if(user){
        // console.log(user);
    }
    /* const [user, setUser] = useState({
        name: "Shubrato Kumar",
        email: "shubrato@gmail.com",
        address: "Dhaka Cantonment, Dhaka",
        phone: "01762813923"
    }) */

    /* const handleAddressChange = event =>{
        // console.log(event.target.value);
        const {address, ...rest} = user;
        const newAddress = event.target.value;
        const newUser = {address: newAddress, ...rest};
        console.log(newUser);
        setUser(newUser);
    } */

    const handlePlaceOrder = event =>{
        event.preventDefault();
        const order = {
            email: user.email,
            service : service.name,
            serviceId : service._id,
            address : event.target.address.value,
            phone : event.target.phone.value
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h3>Please Order : {service.name}</h3>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' value={user?.displayName} type="text" name='name' placeholder='Your Name' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={user.email} type="email" name='email' placeholder='Your Email' required readOnly disabled />
                <br />
                <input className='w-100 mb-2' value={service.name} type="text" name='service' placeholder='Service Title' required />
                <br />
                <input className='w-100 mb-2'  value={user.address} type="text" name='address'  autoComplete='off' placeholder='Your Address' required />
                <br />
                <input className='w-100 mb-2' value={user.phone} type="number" name='phone' placeholder='Your Phone Number' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
            
        </div>
    );
};

export default Checkout;