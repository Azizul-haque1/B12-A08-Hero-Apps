import React from 'react';

import ratingIcon from '../assets/icon-ratings.png'
import { Download } from 'lucide-react';

const InstalledCard = ({ app, handleUninstall }) => {
    const { id, title, image, downloads, ratingAvg, size } = app

    return (
        <div className=' flex p-4  items-center justify-between w-full bg-white rounded-lg'>
            <div className="flex items-center">
                <div className="">
                    <img src={image} className='w-[80px] rounded-lg mr-4' alt="" />
                </div>
                <div className="flex flex-col h-full ">
                    <h1 className='text-left font-bold text-xl'>{title}</h1>
                    <div className="flex gap-3 items-center ">
                        <figure className='flex !text-[#00D390] items-center space-x-5'><Download size={16} className='text-[10px] mr-1' />{downloads}</figure>
                        <figure className='flex items-center text-[#FF8811]'><img src={ratingIcon} className='w-4 h-4 mr-1' alt="" />{ratingAvg}</figure>
                        <div className="text-[#627382]">{size}MB</div>
                    </div>
                </div>
            </div>
            <button onClick={() => handleUninstall(id)} className="btn bg-[#00D390] hover:bg-white hover:border-[#00D390] hover:text-[#00D390] text-white ">Uninstall</button>

        </div>
    );
};

export default InstalledCard;