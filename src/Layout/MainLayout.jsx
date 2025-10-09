import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className=''>
            <Navbar />
            <main className="bg-[#F5F5F5] min-h-screen">
                <Outlet />
            </main>
            <Footer />

        </div>
    );
};

export default MainLayout;