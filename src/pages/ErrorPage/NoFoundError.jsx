import React from 'react';
import noFoundImage from '../../assets/error-404.png'
import Container from '../../components/Container';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { Link } from 'react-router';

const NoFoundError = () => {
    return (
        <>
            <Navbar />
            <Container>
                <div className='flex items-center flex-col justify-center my-40'>
                    <img src={noFoundImage} alt="" />
                    <h1 className='mt-10 text-5xl font-semibold'>Oops, page not found!</h1>
                    <p className=' mt-2 text-[#627382]'>The page you are looking for is not available.</p>
                    <Link className='btn mt-2 active-btn' to='/apps'>Go  Back!</Link>

                </div>
            </Container>
            <Footer />

        </>



    );
};

export default NoFoundError;