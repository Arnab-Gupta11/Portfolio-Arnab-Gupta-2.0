import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../shared/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
const Introduction = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    loop: {},
  });
  return (
    <div className="pb-10 relative">
      <div className="stroke_text text-6xl md:text-8xl lg:text-9xl absolute bottom-0 left-0 w-full text-center z-0 font-black animate-pulse">
        WELCOME
      </div>
      <div className="flex items-center gap-2 bg-[#0B0C1C] w-40 justify-center py-2 px-3 rounded-2xl">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 duration-300"></span>
          <span className="absolute top-0.5 left-0.5 rounded-full h-2 w-2 bg-green-600"></span>
        </span>
        <span className="font-semibold font-bricolage">Open to work</span>
      </div>
      <div className="mt-8 lg:mt-14 ml-6">
        <h1 className="font-bricolage text-2xl font-semibold text-[#f0f2f5b3]">Hi there!👋</h1>
        <h1 className="font-bold text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#dddddd] font-sora mt-5">
          I&apos;m Arnab Gupta
        </h1>
        <h1 className="font-semibold text-[22px] md:text-4xl lg:text-5xl text-[#dddddd] font-sora mt-4 lg:mt-7">
          I&apos;m a <span className="font-bold">{text}</span>
          <Cursor cursorBlinking={true} cursorColor="#8750f7" />
        </h1>
        <div className="mt-10 group">
          <Button>
            <div className="flex gap-2 items-center">
              My Works
              <span className="transform transition-transform duration-500 group-hover:rotate-45">
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
