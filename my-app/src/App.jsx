import { useState } from 'react'
import { Routes , Route , useNavigate} from 'react-router-dom'


import {AuthProvider} from './contexts/authContext'
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
import Footer from './components/footer/Footer'
import StoryEdit from './components/edit-story/EditStory'


function App() {

  return (
    <AuthProvider>
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
      <Route path='/stories/:storyId/edit' element={<StoryEdit/>}/>
      <Route path="/logout" element={<Logout/>}/>
      </Routes>

      <Footer/>
      </div>
      
       
      </AuthProvider>

    
  )
}

export default App
