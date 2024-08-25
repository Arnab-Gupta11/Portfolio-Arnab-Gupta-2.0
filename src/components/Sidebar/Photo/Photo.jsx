import { motion } from "framer-motion";
import useToggleTheme from "../../../hooks/useToggleTheme";
const Photo = () => {
  const { mode } = useToggleTheme();
  return (
    <div className="relative z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[150px] h-[150px] xsm:w-[200px] xsm:h-[200px] sm:w-[298px] sm:h-[298px] 2xl:w-[398px] 2xl:h-[398px] absolute ml-0.5 mt-0.5 xsm:ml-1 sm:mt-1 rounded-full dark:bg-[#120D24] bg-[#c7d6ef]">
          <img className="object-contain " src="/src/assets/profilePhoto.png" alt="profile photo" />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className={"w-[154px] h-[154px] xsm:w-[206px] xsm:h-[206px] sm:w-[306px] sm:h-[306px] 2xl:w-[400px] 2xl:h-[400px] "}
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#9C6FF8"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={"mx-auto"}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
