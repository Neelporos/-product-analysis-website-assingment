import React from 'react';
import ReviewCart from '../ReviewCart/ReviewCart';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <div className='grid grid-cols-2' >
                <div className='p-10 m-5'>
                    <h1 className='text-5xl mt-10 font-bold '>One Of The Best <br /> Handyman Service In All Over USA</h1>
                    <p className='mt-6'>Service pros inc has 20+years experience in usa.
                        One of the best service provider with an A+ BBB rating,
                        full general contractor Licensed-Insured-Bonded.
                        we can handle your residential commercial industrial project.
                        we are service pros home renovation and construction service.
                        we perform all level of building and remodeling.
                        we offer start-to finish solutions for every project.
                        no need to hire multiple companies or sub just bring us in
                        and let us give you free one stop shop experience.</p>
                    <button className='mt-6 border-2 p-4 bg-white text-black hover:bg-black hover:text-stone-50  '>Explore More</button>
                </div>
                <div>
                    <img className='mx-auto ' src='https://thumbs.dreamstime.com/b/multitasking-concept-handyman-different-tools-white-background-180022890.jpg' alt="" />
                </div>
            </div>

            <div>
                <h2 className='text-4xl font-bold text-center m-10'>Customer Review</h2>
                <div className='grid place-items-center'>
                    <button className='rounded-lg border-2 p-2 bg-white text-black hover:bg-black hover:text-stone-50  '>See More Reviews</button>
                </div>
            </div>



        </div>
    );
};

export default Home;