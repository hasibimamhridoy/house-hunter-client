import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


const useAuth = () => {
    
    const {
      logout,
      user,setUser,setLoading ,
      loading,
      isDark,
      handleDarkMode
      } = useContext(AuthContext);
      
    return {
      logout,
      user,setUser,setLoading ,
      loading,
      isDark,
      handleDarkMode
      };

};

export default useAuth;