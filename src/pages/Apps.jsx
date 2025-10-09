
import React from 'react';
import Container from '../components/Container';
import AppsCard from '../components/AppsCard';

import useApps from '../hooks/useApps';
import Loading from '../components/Loading';


const Apps = () => {

    const [search, setSearch] = ('')
    const { appsData, loading } = useApps()

    if (loading) return <Loading />



    const actualValue = search
    const foundApps = actualValue ? appsData.filter(app => app.title.toLowerCase().includes(actualValue)) : appsData;
    // search.to

    return (

        <div>
            <Container>
                <div className='text-center py-20'>
                    <div className=" space-y-2 pb-20">
                        <h1 className='text-5xl font-bold'>Our All Applications</h1>
                        <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
                    </div>
                    <div className="flex items-center justify-between mb-5 px-4">
                        <h3 className='text-2xl'><span>({foundApps.length})</span>Apps Found</h3>
                        <label className="input">
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input value={search} onChange={(e) => setSearch(e.target.value.trim().toLowerCase())} type="search" required placeholder="Search" />
                        </label>

                    </div>

                    <div className=" grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 place-items-center space-y-8">
                        {
                            foundApps.map(app =>
                                <AppsCard key={app.id} app={app}></AppsCard>)

                        }


                    </div>

                    <button className="text-center items-center mt-10 mb-20">
                        {/* <Link to='/apps' className=" px-10 py-3  rounded-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white  flex">Show All </Link> */}

                    </button>

                </div >
            </Container>


        </div>
    );
};

export default Apps;