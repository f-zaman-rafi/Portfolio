import Banner from "../Components/Banner/Banner";
import ContactMe from "../Components/ContactForm/ContactMe";
import Skills from "../Components/Expertise/Skills";
import Navbar from "../Components/Navbar/Navbar";
import Project from "../Components/Projects/Project";
import Education from "../Components/Qualifications/Education";

const Home = () => {
    return (
        <div className="max-w-screen-2xl mx-auto scroll-smooth">
            <div className="mx-auto px-2 md:px-[30px] lg:px-0" style={{ maxWidth: '1110px' }}>
                <Navbar />
                <Banner />
                <Skills />
                <Education />
                <Project />
                <ContactMe />

            </div>
        </div>
    );
};

export default Home;

// px-4 md:px-[30px] lg:px-[165px]