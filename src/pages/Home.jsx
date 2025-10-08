import React from 'react';
import appleStore from '../assets/apple-store.png'
import playStore from '../assets/play-store.png'
import heroBg from '../assets/hero.png'
const Home = () => {
    return (
        <div className='text-center py-20'>
            <h1 className='text-6xl font-bold'>We Build <br />
                <span className='bg-clip-text bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-transparent'> Productive </span> Apps</h1>

            <p className='text-[#627382] my-4 text-center'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more <br />exciting Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className=" flex items-center justify-center space-x-2">
                <button className="btn"> <img src={playStore} className='w-[20px]' alt="" />Google Play</button>
                <button className="btn"> <img className='w-[20px]' src={appleStore} alt="" /> App Store</button>
            </div>
            <div className="flex items-center justify-center mt-10">
                <img src={heroBg} alt="" />
            </div>

            <div className=""></div>

        </div>
    );
};

export default Home;