import React from 'react';
import { Routes,Route } from 'react-router-dom';
import HomeNavbar from './components/Home';
import LoginForm from './components/login';
import After from './components/After';
import SignUp from './components/SignUp';
import Services from './components/Services';
import About from './components/About';
// import Footer from './components/Footer';
function App() {
  return (

    <div>
    <Routes>

      <Route path="/" element={<HomeNavbar/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route> 
      <Route path="/login" element={<LoginForm/>}></Route> 
      <Route path='/after' element={<After/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      {/* <Footer /> */}


    </Routes>

      
     
     
    </div>


  )
}

export default App;
