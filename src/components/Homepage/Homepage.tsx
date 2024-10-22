
import ContinuousInfo from './common/ContinuousInfo'
import MobileList from './MobileList'

const Homepage = () => {
  return (
    <>
      <div className='h-screen w-full bg-[#111111] bg-cover bg-center relative overflow-hidden hidden md:block lg:block'>
        <div className='lg:mx-24 md:mx-12 my-4'>
          <div className='h-2/4 w-full bg-homepage-bg bg-cover bg-center rounded-2xl overflow-hidden'>
            <div className='h-[450px] w-full overflow-hidden flex justify-around items-center'>
                <div>
                    <div>
                      <p className='font-[Mark_OT] lg:text-desktop/h2 md:text-desktop/h3 text-white'>Discover The</p>
                      <p className='font-[Mark_OT] lg:text-desktop/h2 md:text-desktop/h3 text-white'>Next-Gen Feature</p>
                      <p className='font-[Mark_OT] lg:text-desktop/h2 md:text-desktop/h3 text-white'>Phones with itel</p>
                    </div>
                    <div className='mt-6'>
                      <p className='text-white text-desktop/body/large font-[Mark_OT]'>itel's feature phones blend classic</p>
                      <p className='text-white text-desktop/body/large font-[Mark_OT]'>simplicity with modern style.</p>
                    </div>
                </div>
                <div className='flex justify-center items-center lg:pr-16 md:pr-0'>
                  <div className='pr-10 pb-52 lg:block md:hidden sm:hidden'>
                    <img src="/miniItel.png" alt=""/>
                  </div>
                <div>
                    <img src="/itelPhone.png" alt="" className='w-full h-[360px] '/>
                </div>
                <div className='lg:block md:hidden'>
                    <img
                        src="backgroundVideo.gif"
                        alt="Background GIF"
                        className='lg:w-[400px] lg:h-[500px] object-cover overflow-auto transform rotate-90'
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