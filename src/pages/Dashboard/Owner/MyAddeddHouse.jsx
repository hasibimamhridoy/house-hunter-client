import React from "react";
import useMyHouses from "../../../hooks/useMyHouses/useMyHouses";
import { roomsSize } from "../../../datas/GeneralInfo/generalInfo";
import { deleteToMyHouse } from "../../../api/removeHouse";
import swal from "sweetalert";
import { Link } from "react-router-dom";

const MyAddedHouse = () => {
  console.log("Kire");
  const [myHouses,refetch] = useMyHouses();

  const handelDeleted = (_id)=>{
    deleteToMyHouse(_id)
    .then(res=>{
        swal("Deleted!", "Room has been deleted!", "success");
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
              Availability Date
            </th>
            <th scope="col" className="px-6 py-3">
              Edit
            </th>
            <th scope="col" className="px-6 py-3">
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
          {myHouses.map((house) => {
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
                <td className="px-6 py-4">{availability_date}</td>
                <td className="px-6 py-4">
                  <Link to={`/dashboard/update/house/${_id}`}>
                  <a
                    
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a></Link>
                </td>
                <td className="px-6 py-4 cursor-pointer">
                  <a
                    onClick={()=> handelDeleted(_id)}
                    className="font-medium text-red-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
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

export default MyAddedHouse;
