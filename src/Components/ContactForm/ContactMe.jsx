import { useForm } from "react-hook-form";
import { Element } from "react-scroll"

const ContactMe = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <Element name="contact-me"><div className="lg:flex lg:gap-2 mt-28 md:mt-40 pb-20 border-b">
            <div className="lg:w-1/2 text-start ">
                <h1 className="text-[40px] md:text-7xl lg:text-[88px] font-bold text-white text-center lg:text-start">
                    Contact
                </h1>
                <p className="text-center max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:mx-0 lg:text-start pt-5 lg:pt-9 ">I would love to hear about your project and how I could help. Please fill in the form, and I’ll get back to you as soon as possible.</p>
            </div>

            <div className="lg:w-1/2 lg:mx-6">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-6 lg:mt-0">
                    <input {...register("name", { required: true })} aria-invalid={errors.name ? "true" : "false"} type="text" placeholder="NAME" className="block bg-transparent w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 border-b border-gray-200 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" />
                    {errors.name?.type === 'required' && <p role="alert" className="pt-1 pl-4 text-red-600">Name is required</p>}

                    <input  {...register("mail", { required: "Email Address is required" })} aria-invalid={errors.mail ? "true" : "false"} type="email" placeholder="EMAIL" className="block bg-transparent w-full px-5 py-3 mt-6 text-gray-700 placeholder-gray-400 border-b border-gray-200 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" />
                    {errors.mail && <p role="alert" className="pt-1 pl-4 text-red-600">{errors.mail?.message}</p>}
                    <textarea {...register("message", { required: true })} aria-invalid={errors.message ? "true" : "false"} className="block bg-transparent w-full h-32 px-5 py-3 mt-6 text-gray-700 placeholder-gray-400 border-b border-gray-200 md:h-48 focus:border-[#4EE1A0] focus:ring-[#4EE1A0] focus:outline-none focus:ring focus:ring-opacity-0" placeholder="MESSAGE"></textarea>
                    {errors.message?.type === 'required' && <p role="alert" className="pt-1 pl-4 text-red-600">Message is required</p>}
                    <p className="text-center md:text-end pt-8">
                        <button className="border-b-2 border-[#4EE1A0] hover:text-[#4EE1A0] text-lg hover:font-bold py-2 text-md font-normal" style={{ transition: '550ms' }}>
                            get in touch
                        </button>
                    </p>
                </form>
            </div>
        </div>
        </Element>


    );
};

export default ContactMe;