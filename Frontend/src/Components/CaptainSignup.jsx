import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Captainsignup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [userData, setUserData] = useState('')
  
  
    const submitHandler = (e)=>{
      e.preventDefault()
      
      setUserData({
        fullName:{      
          firstName:firstName,
          lastName:lastName
        },
        email:email,
        password:password
      })
      
      
      // console.log(userData)
  
  
  
      setEmail('')
      setPassword('')
      setFirstName('')
      setLastName('')
  
     
    }
  return (
    <div>
          <div className='p-7 flex flex-col justify-between h-screen'>
       <div>
       <Link to="/">
      <img
        className="w-16 mb-10"
        src="https://www.svgrepo.com/show/505031/uber-driver.svg"
        alt="Uber Driver Logo"
      />
    </Link>

      <form onSubmit={(e)=>{
        submitHandler(e)
        }}>

        <h3 className="text-lg w-full font-medium mb-2">What's our Captain's name</h3>
          
          <div className='flex gap-4 mb-7'>
          <input 
        required
        className='bg-[#eeeeee] w-1/2  rounded px-4 py-2 border text-lg placeholder:text-base' 
        type="text" 
        placeholder='First name' 
        value={firstName}
        onChange={(e)=>{
          setFirstName(e.target.value)
        }}
        />
        
        <input 
        required
        
        className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-lg placeholder:text-base' 
        type="text" 
        placeholder='Last name' 
        value={lastName}
        onChange={(e)=>{
          setLastName(e.target.value)
        }}
        />

          </div>
        
        
        <h3 className="text-lg font-medium mb-2">What's our Captain's email</h3>
        <input 
        required
        
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-base placeholder:text-sm' 
        type="email" 
        placeholder='email@example.com' 
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        
        <h3 className="text-base font-medium mb-2">What's your password</h3>
        <input 
        required 
        
        className='bg-[#eeeeee] mb-2 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
        type="password" 
        placeholder="your password" 
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        
        <button
        className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2  w-full text-base placeholder:text-sm'
        >Create Account</button>
        <p className="text-center">Already have a account? <Link to='/captain-login' className="text-blue-600">Login here?</Link></p>
      </form>
       </div>

       <div>
      <p className='text-[10px] leading-tight text-xs'><b>*</b>  This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of service apply.</span></p> 
    </div>
       
    </div>
    </div>
  )
}

export default Captainsignup