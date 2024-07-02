
const ContactMe = () => {
    return (
        <div className="lg:flex lg:gap-2 pt-16 md:pt-24">
            <div className="lg:w-1/2 text-start ">
                <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold text-white text-center lg:text-start">
                    Contact
                </h1>
                <p className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:text-start pt-5 lg:pt-9 ">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>

            <div className="lg:w-1/2 lg:mx-6">
                <form className="mt-6 lg:mt-0">
                    <input type="text" placeholder="NAME" className="block bg-transparent w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-b border-gray-200 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" />
                    <input type="email" placeholder="EMAIL" className="block bg-transparent w-full px-5 py-3 mt-6 text-gray-700 placeholder-gray-400 border-b border-gray-200 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" />
                    <textarea className="block bg-transparent w-full h-32 px-5 py-3 mt-6 text-gray-700 placeholder-gray-400 border-b border-gray-200 md:h-48 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" placeholder="MESSAGE"></textarea>
                    <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        get in touch
                    </button>
                </form>
            </div>
        </div>


    );
};

export default ContactMe;