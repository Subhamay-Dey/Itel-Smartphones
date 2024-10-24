import React, { useRef } from 'react'
import { useSize } from 'react-haiku'

const Hero = ({ title, subtitle, phoneUrl, purchaseLink, bgDesktop, bgMobile }) => {

    const elementRef = useRef(null)
    const { width } = useSize(elementRef)

    console.log('bgdesktop', bgDesktop)

    return (
        <div ref={elementRef} className=' overflow-hidden lg:min-h-[680px] min-h-[521px] items-center flex' style={{ background: `url(${width < 1024 ? bgMobile : bgDesktop}) center center/cover no-repeat `}}>
            <div className="content flex flex-col lg:flex-row gap-4 lg:gap-0 lg:justify-between items-center px-4 md:px-0 relative">
                <div className="space-y-4 lg:space-y-9">
                    <div className="space-y-2 lg:space-y-3">
                        <h1 className="text-mobile/h1 lg:text-desktop/h1 text-white font-[MARK_OT]" data-aos="fade-right">{title}</h1>
                        <p className="text-mobile/title lg:text-[20px] lg:leading-6 lg:tracking-[0.2px] font-normal text-grey/grey/1 max-w-[564px] " data-aos="fade-right" data-aos-delay="400">{subtitle}</p>
                    </div>
                    <div className="hidden lg:block" data-aos="fade-up" data-aos-delay="600">
                        <BuyNowSquareBG purchaseLink={purchaseLink} />
                    </div>
                </div>
                <img data-aos="fade-up" src={phoneUrl} alt="it2175" className='lg:max-w-[393px] lg:max-h-[528px] max-w-[171px] max-h-[500px] self-end lg:self-start' />
                {/* <div className="text-mobile/small/body lg:text-desktop/body/2/regular text-grey/grey/1 absolute lg:-bottom-16 -bottom-10 max-w-[237px] left-4 lg:max-w-max">*YouTube supported is through third party Cloud App, Conditions apply.</div> */}
            </div>
        </div>
    )
}

export default Hero