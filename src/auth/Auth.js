import React, { useState, useEffect, createContext } from 'react'
import app from './secret/firebase'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);
// je suis là on direai
    useEffect(() => {
        app.auth().onAuthStateChanged(user => {
            setCurrentUser(user);
            setPending(false);
        })
    }, []);

    if (pending) {
        return <>Loading...</>
    }
    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    )
}

