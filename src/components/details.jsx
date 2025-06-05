import axios from "axios";
import React, { useEffect, useState } from "react";
import { ImSpinner2 } from 'react-icons/im'
import { FiArrowLeft } from 'react-icons/fi'
import { useParams } from "react-router-dom";
import Genres from './genres'
import Watchlist from './watchlist'
import MainEvents from './main_events'

function details() {
    const { id, type } = useParams();
    const [movie,setMovie] = useState([])
    const [bgLoaded,setBgLoaded] = useState(false)

useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get(`${import.meta.env.VITE_URL}${type}/${id}?api_key=${import.meta.env.VITE_API_KEY}`);
                setMovie(resp.data);    
            } catch (e) {
                console.log(e);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const imageUrl = `${import.meta.env.VITE_IMAGE_URL}${movie?.backdrop_path}`;
        if (!imageUrl) return;
        const img = new Image();

        img.src = imageUrl;
        img.onload = () => setBgLoaded(true);
    }, [movie]);

    const backgroundImage = `${import.meta.env.VITE_IMAGE_URL}${movie?.backdrop_path}`;

    return (
        <div className='relative w-full h-full overflow-hidden'>
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
                    <div className='flex text-white ml-3 items-center hover:text-yellow-400 hover:cursor-pointer' onClick={() => window.location.href = '/'}><FiArrowLeft /> Back</div>
                    
                    <div className='text-[30px] ml-2 font-bold sm:ml-5 mt-5 sm:text-[50px]'>
                        {movie?.original_title || movie?.original_name || movie?.title || movie?.name}
                    </div>

                    <div className='flex mb-3'>
                        {<Genres g_id={movie.genres.map(genre => genre.id)} />}
                    </div>

                    <div className='text-[15px] w-65 md:w-100 ml-2 sm:ml-10 text-justify'>
                        {movie?.overview.slice(0, 150)}
                    </div>

                    <div className='flex mb-3 mt-3 ml-2 sm:ml-10 text-[20px] sm:text-[30px] font-bold'>
                        Where to watch?
                    </div>

                    <div className='flex mb-4'>
                        {<Watchlist m_id={movie.id} media_type = { type } />}
                    </div>

                     <div className='flex mb-3 mt-3 ml-2 sm:ml-10 text-[20px] sm:text-[30px] font-bold'>
                        Videos
                    </div>

                     <div className='flex mb-3 w-150'>
                        {<MainEvents id={movie.id} type = { type } />}
                    </div>
                   
                </div>
            )}
        </div>
    );
}

export default details;
