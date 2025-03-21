/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeInOut } from "../../../lib/animation";
import Button from "../../shared/Button";
import { useState } from "react";
import Modal from "../../shared/Modal";
import ProjectdDetails from "../ProjectdDetails";
import { HiBarsArrowDown } from "react-icons/hi2";
import { TbExternalLink } from "react-icons/tb";
import useResponsiveIconSize from "../../../hooks/useResponsiveIconSize";
const AllProjectCard = ({ data }) => {
  const [showModal, setShowModal] = useState(false);
  const iconSize = useResponsiveIconSize();
  return (
    <div>
      <motion.div
        variants={fadeInOut("up", 0, 40, "spring", 0.02)} // Content fades in from below
        initial="hidden"
        whileInView="visible"
        className="relative group cursor-pointer overflow-hidden duration-500 h-[230px] md:h-80 bg-card-gradient-light dark:bg-card-gradient p-3 rounded-lg"
      >
        <div className="">
          <div className="group-hover:scale-110 w-full h-44 md:h-60 duration-500 rounded-lg">
            <img src={data?.thumbnail} alt="library" className="w-full h-full object-cover rounded-lg group-hover:brightness-50" />
          </div>
          <div className="absolute w-full left-0 p-5 -bottom-11 xsm:-bottom-12 xs:-bottom-[52px] md:-bottom-12  duration-500 group-hover:-translate-y-12 xsm:group-hover:-translate-y-11 xs:group-hover:-translate-y-14 rounded-lg ">
            <div className="absolute -z-10 left-0 w-full h-24 xs:h-[124px] opacity-0 duration-500 group-hover:opacity-95 group-hover:bg-secondary-300 dark:group-hover:bg-[#09040d] rounded-md"></div>
            <h1 className="text-primary-500 dark:text-secondary-200 font-semibold text-xs xsm:text-base md:text-lg font-bricolage hidden md:block mt-5">
              {data?.title}
            </h1>
            <h1 className="text-primary-500 dark:text-secondary-200 font-semibold text-xs xsm:text-base md:text-lg mt-5 font-bricolage block md:hidden">
              {data?.title.length > 15 ? data?.title.slice(0, 15) + "..." : data?.title}
            </h1>
            <div className="group-hover:opacity-100 duration-500 opacity-0">
              <div className="mt-2 md:mt-4 flex items-center justify-start gap-1 xsm:gap-2 md:gap-4 xl:gap-5">
                <motion.div
                  variants={fadeInOut("right", 0.2, 35)} // Content fades in from below
                  initial="hidden"
                  animate="visible"
                >
                  <Button
                    size={"sm"}
                    icon={HiBarsArrowDown}
                    iconAnimation={"transform transition-transform duration-500 group-hover:scale-105"}
                    iconSize={iconSize}
                    onClick={() => setShowModal(true)}
                  >
                    See Details
                  </Button>
                </motion.div>
                <motion.div
                  variants={fadeInOut("left", 0.2, 35)} // Content fades in from below
                  initial="hidden"
                  animate="visible"
                >
                  <a href={data?.liveLink} target="_blank">
                    <Button
                      variant={"outline"}
                      size={"sm"}
                      icon={TbExternalLink}
                      iconAnimation={"transform transition-transform duration-500 group-hover:scale-105"}
                      className={
                        "text-primary-600 border-primary-200 active:bg-secondary-100 hover:text-primary-300 hover:border-secondary-400 active:outline-none"
                      }
                      iconSize={iconSize}
                    >
                      Live
                    </Button>
                  </a>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ProjectdDetails data={data} />
      </Modal>
    </div>
  );
};

export default AllProjectCard;
