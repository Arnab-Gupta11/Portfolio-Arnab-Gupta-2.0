import { useState } from "react";
// import "./project.css";
import BtnIcon from "../shared/BtnIcon";
import Modal from "../shared/Modal";
import { CgDetailsMore } from "react-icons/cg";
import { FaExternalLinkAlt } from "react-icons/fa";
import ProjectsIcon from "./ProjectsIcon";
import { motion } from "framer-motion";
import ProjectdDetails from "./ProjectdDetails";
const ProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="relative rounded-xl " onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="card card-compact bg-card-gradient rounded-xl shadow-project-card-shadow group">
        <figure>
          <img src={data.coverPhoto} alt="Shoes" className="w-full h-full shadow-project-card-shadow p-3 group-hover:scale-105" />
        </figure>
        <div className="">
          <div className=" rounded-lg flex flex-row items-center gap-2 px-5 py-3">
            <div className="text-7xl leading-none font-black text-stroke-2 font-jetBrains">{data.num}</div>
            <div>
              <h1 className="text-[#f0f2f5] font-semibold text-base md:text-lg px-4 pb-3 font-jetBrains">{data.title.split("-")[0]}</h1>
              <div className="ml-3">
                <ProjectsIcon skills={data.skills} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-[#000000e1] bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity ease-in-out duration-700 flex items-center justify-center rounded-xl"
        // initial={{ opacity: 0 }}
        // // animate={{ opacity: isHovered ? 1 : 0 }}
        // whileHover={{ opacity: 1 }}
        // transition={{ duration: 0.3, easings: 34 }}
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
    </div>
  );
};

// const ProjectCard = ({ data }) => {
//   const [showModal, setShowModal] = useState(false);
//   return (
//     <div>
//       <div className="card relative flex items-center justify-center rounded-lg hover:scale-105 bg-card-gradient h-[305px] md:h-[305px]">
//         <div className="absolute w-full h-full">
//           <img className="rounded-lg border-[#070215] border-2" src={data.coverPhoto} alt="" />
//           <div className="bg-gradient-to-br from-[#070215] to-[#120D24]  rounded-lg flex flex-row items-center gap-2 px-5 py-3">
//             <div className="text-7xl leading-none font-black text-stroke-2 font-jetBrains">{data.num}</div>
//             <div>
//               <h1 className="text-[#f0f2f5] font-semibold text-base md:text-lg px-4 pb-3">{data.title}</h1>
//               <div className="avatar-group -space-x-2 rtl:space-x-reverse px-4">
//                 {data.skills.map((skill, index) => (
//                   <ProjectsIcon key={index} skill={skill} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="card__content bg-card-gradient rounded-lg backdrop-brightness-50  absolute w-full h-full top-0 right-0">
//           <div className="w-full h-full flex items-center justify-center gap-5 ">
//             <div
//               className="tooltip hover:tooltip-open tooltip-top before:bg-[#26134d] before:mb-1 before:text-[#f0f2f5b3] before:rounded-md before:font-medium before:text-xs"
//               data-tip="View Details"
//             >
//               <BtnIcon Icon={CgDetailsMore} isModal={true} onOpen={() => setShowModal(true)} />
//             </div>
//             <div
//               className="tooltip hover:tooltip-open tooltip-top before:bg-[#26134d] before:mb-1 before:rounded-md before:text-[#f0f2f5b3] before:font-medium before:text-xs"
//               data-tip="Check Live Site"
//             >
//               <BtnIcon Icon={FaExternalLinkAlt} isModal={true} onOpen={() => setShowModal(true)} />
//             </div>
//           </div>
//         </div>
//       </div>
//
//     </div>
//   );
// };

export default ProjectCard;
