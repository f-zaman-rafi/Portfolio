import Banner from "../Components/Banner/Banner";
import Skills from "../Components/Expertise/Skills";
import Navbar from "../Components/Navbar/Navbar";
import Education from "../Components/Qualifications/Education";

const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto scroll-smooth">
            <div className="mx-auto px-2 md:px-[30px] lg:px-0" style={{ maxWidth: '1110px' }}>
                <Navbar />
                <Banner />
                <Skills />
                <Education />
            </div>
        </div>
    );
};

export default Main;

// px-4 md:px-[30px] lg:px-[165px]