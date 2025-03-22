import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props)

//  Sample array for location search
    const location = [
        'Krishna Nagar Metro Station Terminal-2, Lucknow' ,
        'Chowk Metro Station Terminal-1, Lucknow' ,
        'Thakurganj Metro Station Terminal-2, Lucknow' ,
        'Balaganj Metro Station Terminal-1, Lucknow' ,
        // Add more locations here...
 
    ]

  return (
    <div >
      {/* Sample Data */}
     
      {
        location.map(function(elem, idx){
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black items-center my-2 rounded-xl justify-start'>
          <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className='ri-map-pin-fill'></i></h2>
          <h4 className='font-medium' >{elem}</h4>
      </div>
        })
      }


    {/* <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black items-center my-2 rounded-xl justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium' >Chowk Metro Station, Terminal-1, Lucknow</h4>
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black items-center my-2 rounded-xl justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium' >Thakurganj Metro Station, Terminal-2, Lucknow</h4>
    </div>

    <div className='flex gap-4 border-2 p-3 border-gray-50 active:border-black items-center my-2 rounded-xl justify-start'>
        <h2 className='bg-[#eee] h-8 flex items-center justify-center w-10 rounded-full'><i className='ri-map-pin-fill'></i></h2>
        <h4 className='font-medium' >Balaganj Metro Station, Terminal-1, Lucknow</h4>
    </div> */}
      
    </div>
  )
}

export default LocationSearchPanel