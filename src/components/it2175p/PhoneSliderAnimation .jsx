import React from 'react'
import Marquee from 'react-fast-marquee';

const PhoneSliderAnimation = () => {
    return (
        <div className='w-full h-[52px] overflow-x-hidden relative items-center justify-center flex flex-col bg-bg/secondry font-[MARK_OT]'>
            <Marquee speed='50' direction='right' autoFill={true}>
                <div className=' flex items-center md:text-[35px] py-2'>
                    <img src='/it2175/backgrounds/Star.png' alt="MarqueeIcon" className='px-3' />
                    <h1 className=' text-grey/grey/4 uppercase text-[20px] font-medium leading-[24px] tracking-[0.08em] text-justify'>
                        Retro Connect with modern twist
                    </h1>
                    <img src='/it2175/backgrounds/Star.png' alt="MarqueeIcon" className='px-3' />
                    <h1 className='text-grey/grey/4 uppercase text-[20px] font-medium leading-[24px] tracking-[0.08em] text-justify'>
                        Snap back to reality
                    </h1>
                </div>
            </Marquee>
        </div>
    );
}

export default PhoneSliderAnimation