import "./loader.css"
const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center relative  animate-[ping_1.5s_ease-in-out_1_3s]'>
        <div className="loader w-6 h-6 sm:w-8 sm:h-8  bs:w-14 bs:h-14 m-auto relative before:w-8 before:h-3 bs:before:w-16 bs:before:h-3 sm:before:w-10 sm:before:h-2 before:bs:top-[60px] before:top-8 sm:before:top-12 after:left-1"></div>
      </div>
    </div>

  );
};

export default Loader;
