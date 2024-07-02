import githubIcon from "../../assets/github.svg"
import mailIcon from "../../assets/email.png"
import linkedInIcon from "../../assets/linkedin.svg"


const Navbar = () => {
    return (
        <div className="flex flex-row-reverse items-center justify-between py-12">
            <div>
                <p className="text-[24px] md:text-[32px] font-bold text-white">R A F I</p>
            </div>
            <div className="flex gap-5 md:gap-[30px] items-center md:pr-7">
                <a href="https://github.com/F-Zaman-Rafi" aria-label="See my works on github" target="_blank" rel="noopener noreferrer">
                    <img className="h-3 md:h-6 w-3 md:w-6" src={githubIcon} alt="gitHub icon" />
                </a>
                <a href="mailto:f.zaman.rafi@gmail.com" aria-label="Email me" target="_blank" rel="noopener noreferrer">
                    <img className="h-3 md:h-6 w-3 md:w-6" src={mailIcon} alt="Email icon" />

                </a>

                <a href="https://www.linkedin.com/in/f-zaman-rafi" aria-label="Text me on linkedIn" target="_blank" rel="noopener noreferrer">
                    <img className="h-3 md:h-6 w-3 md:w-6" src={linkedInIcon} alt="linkedin icon" />
                </a>
            </div>
        </div>
    );
};

export default Navbar;