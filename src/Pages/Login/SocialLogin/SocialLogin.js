import React from 'react';
import Google from "../../../images/icon/Google.svg";
import Github from "../../../images/icon/GitHub.svg";
import FaceBook from "../../../images/icon/Facebook.svg";
import { useSignInWithGoogle, useSignInWithFacebook, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
import useToken from './../../../hooks/useToken';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithFacebook, user1, loading1, error1] = useSignInWithFacebook(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || user1 || user2);
    
    if(token){
        navigate("/home");
        /* toast('Hello World', {
            duration: 4000,
            position: 'top-center',
            // Styling
            style: {
                background:'black',
                color: 'white'
            },
            className: '',
            // Custom Icon
            icon: '👏',
            // Change colors of success/error/loading icon
            iconTheme: {
              primary: '#000',
              secondary: '#fff',
            },
            // Aria
            ariaProps: {
              role: 'status',
              'aria-live': 'polite',
            },
          }); */
        toast.success('Successfully created!!!', {
            duration: 4000,
            style: {
                background:'black',
                color: 'white'
            }
        });
    }
    if(error || error1 || error2){
        toast.error('This is an error!!!');
    }
    if(loading || loading1 || loading2){
    }
    return (
        <div>
            <div className='d-flex align-items-center '>
                <div style={{height: '2px'}} className='bg-primary w-50'></div>
                <p className='px-3 mt-2'>or</p>
                <div style={{height: '2px'}} className='bg-primary w-50'></div>
            </div> 
            <div>
                <button 
                onClick={()=>signInWithGoogle()}
                className='btn btn-primary d-block w-50 mx-auto my-2'>
                    <img style={{width: '30px'}} src={Google} alt="" />
                    <span className='ps-2'>Google Sign In</span>
                </button>   
                <button 
                onClick={()=>signInWithGithub()}
                className='btn btn-primary d-block w-50 mx-auto my-2'>
                    <img style={{width: '30px'}} src={Github} alt="" />
                    <span className='ps-2'>GitHub Sign In</span>
                </button>   
                <button 
                onClick={()=>signInWithFacebook()}
                className='btn btn-primary d-block w-50 mx-auto my-2'>
                    <img style={{width: '30px'}} src={FaceBook} alt="" />
                    <span className='ps-2'>FaceBook Sign In</span>
                </button>   
            </div>           
        </div>
    );
};

export default SocialLogin;