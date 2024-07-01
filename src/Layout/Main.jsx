import Banner from "../Components/Banner/Banner";
import Navbar from "../Components/Navbar/Navbar";

const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto scroll-smooth px-4 md:px-[30px] lg:px-[165px]">
            <Navbar />
            <Banner />
        </div>
    );
};

export default Main;