import React from 'react'

const WaitingforDriverVisible = (props) => {
  return (
    <div>
      <h5
        className="p-1 text-center w-[93%] absolute top-0"
        onClick={() => {
          props.setVehiclePanel(false);
        }}
      >
        <i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i>
      </h5>
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
          <div className="flex gap-5 items-center p-3 border-b-2 border-gray-400">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">Tondan Marg, Lucknow</h3>
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
    </div>
  )
}

export default WaitingforDriverVisible