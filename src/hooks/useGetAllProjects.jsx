import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosInstance";

const useGetAllProjects = () => {
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await api.get("/projects");
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useGetAllProjects;
