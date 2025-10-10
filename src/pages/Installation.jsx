import React, { useEffect, useState } from 'react';
import Container from '../components/Container'
import InstalledCard from '../components/InstalledCard';
import useApps from '../hooks/useApps';
import Loading from '../components/Loading';
import { sortItems } from '../utilites/SortItem';
import { toast, ToastContainer } from 'react-toastify';



const Installation = () => {
    const [installed, setInstalled] = useState([])
    const [sortItem, setSortItem] = useState('none')
    const { loading } = useApps()

    const sortedApps = sortItems(sortItem, installed)


    useEffect(() => {
        const saveApps = JSON.parse(localStorage.getItem('installedApps'))
        if (saveApps) setInstalled(saveApps)
    }, []);

    if (loading) return <Loading />

    const notify = (title) => toast.success(`${title} Uninstalled from your Device`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        // progress: undefined,
        theme: "light",
    });

    const handleUninstall = (id, title) => {
        const installedAppsList = JSON.parse(localStorage.getItem('installedApps'))
        const updateAppList = installedAppsList.filter(app => app.id !== id)
        setInstalled(updateAppList)
        localStorage.setItem('installedApps', JSON.stringify(updateAppList))

        notify(title)



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
                        <h3 className='text-2xl'><span>{sortedApps.length}</span> Apps Found</h3>
                        <select onChange={e => setSortItem(e.target.value)} defaultValue="Pick a color " className="select w-[150px] ">
                            <option value='none'>Sort By Size</option>
                            <option value='ascending'>Low-High</option>
                            <option value='descending'>High-Low</option>

                        </select>



                    </div>

                    <div className=" grid grid-cols-1  place-items-center gap-3">
                        {
                            sortedApps.length ? sortedApps.map(app => <InstalledCard key={app.id} handleUninstall={handleUninstall} app={app}></InstalledCard>)
                                : <div className='text-5xl text-gray-400 pt-20'> Your installed apps list is empty. </div>
                        }

                        <ToastContainer />



                    </div>

                </div >
            </Container >


        </div >
    );
};

export default Installation;