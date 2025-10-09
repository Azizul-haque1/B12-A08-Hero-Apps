
import { Download } from 'lucide-react';
import React from 'react';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
// import demo from '../assets/demo-app (1).webp'
import { Link } from 'react-router';

const AppsCard = ({ app }) => {
    const { title, id, image } = app

    return (
        <Link to={`/apps/${id}`}>
            <div className="p-4 w-[320px]  bg-white shadow-sm hover:scale-105 duration-200  hover:shadow-xl ease-out">
                <div className=''>
                    <div className=" rounded-lg p-10 shadow !bg-white">
                        <img src={image} className='object-cover rounded-lg w-full' alt="" />

                    </div>
                    <h1 className='text-left text-xl font-medium my-1'>{title}</h1>
                    <div className=" flex justify-between">
                        <span className='btn'>
                            <img className='w-3' src={downloadIcon} alt="" />
                            9M</span>
                        <span className='btn'>
                            <img className='w-3' src={ratingIcon} alt="" />
                            9M</span>

                    </div>



                </div>
            </div></Link>
    );
};



export default AppsCard;