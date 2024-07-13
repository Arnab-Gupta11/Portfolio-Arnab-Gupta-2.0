// eslint-disable-next-line react/prop-types
const Button = ({ children }) => {
  return (
    <button className="font-semibold px-8 py-2.5 rounded-full text-base text-white font-sora bg-button-gradient hover:bg-button-gradient-hover hover:scale-105 hover:duration-1000">
      {children}
    </button>
  );
};

export default Button;
