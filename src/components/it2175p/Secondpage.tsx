
const Secondpage = () => {
  return (
    <div className="flex justify-evenly items-end min-h-screen bg-powerthatgoeasBG bg-cover bg-center">
        <div className="flex flex-col justify-center items-center lg:flex-row w-full max-w-8xl h-full mx-auto lg:mx-2 md:px-4 md:pt-4 px-4 pt-4 lg:gap-4">
            {/* Phone Images Section */}
            <section className="flex flex-col justify-center items-end w-full lg:w-3/5 h-3/4">
                <div className="w-[70%] h-full">
                    <h1 className="lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-center lg:text-left text-white text-mobile/h4 font-[MARK_OT]">
                        Power That Goes the Extra Mile
                    </h1>

                    <div className="max-w-full lg:flex lg:flex-col hidden lg:pb-6 pb-0 pt-[32px] justify-start items-start">
                        <h1 className="text-mobile/h4 xl:text-5xl 2xl:text-6xl w-full mb-4 lg:text-left font-[MARK_OT] md:leading-[72px] md:tracking-[-0.02em] text-left text-white flex-wrap">
                            Power That Goes the Extra Mile
                        </h1>
                    </div>

                    <p className="font-[MARK_OT] text-mobile/h6 md:leading-[31.2px] md:tracking-[-0.02em] text-left text-white pb-[12px] md:pb-6 ml-1 md:text-[24px]">1200 mAh Battery</p>

                    {/* <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left"> */}
                    <div className="ml-1 w-full md:h-20 h-[54px] flex flex-col justify-evenly items-start mb-10">
                        <p className="font-[MARK_OT] md:text-[16px] text-mobile/body/2 md:leading-[22.72px] text-left text-white">
                            With super battery mode and a 1200mAh battery, itel it2175 Pro 
                        </p>
                        <p className="font-[MARK_OT] md:text-[16px] text-mobile/body/2 md:leading-[22.72px] text-left text-white">
                            feature phone keeps you going for 8 days* straight. Stay connected,
                        </p>
                        <p className="font-[MARK_OT] md:text-[16px] text-mobile/body/2 md:leading-[22.72px] text-left text-white">
                            stay charged!
                        </p>
                    </div>

                    {/* Centering the option group */}
                    <div className="flex flex-row md:gap-4 md:gap-y-8 lg:py-6 justify-start gap-[16px]">
                        <div className="flex items-center justify-start max-w-[95px] md:max-w-[251px]">
                            <img src="/it2175/backgrounds/Group.png" alt="group" className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] mr-2"/>
                            <p className="text-mobile/h7 xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium font-[MARK_OT]">25 Days* Standby</p>
                        </div>
                        <div className="flex items-center justify-start max-w-[95px] md:max-w-[251px]">
                            <img src="/it2175/backgrounds/Group.png" alt="group" className="w-[32px] h-[32px] md:w-[64px] md:h-[64px] mr-2"/>
                            <p className="text-mobile/h7 xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium font-[MARK_OT]">12 Hours* Talktime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Writing Section */}
            <section className="flex flex-col justify-center items-center w-full lg:w-3/4 px-4 pt-4 h-full lg:h-auto">
                <div className="w-full h-full max-w-[223px] max-h-[560px] lg:max-h-[100vh] lg:max-w-[60vh] flex items-center justify-center pt-[42px] md:pt-0">
                    <img 
                        src="/it2175/backgrounds/powerthatgoeasGraphic.webp"
                        alt="displayGraphic" 
                        className="w-full h-full object-contain md:ml-[40px]"
                    />
                </div>
            </section>

        </div>
    </div>
  )
}

export default Secondpage