import { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import "../styles/Homelayout.scss";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(true); // Sidebar open state
  const [activeItem, setActiveItem] = useState("Home"); // Active sidebar item
  const [title, setTitle] = useState("Home"); // Title for the header

  const handleMenuClick = (menuItem) => {
    setTitle(menuItem); // Update title when a menu item is clicked
  };

  return (
    <Box className={`layout ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      {/* Sidebar Component */}
      <Sidebar
        isOpen={isOpen}
        onToggle={() => setIsOpen(!isOpen)}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        onMenuClick={handleMenuClick}
      />
      
      {/* Main Layout Container */}
      <Box className="layout-container" sx={{ flexGrow: 1 }}>
        {/* Header Component */}
        <Header
          title={title}
          user={{ name: "Tấn Lực", avatar: "https://via.placeholder.com/150" }}
        />

        {/* Content Area */}
        <Box className="layout-content" sx={{ padding: 2 }}>
          <Outlet /> {/* Renders the nested route component */}
        </Box>
      </Box>
    </Box>
  );
}
