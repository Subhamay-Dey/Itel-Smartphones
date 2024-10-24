
function SmartApp() {
  return (
    <div className="h-auto w-full bg-[#111111] lg:py-16 md:py-10 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="content text-white lg:text-desktop/h2 md:text-desktop/h2 text-mobile/h4 font-[MARK_OT]">Our Smart Appliances</div>
        <div className="content flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col lg:py-10 md:py-16 md:px-10 py-6 px-0 lg:px-12 xl:px-0 2xl:px-0 w-full justify-between items-center gap-4 lg:gap-6 md:gap-4">
            <div className="">
                <div className="relative text-white lg:px-10 md:px-4 px-4 w-full">
                    <p className="absolute lg:top-6 md:top-3 top-4 md:text-desktop/h3 text-desktop/h4">Home Care</p>
                    <p className="absolute lg:top-20 md:top-16 top-12 md:text-desktop/body/1 text-desktop/body/2/regular flex flex-wrap md:w-9/10 lg:w-3/4 w-8/10">Enhance Home Care by automating tasks, improving efficiency and ensuring convinience</p>
                </div>
                
                <img src="/homepage/Dryer.gif" alt="Dryer" className="md:max-w-full md:max-h-[620px] hidden md:flex"/>
                <img src="/homepage/Trimmer.gif" alt="Trimmer" className="flex md:hidden"/>
                
            </div>
            <div className="">
                <div className="relative text-white lg:px-10 md:px-4 px-4 w-full">
                    <p className="absolute lg:top-6 md:top-3 top-4 md:text-desktop/h3 text-desktop/h4">Personal Care</p>
                    <p className="absolute lg:top-20 md:top-16 top-12 md:text-desktop/body/1 text-desktop/body/2/regular flex flex-wrap md:w-9/10 lg:w-3/4 w-8/10">Innovative smart hair dryers feature AI temperature control and customizable settings</p>
                </div>
                
                <img src="/homepage/VCleanr.gif" alt="VCleanr" className="md:max-w-full md:max-h-[620px] hidden md:flex"/>
                <img src="/homepage/vcleaner.gif" alt="vcleaner" className="flex md:hidden"/>
                
            </div>
        </div>
    </div>
  )
}

export default SmartApp