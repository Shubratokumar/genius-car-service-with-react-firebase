import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const [sendEmailVerification] = useSendEmailVerification(auth);
  
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  console.log(user);
  if (user?.providerData[0]?.providerId === "password" && !user?.emailVerified) {
    return (
      <div className="text-center">
        <h2 className="text-danger">Your email is not verified !!!</h2>
        <h3 className="text-success">Please verify your email address !!!</h3>
        <button
        className="btn btn-info"
          onClick={async () => {
            await sendEmailVerification();
            toast.success("Sent email");
          }}
        >
          Sent verification email again
        </button>
      </div>
    );
  }
  return children;
};

export default RequireAuth;
