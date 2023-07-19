import React from 'react';
import useMyBookingsHouse from '../../../hooks/useMyBookingsHouse/useMyBookingsHouse';
import { Link } from 'react-router-dom';

const MenageBookingsOwner = () => {

    const [myBookings] = useMyBookingsHouse()

    console.log(myBookings);


    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Bookings Person name
              </th>
              <th scope="col" className="px-6 py-3">
                House Name
              </th>
              <th scope="col" className="px-6 py-3">
                Booking Person Email
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              
            </tr>
          </thead>
          <tbody>
            {myBookings.map((house) => {
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
                bookingRenterInfo

              } = house;
              return (
                <tr
                  key={_id}
                  className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {bookingRenterInfo.name}
                  </th>
                  <td className="px-6 py-4">{house_name}</td>
                  <td className="px-6 py-4">{bookingRenterInfo.email}</td>
                  <td className="px-6 py-4">{rent_per_month}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
};

export default MenageBookingsOwner;