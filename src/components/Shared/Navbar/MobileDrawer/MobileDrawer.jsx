import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";

import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";

export default function MobileDrawer() {
  const { user, handleManualLogout } = useAuth();
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const handleLogout = () => {
    handleManualLogout();
    navigate("/login");
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <ul>
          
          <Link to="/">
            <li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">
              Home
            </li>
          </Link>
          <Link to="/instructors">
            <li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">
              Instructors
            </li>
          </Link>

          <Link to="/classes">
            <li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">
              Classess
            </li>
          </Link>
          <Link to="/about">
            <li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="bg-gray-100 text-center p-2 mx-2 rounded-sm mt-3">
              Contact
            </li>
          </Link>

          <Link to="/login">
            <li className="bg-sky-500 text-center p-2 mx-2 rounded-sm mt-3">
              Login
            </li>
          </Link>
        </ul>
      </div>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button sx={{ color: "gray" }} onClick={toggleDrawer(anchor, true)}>
            {user ? (
              <img className="h-10 w-10 rounded-full" src={user.photoURL}></img>
            ) : (
              <MenuIcon></MenuIcon>
            )}
          </Button>

          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
