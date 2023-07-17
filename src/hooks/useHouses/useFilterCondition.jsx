import React, { useContext } from "react";
import { FilterContext } from "../../stateManagement/FilterProvider/FilterProvider";

const useFilterCondition = () => {
  const { filterData } = useContext(FilterContext);

  const {
    cities,
    how_many_beedrooms,
    rent_per_month,
  } = filterData || {};

  const filterConditions = [];


  // Add filter conditions based on the filterData values
  if (cities?.label) {
    filterConditions.push(`cities=${filterData?.cities?.label}`);
  }
  if (how_many_beedrooms?.label) {
    filterConditions.push(`how_many_beedrooms=${filterData?.how_many_beedrooms?.label}`);
  }

  if (rent_per_month && rent_per_month.length > 0) {
    filterConditions.push(`rent_per_month=${filterData.rent_per_month}`);
  }


  const query =
    filterConditions.length > 0 ? `?${filterConditions?.join("&")}` : "";

    console.log(query);
  return query;
};

export default useFilterCondition;
