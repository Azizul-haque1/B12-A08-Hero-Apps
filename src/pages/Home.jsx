import React from 'react';

import TrustedSection from '../components/TrustedSection';
import Hero from '../components/Hero';
import TrendingApp from '../components/TrendingApp';
import AppsCard from '../components/AppsCard';
import { useLoaderData } from 'react-router';
import useApps from '../hooks/useApps';
import Loading from '../components/Loading';
const Home = () => {

    // const appsData = useLoaderData()
    const { appsData, loading } = useApps()
    if (loading) return <Loading />

    return (
        <>
            <Hero />
            <TrustedSection />
            <TrendingApp appsData={appsData} />

        </>
    );
};

export default Home;