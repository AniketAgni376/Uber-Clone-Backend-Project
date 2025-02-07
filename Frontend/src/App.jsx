import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './Components/Home'
import UserLogin from './Components/UserLogin'
import UserSignup from './Components/UserSignup'
import Captainlogin from './Components/Captainlogin'
import Captainsignup from './Components/CaptainSignup'



const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
       </Routes>
    </div>
  )
}

export default App