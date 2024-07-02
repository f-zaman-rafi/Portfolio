import githubIcon from "../../assets/github.svg"
import mailIcon from "../../assets/email.png"
import linkedInIcon from "../../assets/linkedin.svg"


const Navbar = () => {
    return (
        <div className="relative">
            <div className="absolute inset-0 z-20">
                <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 items-center md:justify-between pt-5 md:pt-7 lg:pt-10">
                    <div>
                        <p className="text-4xl font-bold text-white">R A F I</p>
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
                </div>
            </div>
        </div>

    );
};

export default Navbar;