import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; 
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  Typography,
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "../styles/sidebar.scss";

// Menu items for the sidebar
const menuItems = [
  { text: "User Management", icon: <HomeOutlinedIcon />, path: "/" },
  { text: "Class Management", icon: <ClassOutlinedIcon />, path: "/class-management" },
  { text: "Attendance Tracking", icon: <CalendarTodayOutlinedIcon />, path: "/attendance" },
  { text: "Salary and Fee", icon: <AttachMoneyOutlinedIcon />, path: "/salary-fee" },
  { text: "Help", icon: <HelpOutlineOutlinedIcon />, path: "/help" },
];

export default function Sidebar({
  isOpen,
  onToggle,
  activeItem,
  setActiveItem,
  onMenuClick,
}) {
  const navigate = useNavigate(); // Use navigate for redirecting
  const [logoutModalOpen, setLogoutModalOpen] = useState(false); // State for modal visibility

  // Handle logout button to open the modal
  const handleLogoutClick = () => {
    setLogoutModalOpen(true); // Open the logout modal
  };

  // Confirm logout and navigate to login or home page
  const confirmLogout = () => {
    setLogoutModalOpen(false); // Close the modal
    navigate("/"); // Redirect to home or login page after logout
  };

  // Close the modal without logging out
  const handleClose = () => {
    setLogoutModalOpen(false); // Close the modal
  };

  const handleItemClick = (item) => {
    if (item.text === "Logout") {
      handleLogoutClick(); // Open the logout modal
    } else {
      setActiveItem(item.text);
      onMenuClick(item.text);
    }
  };

  return (
    <>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        open={isOpen}
        sx={{
          "& .MuiDrawer-paper": {
            width: isOpen ? 250 : 80,
            backgroundColor: "#F5F4FF",
            transition: "width 0.3s",
            boxSizing: "border-box",
            border: "none",
          },
        }}
      >
        {/* Sidebar Header */}
        <Box className="sidebar-header">
          <Avatar className="sidebar-avatar" />
          {isOpen && (
            <Typography variant="h6" className="brand">
              FER English
            </Typography>
          )}
        </Box>

        {/* Sidebar Toggle Button */}
        <Box className="toggle-btn">
          <IconButton
            onClick={onToggle}
            sx={{
              marginTop: 1,
              "&:hover": { backgroundColor: "#D6D2FF !important" },
            }}
          >
            {isOpen ? (
              <ArrowBackIosOutlinedIcon className="sidebar-toggle-icon" />
            ) : (
              <ArrowForwardIosOutlinedIcon className="sidebar-toggle-icon" />
            )}
          </IconButton>
        </Box>

        {/* Sidebar Menu Items */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <NavLink
                to={item.path}
                style={{ textDecoration: "none", color: "inherit" }}
                onClick={() => handleItemClick(item)}
                className={`sidebar-item ${activeItem === item.text ? 'active' : ''}`}
              >
                <ListItemButton
                  sx={{ justifyContent: isOpen ? "flex-start" : "center" }}
                >
                  <ListItemIcon className="icon">{item.icon}</ListItemIcon>
                  {isOpen && <ListItemText primary={item.text} />}
                </ListItemButton>
              </NavLink>
            </ListItem>
          ))}

          {/* Logout Button (Handled separately to avoid immediate navigation) */}
          <ListItem disablePadding>
            <ListItemButton
              className="sidebar-item"
              sx={{ justifyContent: isOpen ? "flex-start" : "center",  marginRight: "10px"}}
              onClick={handleLogoutClick}
            >
              <ListItemIcon className="icon">
                <ExitToAppOutlinedIcon />
              </ListItemIcon>
              {isOpen && <ListItemText primary="Logout" />}
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Logout Confirmation Modal */}
      <Dialog
        open={logoutModalOpen}
        onClose={handleClose}
        aria-labelledby="logout-dialog-title"
        className="logout-modal"
      >
        <DialogTitle id="logout-dialog-title" className="logout-dialog-title">
          <ExitToAppOutlinedIcon className="logout-icon" />
          <Typography variant="h6" align="center">
            Are you sure you want to logout?
          </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText align="center">
            You can always log back in at any time.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center", paddingBottom: 2 }}>
          <Button onClick={confirmLogout} variant="contained" className="logout-confirm-btn">
            Logout
          </Button>
          <Button onClick={handleClose} variant="outlined" className="logout-cancel-btn">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
