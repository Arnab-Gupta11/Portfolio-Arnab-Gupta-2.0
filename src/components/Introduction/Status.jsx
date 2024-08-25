import { motion } from "framer-motion";
import { fadeInOut } from "../../lib/animation";
const Status = () => {
  return (
    <motion.div
      variants={fadeInOut("right", 0.2)} // Content fades in from below
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="flex items-center gap-2 bg-secondary-300 dark:bg-[#120D24] w-28 xsm:w-32 sm:w-36 2xl:w-44 justify-center px-2 py-1.5 xsm:py-2 xsm:px-3 rounded-2xl ml-4 xl:ml-12">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 duration-300"></span>
        <span className="absolute top-0.5 left-0.5 rounded-full h-2 w-2 bg-green-600"></span>
      </span>
      <span className="font-semibold font-bricolage text-[10px] xs:text-xs 2xl:text-lg text-primary-600 dark:text-secondary-100">Open to work</span>
    </motion.div>
  );
};

export default Status;
