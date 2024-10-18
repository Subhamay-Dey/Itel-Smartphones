const Firstpage = () => {
  return (
    // <div className='md:px-4 px-0 w-full h-screen bg-the20displayBG bg-cover bg-center'>
    //   <div className="w-full h-full relative">
    //     <img src="/it2175/backgrounds/the2.0displayGraphic.webp" alt="displayGraphic" className="absolute bottom-0 left-24 -z-1 w-[950px] h-[830px]"/>
    //     <img src="/it2175/backgrounds/Vector356.png" alt="" className="absolute z-10 w-[180px] h-[34.9px] top-[68.39%] left-[54.5%] transform -translate-x-1/2 -translate-y-1/2"/>

    //     <div>
          
    //     </div>

    //   </div>

    // </div>
<div className="flex justify-evenly items-center min-h-screen bg-the20displayBG bg-cover bg-center">
    <div className="flex flex-col-reverse lg:flex-row w-full max-w-8xl h-full mx-auto lg:mx-2 md:p-4 px-4 pt-4 lg:gap-4">
        {/* Phone Images Section */}
        <section className="flex justify-center items-end w-full lg:w-3/5 h-full">
            <div className="w-full h-full max-w-[950px] max-h-[600px] lg:max-h-[80vh] lg:max-w-[100vh] flex items-center justify-center">
                <img 
                    src="/it2175/backgrounds/the2.0displayGraphic.webp" 
                    alt="displayGraphic" 
                    className="w-full h-auto object-contain" 
                />
            </div>
        </section>

        {/* Writing Section */}
        <section className="flex flex-col justify-center w-full lg:w-1/3 p-4 h-full lg:h-auto ">
            <h1 className="lg:hidden text-4xl xl:text-5xl 2xl:text-6xl mb-4 text-center lg:text-left text-white text-mobile/h4 font-[MARK_OT]">
                The 2.0” Display Advantage
            </h1>
        <div className="lg:flex lg:flex-col hidden lg:pb-6">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left text-white">
                The 2.0” Display
            </h1>
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left text-white">
                Advantage
            </h1>
        </div>
            {/* <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left"> */}
            <p className="font-[MARK_OT] text-[20px] leading-[22.72px] text-left lg:py-2 text-white text-mobile/body/2">
                Experience a bigger view and elevated style with itel2175 Pro's big and bright 5.1cm (2”) Display. Ergonomically designed for your comfort.
            </p>

            {/* Centering the option group */}
            <div className="grid grid-cols-2 gap-4 gap-y-8 lg:py-6 justify-center">
                <div className="flex items-center justify-start">
                    <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="text-lg xl:text-3xl 2xl:text-4xl mr-2"/>
                    <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">Bigger View</p>
                </div>
                <div className="flex items-center justify-start">
                    <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                    <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">Elevated Style</p>
                </div>
                <div className="flex items-center justify-start">
                    <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                    <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">Highly Ergonomic</p>
                </div>
                <div className="flex items-center justify-start">
                    <img src="/it2175/backgrounds/hand-point.png" alt="hand" className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"/>
                    <p className="text-lg xl:text-xl 2xl:text-2xl text-white lg:text-desktop/h5/medium text-mobile/h7 font-[MARK_OT]">Elevated Experiences</p>
                </div>
            </div>
        </section>
    </div>
</div>



  )
}

export default Firstpage
