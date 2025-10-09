import React from 'react';
import demoImage from '../assets/demo-app (2).webp';
import ratingIcon from '../assets/icon-ratings.png'
import { Download } from 'lucide-react';

const InstalledCard = ({ app, handleUninstall }) => {
    const { id } = app

    return (
        <div className=' flex p-4  items-center justify-between w-full bg-white rounded-lg'>
            <div className="flex items-center">
                <div className="">
                    <img src={demoImage} className='w-[80px] rounded-lg mr-4' alt="" />
                </div>
                <div className="flex flex-col h-full ">
                    <h1>Forest: Focus for Productivity</h1>
                    <div className="flex gap-3 items-center ">
                        <figure className='flex items-center space-x-3'><Download size={16} className='text-[10px] text-[#00D390]' />9M</figure>
                        <figure className='flex items-center'><img src={ratingIcon} className='w-4 h-4' alt="" />5</figure>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUninstall(id)} className="btn bg-[#00D390] hover:bg-white hover:border-[#00D390] hover:text-[#00D390] text-white ">Uninstall</button>

        </div>
    );
};

export default InstalledCard;