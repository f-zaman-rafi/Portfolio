/* eslint-disable react/no-unescaped-entities */
import image from "../../assets/Banner2.jpg"


const Banner = () => {
    return (
        <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center md:items-start relative">
            <div className="flex-1 lg:absolute pt-0 z-20">
                <p className="text-[40px] md:text-7xl lg:text-[88px] font-bold md:pt-[198px] text-center md:text-start text-white lg:mr-[400px]">
                    Nice to meet you! I'm <span className="border-b-[4px] border-[#4EE1A0]">Rafi</span>.
                </p>
                <p className="pt-5 md:pt-14   max-w-md mx-auto md:mx-0 text-center md:text-start text-gray-300 text-base lg:text-lg font-medium">Based in Malaysia, I’m a MERN Stack Developer with a knack for creating engaging and accessible web experiences.</p>
                <p className="pt-7 md:pt-9 lg:pt-16 text-base font-bold text-center md:text-start text-gray-300 "><span className="border-b-[4px] border-[#4EE1A0]">Let's Connect</span></p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end px-6 md:px-0">
                <img
                    className="h-[650px] md:h-[600px] lg:h-[720px] w-auto object-cover"
                    src={image}
                    alt="Profile"
                />

            </div>
        </div>

    );
};

export default Banner;