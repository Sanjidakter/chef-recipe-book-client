// eslint-disable-next-line no-unused-vars
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

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

      const profileUpdate = (updateName, updatePhoto) => {
        return updateProfile(auth.currentUser, {
          displayName: updateName,
          photoURL: updatePhoto,
        });
      };

      const signInWithGoogle = () =>{
        return signInWithPopup(auth,googleAuthProvider);
      }

      const signInWithGithub = () =>{
        return signInWithPopup(auth,githubAuthProvider);
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
         profileUpdate,
         signInWithGoogle,
         signInWithGithub,
         logOut,
       };

      
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;