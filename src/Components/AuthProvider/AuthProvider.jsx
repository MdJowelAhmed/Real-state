import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import auth from '../../firebase/Firebase.config';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth/cordova';


export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const login=(email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin=()=>{
       return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        setUser(null)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authInfo={
        user,
        setUser,
        createUser,
        login,
        googleLogin,
        githubLogin,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.object
}

export default AuthProvider;