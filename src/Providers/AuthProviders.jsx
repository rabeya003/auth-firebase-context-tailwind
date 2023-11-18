import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
export const AuthProvider = createContext(null);
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(email, password, auth);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authinfo = {
    user,
    createUser,
    signIn,
  };
  return (
    <AuthProvider.Provider value={authinfo}>{children}</AuthProvider.Provider>
  );
};

export default AuthProviders;
