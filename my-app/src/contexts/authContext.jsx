import { createContext } from "react";
import { useNavigate } from 'react-router-dom';

import * as authService from '../services/authService';
import usePersistedState from "../hooks/usePersistedState";
import Path from '../paths';
import { useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth', {});
    const [errMessage, setErrMessage] = useState("")
   
    const loginSubmitHandler = async (values) => {

        let result
        try {
        result = await authService.login(values.email, values.password)
        setErrMessage('')
        } catch (err) {
            setErrMessage(err)
            return
        }
       
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate(Path.Home);
    };

    const registerSubmitHandler = async (values) => {
        let result
        try {
        if(values.password.length<8){
            throw new Error('Password must be at least 8 charecters!')
        }
        if(values['confirm-password'] != values.password){
           throw new Error('Confirm password does not match!')
        }
        result = await authService.register(values.email, values.password);
        } catch (err) {
            setErrMessage(err)
            return
        }
       
        

        setAuth(result);

        localStorage.setItem('accessToken', result.accessToken);

        navigate(Path.Home);
    };

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
    };

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username: auth.username || auth.email,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        errMessage: errMessage,
        setErrMessage
    };

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContext.displayName = 'AuthContext';

export default AuthContext;