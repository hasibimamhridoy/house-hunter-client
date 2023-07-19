import axios from "axios";

import useFilterCondition from "./useFilterCondition";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../axiousSecure/useAxiosSecure";
import { useContext } from "react";
import { FilterContext } from "../../stateManagement/FilterProvider/FilterProvider";


const useHouses = () => {
 
  const {filterData} = useContext(FilterContext)

  const query = useFilterCondition()
  
  const {
    cities,
    how_many_beedrooms,
    how_many_bathrooms,
    rent_per_month,
    room_size,
    is_available,
    page,
    limit,
  } = filterData || {};



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
