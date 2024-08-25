import { useState } from "react";
import useNavbar from "../../hooks/useNavbar";
import Button from "../shared/Button";
import Photo from "./Photo/Photo";
import { IoDocumentText } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Modal from "../shared/Modal";
import ResumeViewer from "./ResumeViewer";
import SocialIcon from "./SocialIcon";
import { splitString } from "../../lib/splitString";
import { motion } from "framer-motion";
import { charVariant, fadeInOut } from "../../lib/animation";
const Sidebar = () => {
  const { navbar, changeBackground } = useNavbar();
  const [showModal, setShowModal] = useState(false);
  const [copyText, setCopyText] = useState(false);
  window.addEventListener("scroll", changeBackground);
  const handleMouseDown = () => {
    navigator.clipboard.writeText("arnab.gupta.011@gmail.com");
    setCopyText(true);
  };

  const handleMouseUp = () => {
    setTimeout(() => setCopyText(false), 1000); // Delay to give feedback to the user
  };
  //animate text
  const heading = "Arnab Gupta";
  const desc = "I am a creative Developer based in Bangladesh, and I am very passionate and dedicated to my work.";
  const descChar = splitString(desc);
  const headingChar = splitString(heading);
  return (
    <div>
      <div
        className={`xl:h-[calc(100vh-100px)] 2xl:h-[calc(100vh-145px)] xl:fixed xl:w-[400px] bg-[#E2EDF6] dark:bg-[#09040d] 2xl:w-[480px] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141]  px-7 py-5 2xl:py-10 ${navbar ? "" : "mt-5"
          }`}
      >
        <div className="flex flex-col">
          <div className="w-[157px] xsm:w-[207px] sm:w-[305px] 2xl:w-[405px] 2xl:h-[405px] mx-auto">
            <Photo />
          </div>
          <div className="font-bricolage mt-5 2xl:mt-9">
            <motion.h1
              initial={"hidden"}
              whileInView={"reveal"}
              transition={{ staggerChildren: .02 }}
              className="text-2xl 2xl:text-5xl font-semibold text-primary-500 dark:text-secondary-200  font-lora text-center">
              {
                headingChar.map((char) => {
                  return (<motion.span
                    key={char}
                    variants={charVariant}
                    transition={{ duration: 0.5 }}
                  >
                    {char}
                  </motion.span>)
                })
              }
            </motion.h1>
            <motion.p
              initial={"hidden"}
              whileInView={"reveal"}
              transition={{ staggerChildren: .02 }}
              className="font-medium text-xs sm:text-base 2xl:text-2xl text-primary-600 dark:text-[#f0f2f5b3] mt-2 2xl:mt-5 text-center">
              {
                descChar.map((char) => {
                  return (<motion.span
                    key={char}
                    variants={charVariant}
                    transition={{ duration: 0.35 }}
                  >
                    {char}
                  </motion.span>)
                })
              }
            </motion.p>
          </div>
          <div className="mt-4 flex items-center justify-center xl:justify-around gap-1 xsm:gap-2 md:gap-4 xl:gap-0">
            <motion.div
              variants={fadeInOut('right', 0.2, 35)} // Content fades in from below
              initial="hidden"
              animate="visible"
            >
              <Button
                size={"md"} icon={IoDocumentText} iconAnimation={"transform transition-transform duration-500 group-hover:animate-bounce"} iconSize={15} onClick={() => setShowModal(true)}>Check Resume</Button>
            </motion.div>
            <motion.div
              variants={fadeInOut('left', 0.2, 35)} // Content fades in from below
              initial="hidden"
              animate="visible"
            >
              <Button variant={"outline"} size={"md"} icon={copyText ? IoMdCheckmark : IoCopyOutline} iconAnimation={"transform transition-transform duration-500 group-hover:scale-125"} className={"text-primary-600 border-primary-200 active:bg-secondary-300 hover:text-primary-300 hover:border-secondary-400"} iconSize={15} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Copy Email</Button>
            </motion.div>
          </div>
        </div>
        <div>
          <SocialIcon />
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ResumeViewer />
      </Modal>
    </div>
  );
};

export default Sidebar;
