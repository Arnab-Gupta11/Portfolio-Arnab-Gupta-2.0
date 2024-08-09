import { MdEmail } from "react-icons/md";
import cn from "../../lib/cn";
import Button from "../shared/Button"
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { BsChatFill } from "react-icons/bs";
const ContactForm = () => {
  const baseStyle = "bg-[#120D24] text-[#EAF9F7] text-[10px] xsm:text-xs sm:text-sm font-medium block p-2 w-full rounded-lg ";
  return (
    <div className=" max-w-lg mx-auto bg-card-gradient shadow-project-details-shadow focus-within:shadow-contact-form-shadow rounded-xl mt-10 font-bricolage">
      <form
        className="w-full px-2 py-2 xsm:px-3.5 xsm:py-3.5 sm:px-5 sm:py-5 md:px-10 md:py-10"
        // style={shadow}
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="200"
        data-aos-offset="0"
        autoComplete="off"
      >

        <div className="flex flex-col gap-4 mb-4">
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100")}>
              <FaUser className="text-gray-400 ml-2" size={14} />
              <input type="text" placeholder="Name*" />
            </label>
          </div>
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100")}>
              <FaPhoneAlt className="text-gray-400 ml-2" size={14} />
              <input type="text" placeholder="Phone*" />
            </label>
          </div>
          <div>
            <label className={cn(baseStyle, "input flex items-center gap-2 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100")}>
              <MdEmail className="text-gray-400 ml-2" size={14} />
              <input type="text" placeholder="Email*" />
            </label>
          </div>
          <div className="relative grid grid-cols-1 ">
            <div className="absolute left-0 top-4 flex items-center">
              <BsChatFill className="text-gray-400 ml-4" size={14} />
            </div>
            <textarea
              name="message"
              id="message"
              rows="5"
              className={cn(baseStyle, "pl-[38px] pt-4 md:pt-3.5 focus-within:outline-none focus-within:shadow-sm focus-within:shadow-primary-100 rota")}
              placeholder="Your Message*"
            ></textarea>
          </div>
        </div>
        <Button icon={IoIosSend} size={"md"} iconPosition={"right"} iconAnimation={"transform transition-transform group-hover:rotate-12 group-hover:translate-x-1.5 group-hover:-translate-y-1.5 duration-700"}>Send Message</Button>
      </form>
    </div>
  )
}

export default ContactForm
