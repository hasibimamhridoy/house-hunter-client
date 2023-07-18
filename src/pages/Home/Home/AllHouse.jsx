import useHouses from "../../../hooks/useHouses/useHouses";
import HouseCard from "./HouseCard";

const AllHouse = () => {

    const { houses, isLoading, refetch } = useHouses()

    console.log(houses);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {houses.map(house=>{
                return(
                    <HouseCard key={house._id} house={house}></HouseCard>
                )
            })}
        </div>
    );
};

export default AllHouse;