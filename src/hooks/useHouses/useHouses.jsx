import axios from "axios";

import useFilterCondition from "./useFilterCondition";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axiousSecure/useAxiosSecure";


const useHouses = () => {
 
  const query = useFilterCondition()

  const [axiosSecure] = useAxiosSecure()

  const { refetch, data: houses = [], isLoading } = useQuery({
    queryKey: ["Allhouses"],
    queryFn: async () => {
      const res = await axiosSecure(`/all-house${query}`);
      return res.data;
    },
  });

  return { houses, isLoading, refetch };
};

export default useHouses;
