
import React from "react";
import SidebarFilter from "./SidebarFilter";

const FilterSidebar = () => {
  return (
    <div className="h-full bg-gray-50 rounded-md max-w-[18rem] overflow-y-auto w-96 sticky top-0 pt-3">
      <div className="sidebar">
        <h1 className="text-2xl text-center text-gray-700">ফিল্টার করুন</h1>
      <SidebarFilter></SidebarFilter>
      </div>
    </div>
  );
};

export default FilterSidebar;
