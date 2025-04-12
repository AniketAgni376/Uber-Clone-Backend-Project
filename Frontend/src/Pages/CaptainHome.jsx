import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../Components/CaptainDetails'
import RidePopUp from '../Components/RidePopUp'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import _gsap from 'gsap/gsap-core'

const CaptainHome = () => {
   
  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const ridePopupPanelRef = useRef(null);


  useGSAP(
    function () {
      if (ridePopupPanel) {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(ridePopupPanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },[ridePopupPanel]
  );

  return (
    <div className="h-screen">
    <div className='fixed p-6 w-screen top-0 flex items-center justify-between'>
      <img className='w-16' src="https://www.freepnglogos.com/uploads/uber-logo-transparent-3.png" alt=""/>
    <Link to='/captain-login' className="h-10 w-10 bg-white items-center flex justify-center rounded-full">
    <i className="text-lg font-medium ri-logout-box-r-line"></i>
    </Link>
    </div>

    <div className="h-1/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
    </div>

    <div className='h-2/5 p-6'>
      <CaptainDetails />
         </div> 
        
         <div ref={ridePopupPanelRef} className="fixed z-10 w-full translate-y-full bottom-0 px-3 py-10 pt-12 bg-white">
          <RidePopUp setRidePopupPanel={setRidePopupPanel} />
       </div>
     </div>
  )
}




export default CaptainHome