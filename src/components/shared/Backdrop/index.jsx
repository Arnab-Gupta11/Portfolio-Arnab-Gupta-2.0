import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      className="absolute top-0 left-0 h-full w-full  bg-[#000000e1] flex items-center justify-center"
      onClick={onClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
