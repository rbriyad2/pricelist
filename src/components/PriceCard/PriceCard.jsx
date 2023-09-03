import React from 'react';
import Fetures from '../Fetures/Fetures';

const PriceCard = ({price}) => {
    return (
        <div className='bg-violet-400 py-4 rounded-lg px-10'>
            <h2 className='text-7xl font-bold text-yellow-100'>{price.price}
            <span className='text-2xl text-red-200'>/mo</span></h2>
            <h5 className='font-bold text-2xl'>{price.name}</h5>
            <p className='underline text-2xl font-bold text-left mb-2 text-white'>Fetures:</p>
            {
                price.fetures.map((feture, idx)=> <Fetures 
                key={idx}
                feture={feture}
                ></Fetures>)
            }
            <button className='w-full py-2 px-4 mt-5 hover:bg-yellow-300 duration-500 bg-green-400 rounded-lg'>Buy Now</button>
        </div>
    );
};

export default PriceCard;