// import React from 'react';
import { useState } from "react"
import AppContext from "./contextApi"

const ContextProvider = ({children}) => {
    const localtoken=localStorage.getItem("token");
    const [tokens,setToken]=useState(localtoken);
    const localprofile=localStorage.getItem("userProfile");
    const [profile,setProfile]=useState(localprofile);

    const islogg=!!tokens;
console.log(profile)

    const handleToken=(token)=>{
        // console.log(token)
          setToken(token);
          localStorage.setItem("token",JSON.stringify(token));
    };

    const handleUserProfile=(ele)=>{
        setProfile(ele)
        localStorage.setItem("userProfile",JSON.stringify(ele));
    }
    
    const contextval={
        token:tokens,
        AddLogin:handleToken,
        isLogin:islogg,
        userProfile:profile,
        AdduserProfile:handleUserProfile
    }

  return (
    <AppContext.Provider value={contextval}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
