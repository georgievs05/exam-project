import { useState } from 'react'
import { Routes , Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import './styles.css'




function App() {

  return (
    <>
        <Header/>

        <Routes>
        <Route path='/' element= {<Home/>} />
        </Routes>
   

    </>
  )
}

export default App
