import React from 'react';
import Container from './Container';

const TrustedSection = () => {
    return (
        <div>
            <div className=" py-20 text-center bg-gradient-to-br text-white from-[#632EE3] to-[#9F62F2]">
                <h1 className='pb-10 text-5xl font-bold '>Trusted by Millions, Built for You</h1>

                <div className="flex items-center justify-evenly space-x-3  ">
                    <div className=" space-y-2">
                        <p className='text-[#ffffff80]'>Total Downloads</p>
                        <h3 className='text-6xl font-bold'>29.6M</h3>
                        <p className='text-[#ffffff80]'>21% more than last month</p>
                    </div>
                    <div className=" space-y-2">
                        <p className='text-[#ffffff80]'>Total Reviews</p>
                        <h3 className='text-6xl font-bold'>906K</h3>
                        <p className='text-[#ffffff80]'>46% more than last month</p>
                    </div>
                    <div className=" space-y-2">
                        <p className='text-[#ffffff80]'>Active Apps</p>
                        <h3 className='text-6xl font-bold'>132+</h3>
                        <p className='text-[#ffffff80]'>31 more will Launch</p>
                    </div>
                </div>


            </div>



        </div>
    );
};

export default TrustedSection;