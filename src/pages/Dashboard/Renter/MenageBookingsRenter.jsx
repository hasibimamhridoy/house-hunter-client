import React from 'react';
import useMyBookings from '../../../hooks/useMyBookings/useMyBookings';
import { cancleToMyHouse } from '../../../api/removeHouse';
import swal from 'sweetalert';

const MenageBookingsRenter = () => {

    const [myBooked,refetch] = useMyBookings()


    const handelCancle = (_id)=>{
        cancleToMyHouse(_id)
        .then(res=>{
            swal("Cancled!", "Room has been Cancled!", "success");
            refetch()
        })
      }

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              House name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Room Size
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
            Transaction Id
            </th>
            
            <th scope="col" className="px-6 py-3">
              Cancle
            </th>
          </tr>
        </thead>
        <tbody>
          {myBooked.map((house) => {
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
              transactionId
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
                  {house_name}
                </th>
                <td className="px-6 py-4">{rent_per_month}</td>
                <td className="px-6 py-4">{house_room_size}</td>
                <td className="px-6 py-4">{house_city}</td>
                <td className="px-6 py-4">{transactionId}</td>
                
                <td className="px-6 py-4 cursor-pointer">
                  <a
                  onClick={()=>handelCancle(_id)}
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    Cancle
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
    );
};

export default MenageBookingsRenter;