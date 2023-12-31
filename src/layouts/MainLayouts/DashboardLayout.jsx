import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AddIcon from "@mui/icons-material/Add";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import ManageHistoryIcon from "@mui/icons-material/ManageHistory";
import { AuthContext } from "../../authProvider/AuthProvider";
import useAuth from "../../hooks/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import Spinner from "../../components/Spinner/Spinner";
import HomeIcon from '@mui/icons-material/Home';

const drawerWidth = 270;

function DashboardLayout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return <div className="h-screen flex justify-center items-center">
      <Spinner></Spinner>
      </div>;
  }

  const dashMenuItemOwner = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon></HomeIcon>,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },
    {
      name: "My Added House",
      path: "/dashboard/my-house",
      icon: <HouseboatIcon></HouseboatIcon>,
    },

    {
      name: "Add a new House",
      path: "/dashboard/add-new-house",
      icon: <AddIcon></AddIcon>,
    },
    {
      name: "Menage Bookings",
      path: "/dashboard/menage-bookings-owner",
      icon: <ManageHistoryIcon></ManageHistoryIcon>,
    },
    
  ];

  const dashMenuItemRenter = [
    {
      name: "Home",
      path: "/",
      icon: <HomeIcon></HomeIcon>,
    },
    {
      name: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon />,
    },

    {
      name: "Menage Bookings",
      path: "/dashboard/menage-bookings-renter",
      icon: <ManageHistoryIcon></ManageHistoryIcon>,
    },
  ];

  const drawer = (
    <div>
      <Divider />
      <List>
        {user?.role == "House Owner"
          ? dashMenuItemOwner.map((item) => {
              return (
                <Link to={item.path} key={item.name}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })
          : dashMenuItemRenter.map((item) => {
              return (
                <Link to={item.path} key={item.name}>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              );
            })}
      </List>
      <ListItem disablePadding>
        <div onClick={handleLogout} className="w-full flex ml-4 hover:text-red-400 text-gray-700 items-center cursor-pointer">
          <LogoutIcon></LogoutIcon>
          <h1 className="ml-4 text-lg ">Logout</h1>
        </div>
      </ListItem>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {user?.role}
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Outlet></Outlet>
      </Box>
    </Box>
  );
}

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardLayout;
