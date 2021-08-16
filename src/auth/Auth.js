import React, { useState, useEffect, createContext } from 'react'
import app from './secret/firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setPending(false);
        })
    }, []);

    if (pending) {
        return <>Loading...</>
    }
    console.log('AuthProvider',currentUser);
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

