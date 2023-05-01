// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn = (email,passsword) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,passsword);
    
      }
    
      const logOut = () =>{
        setLoading(true);
        return signOut(auth);
      }

      useEffect(()=>{
        const unsubscribe =  onAuthStateChanged(auth,loogedUser => {
             console.log('logged in user auth state observer',loogedUser);
             setUser(loogedUser)
             setLoading(false);
         })
         return () =>{
            unsubscribe();
         }
       })
     
     
     
       const authInfo = {
         user,
         loading,
         createUser,
         signIn,
         logOut,
       };

      
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;