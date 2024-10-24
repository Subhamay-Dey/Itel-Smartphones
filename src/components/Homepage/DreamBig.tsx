import ReactPlayer from 'react-player'

function DreamBig() {
  return (
    <div className="h-auto w-full relative">
        <ReactPlayer
            playing
            controls={false}
            loop={true}
            muted={true}
            width='100%'
            height='100%'
            url={[{src: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4', type: 'video/mp4'}]}
        />
        <div className='absolute w-full bottom-[16px] text-center'>
            <h3 className='text-[12px] md:text-[36px] text-white font-[500]'>DreamBigm Big with itel: Join Us in Sparking India's Digital Revolution</h3>
        </div>
    </div>
  )
}

export default DreamBig