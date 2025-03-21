import { useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
import ScrollToTopButton from "../shared/ScrollToTopButton";
import useGetBlogDetails from "../../hooks/useGetBlogDetails";
import { motion } from "framer-motion";
import { zoomIn } from "../../lib/animation";
import BackButton from "../Project/AllProject/BackButton";
import { BiCalendar } from "react-icons/bi";
import { formateDateTime } from "../../lib/formateDateTime";
import { useEffect } from "react";
import "./blogDetails.css";
import Spinner from "../shared/Spinner";
import parse from "html-react-parser";
const BlogDetails = () => {
  const { id } = useParams();
  const [result, isLoading] = useGetBlogDetails(id);
  useEffect(() => {
    const currentMode = localStorage.getItem("mode") || "dark";
    document.documentElement.classList.add(currentMode);
    window.scrollTo(0, 0);
  }, []);
  console.log(result?.data);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto py-5 px-3 xsm:px-5 sm:px-5 xl:px-0">
        <div className="z-10 bg-[#E2EDF6] dark:bg-[#09040d] rounded-2xl border border-[#969fbd] dark:border-[#322141] shadow-light-container-shadow dark:shadow-sm dark:shadow-[#322141] p-7 min-h-screen">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-transparent bg-clip-text bg-title-gradient-light dark:bg-title-gradient font-Merienda py-3 md:py-5 text-2xl xs:text-3xl sm:text-4xl md:text-5xl">
              Deep Dive into the Topic
            </h1>
            <motion.div variants={zoomIn(0.8)} initial="hidden" animate="visible">
              <BackButton />
            </motion.div>
          </div>
          {isLoading && <Spinner />}
          {!isLoading && (
            <div className="py-10 md:px-10 xl:px-0 font-bricolage">
              <div className="max-w-screen-lg mx-auto p-5 md:p-10 bg-[#f7fbfe] dark:bg-[#101624] shadow-sm min-h-screen rounded-lg mb-20">
                <div>
                  <img src={result?.data?.image} alt="Image" className="aspect-[16/9] object-cover rounded-lg" />
                </div>
                <div>
                  <p className="flex items-center font-semibold text-sm mt-5  text-[#7d3cff]">
                    <BiCalendar className="mr-2" />
                    {formateDateTime(result?.data?.createdAt)}
                  </p>
                  <h1 className="text-slate-950 dark:text-slate-50 dark:text-dark-primary-txt text-xl sm:text-2xl md:text-3xl font-semibold mt-3">
                    {result?.data?.title}
                  </h1>
                </div>
                <div>
                  <p className="text-slate-900 dark:text-slate-200 mt-5 tiptap">{parse(result?.data?.content)}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default BlogDetails;
