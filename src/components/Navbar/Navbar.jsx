import { TbArrowElbowRight } from "react-icons/tb";
import useNavbar from "../../hooks/useNavbar";
import Button from "../shared/Button";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileNav from "./MobileNav";
import NavLink from "./NavLink";
import Logo from "../shared/Logo";
import { AnimatePresence, motion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import ToggleTheme from "./ToggleTheme";
const Navbar = () => {
  const { navbar, changeBackground, open, setOpen } = useNavbar();
  window.addEventListener("scroll", changeBackground);

  return (
    <div
      className={`flex justify-between items-center w-full bg-[#E2EDF6] dark:bg-[#09040d]  sticky top-0 max-w-screen-xl 2xl:max-w-[1520px] shadow-navbar-shadow z-50 py-2 md:py-3  ${
        navbar ? "xl:mt-0 rounded-t-none rounded-b-xl shadow-xl shadow-[#c7d6ef] dark:shadow-[#0e0814]" : "rounded-t-none rounded-b-xl xl:rounded-2xl"
      }`}
    >
      {/* Logo */}
      <div className="justify-start">
        <Logo />
      </div>
      {/* Large Nav  */}
      <div className="justify-center hidden lg:flex">
        <NavLink />
      </div>
      <div className="justify-end">
        <div className="inline-flex items-center justify-end xl:-mr-1.5 gap-3">
          <ToggleTheme />
          <a href="mailto:arnab.gupta.011@gmail.com" className="">
            <Button
              icon={TbArrowElbowRight}
              variant={"default"}
              iconPosition={"right"}
              iconAnimation={"transform transition-transform group-hover:scale-110 duration-700"}
              className={
                "hover:border-b-2 hover:border-primary-100 active:scale-95 hover:shadow-inner hover:bg-none dark:hover:bg-none hover:translate-y-0 shadow-black hover:text-primary-700 dark:hover:text-primary-100 transform transition-all duration-700"
              }
            >
              Let&apos;s Talk
            </Button>
          </a>
          <div className="dropdown mr-4">
            {/* fade in anim  */}
            {/* <div className="lg:hidden" onClick={() => setOpen(!open)}>
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoMdClose className="text-secondary-100 font-bold" size={30} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CgMenuRightAlt className="text-secondary-100 font-bold" size={30} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div> */}
            {/* flip anim  */}
            <div className="lg:hidden" onClick={() => setOpen(!open)}>
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <IoMdClose className="dark:text-secondary-100 text-primary-600 font-bold" size={30} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotateY: 90, opacity: 0 }}
                    animate={{ rotateY: 0, opacity: 1 }}
                    exit={{ rotateY: 90, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CgMenuRightAlt className="dark:text-secondary-100 text-primary-600 font-bold" size={30} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Nav  */}
      <MobileNav open={open} setOpen={setOpen}/>
    </div>
  );
};

export default Navbar;
