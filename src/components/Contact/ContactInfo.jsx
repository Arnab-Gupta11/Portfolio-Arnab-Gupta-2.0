import { IoLocationSharp } from "react-icons/io5"
import useResponsiveIconSize from "../../hooks/useResponsiveIconSize"
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { motion } from "framer-motion"
import { fadeInOut, rotateIn } from "../../lib/animation";
const ContactInfo = () => {
  const contactInfo = [
    {
      Icon: IoLocationSharp,
      label: "Location:",
      details: "Chattogram,Bangladesh"
    },
    {
      Icon: MdLocalPhone,
      label: "Phone:",
      details: "+8801793109660"
    },
    {
      Icon: MdEmail,
      label: "Email:",
      details: "arnab.gupta.011@gmail.com"
    },
  ]
  const iconSize = useResponsiveIconSize();
  return (
    <div className="mt-10 flex flex-col md:flex-row justify-center items-center gap-5 font-bricolage">
      {
        contactInfo.map((info, index) => {
          const { Icon, label, details } = info;
          return (
            <div key={index} className="flex flex-col justify-center items-center">
              <motion.div
                variants={rotateIn}
                initial="hidden"
                whileInView="visible"
              >

                <Icon className="bg-primary-100 text-black w-8 h-8 xsm:w-10 xsm:h-10 md:w-12 md:h-12 p-2.5 sm:p-3.5 rounded-full" size={iconSize} />
              </motion.div>
              <motion.h1
                variants={fadeInOut("right", 0.2, 20, "tween", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                className="text-primary-500 dark:text-secondary-200 mt-1 mb-0.5 font-semibold text-sm xsm:text-sm md:text-base 2xl:text-lg">{label}</motion.h1>
              <motion.h3
                variants={fadeInOut("left", 0.2, 20, "tween", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                className="text-primary-600 dark:text-secondary-100 font-bold text-[10px] xsm:text-xs md:text-sm 2xl:text-base">{details}</motion.h3>
            </div>)
        })
      }
    </div>
  );
}

export default ContactInfo;
