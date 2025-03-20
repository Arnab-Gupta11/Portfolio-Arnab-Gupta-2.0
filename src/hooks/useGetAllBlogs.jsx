import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosInstance";

const useGetAllBlogs = () => {
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const res = await api.get("/blogs");
      console.log("Query ====>", res);
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useGetAllBlogs;
