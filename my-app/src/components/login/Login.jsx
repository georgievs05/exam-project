const Login = () =>{
  return(
     <main className="login-container">
       <section className="login-section">
    <h2>Login to your profile</h2>
        <form action="#" method="POST">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required/>

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required/>

            <button type="submit" className="login-button">Login</button>

            <p className="field">
                    <span>If you don't have profile click <a href="/register">here</a></span>
                </p>
        </form>
       </section>
   </main>


  )


}

export default Login