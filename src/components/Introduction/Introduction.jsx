import Button from "../shared/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import Status from "./Status";
import Designation from "./Designation";
import Container from "../../Layout/Container";
import { Link } from "react-scroll";
const Introduction = () => {
  return (
    <Container>
      <div id="home" className="pb-10 pt-8 relative">
        <div className="text-stroke-1 text-[44px] xsm:text-6xl xs:text-[80px] sm:text-7xl md:text-[120px] lg:text-[150px] 2xl:text-[180px] absolute top-24 xsm:top-28 xl:top-32 left-0 w-full text-center z-0 font-black animate-pulse font-sans select-none">
          WELCOME
        </div>
        <Status />
        <div className="mt-8 lg:mt-14 ml-4 xs:ml-6">
          <h3 className="font-bricolage text-xs xsm:text-base 2xl:text-4xl font-semibold text-primary-600 dark:text-[#f0f2f5b3]">Hi there!👋</h3>
          <h1 className="font-bold text-3xl xsm:text-[44px] xs:text-6xl md:text-8xl lg:text-[110px] 2xl:text-[110px]  text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-DancingScript mt-2 md:mt-5">
            I&apos;m Arnab Gupta
          </h1>
          <Designation />
          <div className="mt-5 md:mt-10">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-72}
              duration={500}
              className={`cursor-pointer text-secondary-100 font-semibold font-bricolage inline-flex items-center gap-1 hover:text-[#9C6FF8]`}
            >
              <Button size={"auto"} icon={PiArrowUpRightBold} iconPosition={"right"} iconAnimation={"transform transition-transform duration-500 group-hover:rotate-45 font-semibold"}>My Works</Button>
            </Link>
          </div>
        </div>
        <div className=" bg-gray-900 overflow-hidden">{/* <TextSlider /> */}</div>
      </div>
    </Container>
  );
};

export default Introduction;
//#b964a8
