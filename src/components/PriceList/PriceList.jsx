import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';



const PriceList = () => {
    const [prices, setPrices]=useState([]);
    useEffect(()=>{
        fetch('prices.json')
        .then(res => res.json())
        .then(data=> setPrices(data))
    },[])
    return (
        <div>
            <h2 className='text-center text-5xl text-purple-900 bg-purple-300 text-5xl font-bold p-4'>Awosome Afforadable PriceList</h2>
            <div className="grid md:grid-cols-4 gap-4 text-center py-4 mx-12">
            {
                prices.map(price => <PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
            </div>
        </div>
    );
};

export default PriceList;