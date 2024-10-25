
function Transform() {
  return (
    <div className="h-auto w-full bg-[#111111]">
        <div className="flex md:flex-row flex-col h-full w-full items-center justify-between  pt-6">
            <div className="flex flex-col gap-4 xl:pl-40 lg:pl-32 md:pl-24 px-4 md:px-0 lg:px-0 xl:px-0">
                <p className="lg:text-desktop/h3 text-mobile/h5/medium text-white xl:w-3/5 lg:h-3/4 md:w-4/5 w-4/5 flex-wrap">Transform Every Moment with itel's Family-Friendly Smart TVs!</p>
                <p className="lg:text-desktop/body/1 text-desktop/body/2/regular text-white xl:w-1/2 lg:w-3/5 md:w-2/3 w-2/3 flex-wrap">Experience high-quality entertainment for every generation— all at a budget-friendly price.</p>
            </div>
            <div>
                <img src="/homepage/Couple.png" alt="" />
            </div>
        </div>
        <div>
            <img src="/homepage/Strap.png" alt="" className="w-full h-[80px]"/>
        </div>
    </div>
  )
}

export default Transform