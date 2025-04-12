import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className="h-screen">
    <Link to='/home' className="fixed right-5 top-2 w-10 bg-white items-center flex justify-center rounded-full">
    <i className="text-lg font-medium ri-home-smile-line"></i>
    </Link>
    <div className="h-1/2">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
    </div>

    <div className='h-1/2 p-4'>
    <div className="flex justify-between items-center ">
      <img
          className="h-12"
          src="https://mudaston.github.io/Uber/img/uber_car.png"
          alt=""
        />
        <div className='text-right'>
          <h2 className='text-lg font-medium'>Aniket</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>UP32 WE 3323</h4>
          <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
        </div>
      </div>
      

      <div className="flex justify-between items-center flex-col gap-2">
                <div className="w-full mt-5">
          <div className="flex gap-5 items-center p-3 border-b-2 border-gray-400">
            <i className="text-lg ri-map-pin-user-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Super Marbel</h3>
              <p className="text-sm -mt-1 text-gray-600">
                Uttar Pradesh 226003
              </p>
            </div>
          </div>

          <div className="flex gap-5 items-center p-3 ">
            <i className="text-lg ri-currency-line"></i>
            <div>
              <h3 className="text-lg font-medium">₹190.32</h3>
              <p className="text-sm -mt-1 text-gray-600">Cash</p>
            </div>
          </div>
        </div>
      </div>
      <button className='w-full mr-5 bg-green-600 text-white font-semibold mt-5 p-2 rounded-lg'>Make a Payment</button>  
    </div>
    </div>
  )
}

export default Riding