import { useState } from "react";
import { useEffect } from "react";
import { axios } from 'axios';

const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(token);

  useEffect(() => {
    const getToken = async () => {        
        const email = user?.user?.email;
        if(email){
            const { data } = await axios.post(
              "https://obscure-fjord-94626.herokuapp.com/login",
              { email }
            );
            setToken(data.accessToken);
            localStorage.setItem("accessToken", data.accessToken);
            console.log(email, data , data.accessToken);
        }
    };
    getToken();
  }, [user]);

  return [token];
};


export default useToken;
