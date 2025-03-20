import { AnimatePresence, motion } from "framer-motion";
import { containerVars, menuVars, mobileLinkVars } from "../../lib/animation";
import { Link } from "react-scroll";
import useNavbar from "../../hooks/useNavbar";
import { TbSmartHome } from "react-icons/tb";
import { navLinks } from "../../lib/navlink";

// eslint-disable-next-line react/prop-types
const MobileNav = ({ open, setOpen }) => {
  const { activeLink, handleSetActive } = useNavbar();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          variants={menuVars}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed left-0 top-14 w-full origin-top bg-secondary-300 dark:bg-[#09040d] opacity-95 p-10 rounded-xl mr-2 lg:hidden"
        >
          <div className="flex h-full flex-col">
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              className="flex flex-col h-full justify-center font-lora items-center gap-4 "
            >
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-547}
                duration={500}
                className={`cursor-pointer text-primary-600 dark:text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${
                  activeLink === "home" ? "font-bold active-light dark:active gradient-bottom-border-light dark:gradient-bottom-border" : ""
                }`}
                onSetActive={handleSetActive}
                onClick={() => setOpen(!open)}
              >
                <TbSmartHome className="" size={16} />
                <span className="text-base font-bricolage">Home</span>
              </Link>
              {navLinks.slice(1, 7).map((link, index) => {
                const { title, href, Icon } = link;
                return (
                  <div key={index} className="overflow-hidden">
                    {/* <MobileNavLink key={index} title={link.title} href={link.href} Icon={link.Icon} /> */}
                    <motion.div variants={mobileLinkVars} className="text-5xl uppercase text-black">
                      <Link
                        to={href}
                        spy={true}
                        smooth={true}
                        offset={-72}
                        duration={500}
                        className={`cursor-pointer text-primary-600 dark:text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8] ${
                          activeLink === href ? "font-bold active-light dark:active gradient-bottom-border-light dark:gradient-bottom-border" : ""
                        }`}
                        onSetActive={handleSetActive}
                        onClick={() => setOpen(!open)}
                      >
                        <Icon className="" size={16} />
                        <span className="text-base font-bricolage">{title}</span>
                      </Link>
                    </motion.div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
