
function Thirdpage() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-SnapandSaveBG bg-center bg-cover min-h-screen px-4 md:px-10">
        <section className="flex-1 flex items-end justify-center">
            <div className="">
                <img src="/it2175/backgrounds/SnapandSaveGraphic.png" alt="" className="h-screen pl-16 pt-16"/>
            </div>
        </section>
        <section className="flex-1 flex flex-col w-full h-screen items-start justify-center p-4 md:pt-0 pt-10">
            <div className="w-full h-[60%] flex justify-start items-start">
                <div className="text-white pl-32">
                    <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold leading-[72px] tracking-[0.03em] text-left py-4">
                        Snap & Save: Rear
                    </h1>
                    <h1 className="text-3xl md:text-4xl lg:text-[60px] font-bold leading-[72px] tracking-[0.03em] text-left py-4">
                        Camera Magic
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-left w-[60%] flex-wrap pt-4">
                        Snap precious moments with itel it2175 Pro's rear camera - Memories captured, connections preserved.
                    </p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Thirdpage