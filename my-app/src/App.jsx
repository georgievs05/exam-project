import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/About'
import Login from './components/login/Login'
import Register from './components/register/Register'
import AddStory from './components/add-story/AddStory'
import StoryList from './components/story-list/StoryList'




function App() {

  return (
    <>
        <Header/>

        <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/about' element= {<About/>} />
        <Route path='/login' element= {<Login/>} />
        <Route path='/register' element= {<Register/>} />
        <Route path='/stories' element={<StoryList/>}/>
        <Route path='/stories/add' element={<AddStory/>}/>
        </Routes>
   

    </>
  )
}

export default App
