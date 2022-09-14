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
        console.log(data);
      }
    }
  }, [data]);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        getUser({ variables: { id: currentUser.uid } }).then((response) => {
          if (response.data.getUser.length == 0) {
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
          }
          else{
            const result = response.data.getUser[0]
            const {__typename, ...rest} = result;
            setUser(rest)
            console.log(user)
          }
        });

        setInitializing(false);
      } else {
        setUser(null);
        setInitializing(false);
      }
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
