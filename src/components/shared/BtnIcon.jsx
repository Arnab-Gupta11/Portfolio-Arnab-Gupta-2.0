import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const BtnIcon = ({ Icon, isModal, onOpen }) => {
  // console.log(openModal);
  return isModal ? (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="border-2 rounded-full p-4 text-[#f0f2f5] hover:text-[#9C6FF8] hover:border-[#9C6FF8] hover:shadow-inner hover:shadow-[#8750f733] bg-[#0a0716]"
      onClick={onOpen}
    >
      <Icon />
    </motion.button>
  ) : (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="border-2 rounded-full p-4 text-[#f0f2f5] hover:text-[#9C6FF8] hover:border-[#9C6FF8] hover:shadow-inner hover:shadow-[#8750f733] bg-[#0a0716]"
    >
      <Icon />
    </motion.button>
  );
};

export default BtnIcon;
