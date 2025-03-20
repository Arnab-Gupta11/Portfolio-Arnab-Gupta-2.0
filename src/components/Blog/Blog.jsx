import Container from "../../Layout/Container";
import Heading from "../shared/Heading";
import useGetAllBlogs from "../../hooks/useGetAllBlogs";
import BlogCard from "./BlogCard";
import Spinner from "../shared/Spinner";
import { Link } from "react-router-dom";
import Button from "../shared/Button";
import { MdOutlineReadMore } from "react-icons/md";

const Blog = () => {
  const [result, isLoading] = useGetAllBlogs();
  return (
    <section>
      <Container id="blog">
        <section>
          <Heading title={"Blog"} desc={"Sharing my journey, insights, and lessons learned in tech and beyond."} />
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 mt-14  lg:mx-0 gap-5 font-bricolage pb-10">
                {result?.data?.map((blog) => (
                  <BlogCard key={blog._id} blog={blog} />
                ))}
              </div>
              <div className="my-10 text-center">
                <Link to={"/all-blogs"}>
                  <Button
                    size={"auto"}
                    icon={MdOutlineReadMore}
                    iconAnimation={"transform transition-transform duration-500 group-hover:translate-x-1.5"}
                  >
                    See More
                  </Button>
                </Link>
              </div>
            </>
          )}
        </section>
      </Container>
    </section>
  );
};

export default Blog;
