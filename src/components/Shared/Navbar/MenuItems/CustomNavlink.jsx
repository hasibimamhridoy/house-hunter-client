import React from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

const CustomNavlink = ({ to, title }) => {

  const {isDark} = useAuth()

  return (
    <div>
      <NavLink
        to={to}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#00ADEF]" : ""
        }
      >
        <li className={`${isDark ? 'text-gray-300' : "text-gray-800"} hover:text-[#00ADEF] hover:transition hover:duration-500 cursor-pointer`}>
          {title}
        </li>
      </NavLink>
    </div>
  );
};

export default CustomNavlink;
