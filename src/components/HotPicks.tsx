
const HotPicks = () => {
  return (
    <>
        <div className='w-full h-screen bg-third-bg px-52 pt-10'>
            <div className='flex gap-4 items-center'>
                <img src="/HotStar.png" alt="" className='w-20 h-20'/>
                <p className='text-white text-desktop/h2 font-[MARK_OT]'>Hot Picks: Snag ‘Em Now!</p>
            </div>
            <div className='flex flex-row gap-4 mt-8'>
                <button className='w-20 h-12 border-border-color border-[2px] text-white text-desktop/body/1 font-[MARK_OT] rounded-full bg-all-button-bg'>All</button>
                <button className='w-28 h-12 border-border-color border-[2px] text-white text-desktop/body/1 font-[MARK_OT] rounded-full'>Best Deals</button>
                <button className='w-32 h-12 border-border-color border-[2px] text-white text-desktop/body/1 font-[MARK_OT] rounded-full'>SmartPhone</button>
                <button className='w-36 h-12 border-border-color border-[2px] text-white text-desktop/body/1 font-[MARK_OT] rounded-full'>Future Phone</button>
                <button className='w-28 h-12 border-border-color border-[2px] text-white text-desktop/body/1 font-[MARK_OT] rounded-full'>Smart TV</button>
            </div>
            <div className='w-full flex justify-between items-center gap-4 mt-6'>
                <div className='bg-phones-bg w-[480px] h-[620px] rounded-2xl flex flex-col justify-center items-center px-4 pb-4 pt-1.5'>
                    <img src="/new.png" alt="" className='w-[60px] h-[30px]'/>
                    <img src="/hotpickimage1.png" alt="" className='w-[300px] h-[300px] mt-[15px]'/>
                    <p className='text-white mt-6 text-desktop/h4 font-[MARK_OT]'>S24</p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT] mt-4'>Your Ideal Storyteller: Stunning</p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT]'>108MP AI Camera</p>
                    <button className='text-white w-[250px] h-[50px] bg-price-tag border-gray-500 border-[1px] rounded-3xl flex justify-center items-center gap-2 mt-6 text-desktop/button font-[MARK_OT]'>₹10,999/- <img src="/arrow-right.png" alt="" className='w-6 h-6'/></button>
                </div>
                <div className='bg-phones-bg w-[480px] h-[620px] rounded-2xl flex flex-col justify-center items-center p-6'>
                    <img src="/hotpickimage2.png" alt="" className='w-[320px] h-[220px] mt-[90px]'/>
                    <p className='text-white mt-[40px] text-desktop/h4 font-[MARK_OT]'>G4365</p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT] mt-4'>Entertainment Power pack with 5k </p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT]'>Google Apps in-built</p>
                    <button className='text-white w-[250px] h-[50px] bg-price-tag border-gray-500 border-[1px] rounded-3xl flex justify-center items-center gap-2 mt-6 text-desktop/button font-[MARK_OT]'>₹18,999/- <img src="/arrow-right.png" alt="" className='w-6 h-6'/></button>
                </div>
                <div className='bg-phones-bg w-[480px] h-[620px] rounded-2xl flex flex-col justify-center items-center p-6'>
                    <img src="/hotpickimage3.png" alt="" className='w-[300px] h-[300px] mt-[20px]'/>
                    <p className='text-white mt-6 text-desktop/h4 font-[MARK_OT]'>S24</p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT] mt-4'>Your Ideal Storyteller: Stunning</p>
                    <p className='text-gray-400 text-desktop/body/2/regular font-[MARK_OT]'>108MP AI Camera</p>
                    <button className='text-white w-[250px] h-[50px] bg-price-tag border-gray-500 border-[1px] rounded-3xl flex justify-center items-center gap-2 mt-6 text-desktop/button font-[MARK_OT]'>₹1,799/- <img src="/arrow-right.png" alt="" className='w-6 h-6'/></button>
                </div>
            </div>
        </div>
    </> 
  )
}

export default HotPicks