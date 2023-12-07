import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../contexts/authContext"


const Header = () =>{

    const {isAuthenticated, email } = useContext(AuthContext)



    return(
        <header>
        <div className="logo">
            <h1><Link className="home" to="/">Travel Stories</Link></h1>
        </div>

        <nav>
        <ul>

        <Link to="/stories" className="nav-button">Stories</Link>

          {isAuthenticated && (
            <div id="user">
            <Link to="/stories/add" className="nav-button">Add story</Link>
            <Link to="/logout" className="nav-button">Logout</Link>
            <Link to="/myprofile" className="nav-button">My profile, {email}</Link>
            </div>
          )}

        
 
          {!isAuthenticated && (
            <div id= "guests">
            <Link to="/login" className="nav-button">Login</Link>
             <Link to="/register" className="nav-button">Register</Link>
            </div>
            
          )}
           
           
            
            
            
        </ul>
       </nav>
       
       </header>

    )
}

export default Header