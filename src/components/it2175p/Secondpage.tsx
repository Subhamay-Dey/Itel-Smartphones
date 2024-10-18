

const Secondpage = () => {
  return (
    <div className="flex justify-evenly items-end min-h-screen bg-powerthatgoeasBG bg-cover bg-center">
        <div className="flex flex-col justify-center items-center lg:flex-row w-full max-w-8xl h-full mx-auto lg:mx-2 md:px-4 md:pt-4 px-4 pt-4 lg:gap-4">
            {/* Phone Images Section */}
            <section className="flex flex-col justify-center items-end w-full lg:w-3/5 h-3/4">
                <div>
                    <h1 className="lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-center lg:text-left text-white text-mobile/h4 font-[MARK_OT]">
                        Power That Goes the Extra Mile
                    </h1>
                    <div className="lg:flex lg:flex-col hidden lg:pb-6 w-full justify-start items-start">
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-4 lg:text-left font-[MARK_OT] text-[60px] leading-[72px] tracking-[-0.02em] text-left text-white">
                            Power That Goes
                        </h1>
                        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl mb-4 lg:text-left font-[MARK_OT] text-[60px] leading-[72px] tracking-[-0.02em] text-left text-white ">
                            the Extra Mile
                        </h1>
                    </div>
                    <p className="font-[MARK_OT] text-[24px] leading-[31.2px] tracking-[-0.02em] text-left text-white text-desktop/h4 pb-6">1200 mAh Battery</p>
                    {/* <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left"> */}
                    <div className="w-full h-20 flex flex-col justify-evenly items-start mb-10">
                        <p className="font-[MARK_OT] text-[20px] leading-[22.72px] text-left text-white">
                            With super battery mode and a 1200mAh battery, itel it2175 Pro 
                        </p>
                        <p className="font-[MARK_OT] text-[20px] leading-[22.72px] text-left text-white">
                            feature phone keeps you going for 8 days* straight. Stay connected,
                        </p>
                        <p className="font-[MARK_OT] text-[20px] leading-[22.72px] text-left text-white">
                            stay charged!
                        </p>
                    </div>

                    {/* Centering the option group */}
                    <div className="grid grid-cols-2 gap-4 gap-y-8 lg:py-6 justify-center">
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/Group.png" alt="group" className="text-lg xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">25 Days* Standby</p>
                        </div>
                        <div className="flex items-center justify-start">
                            <img src="/it2175/backgrounds/Group.png" alt="group" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                            <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">12 Hours* Talktime</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Writing Section */}
            <section className="flex flex-col justify-center items-center w-full lg:w-3/4 px-4 pt-4 h-full lg:h-auto">
                <div className="w-full h-full max-w-[550px] max-h-[560px] lg:max-h-[100vh] lg:max-w-[60vh] flex items-center justify-center">
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