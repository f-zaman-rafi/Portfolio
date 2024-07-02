import githubIcon from "../../assets/github.svg"
import mailIcon from "../../assets/email.png"
import linkedInIcon from "../../assets/linkedin.svg"
import { Link } from "react-scroll";


const Navbar = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-3 items-center justify-between pt-12 pb-5">
            <div>
                <p className="text-4xl font-bold text-white"><Link to="home" smooth={true} duration={1500} hashSpy={true} spy={true}><span className="hover:text-[#4EE1A0]" style={{ transition: '1000ms' }}>R A F I</span></Link></p>
            </div>


            <div className="flex gap-5 md:gap-[30px] items-center md:pr-7 ">
                <a href="https://github.com/F-Zaman-Rafi" aria-label="See my works on github" target="_blank" rel="noopener noreferrer">
                    <img className="h-6 hover:h-8 hover:w-8 w-6" style={{ transition: '200ms' }} src={githubIcon} alt="gitHub icon" />
                </a>
                <a href="mailto:f.zaman.rafi@gmail.com" aria-label="Email me" target="_blank" rel="noopener noreferrer">
                    <img className="h-6 hover:h-8 hover:w-8 w-6" style={{ transition: '200ms' }} src={mailIcon} alt="Email icon" />

                </a>

                <a href="https://www.linkedin.com/in/f-zaman-rafi" aria-label="Text me on linkedIn" target="_blank" rel="noopener noreferrer">
                    <img className="h-6 hover:h-8 hover:w-8 w-6" style={{ transition: '200ms' }} src={linkedInIcon} alt="linkedin icon" />
                </a>
            </div>
            <div className="flex gap-5">
                <button className="text-sm md:text-base md:font-bold text-white"><Link to="expertise" smooth={true} duration={1500} hashSpy={true} spy={true}><span className="hover:text-[#4EE1A0]" style={{ transition: '1000ms' }}>Experties</span></Link></button>
                <button className="text-sm md:text-base md:font-bold text-white"><Link to="education" smooth={true} duration={1500} hashSpy={true} spy={true}><span className="hover:text-[#4EE1A0]" style={{ transition: '1000ms' }}>Education</span></Link></button>
                <button className="text-sm md:text-base md:font-bold text-white"><Link to="projects" smooth={true} duration={1500} hashSpy={true} spy={true}><span className="hover:text-[#4EE1A0]" style={{ transition: '1000ms' }}>Projects</span></Link></button>
            </div>
        </div>
    );
};

export default Navbar;