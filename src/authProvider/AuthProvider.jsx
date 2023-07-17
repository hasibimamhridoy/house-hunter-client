import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  // This effect will run only once when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token"); // Get the token from local storage or wherever you store it
    // Check if the token exists and is valid
    if (token) {
      
        fetch('http://localhost:5000/api/users/onAuthStateChanged', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({token}),
          })
          .then(res=>res.json())
          .then(data =>{
            setUser(data.data)
          })
    }

    else{
        setUser(null)
    }

   
  }, []);

  const logout = () => {
    // Remove the token from local storage or wherever you stored it
    localStorage.removeItem("token");
    setUser(null);
  };

  const authInfo = {
    user,
    logout,
    setUser
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
