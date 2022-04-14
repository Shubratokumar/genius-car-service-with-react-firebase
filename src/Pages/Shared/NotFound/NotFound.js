import React from 'react';
import notfound from '../../../images/404.jpg';

const NotFound = () => {
    return (
        <div className='container text-center'>
            <h2 className='text-primary text-center'>Mechanic is learning!!!</h2>
            <img className='w-100 rounded' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;