import { useState } from 'react'
import { Routes , Route , useNavigate} from 'react-router-dom'

import * as authService from "./services/authService"
import AuthContext from "./contexts/authContext"
import Path from "./paths"




import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import AddStory from './components/add-story/AddStory'
import StoryList from './components/story-list/StoryList'
import StoryDetails from './components/story-details/StoryDetails'
import Logout from './components/logout/Logout'




function App() {
  const navigate = useNavigate();
  const [auth, setAuth] = useState(()=>{
    localStorage.removeItem('accessToken')
    return{};
  })

  const loginSubmitHandler = async (values) =>{
    const result = await authService.login(values.email, values.password)
    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)
  }


  const registerSubmitHandler = async (values) =>{
    const result = await authService.register(values.email, values.password)

    setAuth(result)
    localStorage.setItem('accessToken', result.accessToken)
    navigate(Path.Home)

  }

  const logoutHandler = ()=>{
    setAuth({})
    localStorage.removeItem('accessToken')
    navigate(Path.Home)
  }

  const values ={
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    username: auth.username|| auth.email ,
    email: auth.email,
    isAuthenticated: !!auth.accessToken
  }


  return (
    <AuthContext.Provider value={values}>
      <div>
      <Header/>

      <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/about' element= {<About/>} />
      <Route path='/login' element= {<Login/>} />
      <Route path='/register' element= {<Register/>} />
      <Route path='/stories' element={<StoryList/>}/>
      <Route path='/stories/add' element={<AddStory/>}/>
      <Route path='/stories/:storyId' element={<StoryDetails/>}/>
      <Route path="/logout" element={<Logout/>}/>
      </Routes>
      </div>
       
      </AuthContext.Provider>

    
  )
}

export default App
