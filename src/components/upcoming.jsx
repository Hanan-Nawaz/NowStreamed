import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import axios from 'axios'
import Card from './card'

function upcoming() {

    const [upcomingdata, setUpcomingData] = useState([])

    useEffect(() => {
        const getData = async () => {
            const resp = await axios.get(`${import.meta.env.VITE_URL}movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`)
            setUpcomingData(resp.data)
        }

        getData();
    }, [])

    return (
        <div id='upcoming' className='flex flex-col w-full '>
            <div className='text-yellow-400 my-4 text-[25px] mx-auto font-bold w-[140px]'>Upcoming <span className='mx-auto w-[70px] block border-1'></span></div>

            <div className='w-full mt-4 px-5'>

            
            <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                }}
                className='px-5'
            >
                {
                    upcomingdata.results?.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Card data = {item} type={"movie"}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
            </div>
        </div>
    )
}

export default upcoming
