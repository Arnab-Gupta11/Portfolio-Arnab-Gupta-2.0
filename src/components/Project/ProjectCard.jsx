/* eslint-disable react/prop-types */
import { useState } from "react";
import BtnIcon from "../shared/BtnIcon";
import Modal from "../shared/Modal";
import { CgDetailsMore } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsIcon from "./ProjectsIcon";
import { motion } from "framer-motion";
import ProjectdDetails from "./ProjectdDetails";
import { rotateY } from "../../lib/animation";
// eslint-disable-next-line react/prop-types
const ProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <motion.div
      variants={rotateY}
      initial="hidden"
      whileInView="visible"
      className="relative rounded-xl group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <motion.div
        className="card card-compact bg-card-gradient-light dark:bg-card-gradient rounded-xl  shadow-project-card-shadow-light dark:shadow-project-card-shadow ">
        <figure className="rounded-xl overflow-hidden p-3">
          <img src={data.coverPhoto} alt="Shoes" className="w-full h-full  group-hover:scale-110 duration-700 " />
        </figure>
        <div className="">
          <div className=" rounded-lg flex flex-row items-center gap-2 px-5 py-3">
            <div className="text-3xl xs:text-4xl sm:text-7xl leading-none font-black text-stroke-4 font-jetBrains">{data.num}</div>
            <div className="">
              <h1 className="text-primary-500 dark:text-secondary-200 font-semibold text-xs xsm:text-base md:text-lg px-4 pb-3 font-jetBrains">{data.title.split("-")[0]}</h1>
              <div className="ml-3 pr-3">
                <ProjectsIcon skills={data.skills} />
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000000e1] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-700 flex items-center justify-center rounded-xl"
      >
        <motion.div className="flex gap-4" initial={{ scale: 0.8 }} animate={{ scale: isHovered ? 1 : 0.8 }} transition={{ duration: 0.3 }}>
          <div
            className="tooltip hover:tooltip-open tooltip-top before:bg-[#26134d] before:mb-1 before:text-[#f0f2f5b3] before:rounded-md before:font-medium before:text-xs"
            data-tip="View Details"
          >
            <BtnIcon Icon={CgDetailsMore} isModal={true} onOpen={() => setShowModal(true)} />
          </div>
          <div
            className="tooltip hover:tooltip-open tooltip-top before:bg-[#26134d] before:mb-1 before:rounded-md before:text-[#f0f2f5b3] before:font-medium before:text-xs"
            data-tip="Check Live Site"
          >
            <BtnIcon Icon={FaExternalLinkAlt} isModal={true} onOpen={() => setShowModal(true)} />
          </div>
        </motion.div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ProjectdDetails data={data} />
      </Modal>
    </motion.div>
  );
};

export default ProjectCard;
