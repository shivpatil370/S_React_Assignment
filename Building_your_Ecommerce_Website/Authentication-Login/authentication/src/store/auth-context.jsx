import { createContext, useState } from "react";


const AuthContext=createContext({
    token:"",
    isLoggedIn:false,
    Login:(token)=>{},
    LogOut:()=>{}
});

//

export const AuthContextProvider=(props)=>{
  const [tokens,setToken]=useState(null);

  const userIsLoggedIn= !!tokens;

  const loginHandler=(token)=>{
      setToken(token);
  };

  const logoutHandler=()=>{
      setToken(null);
  };

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
