import React, { useEffect, useState } from 'react';
import { url_links } from '../assets/constants/index';
import { FaSearch } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';
import SearchBar from './search'
import img from '../assets/images/logo.png'

function navbar() {

    const [isshow, setIsShow] = useState(false)
    const [showserach, setShowSearch] = useState(false)

    const openNavBar = () => {
        setIsShow(!isshow);
    }


    return (
        <>
            <div className='flex flex-row py-3 px-5 bg-transparent z-30 fixed w-full top-0 left-0'>
                <div className='flex-2 flex flex-row items-center text-[25px] font-bold text-white'>
                    <img src={img}  className='w-5 h-5 mr-2'/>
                    <div>
                        <span className='text-yellow-400'>Now</span> Streamed
                        </div>
                </div>
                <ul className='flex-4 justify-evenly items-center hidden md:flex'>
                    {
                        url_links.map((item, index) => (
                            <li key={index}>
                                <a className='hover:text-yellow-400 text-white' href={item.link} >{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='flex-1 hidden md:flex items-center justify-end'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer w-10 text-white' onClick={() => setShowSearch(!showserach)}><FaSearch /></button>
                </div>
                <div className='flex flex-1 md:hidden items-center justify-end'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer text-[20px] text-white' onClick={openNavBar}>
                        {isshow ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
            {isshow && 
            <div className='flex flex-col items-center justify-center bg-transparent mt-15 z-30 fixed w-full backdrop-blur-md'>
                <ul className='flex flex-col justify-evenly items-center flex md:hidden'>
                    {
                        url_links.map((item, index) => (
                            <li key={index} className='my-2'>
                                <a className='hover:text-yellow-400 text-white' href={item.link} onClick={() => setIsShow(false)}>{item.name}</a>
                            </li>
                        ))
                    }
                </ul>
                <div className='md:hidden items-center my-2'>
                    <button className='hover:text-yellow-400 hover:cursor-pointer text-white' onClick={() => setShowSearch(!showserach)}><FaSearch /></button>
                </div>
            </div>
            }

            {showserach && <SearchBar onClose={setShowSearch} />}
        </>
    )
}

export default navbar;
