import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Genres from './genres';
import Watchlist from './watchlist';
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';
import { ImSpinner2 } from 'react-icons/im';

function Hero() {
    const [movieslist, setMoviesList] = useState([]);
    const [currentmovie, setCurrentMovie] = useState(0);
    const [bgLoaded, setBgLoaded] = useState(false);

    const nextSlide = () => {
        if (currentmovie < movieslist.length - 1) {
            setBgLoaded(false);
            setCurrentMovie(currentmovie + 1);
        }
    };

    const prevSlide = () => {
        if (currentmovie > 0) {
            setBgLoaded(false);
            setCurrentMovie(currentmovie - 1);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`${import.meta.env.VITE_URL}trending/all/day?api_key=${import.meta.env.VITE_API_KEY}`);
                setMoviesList(resp.data.results);
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const imageUrl = `${import.meta.env.VITE_IMAGE_URL}${movieslist[currentmovie]?.backdrop_path}`;
        if (!imageUrl) return;

        const img = new Image();
        img.src = imageUrl;
        img.onload = () => setBgLoaded(true);
    }, [currentmovie, movieslist]);

    const backgroundImage = `${import.meta.env.VITE_IMAGE_URL}${movieslist[currentmovie]?.backdrop_path}`;

    return (
        <div id='home' className='relative w-full h-screen overflow-hidden'>
            <div
                className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ${bgLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            {!bgLoaded && (
                <div className="absolute inset-0 bg-black flex items-center justify-center z-10">
                    <ImSpinner2 className="text-white animate-spin text-4xl" />
                </div>
            )}

            {bgLoaded && (
                <div className="relative z-20 flex flex-col w-full h-full text-white p-5">
                    <div className='text-[30px] mt-30 ml-2 font-bold sm:ml-10 sm:mt-40 sm:text-[50px]'>
                        {movieslist[currentmovie]?.original_title || movieslist[currentmovie]?.original_name || movieslist[currentmovie]?.title || movieslist[currentmovie]?.name}
                    </div>

                    <div className='flex mb-3'>
                        {movieslist.length > 0 && <Genres g_id={movieslist[currentmovie]?.genre_ids} />}
                    </div>

                    <div className='text-[15px] w-65 md:w-100 ml-2 sm:ml-10 text-justify'>
                        {movieslist[currentmovie]?.overview}
                    </div>

                    <div className='flex mb-3 mt-3 ml-2 sm:ml-10 text-[20px] sm:text-[30px] font-bold'>
                        Where to watch?
                    </div>

                    <div className='flex mb-3'>
                        {movieslist.length > 0 && <Watchlist m_id={movieslist[currentmovie]?.id} media_type = { movieslist[currentmovie]?.media_type } />}
                    </div>

                    <div className='flex flex-row justify-end mt-auto mb-5'>
                        <button className='flex items-center justify-center text-white w-10 h-10 border-1 mr-3 rounded-full hover:text-yellow-400 hover:cursor-pointer' onClick={prevSlide}><FiArrowLeft /></button>
                        <button className='flex items-center justify-center text-white w-10 h-10 border-1 rounded-full hover:text-yellow-400 hover:cursor-pointer' onClick={nextSlide}><FiArrowRight /></button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
