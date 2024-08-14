import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
// eslint-disable-next-line react/prop-types
const Modal = ({ isVisible, onClose, children }) => {
  const handleClose = (e) => {
    if (e.target.id === "wrapper") onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, y: "-100vh" },
    visible: {
      opacity: 1,
      y: "0",
      transition: { type: "spring", damping: 25, stiffness: 500 },
      // transition: { type: "spring", stiffness: 700, damping: 10 },
      // transition: { type: "inertia", velocity: 50 },
    },
    exit: {
      opacity: 0,
      y: "100vh",
      transition: { type: "spring", damping: 25, stiffness: 500 },
      // transition: { type: "spring", stiffness: 700, damping: 10 },
      // transition: { type: "inertia", velocity: 50 },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 bg-[#000000e1] backdrop-brightness-50 backdrop-blur-sm flex justify-center items-center z-50"
          id="wrapper"
          onClick={handleClose}
        >
          <motion.div
            className="max-w-screen-lg p-5 rounded-md"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.1 }}
          >
            <div className="flex justify-end mb-1  group">
              <button
                className="group cursor-pointer outline-none hover:rotate-90 duration-300 bg-button-gradient-hover dark:bg-button-gradient rounded-full w-6 h-6 sm:w-8 sm:h-8  bs:w-10 bs:h-10 text-white inline-flex justify-center items-center text-xl font-bold p-1"
                onClick={onClose}
              >
                <IoClose />
              </button>
            </div>
            <div className="bg-card-gradient-light dark:bg-card-gradient shadow-project-details-shadow-light dark:shadow-project-details-shadow rounded-md w-[260px] xsm:w-[340px] md:w-full h-[400px] lg:h-[calc(100vh-100px)] overflow-y-scroll">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
