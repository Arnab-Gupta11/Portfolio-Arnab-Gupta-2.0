// eslint-disable-next-line react/prop-types
const Heading = ({ title, desc }) => {
  return (
    <>
      <h1 className="font-bold text-transparent bg-clip-text bg-title-gradient font-jetBrains pt-5 md:pt-7 text-center text-lg xs:text-xl sm:text-2xl md:text-4xl">{title}</h1>
      <p className="text-xs xs:text-sm md:text-base font-semibold font-bricolage mt-4 text-center">{desc}</p>
    </>
  );
};

export default Heading;
