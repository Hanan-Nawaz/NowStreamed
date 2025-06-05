import React, { useEffect, useState } from 'react'
import Card from './card'
import axios from 'axios'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import '../assets/css/main.css'

function latestmovies() {

  const [datamovies, setData] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const resp = await axios.get(`${import.meta.env.VITE_URL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&page=1`);
      setData(resp.data);
    }

    getMovies();
  }, [])

  return (
    <div id='latest-movies' className='flex flex-col my-5 w-full mt-7'>
      <div className='w-[180px] text-yellow-400 text-[25px] font-bold mx-auto mb-10'>Latest Movies<span className='block mx-auto border-1 w-[90px]'></span></div>
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
    {datamovies.results?.map((item, index) => (
      <SwiperSlide key={index}>
        <Card data={item} type={"movie"}/>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  )
}

export default latestmovies;
