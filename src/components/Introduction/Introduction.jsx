import Button from "../shared/Button";
import { PiArrowUpRightBold } from "react-icons/pi";
import Status from "./Status";
import Designation from "./Designation";
import Container from "../../Layout/Container";
const Introduction = () => {
  return (
    <Container>
      <div id="home" className="pb-10 pt-8 relative">
        <div className="text-stroke-1 text-[44px] xsm:text-6xl xs:text-[80px] sm:text-7xl md:text-[120px] lg:text-[150px] 2xl:text-[180px] absolute top-16 xsm:top-20 xl:top-24 left-0 w-full text-center z-0 font-black animate-pulse font-sans select-none">
          WELCOME
        </div>
        <Status />
        <div className="mt-8 lg:mt-14 ml-4 xs:ml-6">
          <h3 className="font-bricolage text-xs xsm:text-base 2xl:text-4xl font-semibold text-[#f0f2f5b3]">Hi there!👋</h3>
          <h1 className="font-bold text-2xl xsm:text-3xl xs:text-4xl md:text-7xl lg:text-[110px] 2xl:text-[110px]  text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#c07ecd] font-DancingScript mt-2 md:mt-5">
            I&apos;m Arnab Gupta
          </h1>
          <Designation />
          <div className="mt-5 md:mt-10">
            <Button size={"auto"} icon={PiArrowUpRightBold} iconPosition={"right"} iconAnimation={"transform transition-transform duration-500 group-hover:rotate-45 font-semibold"}>My Works</Button>
          </div>
        </div>
        <div className=" bg-gray-900 overflow-hidden">{/* <TextSlider /> */}</div>
      </div>
    </Container>
  );
};

export default Introduction;
//#b964a8
