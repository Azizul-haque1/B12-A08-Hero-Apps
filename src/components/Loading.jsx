import React from 'react';
import logo from '../assets/logo.png'
import Container from './Container';

const Loading = () => {
    return (

        <Container>
            <div className='flex items-center  justify-center  min-h-screen'>
                <img src={logo} className='w-1/12 left-0   animate-wiggle   ' alt="" />
                <h1 className='text-3xl wiggle ml-5'>Loading.....</h1>

            </div>
        </Container>
    );
};

export default Loading;