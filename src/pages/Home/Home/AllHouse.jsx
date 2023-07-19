import { useContext, useEffect, useState } from "react";
import useHouses from "../../../hooks/useHouses/useHouses";
import HouseCard from "./HouseCard";
import { FilterContext } from "../../../stateManagement/FilterProvider/FilterProvider";
import { PAGE_PAGI } from "../../../stateManagement/FilterProvider/ActionName";
import useHousesCount from "../../../hooks/useHouses/useHousesCount";

const AllHouse = () => {

    const { filterData, dispatch } = useContext(FilterContext);
  const { houses, isLoading, refetch } = useHouses()

  const [btnLoading,setBtnLoading] = useState(true)
  const { housesCount} = useHousesCount()
  const [currentPage, setCurrentPage] = useState(0);
  const pages = parseInt(Math.ceil(housesCount / 5));
  console.log(pages);  const pageButton = [];
  for (let index = 0; index < pages; index++) {
    pageButton.push(index);
  }

  const handlePreviousPage = () => {
    if (currentPage === 0) {
      setCurrentPage(0);
    } else {
      setCurrentPage(currentPage - 1);
    }
    refetch();
    setBtnLoading(false)
  };
  
  const handleNextPage = () => {
    if (currentPage === pages - 1) {
      setCurrentPage(pages - 1);
    } else {
      setCurrentPage(currentPage + 1);
    }
    refetch();
    setBtnLoading(false)
  };



  useEffect(() => {
    dispatch({ type: PAGE_PAGI, payload: currentPage });
    refetch()
    setBtnLoading(false)
  }, [currentPage, dispatch,refetch]);


  console.log(filterData);


    if (isLoading || filterData.loading || btnLoading) {
        return <div>Loading..........</div>
    }

    console.log(houses);

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 gap-y-16 py-10">
            {houses.map(house=>{
                return(
                    <HouseCard key={house._id} house={house}></HouseCard>
                )
            })}
        </div>

        <div className="flex justify-center px-5 mt-5 mb-10">
            <nav aria-label="Page navigation example">
              <ul className="flex gap-y-7 flex-wrap flex-shrink flex-grow -space-x-px">
                <li>
                  <a
                    onClick={handlePreviousPage}
                    className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Previous
                  </a>
                </li>

                {pageButton.map((btn) => {
                    const pageNumber = btn + 1;
                  return (
                    <li onClick={() => {
                        setCurrentPage(btn)
                        setBtnLoading(true)
                      
                    }} key={btn}>
                      <a
                        className={`px-3 py-2 leading-tight text-gray-500 border dark:bg-gray-800 cursor-pointer dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${
                          currentPage === btn&&
                          "bg-purple-700 text-white border-none hover:bg-purple-700 border border-white hover:text-white"
                        }`}
                      >
                       {pageNumber}
                      </a>
                    </li>
                  );
                })}

                <li>
                  <a
                    onClick={handleNextPage}
                    className="px-3 mr-5 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    Next
                  </a>
                </li>
               
              </ul>
            </nav>
          </div>

        </div>
    );
};

export default AllHouse;