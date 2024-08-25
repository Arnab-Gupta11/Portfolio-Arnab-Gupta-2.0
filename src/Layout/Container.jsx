// eslint-disable-next-line react/prop-types
const Container = ({ children, id }) => {
  return <div id={id} className="z-10 bg-[#E2EDF6] dark:bg-[#09040d] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141] p-7 mt-5">{children}</div>;
};

export default Container;
