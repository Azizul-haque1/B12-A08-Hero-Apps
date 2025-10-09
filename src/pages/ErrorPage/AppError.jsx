import React from 'react';
import appError from '../../assets/App-Error.png'
import { Link } from 'react-router';
// import Container from '../../components/Container';

const AppError = () => {
    return (
        <div>
            {/* <Container> */}
            <div className='flex items-center flex-col justify-center my-40'>
                <img src={appError} alt="" />
                <h1 className='mt-10 text-5xl font-semibold'>OPPS!! APP NOT FOUND</h1>
                <p className=' mt-2 text-[#627382]'>The App you are requesting is not found on our system.  please try another apps</p>
                <Link className='btn mt-2 active-btn' to='/apps'>Go  Back!</Link>

            </div>
            {/* </Container> */}

        </div>
    );
};

export default AppError;