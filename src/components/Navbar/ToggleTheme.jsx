import { motion } from 'framer-motion';
import { BsMoonStarsFill } from "react-icons/bs";
import { IoSunny } from "react-icons/io5";
import useToggleTheme from '../../hooks/useToggleTheme';
const ToggleTheme = () => {
  const { mode, handleToggle } = useToggleTheme();
  return (
    <motion.button
      onClick={handleToggle}
      className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-secondary-300 dark:hover:bg-[#120D24] focus:outline-none"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={false}
      animate={{ rotate: mode === 'dark' ? -360 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        key={mode === 'dark' ? 'moon' : 'sun'}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        {mode === 'light' ? <BsMoonStarsFill size={24} className="text-primary-300" /> : <IoSunny size={24} className="text-yellow-400" />}
      </motion.div>
    </motion.button>
  )
}

export default ToggleTheme
