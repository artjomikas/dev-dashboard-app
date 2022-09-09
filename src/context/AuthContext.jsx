import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useMutation, useLazyQuery } from "@apollo/client";
import { ADD_USER } from "../mutations/addUser";
import { GET_USER_BY_ID } from "../query/getUser";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  GithubAuthProvider,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [initializing, setInitializing] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGithub = async () => {
    const githubUser = await signInWithPopup(auth, new GithubAuthProvider());
    getUser({ variables: { id: githubUser.user.uid } });

    return githubUser;
  };

  const signInWithGoogle = () => {
    return signInWithPopup(auth, new GoogleAuthProvider());
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };
  const [newUser] = useMutation(ADD_USER);

  const addUser = (currentUser) => {
    newUser({
      variables: {
        input: {
          _id: currentUser.uid,
          username: "@" + currentUser.reloadUserInfo.screenName,
          imageURL: currentUser.photoURL,
          name: currentUser.displayName,
          email: currentUser.email,
        },
      },
    });
  };

  const [getUser, { loading, error, data }] = useLazyQuery(GET_USER_BY_ID);

  useEffect(() => {
    if (!loading && data != undefined) {
      if (data.getUser == null) {
        addUser(user);
      }
    }
  }, [data]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setInitializing(false);
    });
  }, []);

  if (initializing) return null;

  return (
    <AuthContext.Provider
      value={{
        signUp,
        signIn,
        logout,
        signInWithGithub,
        signInWithGoogle,
        resetPassword,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
