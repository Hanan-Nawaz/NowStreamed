import React from 'react'
import { FiArrowLeft } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import Card from './card'

function searchresults() {

    const location = useLocation();
    const data = location.state?.data?.results || [];
    return (
    <div className='flex w-full flex-col my-7'>
        <div className='flex text-white ml-3 items-center hover:text-yellow-400 hover:cursor-pointer' onClick={() => window.location.href = '/'}><FiArrowLeft /> Back</div>
      <div className='w-[200px] mx-auto text-yellow-400 text-[25px] font-bold'>Search Results <span className='mx-auto block w-[100px] border-1'></span></div>
      <div className='mt-7 px-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        
        {data.map((item, index) => (

            <Card key={index} data = {item} type = {item.media_type}/>
            
        )
        )}
      </div>
    </div>
  )
}

export default searchresults
