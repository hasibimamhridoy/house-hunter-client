import axios from "axios";

import useFilterCondition from "./useFilterCondition";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axiousSecure/useAxiosSecure";


const useHousesCount = () => {
 

  const [axiosSecure] = useAxiosSecure()

  const { refetch, data: housesCount = [], isLoading } = useQuery({
    queryKey: ["housesCount"],
    queryFn: async () => {
      const res = await axiosSecure(`/all-house/count`);
      return res.data.count;
    },
  });

  return { housesCount, isLoading, refetch };
};

export default useHousesCount;
