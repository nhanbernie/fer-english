// src/components/Sidebar.jsx
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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import "../styles/sidebar.scss";

const menuItems = [
  { text: "User Management", icon: <HomeOutlinedIcon /> },
  { text: "Class Management", icon: <ClassOutlinedIcon /> },
  { text: "Attendance Tracking", icon: <CalendarTodayOutlinedIcon /> },
  { text: "Salary and Fee", icon: <AttachMoneyOutlinedIcon /> },
  { text: "Help", icon: <HelpOutlineOutlinedIcon /> },
  { text: "Logout", icon: <ExitToAppOutlinedIcon /> },
];

export default function Sidebar({
  isOpen,
  onToggle,
  activeItem,
  setActiveItem,
  onMenuClick,
}) {
  const handleItemClick = (item) => {
    setActiveItem(item.text);
    onMenuClick(item.text);
  };

  return (
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
      <Box className="sidebar-header">
        <Avatar className="sidebar-avatar" />
        {isOpen && (
          <Typography variant="h6" className="brand">
            FER English
          </Typography>
        )}
      </Box>
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
      <List>
        {menuItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton
              className={`sidebar-item ${
                activeItem === item.text ? "active" : ""
              }`}
              onClick={() => handleItemClick(item)}
              sx={{ justifyContent: isOpen ? "flex-start" : "center" }}
            >
              <ListItemIcon className="icon">{item.icon}</ListItemIcon>
              {isOpen && <ListItemText primary={item.text} />}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
