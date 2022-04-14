import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Register = () => {
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      if(user){
          navigate('/home')
      }

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }
    return (
        <div className='register-form'>
            <h2 className='text-info text-center my-3'>Please Register!!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name ='name' placeholder='Your Name' />
                <input type="email" name="email" id="1" placeholder='Email Address' required/>
                <input type="password" name="password" id="2" placeholder='Password' required />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login' onClick={navigateLogin} className='text-decoration-none text-danger'>Please Login</Link></p>
        </div>
    );
};

export default Register;