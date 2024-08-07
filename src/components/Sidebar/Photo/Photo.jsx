import { motion } from "framer-motion";
const Photo = () => {
  return (
    <div className="relative z-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[150px] h-[150px] xsm:w-[200px] xsm:h-[200px] sm:w-[298px] sm:h-[298px] 2xl:w-[398px] 2xl:h-[398px] mix-blend-lighten absolute lg:ml-1"
        >
          <img className="object-contain" src="/src/assets/profilePhoto.png" alt="profile photo" />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className={"w-[152px] h-[152px] xsm:w-[202px] xsm:h-[202px] sm:w-[300px] sm:h-[300px] 2xl:w-[400px] 2xl:h-[400px]"}
          fill="#120D24"
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
