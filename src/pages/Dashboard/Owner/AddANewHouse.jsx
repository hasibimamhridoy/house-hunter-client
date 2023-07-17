import React, { useState } from "react";
import {
  bedrooms,
  cities,
  roomsSize,
} from "../../../datas/GeneralInfo/generalInfo";
import useAuth from "../../../hooks/useAuth";
import { imageUpload } from "../../../api/imageUpload";
import { addHouse } from "../../../api/addHouse";
import swal from "sweetalert";

const AddANewHouse = () => {
  const { user, loading } = useAuth();

  const [addLoading, setAddLoading] = useState(false);
  const handleAddHouse = (e) => {
    setAddLoading(true);
    e.preventDefault();
    const form = e.target;
    const house_name = form.name.value;
    const house_address = form.address.value;
    const house_city = form.city.value;
    const rent_per_month = form.price.value;
    const house_room_size = form.roomSize.value;
    const house_bedRoom = form.bedRoom.value;
    const house_bathRoom = form.bathRoom.value;
    const phone_number = form.phone.value;
    const availability_date = form.date.value;
    const description = form.description.value;
    const image = e.target.image.files[0];

    imageUpload(image).then((res) => {
      const image = res.data.url;

      const newProduct = {
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
        photo_url: image,
        userInfo: user,
      };
      addHouse(newProduct).then((res) => {
        swal("Good!", "New House Added Succesfully!", "success");
        form.reset();
        setAddLoading(false);
      });
    });
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-5">
          <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
            Add a new House
          </h2>
          <form onSubmit={handleAddHouse}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  House Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Type House name"
                  required=""
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="House address"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="city"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  City
                </label>
                <select
                  id="city"
                  name="city"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select city</option>
                  {cities.map((city) => (
                    <option key={city.label} value={city.label}>
                      {city.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="price"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Rent Per Month
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Tk. 2000"
                  required=""
                />
              </div>

              <div>
                <label
                  htmlFor="roomSize"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Room Size
                </label>
                <select
                  id="roomSize"
                  name="roomSize"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Room Size</option>
                  {roomsSize.map((roomsSize) => (
                    <option key={roomsSize.label} value={roomsSize.label}>
                      {roomsSize.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="bedRoom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bed Room
                </label>
                <select
                  id="bedRoom"
                  name="bedRoom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Bed Room</option>
                  {bedrooms.map((bedrooms) => (
                    <option key={bedrooms.label} value={bedrooms.label}>
                      {bedrooms.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="BathRoom"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bath Room
                </label>
                <select
                  id="BathRoom"
                  name="bathRoom"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                >
                  <option selected="">Select Bed Room</option>
                  {bedrooms.map((bedrooms) => (
                    <option key={bedrooms.label} value={bedrooms.label}>
                      {bedrooms.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="w-full">
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  pattern="^01[3-9][0-9]{8}$"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="+8801706831927"
                  required
                />
              </div>

              <div className="w-full">
                <label
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  htmlFor="houseImage"
                >
                  Upload House Image
                </label>
                <input
                  name="image"
                  className="block p-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                  aria-describedby="houseImage_help"
                  id="houseImage"
                  type="file"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="date"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Availability date
                </label>

                <input
                  type="date"
                  name="date"
                  id="date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="+8801706831927"
                  required=""
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  name="description"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Your description here"
                ></textarea>
              </div>
            </div>
            <button
              disabled={addLoading}
              type="submit"
              className="inline-flex bg-blue-500 items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
            >
              {addLoading ? "Processing Addedd" : "Add New House"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddANewHouse;
