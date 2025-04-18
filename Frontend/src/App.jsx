import React, { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Start from './Pages/Start'
import UserLogin from './Pages/UserLogin'
import UserSignup from './Pages/UserSignup'
import Captainlogin from './Pages/Captainlogin'
import Captainsignup from './Pages/CaptainSignup'
import Home from './Pages/Home'
import UserProtectWrapper from './Pages/UserProtectWrapper'
import UserLogout from './Pages/UserLogout'
import CaptainHome from './Pages/CaptainHome'
import CaptainProtectWrapper from './Pages/CaptainProtectWrapper'
import Riding from './Pages/Riding'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<Captainsignup />} />
        <Route path="/riding" element={<Riding />} />
        <Route path="/home" element={
        
        <UserProtectWrapper>
              <Home />
          </UserProtectWrapper>
          } />

          <Route path='/user/logout' element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
        } />

        <Route path='/captain-home' element={
          <CaptainProtectWrapper>
          <CaptainHome/>
          </CaptainProtectWrapper>
        } />  
       </Routes>
    </div>
  )
}

export default App