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
      className="font-semibold text-xs xsm:text-sm md:text-3xl bs:text-4xl 2xl:text-6xl text-primary-500 dark:text-[#dddddd] font-bricolage mt-1 xsm:0.5 lg:mt-6"
    >
      I&apos;m a <span className="font-bold">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#8750f7" />
    </motion.h5>
  );
};

export default Designation;
