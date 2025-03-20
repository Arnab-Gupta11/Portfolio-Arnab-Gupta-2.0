import { useEffect } from "react";



import { motion } from "framer-motion";
import { fadeInOut, zoomIn } from "../../lib/animation";
import BackButton from "../Project/AllProject/BackButton";
import { projectsData } from "../../data/projectsData";
import AllProjectCard from "../Project/AllProject/AllProjectCard";

const AllBlogs = () => {
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "dark";
    document.documentElement.classList.add(currentMode);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5 px-3 xsm:px-5 sm:px-5 xl:px-0">
        <div className="z-10 bg-[#E2EDF6] dark:bg-[#09040d] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141] p-7">
          <div className="flex items-center justify-between">
            <motion.h1
              variants={fadeInOut("down", 0.2, 30, "spring", 0.2)} // Content fades in from below
              initial="hidden"
              animate="visible"
              className="font-bold text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-Merienda p-3 md:p-5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            >
              My Projects
            </motion.h1>
            <motion.div variants={zoomIn(0.8)} initial="hidden" animate="visible">
              <BackButton />
            </motion.div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 justify-between">
            {projectsData.map((data) => (
              <AllProjectCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
      <ScrollToTopButton />
    </div>
  );
};

export default AllBlogs;
