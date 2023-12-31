import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import Badge from "@mui/material/Badge";
import { Avatar } from "@mui/material";
import useAuth from "../../../../hooks/useAuth";
import DarkMode from "../DarkMode/DarkMode";
import MobileDrawer from "../MobileDrawer/MobileDrawer";
import { useContext } from "react";
import { AuthContext } from "../../../../authProvider/AuthProvider";
import MenuIcon from "@mui/icons-material/Menu";

const ProfileItems = () => {
  const { user  } = useContext(AuthContext);

  return (
    <div>
      <ul className="">
        {user ? (
          <div className="flex items-center justify-between gap-5">


            <Link className="hidden lg:block" to="/dashboard">
              <button
                type="button"
                className="text-white bg-blue-500 hover:transition hover:duration-500 cursor-pointer hover:bg-[#183f8cde] rounded-full text-sm px-3 py-1 text-center mb-2"
              >
                Dashboard
              </button>
            </Link>

            <Link to="/dashboard" className="lg:hidden mb-1">
              <Avatar sx={{ bgcolor: "#00ADEF" }}>
              <MenuIcon></MenuIcon>
              </Avatar>
            </Link>
          </div>
        ) : (
          <div className="flex justify-center items-center lg:gap-10 gap-3">
            <div className="hidden lg:block">
            <Link to="/login">
            <button
              type="button"
              className="text-white bg-blue-500 rounded-full text-sm px-3 py-1 text-center mr-2"
            >
              Login
            </button>
          </Link>
            </div>
          <div className="lg:hidden"><MobileDrawer></MobileDrawer></div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default ProfileItems;
