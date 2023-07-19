import React, { useEffect, useState } from "react";
import BookingModal from "../../../Modal/BookingModal";
import { isAlreadyBooked } from "../../../api/isAlreadyBooked";
import useAuth from "../../../hooks/useAuth";
import { Link, Navigate, useNavigate } from "react-router-dom";

const HouseCard = ({ house }) => {
  const { user, loading } = useAuth();
  const [enrolledDisabledIds, setEnrolledDisabledIds] = useState([]);
  const [twoHouseFullFil, setTwoHouseFullFil] = useState(false);
  const [selectedValue, setSelectedValue] = useState(user?.email);
  const [bookedLoading, setBookedLoading] = useState(true);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    isAlreadyBooked(user?.email).then((res) => {
      setEnrolledDisabledIds(res);
      setBookedLoading(false);
    });
  }, [user?.email, selectedValue]);

  const {
    _id,
    house_name,
    house_address,
    house_city,
    rent_per_month,
    house_room_size,
    house_bedRoom,
    house_bathRoom,
    phone_number,
    availability_date,
    description,
    photo_url,
    userInfo,
    status,
  } = house;

  if (loading) {
    return <div>loading</div>;
  }

  return (
    <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={photo_url}
          alt="img-blur-shadow"
          layout="fill"
          className="w-full h-full"
        />
      </div>

      <div className="p-6">
        <h1
          className={` ${
            status === "Booked" ? "bg-red-400" : "bg-green-400"
          } mb-3 inline-flex text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded`}
        >
          {status}
        </h1>

        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {house_name}
        </h5>

        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>

        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {rent_per_month} Tk.
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {house_bedRoom} Bedroom
        </span>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          {availability_date} Availability Date
        </span>
      </div>

      <div className="p-6 pt-0">
        {!enrolledDisabledIds.includes(String(_id)) && (
          <button
            onClick={() => {
              if (!user) {
                return navigate("/login");
              }
              setIsOpen(true);
            }}
            className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
            disabled={
              enrolledDisabledIds.includes(_id) ||
              enrolledDisabledIds.length === 2 ||
              user?.role === "House Owner" ||
              status === "Booked"
            }
          >
            {!enrolledDisabledIds.includes(_id) &
            (enrolledDisabledIds.length === 2)
              ? "Cant Added Above two"
              : "Booked Now"}
          </button>
        )}

        {enrolledDisabledIds.includes(_id) && (
          <Link to="/dashboard/menage-bookings-renter">
            <button
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Already Booked
            </button>
          </Link>
        )}

        <BookingModal
          bookingInfo={house}
          isOpen={isOpen}
          closeModal={closeModal}
        />
      </div>
    </div>
  );
};

export default HouseCard;
