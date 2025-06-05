import React from 'react'
import { useNavigate } from 'react-router-dom'

function card({ data, type }) {

  const navigate = useNavigate();

  const movieClick = (e, id) => {
    e.preventDefault();
    navigate(`/movie-detail/${id}/${type}`)
  }

  return (
    <>
      {data.poster_path &&
        <div className='flex flex-col p-1 m-2 border-1 shadow hover:border-yellow-400 hover:cursor-pointer border-gray-200 w-full h-120' onClick={(e) => movieClick(e, data.id)}>
          <img className='w-full h-full object-cover' src={`${import.meta.env.VITE_IMAGE_URL}${data.poster_path}`} alt={data.title} />
        </div>
      }
    </>
  )
}

export default card
