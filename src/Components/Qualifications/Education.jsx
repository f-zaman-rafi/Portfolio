/* eslint-disable react/no-unescaped-entities */

const Education = () => {
    return (
        <div className="pt-20 md:pt-28 lg:pt-44">
            <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold text-white">Education</h1>
            <div className="pt-10 md:pt-16 lg:pt-20">




                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center md:gap-20 lg:gap-32 hover:gap-20 group hover:text-white" style={{ transition: '900ms' }}>
                    <div><h1 className="text-3xl md:text-5xl lg:text-7xl py-5  group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}>2024</h1></div>
                    <div className="md:border-b-2 max-w-3xl pb-10 group-hover:border-[#4EE1A0]" style={{ transition: '900ms' }}>
                        <p className="hover:text-white  text-gray-700 " style={{ transition: '1000ms' }}><span className="font-bold text-2xl group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}> 2024 | January - June </span> Successfully completed the "Complete Web Development Course" by Programming Hero, where I developed a strong foundation in the MERN stack, including ES6, Restful APIs, JWT Authentication,npm packages, GitHub, Chrome Dev Tools, Firebase, and Netlify. This course equipped me with modern web development skills and best practices, leading to a certification that validates my expertise. </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-center md:gap-20 lg:gap-32 hover:gap-20 group hover:text-white" style={{ transition: '900ms' }}>
                    <div><h1 className="text-3xl md:text-5xl lg:text-7xl py-5  group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}>2023</h1></div>
                    <div className="md:border-t-2 max-w-3xl pt-10  group-hover:border-[#4EE1A0]" style={{ transition: '900ms' }}>
                        <p className="hover:text-white text-gray-700 " style={{ transition: '1000ms' }} ><span className="font-bold text-2xl group-hover:text-[#4EE1A0]" style={{ transition: '900ms' }}> 2023 -2026 </span>Currently enrolled in the Bachelor’s program for Computer Science at Lincoln University College, where I am excelling in my studies and developing a deep understanding of core computer science concepts. My academic journey is marked by a commitment to learning, problem-solving, and applying theoretical knowledge to practical scenarios.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Education;