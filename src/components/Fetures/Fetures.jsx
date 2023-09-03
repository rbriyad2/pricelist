import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Fetures = ({feture}) => {
    return (
        <div className='text-left flex items-center'>
            <CheckCircleIcon className="h-6 w-6 text-blue-500" />
            <span className='font-bold text-sm ml-1'>{feture}</span>
        </div>
    );
};

export default Fetures;