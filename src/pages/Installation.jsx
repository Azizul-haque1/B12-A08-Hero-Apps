import React, { useEffect, useState } from 'react';
import Container from '../components/Container'
import InstalledCard from '../components/InstalledCard';
import useApps from '../hooks/useApps';
import Loading from '../components/Loading';



const Installation = () => {
    const [installed, setInstalled] = useState([])
    const { loading } = useApps()



    useEffect(() => {
        const saveApps = JSON.parse(localStorage.getItem('installedApps'))
        if (saveApps) setInstalled(saveApps)
    }, []);

    if (loading) return <Loading />


    const handleUninstall = (id) => {
        const installedAppsList = JSON.parse(localStorage.getItem('installedApps'))
        const updateAppList = installedAppsList.filter(app => app.id !== id)
        setInstalled(updateAppList)
        localStorage.setItem('installedApps', JSON.stringify(updateAppList))
        console.log(id);
    }

    return (
        <div>


            <Container>
                <div className='text-center py-20'>
                    <div className=" space-y-2 pb-20">
                        <h1 className='text-5xl font-bold'>Your Installed Apps</h1>
                        <p className='text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
                    </div>
                    <div className="flex items-center justify-between mb-5 px-4">
                        <h3 className='text-2xl'><span>2</span> Apps Found</h3>


                    </div>

                    <div className=" grid grid-cols-1  place-items-center gap-3">
                        {
                            installed.length ? installed.map(app => <InstalledCard handleUninstall={handleUninstall} app={app}></InstalledCard>)
                                : <h1>hello</h1>
                        }


                    </div>

                </div >
            </Container >


        </div >
    );
};

export default Installation;