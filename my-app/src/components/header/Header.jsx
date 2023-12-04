import { Link } from "react-router-dom"

const Header = () =>{
    return(
        <header>
        <div className="logo">
            <h1><Link className="home" to="/">Travel Stories</Link></h1>
        </div>

        <nav>
        <ul>

            <Link to="/stories" className="nav-button">Stories</Link>
            <Link to="/login" className="nav-button">Login</Link>
            <Link to="/register" className="nav-button">Register</Link>
            <Link to="/myprofile" className="nav-button">My profile</Link>
            <Link to="/stories/add" className="nav-button">Add story</Link>
            <Link to="/logout" className="nav-button">Logout</Link>
        </ul>
       </nav>
       
       </header>

    )
}

export default Header