import React from 'react'
import {Routes,Route} from 'react-router-dom'
import User from './components/User'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Navbar from './components/navbar'
import States from './hooks/States'
const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" Component={Home}/>
       <Route path="/about" Component={About}/>
       <Route path="/contact" Component={Contact}/>
       <Route path="/services" Component={Services}/>
       <Route path="/states" Component={States}/>
       </Routes>
    <User name="sivaselvan" depart="IT"  skills={['HTML','CSS','JS']}/>
   {/* <Person name="Raja" depart="CSE" /> */}
    </>
  )
}

export default App