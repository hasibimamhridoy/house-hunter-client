import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


const useAuth = () => {
    
    const {
      user,
      logout,
      setUser,
      loading,
      isDark,
      handleDarkMode
      } = useContext(AuthContext);
      
    return {
      user,
      logout,
      setUser,
      loading,
      isDark,
      handleDarkMode
      };

};

export default useAuth;