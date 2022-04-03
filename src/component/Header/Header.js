import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 bg-white px-12 py-10 flex justify-center md:justify-between'>
            <div className='hidden md:block'>
                <Link to='/' className='font-sans font-bold text-xl text-grey-600'>David Home Service</Link>
            </div>
            <div className='flex gap-5 text-1xl'>
                <Link to='/'>Home</Link>
                <Link to='/Dashboard'>Dashboard</Link>
                <Link to='/Review'>Review</Link>
                <Link to='/Blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;