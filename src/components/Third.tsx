import React from 'react'
import BentoGrid from './BentoGrid'

function Third() {
  return (
    <>
        <div className='w-full h-screen bg-third-bg flex flex-row justify-center'>
            <div className='relative'>
                <img src="/EnjoyBetterLife.png" alt="" className='w-full h-44'/>
                <div className='px-20'>
                    <BentoGrid/>
                </div>
                <img src="/EnjoyBetterLife2.png" alt="" className='w-full h-44'/>
            </div>
        </div>
    </>
  )
}

export default Third