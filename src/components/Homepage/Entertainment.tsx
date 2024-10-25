import ReactPlayer from 'react-player'

function Entertainment() {
  return (
    <div className='h-auto w-full bg-[#111111]'>
        <div className="h-auto w-full relative">
            <ReactPlayer
                playing
                controls={false}
                loop={true}
                muted={true}
                width='100%'
                height='100%'
                url={[{src:'/homepage/TvVideo.mp4', type: 'video/mp4'}]}
            />
            <div className='absolute w-full bottom-[16px] text-center'>
                <h3 className='text-[12px] md:text-[36px] text-white font-[500]'>Dream Big with itel: Join Us in Sparking India's Digital Revolution</h3>
            </div>
        </div>
    </div>
  )
}

export default Entertainment