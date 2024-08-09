import { useTypewriter, Cursor } from "react-simple-typewriter";
const Designation = () => {
  const [text] = useTypewriter({
    words: ["MERN Stack Developer", "Frontend Developer"],
    loop: {},
  });
  return (
    <h5 className="font-semibold text-sm xsm:text-lg md:text-4xl lg:text-5xl 2xl:text-6xl text-[#dddddd] font-sora mt-1 xsm:mt-2 lg:mt-7">
      I&apos;m a <span className="font-bold">{text}</span>
      <Cursor cursorBlinking={true} cursorColor="#8750f7" />
    </h5>
  )
}

export default Designation;
