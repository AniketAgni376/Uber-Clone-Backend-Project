import React from 'react'


const RidePopUp = (props) => {
  return (
    <div>
       <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
        props.setRidePopupPanel(false)
        }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
        <h3 className='text-2xl font-semibold mb-5 '>New Ride Available for You!</h3>
        
        <div className='flex items-center justify-between p-3 bg-yellow-500 rounded-lg mt-4'>
            <div className='flex gap-3 items-center'>
                <img className='h-12 w-12 rounded-full object-cover' src="https://plus.unsplash.com/premium_photo-1681821679118-bb069eeb2d98?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""/>
                <h3 className='text-lg font-medium'>John Doe</h3>
            </div>
            <h5 className='text-lg font-semibold'>2.5km</h5>
        </div>
        <div className='flex justify-between items-center flex-col gap-2'>
          <div className='w-full mt-5'>
          <div className='flex gap-5 items-center p-3 border-b-2 border-gray-400'>
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>231/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>Super Marbel, Era</p>
            </div>
          </div>
          <div className='flex gap-5 items-center p-3 border-b-2 border-gray-400'>
          <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>496/2 -C</h3>
              <p className='text-sm -mt-1 text-gray-600'>Pandit Kheda</p>
            </div>
          </div>
          <div className='flex gap-5 items-center p-3 '>
          <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className='text-lg font-medium'>₹190.32</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash</p>
            </div>
          </div>
        </div>
        <button onClick={()=>{
         
        }} className='w-full mr-5 bg-green-600 text-white font-semibold mt-5 p-2 rounded-lg'>Confirm
        </button>

        <button onClick={()=>{
            props.setRidePopupPanel(false)
        }} className='w-full mr-5 bg-gray-300 text-gray-700 font-semibold mt-1 p-2 rounded-lg'>Decline
        </button>
    </div>
    </div>
  )
}

export default RidePopUp