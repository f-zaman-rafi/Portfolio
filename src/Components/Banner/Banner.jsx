/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-scroll";
import image from "../../assets/Banner2.jpg"


const Banner = () => {
    return (
        <div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center md:items-start relative ">
            <div className="flex-1 md:absolute pt-0 z-10">
                <p className="text-[40px] md:text-7xl lg:text-[88px] font-bold md:pt-[198px] text-center md:text-start text-white md:pr-[150px] lg:pr-[135px] md:w-4/5">
                    Nice to meet you! I'm <span className="border-b-[4px] border-[#4EE1A0]">Rafi</span>.
                </p>
                <p className="pt-5 md:pt-14 max-w-sm mx-auto md:mx-0 text-center md:text-start text-gray-300 text-base lg:text-lg font-medium">Based in Malaysia, I’m a MERN Stack Developer with a knack for creating engaging and accessible web experiences.</p>
                <Link to="Contact" smooth={true} duration={1500} ><p className="pt-7 md:pt-9 lg:pt-16 text-base font-bold text-center md:text-start text-gray-300 "><span className="border-b-[4px] border-[#4EE1A0]">Let's Connect</span></p></Link>
            </div>
            <div className="flex-1 flex justify-center md:justify-end px-6 md:px-0">
                <img
                    className="h-[650px] md:h-[600px] lg:h-[720px] w-auto object-cover"
                    src={image}
                    alt="Profile"
                />

            </div>
        </div >

    );
};

export default Banner;

// max-w-[353px] md:max-w-[443px] lg:max-w-[800px] 