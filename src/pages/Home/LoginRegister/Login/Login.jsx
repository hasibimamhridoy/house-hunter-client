import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import swal from "sweetalert";

const Login = () => {
  const { user,setUser,setLoading } = useAuth();
  const navigate = useNavigate()

  const [loginError,setLoginError] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value


    try {
        const response = await fetch('https://house-hunter-server-production.up.railway.app/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email,password}),
        });
  
        if (response.ok) {
          // Successful login
          const data = await response.json();
          localStorage.setItem("token",data.access_token)
          setUser(data.data)
          setLoading(false)
          swal("Good!", "Login Succesfully!", "success");
          navigate('/dashboard')


        } else {
          // Failed login
          const error = await response.json();
          setLoginError("Provided Valid Email And Password")
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div className="p-2">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col"
      >
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
          required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="username"
            type="email"
            placeholder="Email"
            name = "email"
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
          required
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="********"
            name="password"
          />
        </div>
        <h1 className="mb-5 text-red-500">{loginError}</h1>
        <div className="flex flex-col items-center justify-between">
          <button
            className="bg-blue-400 w-full hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <Link to='/register'>
          <a
            className="inline-block underline mt-5 align-baseline font-bold text-sm text-blue hover:text-blue-darker"
          >Dont Have A Account ? Create Account
          </a></Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
