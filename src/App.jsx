import { useState } from 'react'
import Home from './Components/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Layout from './Components/Layout'
import SingleDoctorPage from './Components/SingleDoctorPage'
import Appointment from './Components/Appointment'
import About from './Components/About'
import FAQS from './Components/FAQS'
import Blogs from './Components/Blogs'
import './App.css'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Dashboard from './Doctor_Dashboard/Components/Component/Dashboard'
import Appointmentdash from './Doctor_Dashboard/Components/Component/Appointmentdash'
import DashLayout from './Doctor_Dashboard/Components/Component/Layout'
import Logindash from './Components/Logindash'

function App() {
 
  return (
    <>
      <BrowserRouter>
      <Routes>
      
      <Route path='/' element={<Layout/>}>
      
      <Route path='/' element={<Home/>}/>
      <Route path='/Home' index element={<Home/>}/>
      <Route path="/about us" element={<About/>} /> 
      <Route path="/faqs" element={<FAQS />} /> 
      <Route path="/blogs" element={<Blogs />} /> 

      <Route path="/doctor/:id" element={<SingleDoctorPage />} />  
      <Route path="/appointment/:id" element={<Appointment />} /> 
      <Route path='/'  element={<Signup/>}/>
      <Route path='/'  element={<Login/>}/>
      
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
     </Route>

     <Route path='/' element={<DashLayout/>}>
     <Route path="/admin-login" element={<Logindash />} />
     <Route path='/Dashboard' index element={<Dashboard/>}/>
     <Route path="/appointments" element={<Appointmentdash />} />
     
     </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
