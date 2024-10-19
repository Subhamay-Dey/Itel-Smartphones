const Secondpage = () => {

    return (

      <div className="flex justify-evenly items-end h-screen lg:bg-powerthatgoeasBG bg-powerthatgoeasBGMobile bg-cover bg-center overflow-hidden">
          <div className="flex flex-col justify-between xl:flex xl:flex-row xl:items-end items-center lg:flex-row w-full max-w-8xl h-full md:px-4 md:pt-4 px-4 pt-4 xl:justify-evenly">

            {/* Writing Section */}
              <section className="xl:pl-20 h-[70%] flex flex-col justify-center w-full lg:w-3/5 xl:w-2/5 px-4">
                <h1 className="lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-start lg:text-left text-white text-mobile/h4 font-[MARK_OT]">
                    Power That Goes the Extra Mile
                </h1>
                <div className=" lg:flex lg:flex-row lg:flex-wrap xl:flex xl:flex-row xl:flex-wrap 2xl:flex 2xl:flex-row 2xl:flex-wrap hidden lg:pb-6 gap-4">
                    <h1 className="text-mobile/h4 xl:text-5xl 2xl:text-6xl mb-4 lg:text-left font-[MARK_OT] md:leading-[72px] md:tracking-[-0.02em] text-left text-white">
                        Power That Goes
                    </h1>
                    <h1 className="text-mobile/h4 xl:text-5xl 2xl:text-6xl mb-4 lg:text-left font-[MARK_OT] md:leading-[72px] md:tracking-[-0.02em] text-left text-white ">
                        the Extra Mile
                    </h1>
                </div>

                    <p className="font-[MARK_OT] text-mobile/h6 md:leading-[31.2px] md:tracking-[-0.02em] text-left text-white pb-[12px] md:pb-6 md:text-[24px]">1200 mAh Battery</p>

                    {/* <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left"> */}
                    <div className="hidden ml-1 w-full md:h-20 h-[54px] lg:flex flex-col justify-evenly items-start mb-10">
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

                    <div className="w-full flex flex-wrap lg:hidden text-mobile/body/2 leading-[18px] tracking-[-0.02em] text-white pb-6">
                        With super battery mode and a 1200mAh battery, itel it2175 Pro feature phone keeps you going for 8 days* straight. Stay connected, stay charged!
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

                    <p className="font-[MARK_OT] text-mobile/h7 lg:text-mobile/h6 md:leading-[31.2px] md:tracking-[-0.02em] xl:text-left text-end pt-4 text-white md:pb-6 md:text-[24px] xl:pt-24 xl:pl-28 ">Super Battery Mode</p>
              </section>

            {/* Phone Images Section */}
              <section className="flex flex-col justify-end items-center w-full h-full xl-max-h-[80%] xl:w-[40.4%] xl:h-[90vh] lg:w-3/4 px-4 xl:pt-4 pt-0 lg:h-auto">
                  <div className="w-full h-full max-w-[360px] max-h-[480px] lg:max-h-[100vh] lg:max-w-[60vh] flex items-center justify-center md:pt-0">
                      <img 
                          src="/it2175/backgrounds/powerthatgoeasGraphic.webp"
                          alt="displayGraphic" 
                          className="w-full h-full"
                      />
                  </div>
              </section>
  
          </div>
      </div>
    )
  }
  
  export default Secondpage