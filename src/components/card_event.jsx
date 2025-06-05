import React from 'react'

function card_event({ data }) {

  return (
    <>
      {data.key &&
        <div className='flex flex-col p-1 m-2 border-1 shadow hover:border-yellow-400 hover:cursor-pointer border-gray-200 w-70 h-100'>
          <iframe
            width="100%"
            height="400"
            src={`https://www.youtube.com/embed/${data.key}`}
            title={data.name}
            allowFullScreen
          />        
        </div>
      }
    </>
  )
}

export default card_event
