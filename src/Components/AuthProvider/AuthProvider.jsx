import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
// import auth from '../../firebase/Firebase.config';
import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from 'react';
import app from '../../firebase/Firebase.config';


export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)


    const createUser = (email, password) => {
       return createUserWithEmailAndPassword(auth, email, password);
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
        createUser
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