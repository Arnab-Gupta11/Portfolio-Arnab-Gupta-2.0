import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/axiosInstance";

const useGetSkills = () => {
  const { data: result = [], isLoading } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const res = await api.get("/skills");
      return res.data;
    },
  });

  return [result, isLoading];
};

export default useGetSkills;
