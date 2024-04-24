// import React from 'react';
import { useState } from "react"
import AppContext from "./contextApi"

const ContextProvider = ({children}) => {
    const localtoken=localStorage.getItem("token");
    // const localProfile=localStorage.getItem("useProfile");
    const [tokens,setToken]=useState(localtoken);
    const [profile,setProfile]=useState("");

    const islogg=!!tokens;
// console.log(profile)

    const handleToken=(token)=>{
        // console.log(token)
          setToken(token);
          localStorage.setItem("token",token);
    };

    const handleUserProfile=(ele)=>{
        setProfile(ele);
        // localStorage.setItem("useProfile",ele)
    };

    const handleLoggout=()=>{
        localStorage.clear()
    }
    
    const contextval={
        token:tokens,
        AddLogin:handleToken,
        isLogin:islogg,
        userProfile:profile,
        AdduserProfile:handleUserProfile,
        AddLogout:handleLoggout
    }

  return (
    <AppContext.Provider value={contextval}>
      {children}
    </AppContext.Provider>
  )
}

export default ContextProvider
