
function BentoGrid() {
  return (
    <div className='flex justify-between items-center gap-5 overflow-hidden'>
        <div className='lg:w-[500px] md:w-[300px] lg:h-[550px] md:h-[450px] bg-bentogrid-bg rounded-xl flex flex-col justify-between'>
            <div className='pt-[40px] px-[40px]'>
                <p className='text-white text-desktop/h4 font-[MARK_OT]'>Amp Your Style with itel Latest</p>
                <p className='text-white text-desktop/h4 font-[MARK_OT]'>Smartphones</p>
                <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
            </div>
            <div className='w-full flex justify-center'>
                <img src="/bentophone1.png" alt="" className='h-[370px]'/>
            </div>
        </div>

        <div className='flex flex-col justify-between items-center gap-5'>
            <div className='w-[800px] h-[275px] bg-bentogrid-bg rounded-xl flex flex-row justify-between'>
                <div className='pt-[40px] px-[40px]'>
                    <p className='text-white text-desktop/h4 font-[MARK_OT]'>Stay Effortlessly Connected All </p>
                    <p className='text-white text-desktop/h4 font-[MARK_OT]'>Day, Every Day</p>
                    <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                </div>
                <div className=' flex justify-center items-end'>
                    <img src="/bentophone2.png" alt="" className='h-[240px]'/>
                </div>
            </div>
            <div className='w-full flex justify-between items-center'>
                
                    <div className='w-[450px] h-[255px] bg-bentogrid-bg rounded-xl flex flex-row justify-between'>
                        <div className='pt-[40px] pl-[40px]'>
                            <p className='text-white text-desktop/h4 font-[MARK_OT]'>Dive into Endless</p>
                            <p className='text-white text-desktop/h4 font-[MARK_OT]'>Entertainment: itel</p>
                            <p className='text-white text-desktop/h4 font-[MARK_OT]'>Smart TV</p>
                            <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                        </div>
                        <div className='flex justify-center items-end'>
                            <img src="/bentotv.png" alt="" className='h-[180px] pr-10'/>
                        </div>
                    </div>

                    <div className='w-[330px] h-[255px] bg-bentogrid-bg rounded-xl flex flex-col justify-between'>
                        <div className='pt-[40px] px-[40px]'>
                            <p className='text-white text-desktop/h4 font-[MARK_OT]'>Level up Your Game:</p>
                            <p className='text-white text-desktop/h4 font-[MARK_OT]'>itel Smart Gadgets!</p>
                            <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
                        </div>
                        <div className=' flex justify-center items-end'>
                            <img src="/bentowatch.png" alt="" className='h-[130px] ml-20'/>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    
  )
}

export default BentoGrid