import Button from "../shared/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import Status from "./Status";
import Designation from "./Designation";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { fadeInOut, zoomIn } from "../../lib/animation";
import cover from "../../assets/cover.jpg";
const Introduction = () => {
  return (
    <div className="z-10 bg-[#E2EDF6] dark:bg-[#09040d] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141] p-3 md:p-7 mt-5">
      <div id="home" className="relative pb-8 xsm:pb-12 pt-5 md:pt-8">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 rounded-xl">
          <motion.img
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 1.2, duration: 1, ease: "easeInOut" },
            }}
            src={cover}
            alt="Background"
            className="w-full h-full object-cover scale-x-[-1] rounded-xl"
          />
          {/* Overlay */}
          <div className="absolute rounded-lg inset-0  bg-secondary-300 dark:bg-[#09040d] opacity-85 dark:opacity-95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <div className="text-stroke-3 dark:text-stroke-1 text-[44px] xs:text-6xl xs:text-[80px] sm:text-7xl md:text-[120px] lg:text-[150px] 2xl:text-[180px] absolute bottom-1 xsm:bottom-3 md:bottom-0 left-0 w-full text-center font-black animate-pulse font-sans select-none -z-10">
            WELCOME
          </div>
          <Status />
          <div className="mt-8 lg:mt-12 text-center">
            <motion.h3
              variants={fadeInOut("left", 0.2, 80)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-bricolage text-[10px] xsm:text-sm sm:text-base xl:text-xl 2xl:text-4xl font-semibold text-primary-600 dark:text-[#f0f2f5b3]"
            >
              Hi there!👋
            </motion.h3>
            <motion.h1
              variants={zoomIn()}
              initial="hidden"
              whileInView="visible"
              className="font-bold text-xl xsm:text-[26px] xs:text-4xl sm:text-[55px] md:text-[68px] bs:text-[80px] 2xl:text-[110px] xsm:h-10 xsm:pt-1.5 xs:h-14  xs:pt-1.5 sm:h-28 sm:pt-7 text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-Merienda mt-2 md:mt-5 "
            >
              I&apos;m Arnab Gupta
            </motion.h1>
            <Designation />
            <motion.div
              variants={fadeInOut("right", 0.2, 80)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-5 md:mt-10"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                className={`cursor-pointer text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8]`}
              >
                <Button
                  size={"auto"}
                  icon={PiArrowUpRightBold}
                  iconPosition={"right"}
                  iconAnimation={"transform transition-transform duration-500 group-hover:rotate-45 font-semibold"}
                  className={"z-10"}
                >
                  My Works
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>

    // <Container>
    //   <div id="home" className="pb-8 xsm:pb-12 pt-5 md:pt-8 relative">
    //     <div className="text-stroke-3 dark:text-stroke-1 text-[44px] xs:text-6xl xs:text-[80px] sm:text-7xl md:text-[120px] lg:text-[150px] 2xl:text-[180px] absolute bottom-1 xsm:bottom-3 md:bottom-0 left-0 w-full text-center font-black animate-pulse font-sans select-none z-0">
    //       WELCOME
    //     </div>
    //     <Status />
    //     <div className="mt-8 lg:mt-12 ml-4 xs:ml-0 text-center">
    //       <motion.h3
    //         variants={fadeInOut("left", 0.2, 80)} // Content fades in from below
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true }}
    //         className="font-bricolage text-xs xsm:text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-semibold text-primary-600 dark:text-[#f0f2f5b3]">Hi there!👋</motion.h3>
    //       <motion.h1
    //         variants={zoomIn()} // Content fades in from below
    //         initial="hidden"
    //         whileInView="visible"
    //         className="font-bold text-[32px] xsm:text-[38px] xs:text-6xl md:text-8xl lg:text-[110px] 2xl:text-[110px]  text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-DancingScript mt-2 md:mt-5">
    //         I&apos;m Arnab Gupta
    //       </motion.h1>
    //       <Designation />
    //       <motion.div
    //         variants={fadeInOut("right", 0.2, 80)} // Content fades in from below
    //         initial="hidden"
    //         whileInView="visible"
    //         viewport={{ once: true }}
    //         className="mt-5 md:mt-10">
    //         <Link
    //           to="projects"
    //           spy={true}
    //           smooth={true}
    //           offset={-72}
    //           duration={500}
    //           className={`cursor-pointer text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8]`}
    //         >
    //           <Button size={"auto"} icon={PiArrowUpRightBold} iconPosition={"right"} iconAnimation={"transform transition-transform duration-500 group-hover:rotate-45 font-semibold"} className={"z-10"}>My Works</Button>
    //         </Link>
    //       </motion.div>
    //     </div>
    //     <div className=" bg-gray-900 overflow-hidden">{/* <TextSlider /> */}</div>
    //   </div>
    // </Container>
  );
};

export default Introduction;
//#b964a8
