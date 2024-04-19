import { createContext, useEffect, useState } from "react";


const AuthContext=createContext({
    token:"",
    isLoggedIn:false,
    Login:(token)=>{},
    LogOut:()=>{}
});

//

export const AuthContextProvider=(props)=>{
    const initialToken=localStorage.getItem("token");
  const [tokens,setToken]=useState(initialToken);

  const userIsLoggedIn= !!tokens;

  const loginHandler=(token)=>{
      setToken(token);
      localStorage.setItem("token",token);
  };

  const logoutHandler=()=>{
      setToken(null);
      localStorage.removeItem("token");
  };

//   ...............................................
              
  useEffect(()=>{
      let timer=setTimeout(()=>{
          localStorage.removeItem("token");
          setToken(null);
      },5000);

      return ()=>{
         clearTimeout(timer)
      }
  },[]);
//   '''''''''''''''''''''''''''''''''''''''''''''''''

  const contextValue={
    token:tokens,
    isLoggedIn:userIsLoggedIn,
    Login:loginHandler,
    LogOut:logoutHandler
  }

    return(
        <AuthContext.Provider value={contextValue}>
             {props.children}
        </AuthContext.Provider>
    )
};

export default AuthContext;
