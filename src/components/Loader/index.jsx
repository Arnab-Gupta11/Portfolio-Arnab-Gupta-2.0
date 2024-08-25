import "./loader.css"
const Loader = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center relative  animate-[ping_1.5s_ease-in-out_1_3s]'>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="ring"></div>
        <div id="h3" ><span className='font-tangerine text-3xl font-bold text-secondary-300 animate-pulse'>Arnab</span></div>
      </div>
    </div>

  );
};

export default Loader;
