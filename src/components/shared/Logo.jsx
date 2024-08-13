const Logo = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <a className="btn btn-ghost text-3xl sm:text-5xl font-black font-tangerine text-transparent bg-clip-text bg-gradient-to-r from-[#8750f7] to-[#c07ecd]" onClick={scrollToTop}>
      Ag
    </a>
  )
}

export default Logo
