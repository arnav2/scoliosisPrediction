import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import './NavigationBar.css';

export default function NavigationBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: 'space-between'}}>
          <Box className={'leftContainer'}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h1" component="h1" sx={{ flexGrow: 1, fontFamily: 'cursive' }}>
            Momentum Health
          </Typography>
          </Box>
          <Box>
            <IconButton
              size="large"
              aria-label="Current User Image"
              aria-controls="menu-appbar"
              color="inherit"
            >
              <AccountCircle />
            </IconButton>  
          </Box>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
