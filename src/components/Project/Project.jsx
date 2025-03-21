import Container from "../../Layout/Container";
import { MdOutlineReadMore } from "react-icons/md";
import Heading from "../shared/Heading";
import ProjectCard from "./ProjectCard";
import Button from "../shared/Button";
import { Link } from "react-router-dom";
import useGetAllFeaturedProjects from "../../hooks/useGetAllFeaturedProjects";
import Spinner from "../shared/Spinner";

const Project = () => {
  const [result, isLoading] = useGetAllFeaturedProjects();
  console.log(result?.data);
  return (
    <section>
      <Container id="projects">
        <Heading title={"Projects"} desc={"I have worked on a wide range of projects. Here are some of best projects."} />
        {isLoading && <Spinner />}
        {!isLoading && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
              {result?.data?.map((data, idx) => (
                <ProjectCard key={data._id} data={data} id={idx} />
              ))}
            </div>
            <div className="my-10 text-center">
              <Link to={"/all-projects"}>
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
      </Container>
    </section>
  );
};

export default Project;
