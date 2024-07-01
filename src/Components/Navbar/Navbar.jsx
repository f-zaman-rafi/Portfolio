import githubIcon from "../../assets/github.svg"
import xIcon from "../../assets/X.svg"
import linkedInIcon from "../../assets/linkedin.svg"


const Navbar = () => {
    return (
        <div className="flex justify-between pt-10">
            <div><p className="text-[32px] font-bold">R A F I</p></div>
            <div className="flex gap-[30px] items-center">
                <img className="" src={githubIcon} alt="github icon" />
                <img className="h-[24px] w-[24px]" src={xIcon} alt="x icon" />
                <img className="" src={linkedInIcon} alt="linkedIn icon" />
            </div>
        </div>
    );
};

export default Navbar;