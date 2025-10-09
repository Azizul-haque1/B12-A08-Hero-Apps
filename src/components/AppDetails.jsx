import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AppError from '../pages/ErrorPage/AppError';
import downloadIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import reviewIcon from '../assets/icon-review.png'
import useApps from '../hooks/useApps';
import Container from './Container';
import Loading from './Loading';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';
import { getStoredData, } from '../utilites/LocalStorage';


const AppDetails = () => {
    const [install, setInstall] = useState(false)
    const { appsData, loading } = useApps();
    const { id } = useParams();
    const convertedId = parseInt(id);


    const isId = appsData.map(app => app.id).includes(convertedId);
    const appFind = appsData.find(app => app.id === convertedId);

    useEffect(() => {
        // check if already installed
        const existingData = getStoredData()
        if (existingData) {
            const isFindId = existingData.some(app => app.id === convertedId)
            if (isFindId) setInstall(isFindId)
        }
    }, [convertedId])
    if (loading) return <Loading />
    const { title, image, companyName, ratings, ratingAvg, size, ratings: [{ name, count }] } = appFind;



    const handleInstall = isInstall => {
        setInstall(isInstall)
        const existingData = JSON.parse(localStorage.getItem('installedApps'))

        let update = []

        if (existingData) {
            const isExist = existingData.some(app => app.id == convertedId)
            if (isExist) return alert('already added')
            update = [...existingData, appFind]


        }
        else {
            update.push(appFind)
        }

        localStorage.setItem('installedApps', JSON.stringify(update))

    }

    return (

        < div >

            {
                isId ?

                    <Container>
                        <div  >

                            <div className=" flex py-20  space-x-10 border-b-2 pb-5 border-[#d9d9d9] ">
                                <div className='h-[350px] bg-white'>
                                    <img src={image} className='p-3 h-full  w-full object-cover' alt="" />
                                </div>
                                <div className="">
                                    <h2 className='text-4xl font-bold'>{title}</h2>
                                    <p className='text-[#627382] border-b-2 pb-5 border-[#d9d9d9]'>Developed by  <span className='text-gradient font-bold'>{companyName}</span> </p>
                                    <div className="">
                                        <div className="flex items-center space-x-6 py-10 ">
                                            <div className="text-left space-y-2 flex flex-col  ">
                                                <img className='w-10' src={downloadIcon} alt="" />
                                                <p className='text-[#9d9b9b]'>Downloads</p>
                                                <h3 className='text-3xl font-bold'>29.6M</h3>
                                            </div>
                                            <div className="text-left space-y-2 flex flex-col  ">
                                                <img className='w-10' src={ratingIcon} alt="" />
                                                <p className='text-[#9d9b9b]'>Average Ratings</p>
                                                <h3 className='text-3xl font-bold'>29.6M</h3>
                                            </div>
                                            <div className="text-left space-y-2 flex flex-col  ">
                                                <img className='w-10' src={reviewIcon} alt="" />
                                                <p className='text-[#9d9b9b]'>Downloads</p>
                                                <h3 className='text-3xl font-bold'>29.6M</h3>
                                            </div>

                                        </div>

                                    </div>

                                    <button onClick={() => handleInstall(true)} className="btn bg-[#00D390] disabled:bg-red-300 hover:bg-white hover:border-[#00D390] hover:text-[#00D390] text-white ">
                                        {
                                            `${install ? "Installed" : `Install Now (${size}MB) `}`

                                        }


                                    </button>

                                </div>

                            </div>


                            <div className="chart h-80">

                                <BarChart layout='vertical' width={600} height={300} data={ratings} >
                                    <XAxis type='number' axisLine={false} dataKey='count' />
                                    <YAxis axisLine={false} type='category' dataKey='name' />
                                    <Tooltip />
                                    <Bar dataKey="count" fill="#B37FEB" barSize={30}>

                                    </Bar>

                                </BarChart>

                            </div>
                        </div>

                    </Container >





                    :
                    <div className='flex flex-col items-center '>
                        <AppError />
                    </div >
            }

        </ div >





    );
};

export default AppDetails;