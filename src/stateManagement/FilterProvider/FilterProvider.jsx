"use client";

import React, { useEffect, useReducer, useState } from "react";
import { createContext, useContext } from "react";
import { filterReducer, initialFilterState } from "./Reducer";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


export const FilterContext = createContext(null);
const queryClient = new QueryClient();

const FilterProvider = ({ children }) => {
  const [filterData, dispatch] = useReducer(filterReducer, initialFilterState);


  const filterInfo = {
    filterData,
    dispatch,
  };
  return (
    <FilterContext.Provider value={filterInfo}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </FilterContext.Provider>
  );
};

export default FilterProvider;
