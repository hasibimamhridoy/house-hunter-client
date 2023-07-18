import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect } from "react";
import { useState } from "react";
import "./CheckoutForm.css";

import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
// import { updateStatus } from '../../api/bookings'
import { ImSpinner9 } from "react-icons/im";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/axiousSecure/useAxiosSecure";
const CheckoutForm = ({ bookingInfo, closeModal }) => {

  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const {
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
    userInfo
  } = bookingInfo;

  const finalBookInfo = {
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
    bookingRenterInfo : user,
  };



  //   1.  get clientSecret from backend
  useEffect(() => {
    if (bookingInfo.rent_per_month > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: bookingInfo.rent_per_month })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [bookingInfo, axiosSecure]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error", error);
      setCardError(error.message);

      
    } else {
      setCardError("");
      // console.log('payment method', paymentMethod)
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "unknown",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
    }

    console.log("payment intent", paymentIntent);

    if (paymentIntent.status === "succeeded") {
      // save payment information to the server
      setTransactionId(paymentIntent.id);
      const paymentInfo = {
        ...finalBookInfo,
        houseId : bookingInfo._id,
        transactionId: paymentIntent.id,
        date: new Date(),
      };
      axiosSecure.post("/bookings", paymentInfo).then((res) => {
        console.log(res.data);

        if (res.data.insertedId) {
          setProcessing(false);
          console.log("from res.data.insertedId-------------",res);
          const text = `Booking Successful!, TransactionId: ${paymentIntent.id}`;
          toast.success(text);
          navigate("/dashboard/menage-bookings-renter");
          // closeModal();
        }
      });
    }
  };

  return (
    <>
      <form className="my-2" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="flex mt-2 justify-around">
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
          className="flex select-none items-center gap-3 rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        </div>
        <div className="mt-6">
          {/* {cardError && <p className="text-red-600">{cardError}</p>} */}

          {cardError && (
            <div
              className="p-4 mb-4 w-2/3 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
              role="alert"
            >
              <span className="font-medium">Error! </span>{cardError}
            </div>
          )}
          {transactionId && (
            <div className="p-4 mb-4 w-2/4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
            <span className="font-medium">Payment Success</span> 
            Your Transection id is:  {transactionId}
            
          </div>
          )}
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
