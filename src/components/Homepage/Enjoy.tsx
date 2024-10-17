
const Enjoy = () => {
    
  return (
    <>
        <div className='max-w-full max-h-screen md:h-screen bg-black overflow-hidden'>
            <div className="md:mx-20 lg:mx-40 mx-8 my-6 lg:flex mg:block block justify-center items-center">

                <div className='w-full flex flex-col gap-2'>

                    <div className="flex items-center h-[90px] w-full">
                            <span className='text-white font-[Mark_OT] text-txt-bricolage'>Enjoy</span>
                            <div className="flex flex-col gap-1 mt-6 md:ml-4 ml-1">
                                <img src="/wave1.png" alt="" className="w-32 h-[28px]"/>
                                <img src="/wave2.png" alt="" className="w-32 h-[28px]"/>
                            </div>
                    </div>
                    <div className="flex">
                            <span className='text-white font-[Mark_OT] text-txt-bricolage'>Better</span>
                    </div>
                    <div className="flex items-center md:gap-6 gap-1 md:w-[311px] w-[300px]">
                            <span className='text-white font-[Mark_OT] text-txt-bricolage'>Life</span>
                            <img src="/heart.png" alt="" className="w-12 h-12"/>
                            <img src="/ribbons.png" alt="" className="w-20 h-12"/>
                    </div>

                </div>

                <div className="relative w-full">
                    <img src="/ddsc.png" alt="" className="absolute md:top-0 md:left-0 top-7 w-full h-full object-cover z-0"/>
                    <div className="relative md:z-10 top-10 flex flex-col justify-center items-center md:h-full lg:h-full">
                        <img src="/RittikRoshan.png" alt="" className="md:w-[650px] md:h-[650px] w-[650px] h-[400px] lg:mr-[34px]"/>
                    </div>
                </div>


            </div>
        </div>
    </>
  )
}

export default Enjoy