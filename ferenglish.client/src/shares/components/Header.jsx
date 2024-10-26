// src/components/Header.jsx
import { AppBar, Toolbar, Typography, Box, IconButton, Avatar, Menu, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useState } from 'react';

export default function Header({ title, user }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const avatarSrc = user?.avatar || 'https://via.placeholder.com/150';
  const userName = user?.name || 'Guest';

  return (
    <AppBar position="static" color="default" elevation={0} sx={{ padding: '10px 20px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography variant="h6" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Overview of your activities
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginLeft: 2, cursor: 'pointer' }}
            onClick={handleMenuOpen}
          >
            <Avatar src={avatarSrc} alt={userName} sx={{ marginRight: 1 }} />
            <Typography variant="body1">{userName}</Typography>
          </Box>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
