import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import HdrAutoIcon from '@mui/icons-material/HdrAuto';

import Search from '@mui/icons-material/Search';


   const pages = ['Dashboard', 'Internal Boats', 'External Boats', 'Login', 'Register'];

const Header = () => {
 

    const [anchorElNav, setAnchorElNav] = useState(null)

    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  return (
    <AppBar position="static">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
      <HdrAutoIcon sx={{ display: { xs: 'none', md: 'flex' }}} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
          
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          CLOUD 
        </Typography>
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page,index) => (
              <MenuItem key={index} onClick={handleCloseNavMenu}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <HdrAutoIcon  sx={{ display: { xs: 'flex', md: 'none' }}} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href=""
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
          
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          CLOUD
        </Typography>
        <Box display="flex"   justifyContent="center"
  alignitems="center" sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex ' } }}>
          {pages.map((page,index) => (
            <Button
              key={index}
              onClick={handleCloseNavMenu}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page}
            </Button>
          ))}
        </Box>
        <TextField  size="small"   hiddenLabel autoFocus InputProps={{
          startAdornment: (           
            <Search style={{ color: 'white' }}/>        
          ),
        }} label="Search"  type="search"   sx={{       "& .MuiFormLabel-root": {
          color: 'white'
      },input: { color: 'white'  ,width: {xs:50, lg:200} } }}   variant="standard" />
    

    </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header
