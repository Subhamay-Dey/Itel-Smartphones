function Thirdpage() {

  return (

    <div className="lg:flex flex flex-col-reverse lg:flex-row items-center justify-between lg:bg-SnapandSaveBG bg-SnapandSaveBGmobile bg-center bg-cover h-screen pt-6 px-2 sm:px-4 md:px-10 lg:overflow-hidden">
        <section className="flex items-end justify-center w-full h-[65%] lg:h-fit md:h-[70%]">
            <img
                src="/it2175/backgrounds/SnapandSaveGraphic.png"
                alt="Snap and Save Graphic"
                className="w-full md:max-w-[600px] md:h-[100%] lg:h-screen h-full small min-w-full lg:pt-16"
            />
        </section>
        <section className="flex flex-col w-full xl:h-screen 2xl:h-screen h-[30%] items-start justify-center p-4">
            <div className="w-full h-fit flex justify-start items-start">
                <div className="text-white 2xl:pl-32 xl:pl-20 lg:pl-12 hidden md:block lg:block">
                    <h1 className="text-3xl md:text-4xl lg:text-[50px] xl:text-[60px] md:text-[52px] font-bold md:leading-[66px] lg:leading-[60px] xl:leading-[72px] tracking-[0.03em] text-left py-4">
                        Snap & Save: Rear Camera Magic
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-left w-[70%] flex-wrap pt-4">
                        Snap precious moments with itel it2175 Pro's rear camera - Memories captured, connections preserved.
                    </p>
                </div>
                <div className="text-white px-4 md:hidden lg:hidden block">
                    <h1 className="text-mobile/h3 font-[MARK_OT] pb-4">
                        Snap & Save: Rear Camera Magic
                    </h1>
                    <p className="font-[Mark_OT] text-[16px] leading-[19.6px] tracking-[0.01em] text-left">
                        Snap precious moments with itel it2175 Pro's rear camera - Memories captured, connections preserved.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Thirdpage;
