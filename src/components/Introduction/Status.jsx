const Status = () => {
  return (
    <div className="flex items-center gap-2 bg-[#120D24] w-40 justify-center py-2 px-3 rounded-2xl">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 duration-300"></span>
        <span className="absolute top-0.5 left-0.5 rounded-full h-2 w-2 bg-green-600"></span>
      </span>
      <span className="font-semibold font-bricolage">Open to work</span>
    </div>
  );
};

export default Status;
