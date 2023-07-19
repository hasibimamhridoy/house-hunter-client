
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter/SidebarFilter";
import AllHouse from "../Home/Home/AllHouse";


const Houses = () => {
 
  return (
    <div>
      <div className="lg:flex gap-5">
        <div className="hidden lg:block w-2/6 ">
          <SidebarFilter></SidebarFilter>
        </div>

        <div className="w-full mx-3">
          <div className=" lg:p-5 p-1 w-full">Houses</div>
          <AllHouse></AllHouse>

        </div>
      </div>
    </div>
  );
};

export default Houses;
