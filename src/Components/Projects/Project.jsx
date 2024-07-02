/* eslint-disable react/no-unescaped-entities */
import { Element } from "react-scroll";
import projectImage from "../../assets/project.jpg"
const Project = () => {
    return (
        <Element name="projects"> <div className="my-20 md:mt-28 lg:mt-44">
            <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold text-white">Projects</h1>
            <div className="pt-10 md:pt-16 lg:pt-20">
                <div href="#" className="flex flex-col items-center rounded-lg md:flex-row-reverse md:max-w-4xl lg:max-w-5xl lg:hover:max-w-full gap-5" style={{ transition: '1000ms' }}>
                    <img className="object-cover w-full rounded-lg h-96 md:h-auto md:w-48 md:rounded-lg" src={projectImage} alt="Project ThinkSync 2024" />
                    <div className="flex flex-col justify-between p-4 leading-normal group">
                        <h5 className="mb-5 text-2xl font-bold tracking-tight text-white group-hover:text-[#4EE1A0]" style={{ transition: '1000ms' }}>Project ThinkSync 2024</h5>
                        <p className="mb-3 font-normal text-gray-700  hover:text-white" style={{ transition: '1000ms' }}>Developed a Collaborative Study Platform connecting students, tutors, and administrators for streamlined study session scheduling, resource sharing, and user management. Implemented authentication with JWT and social login, role-based access control, and dynamic homepage content. Built student, tutor, and admin dashboards for managing sessions, notes, and materials. Utilized the MERN stack and tools like TanStack Query, Firebase, and Netlify, resulting in a robust platform validated by certification in advanced web development practices.</p>
                        <a href="https://thinksync.netlify.app" aria-label="Email me" target="_blank" rel="noopener noreferrer" className="pt-7 md:pt-9 lg:pt-12 text-base font-bold text-start text-white lg:opacity-0 lg:group-hover:opacity-100" style={{ transition: '1000ms' }}><span className="border-b-[4px] border-[#4EE1A0]">I am the Project</span></a>
                    </div>
                </div>
            </div>
        </div >
        </Element>
    );
};

export default Project;