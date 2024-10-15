import React from 'react'
import MobileList from './MobileList'

const Homepage = () => {
  return (
    <>
      <div className='h-screen w-full bg-[#111111] bg-cover bg-center relative overflow-hidden'>
        <div className='mx-20 my-2'>
            <div className='h-[500px] w-full bg-homepage-bg bg-cover bg-center rounded-2xl overflow-hidden flex justify-around items-center'>
                <div className=''>
                    <div className=''>
                    <p className='font-[Mark_OT] text-desktop/h2 text-white'>Discover The</p>
                    <p className='font-[Mark_OT] text-desktop/h2 text-white'>Next-Gen Feature</p>
                    <p className='font-[Mark_OT] text-desktop/h2 text-white'>Phones with itel</p>
                    </div>
                    <div className='mt-6'>
                        <p className='text-white text-desktop/body/large font-[Mark_OT]'>itel's feature phones blend classic</p>
                        <p className='text-white text-desktop/body/large font-[Mark_OT]'>simplicity with modern style.</p>
                    </div>
                </div>
                <div>
                    <img src="/itelPhone.png" alt="" className='w-full h-[360px]'/>
                </div>
                <div>
                    <img
                        src="backgroundVideo.gif"
                        alt="Background GIF"
                        className='w-[400px] h-[400px] object-cover transform rotate-90'
                    />
                </div>
            </div>

            <div>
                <MobileList/>
            </div>
        </div>
      </div>
    </>
  )
}

export default Homepage