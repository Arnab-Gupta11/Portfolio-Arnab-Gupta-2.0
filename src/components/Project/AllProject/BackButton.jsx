import { useNavigate } from 'react-router-dom';
import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { motion } from 'framer-motion';

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <motion.button
      onClick={handleGoBack}
      className="flex items-center justify-center rounded-full bg-button-gradient-hover dark:bg-button-gradient w-7 h-7 md:w-8 md:h-8 bs:w-10 bs:h-10 p-2 text-white group"
      whileHover={{
        scale: 1.2,
        // rotate: -10,
        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.3)',
      }} // Hover effect
      whileTap={{
        scale: 0.9,
        // rotate: 10,
      }} // Tap effect
      initial={{
        x: -50,
        opacity: 0,
        // rotate: -45,
      }} // Initial state before appearing
      animate={{
        x: 0,
        opacity: 1,
        // rotate: 0,
      }} // Animation when component is rendered
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        duration: 0.5,
      }} // Spring animation
    >
      <RiArrowLeftDoubleFill  className={"group-hover:scale-105"}/>
    </motion.button>
  );
};

export default BackButton;
