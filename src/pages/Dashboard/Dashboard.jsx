import React from "react";
import useAuth from "../../hooks/useAuth";
import useMyHouses from "../../hooks/useMyHouses/useMyHouses";
import useMyBookingsHouse from "../../hooks/useMyBookingsHouse/useMyBookingsHouse";
import useMyBookings from "../../hooks/useMyBookings/useMyBookings";

const Dashboard = () => {
  const { user } = useAuth();

  const [myHouses] = useMyHouses();
  const [myBookings] = useMyBookingsHouse();
  const [myBooked, refetch] = useMyBookings();

  if (!user) {
    return <div>Loading.....</div>;
  }

  return (
    <div className="">
      <div className="flex flex-wrap mb-2">
        {user?.role === "House Owner" && (
          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2">
            <div className="bg-green-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fa fa-wallet fa-2x fa-fw fa-inverse"></i>
                </div>
                <div className="flex-1 text-right">
                  <h5 className="text-white">Total My House</h5>
                  <h3 className="text-white text-3xl">
                    {myHouses.length}
                    <span className="text-green-400">
                      <i className="fas fa-caret-down"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {user?.role === "House Owner" && (
          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pl-2">
            <div className="bg-blue-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fas fa-users fa-2x fa-fw fa-inverse"></i>
                </div>
                <div className="flex-1 text-right">
                  <h5 className="text-white">Total My House Booking</h5>
                  <h3 className="text-white text-3xl">
                    {myBookings.length}
                    <span className="text-blue-400">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}

        {user?.role === "House Renter" && (
          <div className="w-full md:w-1/2 xl:w-1/3 pt-3 px-3 md:pr-2 xl:pr-3 xl:pl-1">
            <div className="bg-orange-600 border rounded shadow p-2">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pl-1 pr-4">
                  <i className="fas fa-user-plus fa-2x fa-fw fa-inverse"></i>
                </div>
                <div className="flex-1 text-right pr-1">
                  <h5 className="text-white">My Total Booked</h5>
                  <h3 className="text-white text-3xl">
                    {myBooked.length}
                    <span className="text-orange-400">
                      <i className="fas fa-caret-up"></i>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
