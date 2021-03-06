import React from 'react';
import {signIn} from "next-auth/client";
import Disclaimer from "./Disclaimer";

function Login() {
  return (
    <div className="grid place-items-center">
      <Disclaimer/>
      <svg className="text-blue-500 h-24" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 30 30"
           style={{fill: 'currentColor'}}>
        <path
          d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"/>
      </svg>
      <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full cursor-pointer text-center text-white">Login with Facebook</h1>
    </div>
  );
}

export default Login;