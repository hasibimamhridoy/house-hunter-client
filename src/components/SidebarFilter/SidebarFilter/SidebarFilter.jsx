"use client";
import React, { useContext, useEffect } from "react";

import GenarelInformtaion from "../GeneraInfo/GenarelInformtaion";

import { FilterContext } from "../../../stateManagement/FilterProvider/FilterProvider";
import { LOADING } from "../../../stateManagement/FilterProvider/ActionName";
import useHouses from "../../../hooks/useHouses/useHouses";

const SidebarFilter = ({ closeModal }) => {
  const { refetch } = useHouses();
  const { dispatch } = useContext(FilterContext);

  const handleFilter = () => {
    dispatch({ type: LOADING, payload: true });
    refetch().then(() => {
      dispatch({ type: LOADING, payload: false });
      closeModal();
    });
  };

  return (
    <div>
      <div className="p-2 ">
        {/**
         * Generel
         */}
        <GenarelInformtaion></GenarelInformtaion>


        <button onClick={handleFilter} className="px-3 w-full rounded-md py-1 bg-blue-500 text-white my-5">
          Search
        </button>

        
      </div>
    </div>
  );
};

export default SidebarFilter;
