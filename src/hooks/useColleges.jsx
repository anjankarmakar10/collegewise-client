import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useColleges = () => {
  const getData = async () => {
    const { data } = await axios.get(`/data.json`);
    return data;
  };

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["colleges"],
    queryFn: getData,
  });

  return [data, refetch, isLoading];
};
