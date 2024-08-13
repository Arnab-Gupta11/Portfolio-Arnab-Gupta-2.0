// eslint-disable-next-line react/prop-types
const Heading = ({ title, desc }) => {
  return (
    <>
      <h1 className="font-bold text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-DancingScript pt-5 md:pt-14 text-center text-2xl xs:text-3xl sm:text-4xl md:text-5xl">{title}</h1>
      <p className="text-xs xs:text-sm md:text-base font-semibold font-bricolage mt-4 text-center">{desc}</p>
    </>
  );
};

export default Heading;
