import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../shared/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import Status from "./Status";
const Introduction = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    loop: {},
  });
  return (
    <div className="pb-5 relative">
      <div className="text-stroke-1 text-6xl md:text-8xl lg:text-[150px] absolute top-40 left-0 w-full text-center z-0 font-black animate-pulse font-sans">
        WELCOME
      </div>
      <Status />
      <div className="mt-8 lg:mt-14 ml-6">
        <h3 className="font-bricolage text-2xl font-semibold text-[#f0f2f5b3]">Hi there!👋</h3>
        <h1 className="font-bold text-4xl md:text-7xl lg:text-[80px] text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#c07ecd] font-sora mt-5">
          I&apos;m Arnab Gupta
        </h1>
        <h5 className="font-semibold text-[22px] md:text-4xl lg:text-5xl text-[#dddddd] font-sora mt-4 lg:mt-7">
          I&apos;m a <span className="font-bold">{text}</span>
          <Cursor cursorBlinking={true} cursorColor="#8750f7" />
        </h5>
        <div className="mt-10">
          <Button>
            <div className="flex gap-2 items-center">
              My Works
              <span className="transform transition-transform duration-500 group-hover:rotate-45 font-semibold">
                <IoIosArrowRoundForward size={30} />
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className=" bg-gray-900 overflow-hidden">{/* <TextSlider /> */}</div>
    </div>
  );
};

export default Introduction;
//#b964a8
