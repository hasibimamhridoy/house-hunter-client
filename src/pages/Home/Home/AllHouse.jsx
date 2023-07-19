import { useContext, useEffect, useState } from "react";
import useHouses from "../../../hooks/useHouses/useHouses";
import HouseCard from "./HouseCard";
import { FilterContext } from "../../../stateManagement/FilterProvider/FilterProvider";
import { PAGE_PAGI } from "../../../stateManagement/FilterProvider/ActionName";
import useHousesCount from "../../../hooks/useHouses/useHousesCount";
import useAxiosSecure from "../../../hooks/axiousSecure/useAxiosSecure";
import Spinner from "../../../components/Spinner/Spinner";

const AllHouse = () => {
  const { filterData, dispatch } = useContext(FilterContext);
  const { houses, isLoading, refetch } = useHouses();
  const [btnLoading, setBtnLoading] = useState(true);
  const { housesCount } = useHousesCount();
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(5);
  const pages = Math.ceil(housesCount / pageLimit);
  
  const pageButton = [];
  for (let index = 0; index < pages; index++) {
    pageButton.push(index);
  }


  useEffect(() => {
    refetch();
    setBtnLoading(false);
  }, [currentPage, dispatch, refetch,]);


  if (isLoading || filterData.loading || btnLoading) {
    return <div className="h-screen flex justify-center items-center">
      <Spinner></Spinner>
      </div>;
  }

console.log(houses);
  return (
    <div className="p-2">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-16 py-10">
        {houses.map((house) => {
          return <HouseCard key={house._id} house={house}></HouseCard>;
        })}
      </div>

      <div className="flex justify-center lg:px-5 mt-5 mb-10">
        <nav aria-label="Page navigation example">
          <ul className="flex gap-y-7 flex-wrap flex-shrink flex-grow -space-x-px">
         
            {pageButton.map((btn) => {
              return (
                <li
                  onClick={() => {
                    setCurrentPage(btn);
                    dispatch({ type: PAGE_PAGI, payload: btn });

                  }}
                  key={btn}
                >
                  <a
                    className={`px-3 py-2 leading-tight text-gray-500 border dark:bg-gray-800 cursor-pointer dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                      currentPage === btn &&
                      "bg-purple-700 text-white border-none hover:bg-purple-700 border border-white hover:text-white"
                    }`}
                  >
                    {btn}
                  </a>
                </li>
              );
            })}

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default AllHouse;
