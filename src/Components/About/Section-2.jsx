export default function Section_2() {
    return <>
        <section className="w-full lg:h-screen px-1 lg:px-8 xl:px-24 flex items-center flex-wrap gap-8 lg:gap-0">
            <div className="w-full lg:w-1/2 h-4/6 flex flex-col pt-20 lg:pt-10 gap-2 lg:gap-8 items-center lg:items-start text-center lg:text-start">
                <h1 className="text-lg text-[#f0b797]">WELCOME TO FIND STAYS</h1>
                <h1 className="w-full lg:w-[75%] text-[2.50rem] lg:text-5xl">We Are The Best Host For Your Comfort</h1>
                <div className="w-[95%] lg:w-[78%] flex flex-wrap gap-5">
                    <p>
                        At Sind Stays, we have redefined luxury in accommodation with an
                        innovative approach. Our platform offers a seamless way to discover top-notch
                        hotels that elevate your travel experience.
                    </p>
                    <p>
                        Experience exceptional comfort and elegance in our curated selection
                        of hotels. Each option is chosen to ensure your stay is both luxurious
                        and memorable.
                    </p>
                </div>
                <button className="px-8 py-2 bg-[#f0b797] text-white rounded-full">Book Now</button>
            </div>
            <div className="w-full lg:w-1/2 h-5/6 flex justify-between items-center flex-wrap lg:flex-nowrap px-2 lg:px-0 gap-5 lg:gap-8">
                <div className="w-full sm:w-[48%] lg:w-[48%] h-[50vh] lg:h-4/6 lg:mt-36 cards-About-1 rounded-xl lg:hover:scale-90"></div>
                <div className="w-full sm:w-[48%] lg:w-[48%] h-[50vh] lg:h-4/6 lg:mt-[-10vh] cards-About-2 rounded-xl lg:hover:scale-90"></div>
            </div>
        </section>
    </>
}