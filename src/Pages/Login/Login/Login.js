import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './Login.css';
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();
    const location = useLocation();
    
    const [
        signInWithEmailAndPassword,
        user
      ] = useSignInWithEmailAndPassword(auth);

    // redirect 
    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from, { replace: true });
    }
    const handleSubmit = event =>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

  return (
    <div className="container w-50 mx-auto">
      <h2 className="text-info text-center mt-2">Please Login </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
        </Form.Group>
        <Button  variant="primary" type="submit">
          LogIn
        </Button>
      </Form>
      <p>New to Car Doctor? <Link to='/register' className='text-decoration-none text-danger'>Please Register</Link></p>
      <SocialLogin></SocialLogin>      
    </div>
  );
};

export default Login;
