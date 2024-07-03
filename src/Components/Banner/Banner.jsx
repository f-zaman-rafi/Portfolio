/* eslint-disable react/no-unescaped-entities */
import { Element, Link } from "react-scroll";
import image from "../../assets/Banner2.jpg"


const Banner = () => {
    return (
        <Element name="home"><div className="flex flex-col-reverse gap-10 md:gap-0 md:flex-row justify-between items-center md:items-start relative ">
            <div className="flex-1 md:absolute pt-0 z-10">
                <p className="text-[40px] md:text-7xl lg:text-[88px] font-bold md:pt-[198px] text-center md:text-start text-white md:pr-[145px] lg:pr-[135px] md:w-4/5">
                    Nice to meet you! I'm <span className="border-b-[4px] border-[#4EE1A0]">Rafi</span>.
                </p>
                <p className="pt-5 md:pt-14 max-w-sm mx-auto md:mx-0 text-center md:text-start text-gray-300 text-base lg:text-lg font-medium">Based in Malaysia, I’m a MERN Stack Developer with a knack for creating engaging and accessible web experiences.</p>
                <p className="pt-7 md:pt-9 lg:pt-16 text-base text-center md:text-start text-gray-300 "><Link to="contact-me" smooth={true} duration={1500} hashSpy={true} spy={true}><button className="border-b-[4px] border-[#4EE1A0] hover:text-[#4EE1A0] hover:font-bold hover:text-xl" style={{ transition: '400ms' }}>Let's Connect</button></Link></p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end px-6 md:px-0 border-none">
                <div className="relative border-none">
                    <img
                        className="h-[650px] md:h-[600px] lg:h-[720px] w-auto object-cover"
                        src={image}
                        alt="Profile"
                    />
                    <div
                        className="absolute inset-0 border-none"
                        style={{
                            background: 'linear-gradient(to top, rgba(21, 21, 21, 1), #15151500 40%, #15151500), ' +
                                'linear-gradient(to right, rgba(21, 21, 21, 1), #15151500 40%, #15151500), ' +
                                'linear-gradient(to left, rgba(21, 21, 21, 1), #15151500 30%, #15151500), ' +
                                'linear-gradient(to bottom, rgba(21, 21, 21, 1), #15151500 20%, #15151500), ' +
                                'linear-gradient(to bottom right, rgba(21, 21, 21, 1), #15151500 30%, #15151500), ' +
                                'linear-gradient(to bottom left, rgba(21, 21, 21, 1), #15151500 30%, #15151500)'
                        }}


                    ></div>
                </div>


            </div>
        </div >
        </Element>
    );
};

export default Banner;

