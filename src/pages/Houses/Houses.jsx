import { Button } from "@mui/material";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter/SidebarFilter";
import AllHouse from "../Home/Home/AllHouse";
import { useState } from "react";
import FilterModal from "../../Modal/FilterModal";

const Houses = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="lg:flex gap-5">
        <div className="hidden lg:block w-2/6 ">
          <SidebarFilter></SidebarFilter>
        </div>

        <div className="lg:w-full mx-3">
    

        <div className="flex justify-center items-center lg:hidden">
        <button
            onClick={() => setIsOpen(true)}
            className="w-3/4 rounded-md py-1 bg-blue-500 text-white my-5"
          >
            Filter
          </button>
        </div>
          <AllHouse></AllHouse>
        </div>
      </div>
      <FilterModal isOpen={isOpen} closeModal={closeModal}></FilterModal>
    </div>
  );
};

export default Houses;
