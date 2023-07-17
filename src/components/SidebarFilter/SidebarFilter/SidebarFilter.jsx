"use client";
import React, { useContext, useEffect } from "react";

import GenarelInformtaion from "../GeneraInfo/GenarelInformtaion";

import { FilterContext } from "../../../stateManagement/FilterProvider/FilterProvider";
import { LOADING } from "../../../stateManagement/FilterProvider/ActionName";
import useHouses from "../../../hooks/useHouses/useHouses";

const SidebarFilter = () => {
  const { refetch } = useHouses();
  const {dispatch} = useContext(FilterContext)

  const handleFilter = () => {
    dispatch({type : LOADING, payload : true})
    refetch().then(()=>{
      dispatch({type : LOADING, payload : false})
    });
    
  };

 /**
  * ---------Local storage item remove when the page manually reloadedd
  */
 useEffect(()=>{
  window.addEventListener("beforeunload", handleBeforeUnload);
  return () => {
    window.removeEventListener("beforeunload", handleBeforeUnload);
  };
},[])
const handleBeforeUnload = () => {
  localStorage.clear();
};


  return (
    <div>
      <div className="p-2 ">
        {/**
         * Generel
         */}
        <GenarelInformtaion></GenarelInformtaion>

        <button onClick={handleFilter} className="px-3 py-1 bg-green-400 my-5">
          Search
        </button>
      </div>
    </div>
  );
};

export default SidebarFilter;
