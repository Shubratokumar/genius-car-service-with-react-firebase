import React from 'react';
import { Link } from "react-router-dom";
import './Register.css';

const Register = () => {

    const handleRegister = event =>{
        event.preventDefault();
    }
    return (
        <div className='register-form'>
            <h2 className='text-info text-center my-3'>Please Register!!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name ='name' placeholder='Your Name' />
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login' className='text-decoration-none text-danger'>Please Login</Link></p>
        </div>
    );
};

export default Register;