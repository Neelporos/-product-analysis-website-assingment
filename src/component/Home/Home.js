import React from 'react';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>

            <div>
                <h2 className='text-5xl font-bold'>This Is Home</h2>
            </div>
            <div><Reviews></Reviews></div>
        </div>
    );
};

export default Home;