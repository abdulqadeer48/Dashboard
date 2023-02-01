import React from 'react';
import {  Routes,Route } from 'react-router-dom';
import HomePage from './components/Home';
import LoginForm from './login';
import After from './After';
import SignUp from './components/SignUp';
function App() {
  return (

    <div>
      <Routes>

      <Route path="/" element={<SignUp/>}></Route>
      <Route path="/login" element={<LoginForm/>}></Route>
      <Route path='/after' element={<After/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      {/* <Route path='/homepage' element={<HomePage/>}></Route> */}

      </Routes>
      
     
     
    </div>


  )
}

export default App;
