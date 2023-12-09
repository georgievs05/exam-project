import { useContext } from "react";
import useForm from "../../hooks/useForm"
import AuthContext from "../../contexts/authContext";
import {Navigate, Link} from "react-router-dom"


const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
}


const Login = () =>{
  
  const{isAuthenticated}= useContext(AuthContext)
  if(isAuthenticated){
      return <Navigate to="/"/>
  }


  const {loginSubmitHandler,errMessage} = useContext(AuthContext)
  const {values, onChange, onSubmit} = useForm(loginSubmitHandler, {
      [LoginFormKeys.Email]: '',
      [LoginFormKeys.Password]: '',
  });



  return(
     <main className="login-container">
       <section className="login-section">
        <h2>Login to your profile</h2>
        <form id="login" onSubmit={onSubmit}>
            <label htmlFor="username">Email:</label>
            <input 
            type="email" 
            id="email" 
            name={LoginFormKeys.Email} 
            placeholder="stanimir@gmail.com"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
            required
            />

            <label htmlFor="password">Password:</label>
            <input 
            type="password"
            id="password" 
            name={LoginFormKeys.Password}
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
            placeholder="********"
            required
            />

            <button type="submit" className="login-button">Login</button>

            <p className="error-msg">
                    <span>{errMessage.message}</span>
                </p>
            <p className="field">
                    <span>If you don't have profile click <Link to="/register">here</Link></span>
                </p>
        </form>
       </section>
   </main>


  )


}

export default Login