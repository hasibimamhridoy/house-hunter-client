import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isDark,setIsDark] = useState(false)


  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Check if the token exists and is valid
    if (token) {
      
        fetch('https://house-hunter-server-production.up.railway.app/api/users/onAuthStateChanged', {
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
            setLoading(false)
          })
      
    }

    else{
        setUser(null)
        setLoading(false)
    }

   
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const handleDarkMode = ()=>{
    setIsDark(!isDark)
  }
  

  const authInfo = {
    user,
    logout,
    setUser,
    loading,
    isDark,
    setLoading,
    handleDarkMode
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
