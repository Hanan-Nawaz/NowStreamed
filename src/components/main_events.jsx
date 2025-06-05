import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import Card from './card_event'

function MainEvents({id, type}) {
    const [data, setData] = useState([])

    useEffect(() => {
        const getImages = async () => {
            const resp = await axios.get(`${import.meta.env.VITE_URL}${type}/${id}/videos?api_key=${import.meta.env.VITE_API_KEY}`)
            setData(resp.data.results)
        }

        getImages()
    }, [])

  return (
    <div className='w-full px-5'>
      <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={20}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        1024: { slidesPerView: 2 },
                    }}
                    className="px-5"
                >
                    {data.map ((item, index) => (
                        <SwiperSlide key={index}>
                            <Card data={item}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
    </div>
  )
}

export default MainEvents
