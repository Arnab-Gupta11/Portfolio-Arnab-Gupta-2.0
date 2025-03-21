import { useEffect } from "react";

import { motion } from "framer-motion";
import { fadeInOut, zoomIn } from "../../lib/animation";
import BackButton from "../Project/AllProject/BackButton";
import ScrollToTopButton from "../shared/ScrollToTopButton";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";
import Spinner from "../shared/Spinner";
import BlogCard from "./BlogCard";
import Footer from "../Footer/Footer";
const AllBlogs = () => {
  const [result, isLoading] = useGetAllBlogs();
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "dark";
    document.documentElement.classList.add(currentMode);
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-3 xsm:py-5 sm:py-5 xl:px-0">
        <div className="z-10 bg-[#E2EDF6] dark:bg-[#09040d] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141] p-7 min-h-screen">
          <div className="flex items-center justify-between">
            <motion.h1
              variants={fadeInOut("down", 0.2, 30, "spring", 0.2)} // Content fades in from below
              initial="hidden"
              animate="visible"
              className="font-bold text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-Merienda p-3 md:p-5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl"
            >
              My Blogs
            </motion.h1>
            <motion.div variants={zoomIn(0.8)} initial="hidden" animate="visible">
              <BackButton />
            </motion.div>
          </div>
          {isLoading && <Spinner />}
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between font-bricolage">
            {result?.data?.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default AllBlogs;
