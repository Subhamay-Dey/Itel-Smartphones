
import MobileList from './MobileList'
import ContinuousInfo from './ContinuousInfo'

const Homepage = () => {
  return (
    <>
      <div className='h-screen w-full bg-[#111111] bg-cover bg-center relative overflow-hidden'>
        <div className='mx-24 my-4'>
            <div className='h-[490px] w-full bg-homepage-bg bg-cover bg-center rounded-2xl overflow-hidden'>
              <div className='h-[450px] w-full overflow-hidden flex justify-around items-center'>
                <div>
                    <div>
                      <p className='font-[Mark_OT] text-desktop/h2 text-white'>Discover The</p>
                      <p className='font-[Mark_OT] text-desktop/h2 text-white'>Next-Gen Feature</p>
                      <p className='font-[Mark_OT] text-desktop/h2 text-white'>Phones with itel</p>
                    </div>
                    <div className='mt-6'>
                      <p className='text-white text-desktop/body/large font-[Mark_OT]'>itel's feature phones blend classic</p>
                      <p className='text-white text-desktop/body/large font-[Mark_OT]'>simplicity with modern style.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center pr-16'>
                  <div className='pr-10 pb-52'>
                    <img src="/miniItel.png" alt="" />
                  </div>
                <div>
                    <img src="/itelPhone.png" alt="" className='w-full h-[360px] '/>
                </div>
                <div>
                    <img
                        src="backgroundVideo.gif"
                        alt="Background GIF"
                        className='w-[400px] h-[500px] object-cover overflow-auto transform rotate-90'
                    />
                </div>
                </div>
              </div>
              <ContinuousInfo/>
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