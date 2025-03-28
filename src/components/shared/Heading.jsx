import { motion } from "framer-motion";
import { fadeInOut } from "../../lib/animation";
// eslint-disable-next-line react/prop-types
const Heading = ({ title, desc }) => {
  return (
    <>
      <motion.h1
        variants={fadeInOut("up", 0.1, 20, "spring", 0.2)} // Content fades in from below
        initial="hidden"
        whileInView="visible"
        className="font-bold pb-2 text-transparent bg-clip-text  bg-title-gradient-light dark:bg-title-gradient font-Merienda pt-5 md:pt-14 text-center text-base xs:text-xl sm:text-2xl md:text-3xl"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={fadeInOut("up", 0.2, 20, "tween", 0.4)} // Content fades in from below
        initial="hidden"
        whileInView="visible"
        className="text-xs xs:text-sm md:text-base font-semibold font-bricolage mt-3 text-center"
      >
        {desc}
      </motion.p>
    </>
  );
};

export default Heading;
