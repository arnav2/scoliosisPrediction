import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height: '50px'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography className="companyName" variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Momentum Health
          </Typography>
          <div>
            <IconButton
              size="large"
              aria-label="Current User Image"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>  
          </div>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
