

const Enjoy = () => {
  return (
    <>
        <div className='w-full h-screen bg-black overflow-hidden'>
            <div className="mx-40 flex justify-center items-center">
            <div className='w-full md:flex md:flex-col flex flex-row gap-2'>
                <div className="flex items-center">
                <span className='text-white font-[Mark_OT] text-txt-bricolage'>Enjoy</span>
                    <div className="flex flex-col gap-1 mt-6 ml-4">
                        <img src="/wave1.png" alt="" className="w-32 h-[28px]"/>
                        <img src="/wave2.png" alt="" className="w-32 h-[28px]"/>
                    </div>
                </div>
                <span className='text-white font-[Mark_OT] text-txt-bricolage'>Better</span>
                <div className="flex items-center gap-6">
                    <span className='text-white font-[Mark_OT] text-txt-bricolage'>Life</span>
                    <img src="/heart.png" alt="" className="w-12 h-12"/>
                    <img src="/ribbons.png" alt="" className="w-20 h-12"/>
                </div>
            </div>

            <div className="relative w-full h-screen">
                <img src="/ddsc.png" alt="" className="absolute top-0 left-0 w-full h-full object-cover z-0"/>
            <div className="relative z-10 flex flex-col justify-center items-center h-full">
                <img src="/RittikRoshan.png" alt="" className=" w-[650px] mr-[34px]"/>
            </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Enjoy