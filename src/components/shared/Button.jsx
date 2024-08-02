// import { motion } from "framer-motion";
// eslint-disable-next-line react/prop-types
const Button = ({ children, type, size, isModal, onOpen }) => {
  if (isModal === true && size === "small-grad") {
    return (
      <button
        className="cursor-pointer transition-all bg-button-gradient text-white font-medium px-4 py-2 rounded-[8px] border-[#15002a] border-b-[2px] hover:bg-button-gradient-hover hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-[#8750f733] group font-bricolage"
        onClick={onOpen}
      >
        {children}
      </button>
    );
  }
  if (type === "outline") {
    return (
      <button className="cursor-pointer transition-all bg-transparent text-secondary-100 hover:text-secondary-200 font-medium font-bricolage px-6 py-2 rounded-[8px] border-[#15002a] border-2  hover:bg-primary-100 group">
        {children}
      </button>
    );
  }
  if (size === "small") {
    return (
      <button className="cursor-pointer transition-all bg-transparent text-secondary-100 hover:text-secondary-200 font-normal font-bricolage px-4 py-2 rounded-[8px] border-[#15002a] border-2  hover:border-primary-100 active:bg-[#0a0716]">
        {children}
      </button>
    );
  }
  if (size === "small-grad") {
    return (
      <button className="cursor-pointer transition-all bg-button-gradient text-white font-medium px-4 py-2 rounded-[8px] border-[#15002a] border-b-[2px] hover:bg-button-gradient-hover hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-[#8750f733] group font-bricolage">
        {children}
      </button>
    );
  }
  return (
    <button className="cursor-pointer transition-all bg-button-gradient text-white font-medium font-sora px-6 py-2 rounded-[8px] border-[#15002a] border-b-[2px] hover:bg-button-gradient-hover hover:-translate-y-[1px] hover:border-b-[6px] active:border-b-[2px] active:brightness-90 active:translate-y-[2px] hover:shadow-lg hover:shadow-[#8750f733] group">
      {children}
    </button>
  );
};

export default Button;
