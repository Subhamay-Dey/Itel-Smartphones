import React from 'react'

const Firstpage = () => {
  return (

    <div className="lg:flex flex flex-col-reverse lg:flex-row items-center justify-between lg:justify-center lg:bg-the20displayBG bg-the20displayBGMobile bg-center bg-cover h-screen pt-6 px-2 sm:px-4 md:px-10 lg:gap-16">
        
            {/* Phone Images Section */}
            <section className="flex justify-start items-end w-full lg:w-2/4 lg:h-[100%] h-full md:h-fit">
                <div className="w-full h-full max-w-[950px] max-h-[600px] lg:max-h-[90%] lg:max-w-[100vh] flex items-center justify-center">
                    <img
                        src="/it2175/backgrounds/the2.0displayGraphic.webp"
                        alt="displayGraphic"
                        className="w-full h-full lg:h-full md:h-[100%] md:max-w-full min-w-full"
                    />
                </div>
            </section>

            {/* Writing Section */}
            <section className="flex flex-col justify-center w-full lg:w-2/5 p-4 h-full lg:h-auto md:h-2/4 ">
                <h1 className="lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-center lg:text-left text-white text-mobile/h4 font-[MARK_OT] md:text-mobile/h1">
                    The 2.0” Display Advantage
                </h1>
                <div className=" lg:flex lg:flex-row lg:flex-wrap xl:flex xl:flex-row xl:flex-wrap 2xl:flex 2xl:flex-row 2xl:flex-wrap hidden lg:pb-6 gap-4">
                    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left text-white">
                        The 2.0”
                    </h1>
                    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left text-white">
                        Display
                    </h1>
                    <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left text-white">
                        Advantage
                    </h1>
                </div>
                {/* <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left"> */}
                <p className="font-[MARK_OT] lg:text-desktop/h6 lg:leading-[22.72px] lg:text-left lg:py-2 text-white text-mobile/body/2 pb-6 md:text-mobile/h6 md:pt-4">
                    Experience a bigger view and elevated style with itel2175 Pro's big and bright 5.1cm (2”) Display. Ergonomically designed for your comfort.
                </p>

                {/* Centering the option group */}
                <div className="w-full flex justify-center items-center">
                    <div className="grid grid-cols-2 gap-4 gap-y-4 w-fit lg:py-6 justify-center">
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="text-lg xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h6 text-mobile/h7 font-[MARK_OT]">Bigger View</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h6 text-mobile/h7 font-[MARK_OT]">Elevated Style</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h6 text-mobile/h7 font-[MARK_OT]">Highly Ergonomic</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h6 text-mobile/h7 font-[MARK_OT]">Elevated Experiences</p>
                        </div>
                    </div>
                </div>
            </section>
        {/* </div> */}
    </div>
  )
}

export default Firstpage
