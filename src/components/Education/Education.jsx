import universityLogo from "../../assets/education/university.gif";
import collegeLogo from "../../assets/education/college.jpg";
import schoolLogo from "../../assets/education/school.jpeg";
import { FaGraduationCap } from "react-icons/fa6";
import Container from "../../Layout/Container";
import Heading from "../shared/Heading";
import { motion } from "framer-motion"
import { fadeInOut, zoomIn } from "../../lib/animation";
const Education = () => {
  return (
    <section >
      <Container id="education">
        <section>
          <Heading title={"Education"} desc={"My education has been a path of self-discovery and personal growth, helping me become who I am today."} />
        </section>
        <ul className="timeline bs-mx:timeline-compact timeline-vertical bs-mx:space-y-5 font-bricolage pb-10 mt-10">
          {/* University */}
          <li>
            <div className="timeline-start w-full md:mr-2">
              <motion.div
                variants={fadeInOut("up", 0.2, 20, "tween", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                className="shadow-card-shadow-light dark:shadow-card-shadow bg-card-gradient-light dark:bg-card-gradient rounded-xl px-6 py-5">
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full" src={universityLogo} alt="" />
                  <div>
                    <h1 className="text-primary-500 dark:text-secondary-200 font-semibold mb-1.5 text-sm xsm:text-base md:text-lg">Noakhali Science and Technology University</h1>
                    <h3 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium ">B.Sc in CSTE</h3>
                    <h6 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium">December 2018 - April 2024</h6>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={zoomIn()} // Content fades in from below
              initial="hidden"
              whileInView="visible"
              className="timeline-middle text-[#8750f7]">
              <FaGraduationCap size={20} />
            </motion.div>
            <hr className="bg-[#8750f7]" />
          </li>
          {/* College */}
          <li>
            <hr className="bg-[#8750f7]" />
            <motion.div
              variants={zoomIn()} // Content fades in from below
              initial="hidden"
              whileInView="visible"
              className="timeline-middle text-[#8750f7]">
              <FaGraduationCap size={20} />
            </motion.div>
            <div className="timeline-end w-full md:ml-2">
              <motion.div
                variants={fadeInOut("up", 0.2, 20, "tween", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                className="shadow-card-shadow-light dark:shadow-card-shadow bg-card-gradient-light dark:bg-card-gradient rounded-xl px-6 py-5">
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full" src={collegeLogo} alt="" />
                  <div>
                    <h1 className="text-primary-500 dark:text-secondary-200 font-semibold mb-1.5 text-sm xsm:text-base md:text-lg">Government Hazi Mohammad Mohsin College</h1>
                    <h3 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium">Science</h3>
                    <h6 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium">May 2016 - March 2018</h6>
                  </div>
                </div>
              </motion.div>
            </div>
            <hr className="bg-[#8750f7]" />
          </li>
          {/* School */}
          <li>
            <hr className="bg-[#8750f7]" />
            <div className="timeline-start w-full md:mr-2">
              <motion.div
                variants={fadeInOut("up", 0.2, 20, "tween", 1)} // Content fades in from below
                initial="hidden"
                whileInView="visible"
                className="shadow-card-shadow-light dark:shadow-card-shadow bg-card-gradient-light dark:bg-card-gradient rounded-xl px-6 py-5">
                <div className="flex items-center gap-4">
                  <img className="w-10 h-10 rounded-full" src={schoolLogo} alt="" />
                  <div>
                    <h1 className="text-primary-500 dark:text-secondary-200 font-semibold mb-1.5 text-sm xsm:text-base md:text-lg">Chittagong Government High School</h1>
                    <h3 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium">Science</h3>
                    <h6 className="text-primary-600 dark:text-secondary-100 text-[10px] xsm:text-xs md:text-sm font-medium">January 2014 - February 2016</h6>
                  </div>
                </div>
              </motion.div>
            </div>
            <motion.div
              variants={zoomIn()} // Content fades in from below
              initial="hidden"
              whileInView="visible"
              className="timeline-middle text-[#8750f7]">
              <FaGraduationCap size={20} />
            </motion.div>
          </li>
        </ul>
      </Container>
    </section>



  );
};

export default Education;
