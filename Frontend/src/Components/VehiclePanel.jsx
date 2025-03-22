import React from 'react'

const VehicllePanel = (props) => {
  return (
    <div>
         <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={()=>{
             props.setVehiclePanel(false)
           }}><i className='text-3xl text-gray-200 ri-arrow-down-wide-line'></i></h5>
           <h3 className='text-2xl font-semibold mb-3 '>Choose a Vehicle</h3>
            
            <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
              <img className='h-8' src="https://mudaston.github.io/Uber/img/uber_car.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg'>UberGo <span><i className='ri-user-3-fill'></i>4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹190.32</h2>
            </div>

            <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
              <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg'>UberAuto <span><i className='ri-user-3-fill'></i>3</span></h4>
              <h5 className='font-medium text-sm'>6 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹120</h2>
            </div>

            <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
              <img className='h-12' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
            <div className='w-1/2'>
              <h4 className='font-medium text-lg'>Moto <span><i className='ri-user-3-fill'></i>1</span></h4>
              <h5 className='font-medium text-sm'>9 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹60.22</h2>
            </div>
    </div>
  )
}

export default VehicllePanel