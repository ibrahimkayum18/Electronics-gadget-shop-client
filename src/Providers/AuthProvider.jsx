import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    //Create user with email and password
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //Sign in with email and password
    const logInWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    //Sign in with google
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Sign Out
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    //set observer
    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setLoading(false)
            setUsers(user)
            console.log(user);
        })
        return () => {
            unSubscribe()
        }
    },[])

    const authInfo = {
        users,
        loading,
        createUser,
        logInWithEmail,
        logOut,
        googleLogIn
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;