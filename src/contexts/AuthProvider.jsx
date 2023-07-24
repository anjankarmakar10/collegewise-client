import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { useContext } from "react";
import { auth, googleAuthProvider } from "../config/firebase";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const signUpWithEmail = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (user, name, image) => {
    return updateProfile(user, { displayName: name, photoURL: image });
  };

  const value = {
    user,
    signInWithGoogle,
    loading,
    signUpWithEmail,
    logOut,
    signInWithEmail,
    updateUserProfile,
  };

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);

      setLoading(false);
    });

    return () => unsubcribe();
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
