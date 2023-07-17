import React, { useContext } from "react";
import { AuthContext } from "../../../../authProvider/AuthProvider";

const Login = () => {
  const { user,setUser } = useContext(AuthContext);
  console.log( user);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value
    const password = e.target.password.value


    try {
        const response = await fetch('http://localhost:5000/api/users/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email,password}),
        });
  
        if (response.ok) {
          // Successful login
          const data = await response.json();
          console.log('Login success!', data);
          localStorage.setItem("token",data.access_token)
          setUser({email : data.userEmail})

        } else {
          // Failed login
          const error = await response.json();
          console.log('Login failed!', error);
        }
      } catch (error) {
        console.error('Error:', error);
      }
  };

  return (
    <div>
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
            className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
            id="password"
            type="password"
            placeholder="********"
            name="password"
          />
          <p className="text-red text-xs italic">Please choose a password.</p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
