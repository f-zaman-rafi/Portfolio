import { Element } from "react-scroll";

const Skills = () => {
    return (
        <Element name="expertise"><div className="border-t-[1px] border-b-[1px] md:border-t-[1px] md:border-b-0 mt-20 md:mt-16 lg:mt-[72px]">
            <div className="text-[32px] md:text-5xl font-bold text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 md:gap-x-2 md:gap-y-14 lg:gap-x-9 lg:gap-y-16 text-center md:text-start pt-10 pb-10 md:pb-0  md:pt-[53px] lg:pt-[73px]">
                <p>React JS</p>
                <p>Node JS</p>
                <p>MongoDB</p>
                <p>Express JS</p>
                <p>JavaScript<sub className="md:text-xl text-sm">(ES6+)</sub></p>
                <p>Git & GitHub</p>
            </div>
        </div>
        </Element>
    );
};

export default Skills;