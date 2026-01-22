import { useQuery } from "@tanstack/react-query";
import { getCases } from "@/services/prismic.services";

export const useGetCases = () => {
  return useQuery({
    queryKey: ["cases"],
    queryFn: getCases,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
