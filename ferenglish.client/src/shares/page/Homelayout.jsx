import { useState } from 'react';
import { Box } from '@mui/material';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import '../styles/Homelayout.scss'; 
import { Outlet } from 'react-router-dom';
// import Content from "../components/content/content";

export default function HomePage() {
    const [isOpen, setIsOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Home');
    const [title, setTitle] = useState('Home');

    const handleMenuClick = (menuItem) => {
        setTitle(menuItem);
    };

    return (
        <Box className={`layout ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
            <Sidebar
                isOpen={isOpen}
                onToggle={() => setIsOpen(!isOpen)}
                activeItem={activeItem}
                setActiveItem={setActiveItem} 
                onMenuClick={handleMenuClick}
            />
            <Box className="layout-container" sx={{ flexGrow: 1 }}>
                <Header title={title} user={{ name: 'Tấn Lực', avatar: 'https://via.placeholder.com/150' }} />
                <Box className="layout-content" sx={{ padding: 2 }}>
                   <Outlet />
                </Box>
            </Box>
        </Box>
    );
}
