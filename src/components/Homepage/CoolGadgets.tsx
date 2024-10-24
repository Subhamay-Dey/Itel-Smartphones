
function CoolGadgets() {
  return (
    <div className="h-auto w-full bg-[#111111] md:py-16 py-4 px-4 md:px-0 lg:px-0 xl:px-0">
        <div className="content md:text-desktop/h2 text-mobile/h4 font-[MARK_OT] text-white">Peep into Our Cool Gadgets</div>
        <div className="flex md:flex-col flex-col-reverse py-8">
            <div className="content py-6">
                <div className="relative">
                    <img src="/homepage/GadgetsStar.png" alt="GadgetsStar" className="absolute hidden md:flex right-0 -top-20" />
                </div>
                <img src="/homepage/Gadgets.gif" alt="Gadgets" className="hidden md:flex"/>
                <img src="/homepage/CoolGAdgets.gif" alt="gadgets" className="flex md:hidden w-full" />
            </div>
            <div className="content text-white">
                <p className="md:w-2/3 w-full flex-wrap md:text-desktop/body/1 text-desktop/body/2/regular">Check out our lineup of dope gadgets, from itel smartwatches to itel earbuds, blending connectivity with style. Stay ahead of the curve with itel's smart gear—perfect for your vibe!</p>
            </div>
        </div>
    </div>
  )
}

export default CoolGadgets