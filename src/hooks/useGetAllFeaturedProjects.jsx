import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosInstance";

const useGetAllFeaturedProjects = () => {
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["featuredProjects"],
    queryFn: async () => {
      const res = await api.get("/projects/featured");
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useGetAllFeaturedProjects;
