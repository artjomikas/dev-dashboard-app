import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useMutation, useLazyQuery,useQuery } from "@apollo/client";
import { ADD_USER } from "../mutations/addUser";
import { GET_USER_BY_ID } from "../query/getUser";
import { GET_ALL_POSTS } from "../query/posts";

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
  const [userId, setUserId] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const signUp = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async () => {
    refetch({ variables: { id: userId } }).then((response) => {
        const result = response.data.getUser[0];
        const { __typename, ...rest } = result;
        console.log(rest);
        setUser(rest);
      })
  };

  const signInWithGithub = async () => {
    const githubUser = await signInWithPopup(auth, new GithubAuthProvider());
    getUser({ variables: { id: githubUser.user.uid } });

    return githubUser;
  };

  const signInWithGoogle = async () => {
    const googleUser = await signInWithPopup(auth, new GoogleAuthProvider());
    getUser({ variables: { id: googleUser.user.uid } });
    return googleUser;
  };

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const logout = () => {
    return signOut(auth);
  };
  const [newUser] = useMutation(ADD_USER);

  const [getUser, { loading, error, data, refetch }] = useLazyQuery(GET_USER_BY_ID);


  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser != null) {
        setUserId(currentUser.uid);
        getUser({ variables: { id: currentUser.uid } }).then((response) => {
          if (response.data.getUser.length == 0) {
            newUser({
              variables: {
                input: {
                  _id: currentUser.uid,
                  username:
                    currentUser.reloadUserInfo.screenName !== undefined
                      ? currentUser.reloadUserInfo.screenName
                      : "",
                  imageURL: currentUser.photoURL,
                  name: currentUser.displayName,
                  email: currentUser.email,
                  provider: currentUser.providerData[0].providerId.slice(0, -4),
                },
              },
            });
            setUser({
              _id: currentUser.uid,
              username:
                currentUser.reloadUserInfo.screenName !== undefined
                  ? currentUser.reloadUserInfo.screenName
                  : "",
              imageURL: currentUser.photoURL,
              name: currentUser.displayName,
              email: currentUser.email,
              provider: currentUser.providerData[0].providerId.slice(0, -4),
            });
          } else {
            const result = response.data.getUser[0];
            const { __typename, ...rest } = result;
            setUser(rest);
          }
        });
        
        setInitializing(false);
      } else {
        setUser(null);
        setInitializing(false);
        setUserId(null);
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
        userId,
        updateUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
