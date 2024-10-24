import Marquee from "react-fast-marquee"

const DareToDoIt = () => {
    return (
		<div className="h-auto bg-[#131313] overflow-hidden">
			<div className='rotate-6 relative items-center justify-center w-[150%] -translate-x-20'>
				<div className='bg-[#131313] pt-[20px] md:pt-[200px] pb-[20px] md:pb-[200px]'>
					<Marquee speed={100} direction='right' autoFill={true}>
						<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] pb-2'>
							<img src='/homepage/dareHeart.png' alt="style" /> BOLD 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> STYLE 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> POTENTIAL 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> ACTIVE 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> FUNKY 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> ENERGETIC 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> PLAYFUL
						</h3>
					</Marquee>

					<Marquee speed={100} autoFill={true}>
						<h1 className='text-[#FF0037] text-[102px] md:text-[226px] font-[900] border-y-2 border-dashed border-[#FF0037] py-2'>
							DARE TO DO IT!
						</h1>
					</Marquee>

					<Marquee speed={100} direction='right' autoFill={true}>
						<h3 className='flex items-center text-[#FFFFFF] text-[16px] md:text-[35px] font-[800] pt-2'>
							<img src={'/homepage/dareSquare.png'} alt="bold" /> BOLD 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> STYLE 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> POTENTIAL 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> ACTIVE 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> FUNKY 
							<img className='pl-4' src='/homepage/dareHeart.png' alt="style" /> ENERGETIC 
							<img className='pl-4' src='/homepage/dareSquare.png' alt="bold" /> PLAYFUL
						</h3>
					</Marquee>
				</div>
			</div>
		</div>
    )
}

export default DareToDoIt