import { MdEmail } from "react-icons/md";
import cn from "../../lib/cn";
import Button from "../shared/Button"
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { TbSend } from "react-icons/tb";
import { BsChatFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
const ContactForm = () => {
  const baseStyle = "bg-[#E6EBF4] dark:bg-[#120D24] text-primary-600 dark:text-[#EAF9F7] text-[10px] xsm:text-xs sm:text-sm font-medium block p-2 w-full rounded-lg ";

  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = async (data, e) => {
    setLoading(true);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          toast.success('Thank you for getting in touch! I have received your message')
          e.target.reset();
          reset();
          setLoading(false);
        } else {
          // setIsSuccess(false);
          // setMessage(json.message);
        }
      })
      .catch((error) => {
        // setIsSuccess(false);
        // setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };
  return (
    <div className=" max-w-lg mx-auto bg-card-gradient-light dark:bg-card-gradient  shadow-project-details-shadow-light dark:shadow-project-details-shadow focus-within:shadow-contact-form-shadow rounded-xl mt-10 font-bricolage">
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full px-3.5 py-3.5 sm:px-5 sm:py-5 md:px-10 md:py-10 mb-5 md:mb-10"
        // style={shadow}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
        autoComplete="off"
      >
        <input type="hidden"
          value="b52afaa8-786e-48a2-b3e3-e56a4e032135"
          {...register("access_key")} />

        <div className="flex flex-col gap-4 mb-4">
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100 group")}>
              <FaUser className="text-gray-400 ml-2 group-focus-within:text-primary-100" size={14} />
              <input type="text" placeholder="Name*" {...register("name", { required: true })} />

            </label>
            {errors.name && <span className="text-primary-100 font-medium text-[10px] xsm:text-xs 2xl:text-sm">Name is required</span>}
          </div>
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100 group")}>
              <FaPhoneAlt className="text-gray-400 ml-2 group-focus-within:text-primary-100" size={14} />
              <input type="text" placeholder="Phone*" {...register("phone", { required: true })} />
            </label>
            {errors.phone && <span className="text-primary-100 font-medium text-[10px] xsm:text-xs 2xl:text-sm">Phone number is required</span>}
          </div>
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100 group")}>
              <MdEmail className="text-gray-400 ml-2 group-focus-within:text-primary-100" size={14} />
              <input type="email" placeholder="Email*" {...register("email", { required: true })} />
            </label>
            {errors.email && <span className="text-primary-100 font-medium text-[10px] xsm:text-xs 2xl:text-sm">Email is required</span>}
          </div>

          <div className="relative grid grid-cols-1 group">
            <div className="absolute left-0 top-4 flex items-center">
              <BsChatFill className="text-gray-400 ml-4 group-focus-within:text-primary-100" size={14} />
            </div>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={cn(baseStyle, "pl-[38px] pt-4 md:pt-3.5 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100 rota")}
              placeholder="Your Message*"
              {...register("message", { required: true })}
            />
            {errors.message && <span className="text-primary-100 font-medium text-[10px] xsm:text-xs 2xl:text-sm mt-1 ">Message is required</span>}
          </div>
        </div>
        <Button icon={loading ? ImSpinner9 : TbSend} size={"md"} iconPosition={"right"} iconAnimation={loading ? "animate-spin" : "transform transition-transform group-hover:rotate-12 group-hover:translate-x-1 group-hover:-translate-y-1.5 duration-700"}>Send Message</Button>
      </form>
    </div>
  )
}

export default ContactForm
