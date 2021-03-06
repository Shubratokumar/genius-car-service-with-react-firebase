import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import { toast } from "react-hot-toast";
import "./Login.css";
import PageTitle from "../../Shared/PageTitle/PageTitle";
// import axios from "axios";
// import { AiFillEyeInvisible } from 'react-icons/ai';
import useToken from './../../../hooks/useToken';

const Login = () => {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const location = useLocation();

  const [signInWithEmailAndPassword, user] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
  const [token] = useToken(user);

  // redirect
  let from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
    // toast.success("Successfully Login !!!")
  }

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent Email!!!");
    } else {
      toast("Please enter your email !!!");
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    // const response = await axios.post('https://obscure-fjord-94626.herokuapp.com/login', {email});
    
    navigate(from, { replace: true });
    toast.success("Successfully Login !!!");
  };

  return (
    <div className="container w-50 mx-auto">
      <PageTitle title="login"></PageTitle>
      <h2 className="text-info text-center mt-2">Please Login </h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
          {/* <div><p>See Password <AiFillEyeInvisible/></p></div> */}
        </Form.Group>
        <Button variant="primary w-50 mb-2 d-block mx-auto" type="submit">
          LogIn
        </Button>
      </Form>
      <p>
        New to Car Doctor?{" "}
        <Link to="/register" className="text-decoration-none text-primary">
          Please Register
        </Link>
      </p>
      <p>
        Forgot Password?{" "}
        <button
          onClick={resetPassword}
          className="link-btn btn btn-link text-decoration-none text-primary"
        >
          Reset Password
        </button>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
