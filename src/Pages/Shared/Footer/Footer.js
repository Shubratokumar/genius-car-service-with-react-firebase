import React from 'react';

const Footer = () => {
    return (        
        <footer>
            <p className='text-center'><small>Copyright @ {(new Date().getFullYear())}</small></p>
        </footer>
    );
};

export default Footer;