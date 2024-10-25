
const CountOnItel = () => {
    return (
        <div className="bg-[#111111] w-full py-20">
            <div className='content relative'>
                <div className="max-w-[577px] mx-auto absolute text-center bottom-[46px] left-1/2 -translate-x-1/2">
                    <h3 className='md:text-desktop/h3 text-mobile/h5/medium mx-auto max-w-[439px] text-white'>
                        Count on itel: You, Your Phone: Our Priority
                    </h3>
                    <p className="md:text-desktop/body/1 text-desktop/overline mt-2 text-white">
                        At itel, we ensure top-notch quality through rigorous product testing. We're here to listen and help, ensuring you stay connected and worry-free.
                    </p>
                    <button className='uppercase flex items-center gap-2 rounded-[24px] bg-[#111111] py-[14px] px-6 mx-auto mt-5'>
                        <p className="text-desktop/button text-white">get support</p>
                        <img src="/homepage/Union.svg" alt="" />
                    </button>
                </div>
                <div className="">
                    <img src="/homepage/countonitel.webp" alt="countonitel" className="hidden sm:flex md:flex lg:flex"/>
                    <img src="/homepage/O.png" alt="" className="flex sm:hidden md:hidden lg:hidden w-full px-4"/>
                </div>
            </div>
            <div className="content flex md:flex-row flex-col justify-around md:items-center items-start px-4 pt-10">
                <div className="md:block flex text-white">
                    <img src="/homepage/Hotstar.gif" alt="" className="w-[85px] h-[75px]"/>
                    <div className="flex flex-col justify-centegifap-2">
                        <p className="md:text-desktop/h4 text-mobile/h5/medium pl-2">100 Days Promise</p>
                        <p className="md:text-desktop/button text-desktop/body/2/medium pl-2">READ MORE</p>
                    </div>
                </div>
                <div className="md:block flex text-white">
                    <img src="/homepage/Hotstar.gif" alt="" className="w-[85px] h-[75px]"/>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="md:text-desktop/h4 text-mobile/h5/medium pl-2">One-Time Screen Replacement</p>
                        <p className="md:text-desktop/button text-desktop/body/2/medium pl-2">READ MORE</p>
                    </div>
                </div>
                <div className="md:block flex text-white">
                    <img src="/homepage/Hotstar.gif" alt="" className="w-[85px] h-[75px]"/>
                    <div className="flex flex-col justify-center gap-2">
                        <p className="md:text-desktop/h4 text-mobile/h5/medium pl-2">Service Center</p>
                        <p className="md:text-desktop/button text-desktop/body/2/medium pl-2">READ MORE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CountOnItel