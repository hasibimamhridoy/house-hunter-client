import React, { useContext } from "react";
import { AuthContext } from "../../../../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const role = e.target.role.value;
    const mobileNumber = e.target.phone.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(role,name);

    try {
      const response = await fetch("https://house-hunter-server-production.up.railway.app/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name,role,mobileNumber, email, password }),
      });

      if (response.ok) {
        // Successful Register
        const data = await response.json();
        console.log("Register success!", data);
        localStorage.setItem("token", data.access_token);
        navigate("/login")

      } else {
        // Failed Register
        const error = await response.json();
        console.log("Register failed!", error);
        // Handle failed Register logic here
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error logic here
    }
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleRegister}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col lg:w-2/4 w-full"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="Full Name"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Full Name"
            name="name"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select A Role
          </label>
          <select
            name="role"
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose a Role</option>
            <option value="House Owner">House Owner</option>
            <option value="House Renter">House Renter</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="phoneNumber"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="phoneNumber"
            type="number"
            placeholder="Phone number"
            name="phone"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="email"
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="********"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
