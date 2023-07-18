import { Dialog, Transition } from "@headlessui/react";
import { Elements } from "@stripe/react-stripe-js";
// import { format } from 'date-fns'
import { Fragment } from "react";
import CheckoutForm from "../Forms/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import useAuth from "../hooks/useAuth";
const stripePromise = loadStripe(import.meta.env.VITE_Payment_KEY);

const BookingModal = ({ closeModal, isOpen, bookingInfo }) => {
  const { user } = useAuth();

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
  } = bookingInfo;

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium text-center leading-6 text-gray-900"
                >
                  Review Info Before Reserve
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {/* Room: {bookingInfo.title} */}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    {/* Location: {bookingInfo.location} */}
                  </p>
                </div>
                <div className="mt-15">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">House Name:</span>{" "}
                    {house_name}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">House Address:</span>{" "}
                    {house_address}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">House City:</span>{" "}
                    {house_city}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Rent per month:</span>{" "}
                    {rent_per_month}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Total Bedroom:</span>{" "}
                    {house_bedRoom}
                  </p>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">Total Bathroom:</span>{" "}
                    {house_bathRoom}
                  </p>
                </div>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    <span className="font-semibold">
                      Stripe Test Card Number
                    </span>{" "}
                    4242424242424242
                  </p>
                </div>

                <div className="sm:col-span-2 mt-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Name
                  </label>
                  <input
                    value={user?.name}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type House name"
                    required=""
                  />
                </div>
                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Email
                  </label>
                  <input
                    value={user?.email}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type House name"
                    required=""
                  />
                </div>

                <div className="sm:col-span-2 mt-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Phone Number
                  </label>
                  <input
                    defaultValue={bookingInfo?.phone_number}
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type House name"
                    required=""
                  />
                </div>

                <hr className="mt-8 " />
                <Elements stripe={stripePromise}>
                  <CheckoutForm
                    closeModal={closeModal}
                    bookingInfo={bookingInfo}
                  ></CheckoutForm>
                </Elements>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default BookingModal;
