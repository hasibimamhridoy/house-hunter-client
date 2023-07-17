import React from "react";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter/SidebarFilter";

const Houses = () => {
  return (
    <div>
      <div className="lg:flex gap-5">
        
        <div className="hidden lg:block w-2/6 ">
          <SidebarFilter></SidebarFilter>
        </div>

        <div className="w-full">
          <div className=" lg:p-5 p-1 w-full">Houses</div>
        </div>

      </div>
    </div>
  );
};

export default Houses;
