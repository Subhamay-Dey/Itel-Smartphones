import Button from "../Button";

function Mobilehomepage() {
  return (
    <div className='md:hidden lg:hidden block bg-[#111111] max-w-full min-h-screen py-8 px-4 sm:px-6 overflow-hidden'>
      <div className='h-[400px] sm:h-[420px] bg-homepage-bg bg-cover bg-center rounded-2xl overflow-hidden pt-8 px-6 sm:px-8 flex flex-col'>
        <div className="block">
          <p className="text-white font-[MARK_OT] text-mobile/h4">Discover the Next-Gen</p>
          <p className="text-white font-[MARK_OT] text-mobile/h4">Feature Phones with itel</p>
        </div>
        <div className="mt-2">
          <p className="text-[#CECCD5] text-mobile/body/2/regular font-[MARK_OT]">itel's feature phones blend classic simplicity</p>
          <p className="text-[#CECCD5] text-mobile/body/2/regular font-[MARK_OT]">with modern style.</p>
        </div>
        <div className="w-full h-full flex justify-center items-end relative">
          <img src="/miniItel.png" alt="Mini Itel" className="w-4 h-4 absolute top-6 ml-2"/>
          <img src="/mobileview.png" alt="Mobile View" className="absolute z-0 h-52 sm:h-60"/>
          <img
            src="backgroundVideo.gif"
            alt="Background GIF"
            className='w-[250px] sm:w-[300px] lg:w-[400px] h-auto top-12 object-cover absolute z-10'
          />
        </div>
      </div>

      <div className="w-full flex justify-around items-center">
        <div className="grid grid-cols-2 max-w-full gap-2 mt-4">
          <div className="h-[330px] sm:h-[350px] bg-phones-bg w-[180px] sm:w-[210px] rounded-2xl flex flex-col items-center">
            <img src="/SuperGuru4G.png" alt="Super Guru 4G" className="h-48 sm:h-56 mt-2"/>
            <p className="text-white font-[MARK_OT] text-mobile/h6 pb-3">Super Guru 4G</p>
            <p className="text-white font-bold">₹1,799.00</p>
            <Button />
          </div>
          <div className="h-[330px] sm:h-[350px] bg-phones-bg w-[180px] sm:w-[210px] rounded-2xl flex flex-col items-center">
            <img src="/Power120.png" alt="Power 120" className="h-48 sm:h-52 mb-2 sm:mb-6"/>
            <p className="text-white font-[MARK_OT] text-mobile/h6 pb-3">Power120</p>
            <p className="text-[#D9D9D9] font-bold">₹1,399.00</p>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mobilehomepage;
