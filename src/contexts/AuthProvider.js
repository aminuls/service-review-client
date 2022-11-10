import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
         setUser(currentUser);
         setLoading(false);
      });
      return () => {
         unsubscribe();
      };
   }, []);

   const providerLogin = (provider) => {
      setLoading(true);
      return signInWithPopup(auth, provider);
   };

   const createUserByMail = (auth, email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      setLoading(true);
      return signOut(auth);
   };

   const AuthInfo = { loading, setLoading, user, setUser, providerLogin, createUserByMail, logOut };
   return <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
