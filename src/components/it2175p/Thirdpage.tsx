
function Thirdpage() {
  return (
    <div className="md:flex flex flex-col-reverse md:flex-row items-center justify-center lg:bg-SnapandSaveBG bg-SnapandSaveBGmobile bg-center bg-cover min-h-screen px-4 md:px-10">
        <section className="flex-1 flex items-end justify-center">
            <div className="">
                <img src="/it2175/backgrounds/SnapandSaveGraphic.png" alt="" className="md:h-[500px] md:w-[600px] lg:h-screen h-[500px] lg:pl-16 lg:pt-16"/>
            </div>
        </section>
        <section className="flex-1 flex flex-col w-full h-screen items-start justify-center md:p-4 md:pt-0 pt-10">
            <div className="w-full h-[60%] flex justify-start items-start">
                <div className="text-white pl-32 hidden lg:block">
                    <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold leading-[72px] tracking-[0.03em] text-left py-4">
                        Snap & Save: Rear
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold leading-[72px] tracking-[0.03em] text-left py-4">
                        Camera Magic
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-left w-[65%] flex-wrap pt-4">
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

export default Thirdpage