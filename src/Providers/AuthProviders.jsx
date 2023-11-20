import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthProvider = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscriber = onAuthStateChanged(auth, (currentUser) => {
      console.log("state", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscriber();
    };
  }, []);
  // loggedOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const google = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authinfo = {
    user,
    loading,
    createUser,
    signIn,
    google,
    logOut,
  };
  return (
    <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthProviders;
