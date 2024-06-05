import { Assignment, Group } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import image from '../../assets/cover.jpg';
import logo from '../../assets/logo.png';
import { CustomizedToolbar } from './styles';

const drawerWidth = 200;

const drawerItems = [
  { to: '/', icon: <HomeIcon fontSize="small" />, text: 'Home' },
  { to: '/tasks', icon: <Assignment fontSize="small" />, text: 'Tasks' },
  { to: '/users', icon: <Group fontSize="small" />, text: 'Users' },
];

export default function ResponsiveDrawer() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    alert('oi');
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <CustomizedToolbar>
        <img src={logo} alt="Logo" />
      </CustomizedToolbar>
      <List>
        {drawerItems.map((item, index) => (
          <ListItemButton
            component={Link}
            to={item.to}
            key={index}
            sx={{
              paddingLeft: '16px',
              backgroundColor: location.pathname === item.to ? '#e0e0e0' : 'inherit',
            }}
          >
            <ListItemIcon sx={{ minWidth: 'auto', marginRight: '8px' }}>
              {item.icon}
            </ListItemIcon>
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ variant: 'body2' }}
            />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: '#6058ff',
          height: '100rem',
          zIndex: '0',
          backgroundImage: `linear-gradient(rgba(96,88,255), rgba(46, 73, 224, 0.5)), url(${image})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { xs: 'block', sm: 'none' },
              color: '#2e2e2e',
              zIndex: '7',
            }} // Updated display property
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{
              marginLeft: {
                sm: `calc( ${drawerWidth}px)`,
                xs: `calc( ${drawerWidth}px) - 16px`,
              },
              color: '#ffffff',
            }}
          >
            Tasks - App
          </Typography>
        </Toolbar>
      </AppBar>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          style={{ zIndex: '100' }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
          style={{ border: '5px solid' }}
        >
          {drawer}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: {
            sm: 3,
            xs: 2,
          },
          width: {
            sm: `calc(100% - ${drawerWidth}px)`,
            xs: `calc(100% - ${drawerWidth}px)`,
          },
          overflow: 'auto',
          marginTop: {
            sm: '1rem',
            xs: '3rem',
          },
          marginBottom: '20px',
          zIndex: '1',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
