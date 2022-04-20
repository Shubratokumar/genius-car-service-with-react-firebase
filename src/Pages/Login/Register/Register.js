import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Register.css';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { toast } from 'react-hot-toast';
import PageTitle from '../../Shared/PageTitle/PageTitle';

const Register = () => {
    const navigate = useNavigate();
    const [agree, setAgree] = useState(false)

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const [updateProfile] = useUpdateProfile(auth);

    if(user){
    navigate('/home');
    }

    const navigateLogin = () =>{
        navigate('/login');
    }

    const handleRegister = async(event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({displayName: name})
        toast.success("Successfully Registered!!!")
    }
    return (
        <div className='register-form'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-info text-center my-3'>Please Register!!!</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name ='name' placeholder='Your Name' />
                <input type="email" name="email" id="1" placeholder='Email Address' required/>
                <input type="password" name="password" id="2" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                {/* <label className={!agree ? "text-danger" : "text-primary"} htmlFor="terms">Accept Car Doctor Terms and Conditions</label> */}
                <label className={`ps-2 ${!agree ? "text-danger" : "text-primary"}`} htmlFor="terms">Accept Car Doctor Terms and Conditions</label>
                <input 
                disabled={!agree}
                className='w-50 mx-auto btn btn-primary mt-2' 
                type="submit" value="Register" />
            </form>
            <p>Already have an Account? <Link to='/login' onClick={navigateLogin} className='text-decoration-none text-danger'>Please Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;