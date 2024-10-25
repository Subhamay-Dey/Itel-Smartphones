
import ContinuousInfo from './common/ContinuousInfo'
import MobileList from './MobileList'

const FeaturePhone = () => {
  return (
    <>
      <div className='h-auto w-full bg-[#111111] bg-cover bg-center relative overflow-hidden hidden md:block lg:block'>
        <div className='py-10'>
          <div className='content h-2/4 bg-homepage-bg bg-cover bg-center rounded-2xl overflow-hidden'>
            <div className='h-[450px] w-full overflow-hidden flex justify-around items-center'>
                  <div className='relative flex flex-col w-2/5'>
                    <p className='font-[Mark_OT] lg:text-desktop/h2 md:text-desktop/h3 text-white pb-6'>Discover The Next-Gen Feature Phones with itel</p>
                    <p className='text-white text-desktop/body/large font-[Mark_OT]'>itel's feature phones blend classic</p>
                    <p className='text-white text-desktop/body/large font-[Mark_OT]'>simplicity with modern style.</p>
                  </div>
                <div className='flex justify-center items-center lg:pr-16 md:pr-0'>
                <div>
                    <img src="/homepage/itelPhone.png" alt="" className='w-full h-[360px]'/>
                </div>
                </div>
              </div>
              <ContinuousInfo/>
            </div>
            <div className='content'>
                <MobileList/>
            </div>
        </div>
      </div>
    </>
  )
}

export default FeaturePhone