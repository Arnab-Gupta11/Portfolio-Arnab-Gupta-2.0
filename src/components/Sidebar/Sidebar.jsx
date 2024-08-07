import { useState } from "react";
import useNavbar from "../../hooks/useNavbar";
import Button from "../shared/Button";
import Photo from "./Photo/Photo";
import { IoDocumentText } from "react-icons/io5";
import { IoCopyOutline } from "react-icons/io5";
import { IoMdCheckmark } from "react-icons/io";
import Modal from "../shared/Modal";
import ResumeViewer from "./ResumeViewer";
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
  return (
    <div>
      <div
        className={`text-white xl:h-[calc(100vh-100px)] 2xl:h-[calc(100vh-145px)] xl:fixed xl:w-[400px] bg-[#09040d] 2xl:w-[480px] rounded-2xl border border-[#322141] shadow-sm shadow-[#322141]  px-7 py-5 2xl:py-10 ${navbar ? "xl:mt-[90px] mt-20" : "xl:mt-28 mt-20"
          }`}
      >
        <div className="flex flex-col">
          <div className="w-[157px] xsm:w-[207px] sm:w-[305px] 2xl:w-[405px] 2xl:h-[405px] mx-auto">
            <Photo />
          </div>
          <div className="font-bricolage mt-5 2xl:mt-9">
            <h1 className="text-2xl 2xl:text-5xl font-semibold text-secondary-200 text-center">Arnab Gupta</h1>
            <p className="font-medium text-xs sm:text-base 2xl:text-2xl text-[#f0f2f5b3] mt-2 2xl:mt-5 text-center">
              I am a creative <span className="text-white font-semibold">Developer</span> based in Bangladesh, and I am very passionate and dedicated
              to my work.
            </p>
          </div>
          <div className="mt-4 flex items-center justify-center xl:justify-around gap-1 xsm:gap-2 md:gap-4 xl:gap-0">
            {/* <Button size={"small-grad"} isModal={true} onOpen={() => setShowModal(true)}>
              <div className=" gap-1 items-center justify-center flex">
                <span className="transform transition-transform duration-500 group-hover:animate-bounce">
                  <IoDocumentText size={15} />
                </span>
                Check Resume
              </div>
            </Button> */}

            {/* <div className="md:hidden">
              <Button size={"small-grad"} isModal={true} onOpen={() => setShowModal(true)}>
                <div className="flex items-center">
                  <span className="transform transition-transform duration-500 group-hover:animate-bounce">
                    <IoDocumentText size={15} />
                  </span>
                  <span>Download Resume</span>
                </div>
              </Button>
            </div> */}
            {/* <Button size={"small"}>
              <div className="flex gap-1 items-center justify-center group" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
                <span className="transform transition-transform duration-500 group-hover:scale-125">
                  {copyText ? <IoMdCheckmark size={15} /> : <IoCopyOutline size={15} />}
                </span>
                Copy Email
              </div>
            </Button> */}
            <Button size={"md"} icon={IoDocumentText} iconAnimation={"transform transition-transform duration-500 group-hover:animate-bounce"} iconSize={15} onClick={() => setShowModal(true)}>Check Resume</Button>
            <Button variant={"outline"} size={"md"} icon={copyText ? IoMdCheckmark : IoCopyOutline} iconAnimation={"transform transition-transform duration-500 group-hover:scale-125"} iconSize={15} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>Copy Email</Button>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <ResumeViewer />
      </Modal>
    </div>
  );
};

export default Sidebar;
