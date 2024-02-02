import React from 'react'
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Route,Routes} from 'react-router-dom';
import './App.css';
import Error from './component/Error';


import About from './component/About';
import Contact from './component/Contact';
import Login from './component/Login';
import Signup from './component/Signup';
// import {BrowserRouter} from 'react-router-dom';


const App = () => {
  return (
    <>
   <Navbar/>
   
      <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route  path="*" element={<Error/>}/>

        </Routes>

    </>
  )
}


export default App
