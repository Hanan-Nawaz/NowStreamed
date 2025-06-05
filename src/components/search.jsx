import axios from 'axios';
import React, { useRef } from 'react'
import { FiX, FiArrowRight } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';

function search({onClose}) {

  const ref_input = useRef();
  const navigate = useNavigate();

  const searchApi = async (e) => {
    e.preventDefault();
    const name = ref_input.current.value;
    const resp = await axios.get(`${import.meta.env.VITE_URL}search/multi?api_key=${import.meta.env.VITE_API_KEY}&query=${name}`)
    navigate ('/search-results', { state: { data : resp.data} })
  }

  return (
    <div className='fixed flex h-screen w-screen top-20 justify-center z-50'>
        <form>
        <div className='flex flex-row w-75 sm:w-100 h-15 items-center justify-center px-2 bg-white rounded-full border-1 border-yellow-400'>
            <input ref={ref_input} className='flex-grow h-15 px-2 focus:border-0 rounded-full' required placeholder='enter the name here..'>
      </input>
              <button onClick={searchApi} className='flex items-center justify-center w-10 h-10 bg-yellow-400 text-white rounded-full hover:bg-white hover:border-yellow-400 hover:text-yellow-400 hover:border-1 hover:cursor-pointer'><FiArrowRight /></button>
        </div>
        </form>

        <button className='text-white text-[20px] font-bold ml-2 h-5 border-1 rounded-full border-white hover:text-red-500 hover:border-red-500 hover:cursor-pointer' onClick={() => onClose(false)}><FiX /></button>
    </div>
  )
}

export default search
