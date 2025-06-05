import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules';
import axios from 'axios';
import Card from './card'

function latesttv() {

    const [tvshows, setTvShows] = useState([]);

    useEffect(() => {
        const getTvShows = async () => {
            const resp = await axios.get(`${import.meta.env.VITE_URL}tv/popular?api_key=${import.meta.env.VITE_API_KEY}&page=1`);
            setTvShows(resp.data);
        }

        getTvShows();

    }, [])

    return (
        <div id='latest-tv' className='flex flex-col my-5 w-full'>
            <div className='text-yellow-400 mt-5 text-[25px] w-[210px] font-bold mx-auto mb-10'>Latest Tv Shows <span className='block w-[105px] border-1 mx-auto'></span></div>
            <div className="w-full overflow-hidden px-5">
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
                    className="px-5"
                >
                    {tvshows.results?.map ((item, index) => (
                        <SwiperSlide key={index}>
                            <Card data={item} type={"tv"}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default latesttv
