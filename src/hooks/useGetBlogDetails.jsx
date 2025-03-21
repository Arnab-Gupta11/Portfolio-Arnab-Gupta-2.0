import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosInstance";

const useGetBlogDetails = (id) => {
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["blogsDetails"],
    queryFn: async () => {
      const res = await api.get(`/blogs/${id}`);
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useGetBlogDetails;
