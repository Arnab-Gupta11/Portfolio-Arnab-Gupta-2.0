/* eslint-disable react/prop-types */
import { RiAccountBoxLine } from "react-icons/ri";
import { BiCalendar } from "react-icons/bi";
import { formateDateTime } from "../../lib/formateDateTime";
import { Link } from "react-router-dom";
const BlogCard = ({ blog }) => {
  return (
    <div className="w-full bg-card-gradient-light dark:bg-card-gradient rounded-xl  shadow-project-card-shadow-light dark:shadow-project-card-shadow overflow-hidden group  hover:shadow-lg">
      <div className="relative">
        <figure>
          <img
            src={blog?.image}
            alt="blog image"
            className="rounded-t-lg aspect-[16/9] object-cover group-hover:scale-110 transition-all duration-700 ease-in-out group-hover:brightness-90 dark:group-hover:brightness-50"
          />
        </figure>
        <div className="flex items-center justify-between gap-3 flex-wrap bg-card-gradient-light dark:bg-card-gradient shadow-md dark:shadow-slate-800 w-[90%] mx-auto px-5 rounded-lg py-4 -translate-y-4 absolute left-3 xsm:left-5 opacity-0 group-hover:opacity-100 group-hover:-translate-y-8 transition-all duration-700 ease-in-out text-[#7d3cff] dark:text-[#9864ff]">
          <p className="flex items-center font-semibold text-sm">
            <RiAccountBoxLine className="mr-2" /> By Admin
          </p>
          <p className="flex items-center font-semibold text-sm">
            <BiCalendar className="mr-2" />
            {formateDateTime(blog?.createdAt)}
          </p>
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-xl font-bold mt-2 text-primary-500 dark:text-secondary-200">
          {blog?.title.length > 30 ? blog?.title.slice(0, 30) + "..." : blog?.title}{" "}
        </h2>
        <p className="text-primary-600 dark:text-secondary-100 mt-2">
          {blog?.content.length > 100 ? blog?.content.slice(0, 60) + "..." : blog?.content}
          <Link
            to={`/blogs/${blog._id}`}
            className="text-[#7d3cff] dark:text-[#9864ff] ml-1 group-hover:underline underline-offset-4 duration-700 transition-all ease-in-out font-semibold"
          >
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
