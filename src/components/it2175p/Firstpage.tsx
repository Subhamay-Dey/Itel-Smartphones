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
<div className="flex justify-center items-center min-h-screen bg-the20displayBG bg-cover bg-center">
    <div className="flex flex-col-reverse lg:flex-row w-full max-w-7xl h-full lg:h-[80vh] mx-auto md:p-4 px-4 pt-4">
        {/* Phone Images Section */}
        <section className="flex justify-center items-end w-full lg:w-3/5 h-full">
            <div className="w-full h-full max-w-[950px] max-h-[600px] lg:max-h-[80vh] flex items-center justify-center">
                <img 
                    src="/it2175/backgrounds/the2.0displayGraphic.webp" 
                    alt="displayGraphic" 
                    className="w-full h-auto object-contain" 
                />
            </div>
        </section>

        {/* Writing Section */}
        <section className="flex flex-col justify-center w-full lg:w-2/5 p-4 h-full lg:h-auto">
            <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold mb-4 text-center lg:text-left">
                The 2.0” Display Advantage
            </h1>
            <p className="text-lg xl:text-xl 2xl:text-2xl mb-4 text-center lg:text-left">
                Experience a bigger view and elevated style with itel2175 Pro's big and bright 5.1cm (2”) Display. Ergonomically designed for your comfort.
            </p>

            {/* Centering the option group */}
            <div className="grid grid-cols-2 gap-4 justify-center">
                <div className="flex items-center justify-center">
                    <i className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"></i>
                    <p className="text-lg xl:text-xl 2xl:text-2xl">Bigger View</p>
                </div>
                <div className="flex items-center justify-center">
                    <i className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"></i>
                    <p className="text-lg xl:text-xl 2xl:text-2xl">Elevated Style</p>
                </div>
                <div className="flex items-center justify-center">
                    <i className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"></i>
                    <p className="text-lg xl:text-xl 2xl:text-2xl">Highly Ergonomic</p>
                </div>
                <div className="flex items-center justify-center">
                    <i className="fas fa-thumbs-up text-2xl xl:text-3xl 2xl:text-4xl mr-2"></i>
                    <p className="text-lg xl:text-xl 2xl:text-2xl">Elevated Experiences</p>
                </div>
            </div>
        </section>
    </div>
</div>



  )
}

export default Firstpage
