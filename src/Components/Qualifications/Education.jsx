/* eslint-disable react/no-unescaped-entities */

import { Element } from "react-scroll";

const Education = () => {
    return (
        <Element name="education"><div className="mt-20 md:mt-28 lg:mt-44">
            <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold text-white">Education</h1>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center md:gap-20 lg:gap-32 lg:hover:gap-20 group hover:text-white" style={{ transition: '900ms' }}>
                    <div className="w-52 lg:text-center"><h1 className="text-3xl md:text-5xl lg:text-7xl py-5  group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}>2023</h1></div>
                    <div className="md:border-b-2 max-w-3xl md:pb-10  group-hover:border-[#4EE1A0]" style={{ transition: '900ms' }}>
                        <p className="hover:text-white text-gray-700 " style={{ transition: '1000ms' }} ><span className="font-bold text-2xl group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}> 2023 - 2026 </span>I'm currently pursuing a Bachelor's in Computer Science at Lincoln University College, where I’m excelling in core concepts and actively applying theoretical knowledge to real-world challenges. My academic journey is driven by a strong commitment to learning, problem-solving, and continuous improvement.</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center md:gap-20 lg:gap-32 lg:hover:gap-20 group hover:text-white" style={{ transition: '900ms' }}>
                    <div className="w-52 lg:text-center"><h1 className="text-3xl md:text-5xl lg:text-7xl  pb-5 pt-10 group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}>2017</h1></div>
                    <div className="md:border-t-2 max-w-3xl md:pt-10 group-hover:border-[#4EE1A0]" style={{ transition: '900ms' }}>
                        <p className="hover:text-white text-gray-700 " style={{ transition: '1000ms' }}><span className="font-bold text-2xl group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}> 2017 - 2022 </span>
                            I earned my diploma in Computer Technology from Narshingdi Polytechnic Institute in 2022, where I developed a strong foundation in software development, networking, and hardware systems. This hands-on experience has equipped me with the technical skills and adaptability needed to excel in the rapidly evolving tech industry.</p>
                    </div>
                </div>

            </div>
        </div >
        </Element >
    );
};

export default Education;