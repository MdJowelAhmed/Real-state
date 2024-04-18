import { createUserWithEmailAndPassword, getAuth,updateProfile, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
// import auth from '../../firebase/Firebase.config';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile=(name,image)=>{
       return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }
    const login=(email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLogin=()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const githubLogin=()=>{
        setLoading(true)
       return signInWithPopup(auth,githubProvider)
    }
    const logOut=()=>{
        setUser(null)
        return signOut(auth)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false)
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
        logOut,
        loading,
        updateUserProfile
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