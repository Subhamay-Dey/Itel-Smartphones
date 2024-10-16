import React from 'react'
import BentoGrid from './BentoGrid'

function Third() {
  return (
    <>
        <div className='w-full h-screen bg-third-bg flex flex-row justify-center py-[72px]'>
            <div className='relative'>
                <img src="/EnjoyBetterLife.png" alt="" className='w-full h-48 relative z-0'/>
                <div className='px-20 w-full absolute z-10 top-24 flex justify-center'>
                    <BentoGrid/>
                </div>
                <img src="/EnjoyBetterLife2.png" alt="" className='w-full h-48 absolute z-0 bottom-0'/>
            </div>
        </div>
    </>
  )
}

export default Third