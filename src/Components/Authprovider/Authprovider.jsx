import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Provider/Provider';
 export const Authcontext=createContext(null)
const Authprovider = ({children}) => {
    const [user,setuser]=useState(null);
    const [loading,setloading]=useState(true)
    const createuser=(email,password)=>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userInfo={
        user,loading,createuser
    }
    return (
      <Authcontext.Provider value={userInfo}>
      {
        children
      }
      </Authcontext.Provider>
    );
};

export default Authprovider;