import React, { useState } from 'react'
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';

const Home = () => {
  const[pickup, setPickup] = useState('')
  const[destination, setDestination] = useState('')
  const[panelOpen, setPanelOpen] = useState(false)
  const panelRef = useRef(null)


  const submitHandler = (e) => {
    e.preventDefault()
    }

 useGSAP(function(){
  if(panelOpen){
      gsap.to(panelRef.current,{
        height: "70%", 
        duration: 0.8, // Smooth transition duration
        ease: "back.out(1.5)", // Adds a smooth pop effect
        opacity: 1, // Ensures smooth fade-in
     })
    }else{
      gsap.to(panelRef.current,{
        height: "0%", 
        duration: 0.8,
        ease: "back.in(1.5)", // Reverse of back.out(1.5)
        opacity: 0, // Fade-out effect
      })
    }
 }, [panelOpen])
    
  return (
    <div>
        <img className='w-16 absolute left-5 top-5' src="https://www.freepnglogos.com/uploads/uber-logo-transparent-3.png" alt="" srcSet="" />
    <div className='h-screen w-screen'>
      {/* image for temp map */}
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" srcSet="" />
    </div>
         <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
         <div className='h-[30%] p-5 bg-white relative'>
         <h4 className='text-2xl font-semibold'>Find a trip</h4>
         <form onSubmit={(e)=>{
            submitHandler(e)
         }}>
          <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full"></div>
           <input
           onClick={()=>{
              setPanelOpen(true)
           }}
           value={pickup}
           onChange={(e) => {
              setPickup(e.target.value)
            }} 
           className='bg-[#eee] px-25 py-2 text-lg rounded-lg mt-5 w-full' 
           type="text" 
           placeholder="Add a pick-up location" 
           />
           
           <input 
           onClick={()=>{
              setPanelOpen(true)
           }}
            value={destination}
            onChange={(e) => {
              setDestination(e.target.value)
            }} 
           className='bg-[#eee] px-25 py-2 text-lg rounded-lg mt-3 w-full' 
           type="text" 
           placeholder="Add your drop off location" 
           />
         </form>
         </div>
                     <div ref={panelRef} className='h-0 bg-red-700 '>

                    </div>
              </div>
         </div>
  )
}

export default Home