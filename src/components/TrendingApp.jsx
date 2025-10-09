import React from 'react';
import Container from './Container';
import AppsCard from './AppsCard';
import { Link } from 'react-router';

const TrendingApp = ({ appsData }) => {

    const trendingData = appsData.slice(2, 12)


    return (
        <Container>
            <div className='text-center mt-20'>
                <div className=" space-y-2 pb-20">
                    <h1 className='text-5xl  font-bold'>Trending Apps</h1>
                    <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 place-items-center gap-3">
                    {
                        trendingData.map(app => <AppsCard key={app.id} app={app}></AppsCard>)
                    }


                </div>

                <button className="text-center items-center mt-10 mb-20">
                    <Link to='/apps' className=" px-10 py-3  rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  flex">Show All </Link>

                </button>

            </div >
        </Container>
    );
};

export default TrendingApp;