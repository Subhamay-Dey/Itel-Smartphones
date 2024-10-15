import React from 'react';
import { mobiles } from '../data/mobiles'; // Adjust the import path accordingly

const MobileList: React.FC = () => {
    return (
        <div className="flex justify-between items-stretch h-[400px] p-4">
            {mobiles.map(mobile => (
                <div 
                    key={mobile.id} 
                    className="bg-gray-800 rounded-lg p-4 text-center flex flex-col items-center h-full" 
                    style={{ width: 'calc(25% - 1rem)' }}
                >
                    <img src={mobile.image} alt={mobile.name} className="w-48 h-[200px] mb-2" />
                    <h2 className="text-white text-lg">{mobile.name}</h2>
                    <p className="text-gray-300">₹{mobile.price}</p>
                    <button className="mt-2 w-20 h-4 bg-whiteButton bg-cover bg-center">
                        
                    </button>
                </div>
            ))}
        </div>
    );
};

export default MobileList;
