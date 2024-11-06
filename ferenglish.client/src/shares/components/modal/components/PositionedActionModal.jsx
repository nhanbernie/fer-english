import React from 'react';
import { Popover, Box, IconButton, Typography } from '@mui/material';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import "../styles/PositionedActionModal.scss"

const PositionedActionModal = ({ anchorEl, open, onClose }) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <Box
        sx={{
          p: 1,
          borderRadius: '18px',
          border: '1px solid #8470ff',
          backgroundColor: '#fff',
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          onClick={() => alert('Send message')}
          sx={{ cursor: 'pointer', mb: 1 }}
        >
          <IconButton size="small">
            <CommentIcon color="primary" />
          </IconButton>
          <Typography variant="body2">Send message</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => alert('Delete')}
          sx={{ cursor: 'pointer', mb: 1 }}
        >
          <IconButton size="small">
            <DeleteIcon color="error" />
          </IconButton>
          <Typography variant="body2">Delete</Typography>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          onClick={() => alert('Edit information')}
          sx={{ cursor: 'pointer' }}
        >
          <IconButton size="small">
            <EditIcon color="action" />
          </IconButton>
          <Typography variant="body2">Edit information</Typography>
        </Box>
      </Box>
    </Popover>
  );
};

export default PositionedActionModal;
