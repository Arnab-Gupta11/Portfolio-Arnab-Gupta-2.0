import { useState } from "react";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
import { TbSmartHome, TbUserSquareRounded } from "react-icons/tb";
import { LuGraduationCap } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { BiChat } from "react-icons/bi";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { TbArrowElbowRight } from "react-icons/tb";
import { AnimatePresence, motion } from "framer-motion";
import useNavbar from "../../hooks/useNavbar";
import { containerVars, menuVars, mobileLinkVars } from "../../lib/animation";
import Button from "../shared/Button";
import { CgMenuRightAlt } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
  const navLinks = [
    { title: "Home", href: "home", Icon: TbSmartHome },
    { title: "Skills", href: "skills", Icon: FaLaptopCode },
    { title: "About", href: "about", Icon: TbUserSquareRounded },
    { title: "Projects", href: "projects", Icon: HiOutlineSquares2X2 },
    { title: "Education", href: "education", Icon: LuGraduationCap },
    { title: "Contact", href: "contact", Icon: BiChat },
  ];

  const [open, setOpen] = useState(false);
  const { navbar, changeBackground } = useNavbar();
  const [activeLink, setActiveLink] = useState("");

  window.addEventListener("scroll", changeBackground);

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  // Function to handle the activation of a link.
  const handleSetActive = (to) => {
    setActiveLink(to);
  };
  return (
    <div className={`flex justify-between items-center w-full bg-[#09040d] border border-[#322141] sticky top-0 max-w-screen-xl 2xl:max-w-[1520px] shadow-sm shadow-[#322141] z-50 py-2 md:py-3 ${navbar ? "xl:mt-0 rounded-t-none rounded-b-xl shadow-xl shadow-[#8750f733]" : "rounded-t-none rounded-b-xl xl:rounded-2xl"}`}>
      <div className="justify-start">
        <a className="btn btn-ghost text-3xl sm:text-5xl font-black font-tangerine text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#c07ecd]" onClick={() => scroll.scrollToTop()}>
          Ag
        </a>
      </div>
      <div className="justify-center hidden lg:flex">
        <div className="inline-flex justify-center items-center gap-5 px-1">
          <Link

            to="home"
            spy={true}
            smooth={true}
            offset={-145}
            duration={500}
            className={`cursor-pointer text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${activeLink === "home" ? "text-[#9C6FF8] font-bold gradient-bottom-border" : ""}`}
            onSetActive={handleSetActive}
          >
            <TbSmartHome className="" size={16} />
            <span className="text-base font-bricolage">home</span>
          </Link>
          {navLinks.slice(1, 6).map((item, index) => {
            const { title, href, Icon } = item;
            return (
              <Link
                key={index}
                to={href}
                spy={true}
                smooth={true}
                offset={-72}
                duration={500}
                className={`cursor-pointer text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${activeLink === href ? "text-[#9C6FF8] font-bold gradient-bottom-border" : ""}`}
                onSetActive={handleSetActive}
              >
                <Icon className="" size={16} />
                <span className="text-base font-bricolage">{title}</span>
              </Link>
            )
          })}
        </div>
      </div>
      <div className="justify-end">
        <div className="inline-flex items-center justify-center gap-3">
          <a href="mailto:arnab.gupta.011@gmail.com" className="xl:mr-4">
            <Button icon={TbArrowElbowRight} iconPosition={"right"} iconAnimation={"transform transition-transform group-hover:scale-110 duration-700"} className={"hover:border-b-2 hover:border-primary-100 active:scale-95 hover:shadow-inner hover:bg-none hover:translate-y-0 shadow-black hover:text-primary-100 transform transition-all duration-700"}>Let&apos;s Talk</Button>
          </a>
          <div className="dropdown mr-4">
            <div className="lg:hidden" onClick={toggleMenu}>
              {open ? <IoClose className="text-secondary-100 font-bold" size={30} /> : <CgMenuRightAlt className="text-secondary-100 font-bold" size={30} />}
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed left-0 top-16 w-full origin-top bg-[#09040d] opacity-95 text-secondary-100 p-10 rounded-xl mr-2"
          >
            <div className="flex h-full flex-col">
              {/* <div className="flex justify-between">
                <h1 className="text-lg text-black">Portfolio</h1>
                <p className="cursor-pointer text-md text-black" onClick={toggleMenu}>
                  Close
                </p>
              </div> */}
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col h-full justify-center font-lora items-center gap-4 "
              >
                {navLinks.map((link, index) => (
                  <div key={index} className="overflow-hidden">
                    <MobileNavLink key={index} title={link.title} href={link.href} Icon={link.Icon} />
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

const MobileNavLink = ({ title, href, Icon }) => {
  return (
    <motion.div variants={mobileLinkVars} className="text-5xl uppercase text-black">
      <Link
        to={href}
        spy={true}
        smooth={true}
        offset={-35}
        duration={500}
        className="cursor-pointer text-secondary-100 inline-flex gap-1 items-center font-semibold"
        activeClass="text-blue-500 font-bold border-b-2 border-blue-500"
      >
        <Icon className="" size={16} />
        <span className="text-base font-bricolage">{title}</span>
      </Link>
    </motion.div>
  );
};
