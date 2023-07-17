import axios from "axios";

import useFilterCondition from "./useFilterCondition";
import { useQuery } from "@tanstack/react-query";


const useHouses = () => {
 
  const query = useFilterCondition()

  const { refetch, data: houses = [], isLoading } = useQuery({
    queryKey: ["houses"],
    queryFn: async () => {
      const res = await axios(`http://localhost:5000/api/users${query}`);
      return res.data;
    },
  });

  return { houses, isLoading, refetch };
};

export default useHouses;
