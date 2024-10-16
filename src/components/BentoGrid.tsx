import React from 'react'

function BentoGrid() {
  return (
    <div className='flex justify-between items-center gap-10'>
        <div className='w-[500px] h-[550px] bg-bentogrid-bg rounded-xl flex flex-col justify-between'>
            <div className='pt-[40px] px-[40px]'>
                <p className='text-white text-desktop/h4 font-[MARK_OT]'>Amp Your Style with itel Latest</p>
                <p className='text-white text-desktop/h4 font-[MARK_OT]'>Smartphones</p>
                <img src="/arrow-right.png" alt="" className='w-6 h-6'/>
            </div>
            <div className='w-full flex justify-center'>
                <img src="/bentophone1.png" alt="" className='h-[370px]'/>
            </div>
        </div>

        <div>
            
        </div>
    </div>
    
  )
}

export default BentoGrid