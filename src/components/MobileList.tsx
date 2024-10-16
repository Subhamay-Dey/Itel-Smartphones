import React from 'react';
import { mobiles } from '../data/mobiles';
import Button from './Button';

const MobileList: React.FC = () => {
    return (
        <div className="flex justify-between items-stretch h-[400px] py-4">
            {mobiles.map(mobile => (
                <div 
                    key={mobile.id} 
                    className="relative bg-phones-bg rounded-lg p-4 text-center flex flex-col items-center h-full" 
                    style={{ width: 'calc(25% - 1rem)' }}
                >
                    <img src={mobile.circle1} alt="Circle" className="absolute top-8 left-52 w-28 h-28 z-0" />
                    <img src={mobile.circle2} alt="Circle" className="absolute top-20 left-24 w-32 h-32 z-0" />
                    
                    <img src={mobile.image} alt={mobile.name} className="max-w-48 h-[200px] mb-2 z-10 relative" />
                    <span className="text-white text-desktop/h4 font-[Mark_OT] z-10 pt-2 relative">{mobile.name}</span>
                    <p className="text-white text-desktop/button z-10 relative pt-3">₹{mobile.price}</p>
                    <Button/>
                </div>
            ))}
        </div>
    );
};

export default MobileList;
