import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { zoomIn } from "../../lib/animation";
const Designation = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    loop: {},
  });
  return (
    <motion.h5
      variants={zoomIn(0.4)} // Content fades in from below
      initial="hidden"
      whileInView="visible"
      className="font-semibold text-xs xsm:text-lg md:text-4xl lg:text-5xl 2xl:text-6xl text-primary-500 dark:text-[#dddddd] font-bricolage mt-1 xsm:mt-2 lg:mt-7">
      I&apos;m a <span className="font-bold">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#8750f7" />
    </motion.h5>
  )
}

export default Designation;
