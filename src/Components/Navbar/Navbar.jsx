import githubIcon from "../../assets/github.svg"
import xIcon from "../../assets/X.svg"
import linkedInIcon from "../../assets/linkedin.svg"


const Navbar = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-10">
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 items-center md:justify-between pt-5 md:pt-7 lg:pt-10">
                    <div>
                        <p className="text-[24px] md:text-[32px] font-bold text-white">R A F I</p>
                    </div>
                    <div className="flex gap-5 md:gap-[30px] items-center md:pr-7">
                        <a href="https://github.com/F-Zaman-Rafi" target="_blank" rel="noopener noreferrer">
                            <img className="h-3 md:h-6 w-3 md:w-6" src={githubIcon} alt="github icon" />
                        </a>
                        <img className="h-3 md:h-6 w-3 md:w-6" src={xIcon} alt="x icon" />
                        <a href="https://www.linkedin.com/in/f-zaman-rafi" target="_blank" rel="noopener noreferrer">
                            <img className="h-3 md:h-6 w-3 md:w-6" src={linkedInIcon} alt="linkedin icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Navbar;