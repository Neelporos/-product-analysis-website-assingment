import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl text-center font-bold m-5'>Q & A</h2>
            <h3 className='text-2xl text-center font-bold m-5'>Question: What is context api?</h3>
            <p className='text-xl text-center font-bold m-5'>Answer: Context api is one of the most powerful component or function that we can build in react for avoiding props drilling or dry " do not repeat your self" </p>
            <h3 className='text-2xl text-center font-bold m-5'>Question: What is semantic tag?</h3>
            <p className='text-xl text-center font-bold m-5'>Answer: Semantic tag is mainly some tag that use in HTML CSS. every tag have a value or defination as like p tag defined as paragraph. </p>
            <h3 className='text-2xl text-center font-bold m-5'>Question: What is difference between inline and block elements?</h3>
            <p className='text-xl text-center font-bold m-5'>Answer: 1.Inline material take only the required width.| Block Elements take the full width. <br></br> 2.Inline elements don't start in a new line | Block elements always start in a line.<br></br> 3.Inline elements allow other inline elements to sit behind.| Block elements doesn’t allow other elements to sit behind.<br></br> 4.Inline elements don’t have top and bottom margin | Block elements have top and bottom margin.</p>

        </div>
    );
};

export default Blog;