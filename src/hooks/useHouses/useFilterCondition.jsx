import React, { useContext } from "react";
import { FilterContext } from "../../stateManagement/FilterProvider/FilterProvider";

const useFilterCondition = () => {
  const { filterData } = useContext(FilterContext);

  const {
    cities,
    how_many_beedrooms,
    how_many_bathrooms,
    rent_per_month,
    room_size,
    is_available,
  } = filterData || {};

  const filterConditions = [];


  // Add filter conditions based on the filterData values
  if (cities?.label) {
    filterConditions.push(`cities=${filterData?.cities?.label}`);
  }
  if (how_many_beedrooms?.label) {
    filterConditions.push(`how_many_beedrooms=${filterData?.how_many_beedrooms?.label}`);
  }
  if (how_many_bathrooms?.label) {
    filterConditions.push(`how_many_bathrooms=${filterData?.how_many_bathrooms?.label}`);
  }
  if (room_size?.label) {
    filterConditions.push(`room_size=${filterData?.room_size?.label}`);
  }
  if (is_available?.label) {
    filterConditions.push(`is_available=${filterData?.is_available?.label}`);
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
