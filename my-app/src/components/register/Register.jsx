import { useContext, useState } from "react"
import AuthContext from "../../contexts/authContext"
import useForm from "../../hooks/useForm"
import {Navigate} from "react-router-dom"


const RegisterFormKeys ={
    Emai: "email",
    Password: "password",
    ConfirmPassword: "confirm-password"

}


export default function Register(){
     const{isAuthenticated}= useContext(AuthContext)
      if(isAuthenticated){
      return <Navigate to="/"/>
        }


    const {registerSubmitHandler, errMessage} = useContext(AuthContext)
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler,{
    [RegisterFormKeys.Emai] : "",
    [RegisterFormKeys.Password] : "",
    [RegisterFormKeys.ConfirmPassword]:""
      })

   



    return(
    <section id="register-page" className="register-page">
        <form id="register" onSubmit={onSubmit}>
            <div className="container">
                <div className="brand-logo"></div>
                <h2>Register</h2>

                <label htmlFor="email">Email:</label>
                <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="stanimir@gmaill.com" 
                onChange={onChange} 
                values={values[RegisterFormKeys.Emai]}
                />

                <label htmlFor="pass">Password:</label>
                <input 
                type="password" 
                name="password" 
                id="register-password"
                placeholder="********"
                onChange={onChange}
                values={values[RegisterFormKeys.Password]}
                required/>

                <label htmlFor="con-pass">Confirm Password:</label>
                <input 
                type="password" 
                name="confirm-password" 
                id="confirm-password"
                placeholder="********"
                onChange={onChange}
                values={values[RegisterFormKeys.ConfirmPassword]}
                required
                />

                <input 
                className="btn submit" 
                type="submit" 
                value="Register"
                />

                <p className="error-msg">
                    <span>{errMessage.message}</span>
                </p>

                <p className="field">
                    <span>If you already have profile click <a href="/login">here</a></span>
                </p>
            </div>
        </form>
    </section>
    )
}